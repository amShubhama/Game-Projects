const { Telegraf } = require('telegraf');
const dotenv = require('dotenv');
dotenv.config();

const APISECRET = process.env.TELEBOTAPI;
const bot = new Telegraf(APISECRET);

bot.start((ctx) => ctx.reply('Welcome to the new coding bot from Shubham'));
bot.command('binary', (ctx) => ctx.reply("Binary Code means 01010101"));
bot.on('sticker', (ctx) => ctx.reply('💕'));
bot.on("message", (ctx) => {
    const command = ctx?.update?.message?.text?.toLowerCase();
    if (command == 'hii') ctx.reply("Hii there");
    else if (command == 'help') ctx.reply("What type of help?");
    else ctx.reply("Not available");
});
bot.launch();