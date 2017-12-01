const TelegramBot = require("node-telegram-bot-api");
const token = "467159597:AAF6iqod534pPNbi3eUaOn4qH_V0bsgBSus";

const bot = new TelegramBot(token, { polling: true });

const spider = require("./spider");

bot.on("message", (msg) => {

    var Hi = "Olá";
    if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
        bot.sendMessage(msg.chat.id, "Fala cmg");
    }

    var bye = "Tchau";
    if (msg.text.toString().toLowerCase().includes(bye)) {
        bot.sendMessage(msg.chat.id, "Falou cara");
    }

});

bot.onText(/\/NadaPraFazer (.+)/, (msg, match) => {

    const chatId = msg.chat.id;
    const resp = match[1];

    bot.sendMessage(chatId, resp);
    spider.crawler(resp);
});