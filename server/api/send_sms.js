const client = require('twilio')(
  'ACcb1b9e5e59f2e932b1c02a9cecd7d2b8',
  'cde66fed3b6182d73a2df14cf6da5a8f'
)

client.messages
  .create({
    body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
    from: '+18482202516',
    to: '+17328595701'
  })
  .then(message => console.log(message.sid))
