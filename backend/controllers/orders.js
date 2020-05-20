const jwt = require('jsonwebtoken');

const User = require('../models/user');
const Order = require('../models/orders')
const keys = require('../config/keys');
const errorHandler = require('../routes/utils/errorHandler');

module.exports.create = async (req, res) => {
  try {
    const {token, order} = req.body
    const decoded = await jwt.verify(token, keys.jwt);
    //check user
    const candidate = await User.findOne({
      email: decoded.email
    });
    if (candidate) {
      //create new cleaner
      let orderObject = new Order({
        name: order.name,
        price: order.price,
        cleaner: {
          id: order.cleaner.id,
          name: order.cleaner.name,
        },
        createdBy: candidate.email,
        createdDate: new Date(),
        status: 'created',
        lastChange: {
          howChange: candidate.email,
          date: new Date(),
          whatToChange: 'created',
        },
        comment: `created ${candidate.email}-${new Date()}`
      });
      try {
        //if user has enough many
        if (candidate.balance > order.price) {
          const updated = {
            balance: candidate.balance - order.price
          }
          await User.findOneAndUpdate(
              {
                _id: candidate._id,
              },
              {
                $set: updated
              },
              {new: true},
              async function (err, doc) {
                if (err) {
                  errorHandler(res, err)
                } else {
                   const order = await orderObject.save();
                  res.status(200).json({order, doc})
                }
              });
        } else {
          res.status(403).json({
            message: 'not enough money, replenish balance and try again!!'
          })
        }
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

module.exports.update = async (req, res) => {
  try {
    const {token, order} = req.body
    const decoded = await jwt.verify(token, keys.jwt);
    //check user
    const candidate = await User.findOne({
      email: decoded.email
    });
    if (candidate.role === 1) {
      //create update object
      let updated = {
        name: order.name,
        status: order.status,
        lastChange: {
          howChange: candidate.email,
          date: new Date(),
          whatToChange: order.status,
        },
        comment: req.body.comment
      };
      try {
       const newOrder = await Order.findOneAndUpdate(
            {
              _id: order._id,
            },
            {
              $set: updated
            },
            {new: true},
            async function (err, doc) {
              if (err) {
                errorHandler(res, err)
              } else {
                //if status return we need return many
                if (order.status === 'return') {
                  const newUser = await User.findOne({
                    email: doc.createdBy
                  });
                  const updated = {
                    balance: newUser.balance + doc.price
                  }
                  await User.findOneAndUpdate(
                      {
                        _id: newUser._id,
                      },
                      {
                        $set: updated
                      },
                      {new: true},
                      async function (err, usr) {
                        if (err) {
                          errorHandler(res, err)
                        } else {
                          res.status(200).json({doc, usr})
                        }
                      });
                } else {
                  res.status(200).json(doc)
                }
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

      if (req.body.id) {
        const order = await Order.find({
          _id: req.body.id
        });
        if (order) {
          res.status(201).json(order)
        } else {
          res.status(404).json({
            message: 'not found'
          })
        }
      } else {
        const order = await Order.find({
          createdBy: decoded.email
        });
        if (order) {
          res.status(201).json(order)
        } else {
          res.status(404).json({
            message: 'not found'
          })
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

module.exports.getAll = async (req, res) => {
  try {
    const {token} = req.body
    const decoded = await jwt.verify(token, keys.jwt);
    //check user
    const candidate = await User.findOne({
      email: decoded.email
    });
    if (candidate) {
      const orders = await Order.find();
      if (orders) {
        res.status(201).json(orders)
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

module.exports.delete = async (req, res) => {
  try {
    const {token} = req.body
    const decoded = await jwt.verify(token, keys.jwt);
    //check user
    const candidate = await User.findOne({
      email: decoded.email
    });
    if (candidate) {
      try {
        if (req.body.id) {
          const order = await Order.findOneAndDelete({
            _id: req.body.id
          });
          const updated = {
            balance: candidate.balance + order.price
          }
          await User.findOneAndUpdate(
              {
                _id: candidate._id,
              },
              {
                $set: updated
              },
              {new: true},
              async function (err, usr) {
                if (err) {
                  errorHandler(res, err)
                } else {
                  res.status(200).json({order, usr})
                }
              });
        } else {
          const orders = await Order.remove({
            createdBy: candidate.email
          })
          if (orders) {
            let newBalance = candidate.balance

            await orders.map((order) => (newBalance += order.price))
            const updated = {
              balance: newBalance
            }

            await User.findOneAndUpdate(
                {
                  _id: candidate._id,
                },
                {
                  $set: updated
                },
                {new: true},
                async function (err, usr) {
                  if (err) {
                    errorHandler(res, err)
                  } else {
                    res.status(200).json({orders, usr})
                  }
                });
          } else {
            res.status(404).json({
              message: 'not found'
            })
          }
        }
      } catch (err) {
        errorHandler(res, err)
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
