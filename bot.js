const Discord = require('discord.js');
const moment = require('moment');
const Util = require('discord.js');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const queue = new Map();
const ytdl = require('ytdl-core');
const fs = require('fs');
const gif = require("gif-search");
const client = new Discord.Client({disableEveryone: true});

const prefix = "*";


client.on('ready', () => {
     client.user.setActivity("OverHype Codes 4KK Soon",{type: 'https://www.twitch.tv/OverHype'})

});

client.login(process.env.BOT_TOKEN);
