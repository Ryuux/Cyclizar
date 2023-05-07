const { Client, Collection } = require('discord.js');
const dotenv = require('dotenv');
const fs = require('fs');

const { CLIENT_OPTIONS, CHANNEL_ID, MESSAGE_WELCOME } = require('./config');

const client = new Client(CLIENT_OPTIONS);
dotenv.config();

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.get(CHANNEL_ID);
  if (!channel) return;

  channel.send(MESSAGE_WELCOME.replace('{user}', member.user.tag));
});

client.login(process.env.TOKEN);