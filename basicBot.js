const Discord = require('discord.js');
//const config = require('./config.json');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', (message) => {
  const messageWords = message.content.split(' ');
  const rollFlavor = messageWords.slice(2).join(' ');
  if (messageWords[0] === '!roll') {
    if (messageWords.length === 1) {
      // !roll
      let response = (Math.floor(Math.random() * 6) + 1) + ' ' + rollFlavor
      return message.reply(
        `You have rolled a ${response}!`
      );
    }
    let sides = messageWords[1]; // !roll 20
    let rolls = 1;
    if (!isNaN(messageWords[1][0] / 1) && messageWords[1].includes('d')) {
      // !roll 4d20
      rolls = messageWords[1].split('d')[0] / 1;
      sides = messageWords[1].split('d')[1];
    } else if (messageWords[1][0] == 'd') {
      // !roll d20
      sides = sides.slice(1);
    }
    sides = sides / 1; // convert to number
    if (isNaN(sides) || isNaN(rolls)) {
      return;
    }
    if (rolls > 1) {
      const rollResults = [];
      for (let i = 0; i < rolls; i++) {
        rollResults.push(Math.floor(Math.random()*sides)+1);
      }
      const sum = rollResults.reduce((a,b) => a + b);
      return message.reply(`[${rollResults.toString()}] ${rollFlavor}`);
    } else {
      return message.reply(
        (Math.floor(Math.random() * sides) + 1) + ' ' + rollFlavor
      );
    }
  }
});

client.login('NzI3OTkyNzA4ODkwNzU1MDgz.Xvz84A.prIUIQNnVNeTrbNeAeKiDijD1lg')
//client.login(config.token);