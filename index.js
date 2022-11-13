const Discord = require('discord.js');
const Client = new Discord.Client({
   Intents: [
    Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.GuildMembers,
    Discord.GatewayIntentBits.GuildIntegrations,
    Discord.GatewayIntentBits.MessageContent,
   ]
})


client.login('...')
