const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'سريع') {
    msg.reply('يببببب');
  }
});

 client.on("message", msg => {
    if(msg.author.bot) return undefined;
    if(msg.content.startsWith(prefix + "avatar")) {
    let args = msg.content.split(" ")[1];
    if(!args) return msg.channel.send(`:white_check_mark: | **Using:** \`${prefix}avatar [ID]\`**`)
    var mention = args
    client.fetchUser(mention).then((user) => {
    let avatar = new Discord.RichEmbed()
    .setAuthor(user.username,user.avatarURL)
    .setTitle(`:white_check_mark: | Avatar Link`)
    .setURL(`${user.avatarURL}`)
    .setImage(`${user.avatarURL}`)
    .setFooter(msg.author.username,msg.author.avatarURL)
    msg.channel.send(avatar)
    })
    }
    })




client.on('message', message => {
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  var command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

var args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** هذا الأمر فقط السيرفر**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply(":unamused: | **آسف ولكن ليس لديك إذن `BAN_MEMBERS`**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply(":unamused: | **آسف ليس لدي إذن `BAN_MEMBERS`**");
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.reply(":white_check_mark: | **Using:** `$ban [mention]`");
  if (!message.guild.member(user)
  .bannable) return message.reply("** :arrows_counterclockwise:  |الدور يجب أن يكون في القمة مع `ADMINISTRATION`**");


  message.guild.member(user).ban(7, user);

message.channel.send(`:white_check_mark: **| ${user.tag} محظور من السيرفر  **  `)

}
});

client.on('message', message => {
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  var command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

var args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** هذا الأمر فقط للسيرفر**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply(":x: | **آسف ولكن ليس لديك إذن`KICK_MEMBERS` **");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**:x: | **آسف ليس لدي إذن `KICK_MEMBERS` **");
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.reply(":hushed:  | **Using:** `$kick [mention]`");
  if (!message.guild.member(user)
  .bannable) return message.reply("** :thinking:  | الدور يجب أن يكون في القمة مع `ADMINISTRATION`**");


  message.guild.member(user).kick(7, user);

message.channel.send(`:white_check_mark:  **| ${user.tag} طرد من السيرفر !  **  `)

}
});














client.login('token');
