const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const path =require('path')
const authRoutes = require('./routes/auth');
const cleanersRoutes = require('./routes/cleaners');
const ordersRoutes = require('./routes/orders');
const keys = require('./config/keys');
//Initiate our app
const app = express();
//config file upload
app.use(fileUpload({ safeFileNames: true, preserveExtension: true }))
// app.use(cors());
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
// mongoo connect
const options = {
  autoIndex: false, // Don't build indexes
  reconnectTries: 30, // Retry up to 30 times
  reconnectInterval: 500, // Reconnect every 500ms
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0
}

const connectWithRetry = () => {
  console.log('MongoDB connection with retry')
  mongoose.connect(keys.mongoURI, options).then(()=>{
    console.log('MongoDB is connected')
    console.log('server worked')
  }).catch(err=>{
    console.log('MongoDB connection unsuccessful, retry after 5 seconds.')
    setTimeout(connectWithRetry, 5000)
  })
}

connectWithRetry()

//dev
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json({limit: '50mb', extended: true}));
app.use(bodyParser.text({limit: '50mb', extended: true}));
app.use('/img',express.static(path.join(__dirname, '/static/images')))

app.use('/auth', authRoutes);
app.use('/cleaners', cleanersRoutes);
app.use('/orders', ordersRoutes);

mongoose.set('debug', true);

module.exports = app;
