const { inlineCode, userMention } = require('@discordjs/builders');
const Discord = require('discord.js');



module.exports = {
  name: 'getQuestion',
  async execute(message, args){
    const nameQuiz = message.content.replace('bf.', '').trim();

    if(nameQuiz == 'js-intermediate'){
      const jsIntermediate = require('../questions/jsIntermediateQuestions.json');
      const selectedQuestion = selectRandomQuestion(jsIntermediate);
      message.reply(formatQuestion(selectedQuestion)).then(msg => {
        applyReactions(msg);
        listenReacts(message, msg, selectedQuestion.correct)
      });
      return;
    }

    if(nameQuiz == 'js-intermediate'){
      const jsIntermediate = require('../questions/jsIntermediateQuestions.json');
      const selectedQuestion = selectRandomQuestion(jsIntermediate);
      message.reply(formatQuestion(selectedQuestion)).then(msg => {
        applyReactions(msg);
        listenReacts(message, msg, selectedQuestion.correct)
      });
      return;
    }

    if(nameQuiz == 'js-beginner'){
      const jsIntermediate = require('../questions/jsBeginnerQuestions.json');
      const selectedQuestion = selectRandomQuestion(jsIntermediate);
      message.reply(formatQuestion(selectedQuestion)).then(msg => {
        applyReactions(msg);
        listenReacts(message, msg, selectedQuestion.correct)
      });
      return;
    }

    if(nameQuiz == 'js-advanced'){
      const jsIntermediate = require('../questions/jsAdvancedQuestions.json');
      const selectedQuestion = selectRandomQuestion(jsIntermediate);
      message.reply(formatQuestion(selectedQuestion)).then(msg => {
        applyReactions(msg);
        listenReacts(message, msg, selectedQuestion.correct)
      });
      return;
    }

    if(nameQuiz == 'html'){
      const jsIntermediate = require('../questions/htmlQuestions.json');
      const selectedQuestion = selectRandomQuestion(jsIntermediate);
      message.reply(formatQuestion(selectedQuestion)).then(msg => {
        applyReactions(msg);
        listenReacts(message, msg, selectedQuestion.correct)
      });
      return;
    }


  }
}

function formatQuestion(question){

  return formated = `
Questão ${question.id}: ${question.question}:\n${inlineCode(question.text)} \n***Alternativas*** \n1️⃣ ${question.alternatives[0]}
2️⃣ ${question.alternatives[1]}
3️⃣ ${question.alternatives[2]}
4️⃣ ${question.alternatives[3]}
    `
  
}


function applyReactions(msg){
  msg.react('1️⃣')
  msg.react('2️⃣')
  msg.react('3️⃣')
  msg.react('4️⃣')
}


function listenReacts(message,msg, asnwer){
    
  const filter = (r, u) => r.emoji.name == '1️⃣' || r.emoji.name == "2️⃣" || r.emoji.name == "3️⃣" || r.emoji.name == "4️⃣";
  const collector = msg.createReactionCollector(filter, {time: 60000});
  collector.on('collect', (reaction, user) => {
    //Put your response to reactions here
    if(user.bot !== true && user == message.author){
      if(reaction.emoji.name === asnwer){
        const mention = userMention(user);
        user.send('Parabéns você acertou a questão!!');
        msg.delete({timeout: 20000})
        message.delete({timeout: 2000})
        message.channel.send(`${mention} acertou a pergunta`)
      }else{
        user.send("Não foi desta vez, sua resposta está incorreta, tente novamente.")
        msg.delete({timeout: 20000})
        message.delete({timeout: 2000})
      }
    }
  });
}

function selectRandomQuestion(questions){
  const randomPosition = Math.floor(Math.random() * questions.length);
  return questions[randomPosition];
}