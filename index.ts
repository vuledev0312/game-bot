

require('dotenv').config();

const TelegramBot = require('node-telegram-bot-api');

const token = '1973201437:AAHOFK8V2P0YbhLLLisZFcqLFkVri8dLK0E';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

const gameName = "trexjump";

bot.onText(/\/start/, function onPhotoText(msg:any) {
    bot.sendGame(msg.from.id,gameName);
});
bot.on('message', (msg:any) => {
  const chatId = msg.chat.id;
  console.log(msg);
  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, 'Received your message');
});


bot.on("callback_query", function (query:any) {
   console.log(query);
});