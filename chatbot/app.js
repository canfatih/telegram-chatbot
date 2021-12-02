const { Telegraf } = require('telegraf');
const PDFDocument = require('pdfkit');
const fs = require('fs');


const bot = new Telegraf('2142405853:AAEcJDf6iNto1RIKHJrfrOSQZBosMFRoKKU');
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.command('start', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'ankete başlamak için başla yaziniz.', {
       
    })
    var obj = {};
    obj["id"] = ctx.chat.id;
    obj["soru"] =0;
    obj["puan"]=0;
     score.push(obj);

})


let pdfDoc = new PDFDocument;

let score=[ ];
 let sorular=["soru1","soru2","soru3","soru4","soru5","soru6","soru7","soru8","soru9","soru10"];


bot.hears('başla', ctx => {
    
    console.log(ctx.from)

    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, sorular[0], {
        reply_markup: {
            inline_keyboard: [
                [{
                        text: "1",
                        callback_data: '1'
                    },
                    {
                        text: "2",
                        callback_data: '2'
                    },
                    {
                        text: "3",
                        callback_data: '3'
                    },
                    {
                        text: "4",
                        callback_data: '4'
                    }
                ],

            ]
        }
    })
})




bot.action('1', ctx => {
   score.forEach(element => {
       if(element.id===ctx.chat.id){
           element.puan=element.puan+1;
           element.soru++;
       }
       if(element.soru===10){
        pdfDoc.pipe(fs.createWriteStream('doc/sonuc.pdf'));
        pdfDoc.text("anketi tamamladiniz puaniniz:"+element.puan);
            pdfDoc.end();
            
        bot.telegram.sendDocument(ctx.chat.id,{
            source:"doc/sonuc.pdf"
        })
         
        
       }
       else if(element.soru<10){
          
        bot.telegram.sendMessage(ctx.chat.id, sorular[element.soru], {
            reply_markup: {
                inline_keyboard: [
                    [{
                            text: "1",
                            callback_data: '1'
                        },
                        {
                            text: "2",
                            callback_data: '2'
                        },
                        {
                            text: "3",
                            callback_data: '3'
                        },
                        {
                            text: "4",
                            callback_data: '4'
                        }
                    ],
    
                ]
            }
        })
       }
   });


})



bot.action('2', ctx => {
    score.forEach(element => {
        if(element.id===ctx.chat.id){
            element.puan=element.puan+2;
            element.soru++;
        }
        if(element.soru===10){
            pdfDoc.pipe(fs.createWriteStream('doc/sonuc.pdf'));
            pdfDoc.text("anketi tamamladiniz puaniniz:"+element.puan);
            pdfDoc.end();
            
            bot.telegram.sendDocument(ctx.chat.id,{
                source:"doc/sonuc.pdf"
            })
             
         
         
        }
        else if(element.soru<10){
           
         bot.telegram.sendMessage(ctx.chat.id, sorular[element.soru], {
             reply_markup: {
                 inline_keyboard: [
                     [{
                             text: "1",
                             callback_data: '1'
                         },
                         {
                             text: "2",
                             callback_data: '2'
                         },
                         {
                             text: "3",
                             callback_data: '3'
                         },
                         {
                             text: "4",
                             callback_data: '4'
                         }
                     ],
     
                 ]
             }
         })
        }
    });
 
 
 })
 bot.action('3', ctx => {
    score.forEach(element => {
        if(element.id===ctx.chat.id){
            element.puan=element.puan+3;
            element.soru++;
        }
        if(element.soru===10){
            pdfDoc.pipe(fs.createWriteStream('doc/sonuc.pdf'));
            pdfDoc.text("anketi tamamladiniz puaniniz:"+element.puan);
            pdfDoc.end();
            
            bot.telegram.sendDocument(ctx.chat.id,{
                source:"doc/sonuc.pdf"
            })
             
         
         
        }
        else if(element.soru<10){
           
         bot.telegram.sendMessage(ctx.chat.id, sorular[element.soru], {
             reply_markup: {
                 inline_keyboard: [
                     [{
                             text: "1",
                             callback_data: '1'
                         },
                         {
                             text: "2",
                             callback_data: '2'
                         },
                         {
                             text: "3",
                             callback_data: '3'
                         },
                         {
                             text: "4",
                             callback_data: '4'
                         }
                     ],
     
                 ]
             }
         })
        }
    });
 
 
 })
 bot.action('4', ctx => {
    score.forEach(element => {
        if(element.id===ctx.chat.id){
            element.puan=element.puan+4;
            element.soru++;
        }
        if(element.soru===10){
            pdfDoc.pipe(fs.createWriteStream('doc/sonuc.pdf'));
            pdfDoc.text("anketi tamamladiniz puaniniz:"+element.puan);
            pdfDoc.end();
            
            bot.telegram.sendDocument(ctx.chat.id,{
                source:"doc/sonuc.pdf"
            })
             
         
        }
        else if(element.soru<10){
           
         bot.telegram.sendMessage(ctx.chat.id, sorular[element.soru], {
             reply_markup: {
                 inline_keyboard: [
                     [{
                             text: "1",
                             callback_data: '1'
                         },
                         {
                             text: "2",
                             callback_data: '2'
                         },
                         {
                             text: "3",
                             callback_data: '3'
                         },
                         {
                             text: "4",
                             callback_data: '4'
                         }
                     ],
     
                 ]
             }
         })
        }
    });
 
 
 })
 
 
bot.launch();