
const Slapp = require('slapp')
const env = require('node-env-file')
env(__dirname + '/.env');


var slapp = Slapp({
  verify_token: process.env.SLACK_VERIFY_TOKEN,
  context: (req, res, next) => {
    req.slapp.meta = Object.assign(req.slapp.meta, {
      app_token: 'REPLACE WITH APP TOKEN',
      bot_token: 'REPLACE WITH BOT TOKEN',
      bot_user_id: 'REPLACCCE WITH BOT USER ID',
    });
    next()
  },
  log: true,
  colors: true,
});

// Add your commands here
slapp.message('echo(.*)', ['direct_mention', 'direct_message'], (msg, text, echo) => {
  msg.say(`echo ${echo}`)
});


slapp.attachToExpress(require('express')()).listen(process.env.PORT)
