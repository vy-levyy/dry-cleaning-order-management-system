const jwt = require('jsonwebtoken');
const path = require('path');
const fs = require('fs');
const User = require('../models/user');
const Cleaner = require('../models/cleaners')
const keys = require('../config/keys');
const errorHandler = require('../routes/utils/errorHandler');

module.exports.create = async (req, res) => {
  try {
    const {token, cleaner} = req.body
    const decoded = await jwt.verify(token, keys.jwt);
    //check user
    const candidate = await User.findOne({
      email: decoded.email
    });
    if (candidate.role === 1) {
      //create new cleaner
      const checkCleaner = await Cleaner.findOne({
        name: cleaner.name
      });
      if (checkCleaner) {
        res.status(409).json({
          message: 'such an name is already taken'
        })
      } else {
        let cleanerObject = new Cleaner({
          name: cleaner.name,
          description: cleaner.description,
          createdBy: candidate.email,
          gallery: cleaner.gallery,
          services: cleaner.services
        });
        try {
          await cleanerObject.save();
          res.status(201).json({
            cleaner: cleanerObject
          })
        } catch (e) {
          errorHandler(res, e)
        }
      }
    } else {
      res.status(403).json({
        message: 'permission denied'
      })
    }
  } catch (err) {
    errorHandler(res, err)
  }
};

module.exports.update = async (req, res) => {
  try {
    const {token, cleaner} = req.body
    const decoded = await jwt.verify(token, keys.jwt);
    //check user
    const candidate = await User.findOne({
      email: decoded.email
    });
    if (candidate.role === 1) {
      //create update object
      let updated = {
        name: cleaner.name,
        description: cleaner.description,
        createdBy: cleaner.email,
        gallery: cleaner.gallery,
        services: cleaner.services
      };
      try {
        await Cleaner.findOneAndUpdate(
            {
              _id: cleaner._id,
            },
            {
              $set: updated
            },
            {new: true},
            async function (err, doc) {
              if (err) {
                errorHandler(res, err)
              } else {
                res.status(200).json(doc)
              }
            });
      } catch (e) {
        errorHandler(res, e)
      }
    } else {
      res.status(403).json({
        message: 'permission denied'
      })
    }
  } catch (err) {
    errorHandler(res, err)
  }
};

module.exports.get = async (req, res) => {
  try {
    const {token} = req.body
    const decoded = await jwt.verify(token, keys.jwt);
    //check user
    const candidate = await User.findOne({
      email: decoded.email
    });
    if (candidate) {
      const cleaner = await Cleaner.find({
        email: req.body.email ? req.body.email : decoded.email
      });
      if (cleaner) {
        res.status(201).json(cleaner)
      } else {
        res.status(404).json({
          message: 'not found'
        })
      }
    } else {
      res.status(403).json({
        message: 'permission denied'
      })
    }
  } catch (err) {
    errorHandler(res, err)
  }
};

module.exports.getAll = async (req, res) => {
  try {
    const {token} = req.body
    const decoded = await jwt.verify(token, keys.jwt);
    //check user
    const candidate = await User.findOne({
      email: decoded.email
    });
    if (candidate) {
      const cleaners = await Cleaner.find();
      if (cleaners) {
        res.status(201).json(cleaners)
      } else {
        res.status(404).json({
          message: 'not found'
        })
      }
    } else {
      res.status(403).json({
        message: 'permission denied'
      })
    }
  } catch (err) {
    errorHandler(res, err)
  }
};

module.exports.gallery = async (req, res) => {
  let uploadPath;
  let fileName;
  let getPath;
  try {
    const{dataUrl, format} = req.body.file
    fileName = `${Date.now()}_photo.${format}`
    // Remove header
    const base64Image = dataUrl.replace(/^data:([A-Za-z-+/]+);base64,/, '');
    uploadPath = `${process.cwd()}/static/images/${fileName}`;
    getPath=`http://localhost:8000/img/${fileName}`
    fs.writeFile(uploadPath, base64Image, 'base64', function(error) {
      if (error) {
        res.status(500).json({
          message: 'something went wrong'
        })
      } else {
        res.status(200).json({
          message: 'successfully',
          path: getPath
        })
      }
    });
  } catch (e) {
    errorHandler(res, e)
  }
};
