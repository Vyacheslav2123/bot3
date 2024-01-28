require("./utils/editOrReply");
const { Telegraf, Markup } = require('telegraf');
const bot = new Telegraf('6446840444:AAF4IoDssBH4iRKk_V-ZRxmrXEFX_AcfDRI')

if (bot === undefined) {
  throw new Error('Токена не существует!')
}
else {
  console.clear()
  console.log('token start!')
  // bot.use(Telegraf.log())
}

(async () => {
bot.start(async (ctx) => { 
  ctx.editOrReply(`Привет ${ctx.from.first_name}! \nДля поиска нужных кроссовок введите /article: `, {
  }).catch(e => {});
})

const articleCmd = (ctx) => { 
  ctx.editOrReply('Введите номер артикула:', {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Назад", callback_data: "article" }]
      ]
    } 
  }).catch(e => console.log(e))
};

bot.hears('322213', async (ctx) => { 
  ctx.replyWithPhoto({ url: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ac88ab75-d4bf-4be4-a654-498d9d42f196/dunk-low-retro-se-mens-shoes-qTZ3Jk.png'}, 
  {"reply_markup":{"inline_keyboard":[[{"text":"Купить","callback_data":"buy","hide":false}], [{"text":"Назад","callback_data":"back","hide":false}]]}, 
  caption: "👟 <b>Nike Dunk Low Retro SE (Men's)</b> \n\n👣 <i>Размеры в наличии: 7-15 US</i> \n\n💸 Цена: 18999р.", parse_mode: 'HTML'}).catch(e => {});
})

bot.hears('765454', async (ctx) => { 
  ctx.replyWithPhoto({ url: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d6bee8bc-25db-4746-9c41-5d9e43a4d040/air-force-1-07-womens-shoes-2pN8fN.png'}, 
  {"reply_markup":{"inline_keyboard":[[{"text":"Купить","callback_data":"buy","hide":false}], [{"text":"Назад","callback_data":"back","hide":false}]]}, 
  caption: "👟 <b>Nike Air Force 1 '07 (Women's)</b> \n\n👣 <i>Размеры в наличии: 5-12 US</i> \n\n💸 Цена: 17999р.", parse_mode: 'HTML'}).catch(e => {});
})

const buyCmd = (ctx) => { 
  ctx.reply('Пака незя', {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Оплатить", callback_data: "article" }],
        [{ text: "Назад", callback_data: "article" }]
      ]
    } 
  }).catch(e => console.log(e))
};

const reviewCmd = (ctx) => { 
  ctx.reply('Отзывы тут: @RandomShopReviews', {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Назад", callback_data: "article" }]
      ]
    } 
  }).catch(e => console.log(e))
};

const backCmd = (ctx) => { 
  ctx.reply('Найди нужную обувь: /article \n\nОтзывы: @RandomShopReviews', {
    reply_markup: {
      inline_keyboard: [
        [{ text: "Назад", callback_data: "article" }]
      ]
    } 
  }).catch(e => console.log(e))
};

bot.command('article', articleCmd);
bot.action('article', articleCmd); 

bot.command('buy', buyCmd);
bot.action('buy', buyCmd); 

bot.command('review', reviewCmd);
bot.action('review', reviewCmd); 

bot.command('back', backCmd);
bot.action('back', backCmd); 


bot.on('message', ctx => {
  ctx.editOrReply("Я вас не понял!", {
    reply_markup: {
      inline_keyboard: [
          [{ text: "Назад", callback_data: "article" }]
      ]
  }
  }).catch(e => {});
});

bot.launch();

})();

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))