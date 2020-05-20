const mongoose = require('mongoose');

const User = require('../../models/user');
const keys = require('../keys')

mongoose.set('useCreateIndex', true);
mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true
})
    .then(async () => {
      console.log('MongoDB connected.')
      const candidate = await User.findOne({
        email: 'root@mail.com'
      });
      if (candidate){
        console.log('already')
        process.exit(-1);
      } else {
        const user = new User({
          firstName: 'root',
          lastName: 'root',
          email: 'root@mail.com',
          password: 'root',
          wantBeAdmin: false,
          balance: 999999,
          role: 1
        });
        await user.save();
        console.log('done')
        process.exit(-1);
      }
    })
    .catch(error => console.log(error));

