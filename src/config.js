const { GatewayIntentBits, Partials } = require('discord.js')

const CHANNEL_ID = ''
const MESSAGE_WELCOME = 'Welcome {user}' // {user} -> variable

const CLIENT_OPTIONS = {
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildEmojisAndStickers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],

  partials: [
    Partials.USER,
    Partials.CHANNEL,
    Partials.GUILD_MEMBER,
    Partials.MESSAGE,
  ],
  presence: {
    activities: [{
      name: '<3',
      type: 0
    }],
    status: 'dnd'
  }
}

module.exports = { CHANNEL_ID, MESSAGE_WELCOME, CLIENT_OPTIONS }