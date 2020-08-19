const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "?"

client.on('message' , message => {
    ;
    let user = message.mentions.users.first()|| client.users.get(message.content.split(' ')[1])
    if(message.content.startsWith(prefix + 'unban')) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('❌|**\`ADMINISTRATOR\`لا توجد لديك رتبة`**');
        if(!user) return  message.channel.send(`Do this ${prefix} <@ID user> \n or \n ${prefix}unban ID user`);
        message.guild.unban(user);
        message.guild.owner.send(`لقد تم فك الباند عن الشخص \n ${user} \n By : <@${message.author.id}>`)
        var embed = new Discord.RichEmbed()
        .setThumbnail(message.author.avatarURl)
        .setColor("RANDOM")
        .setTitle('**●Unban** !')
        .addField('**●User Unban :** ', `${user}` , true)
        .addField('**●By :**' ,       ` <@${message.author.id}> ` , true)
        .setAuthor(message.guild.name)
        message.channel.sendEmbed(embed)
    }
});
client.on('message' , message => {
    ;
    let user = message.mentions.users.first()|| client.users.get(message.content.split(' ')[1])
    if(message.content.startsWith(prefix + 'unban')) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('❌|**\`ADMINISTRATOR\`لا توجد لديك رتبة`**');
        if(!user) return  message.channel.send(`Do this ${prefix} <@ID user> \n or \n ${prefix}unban ID user`);
        message.guild.unban(user);
        message.guild.owner.send(`لقد تم فك الباند عن الشخص \n ${user} \n By : <@${message.author.id}>`)
        var embed = new Discord.RichEmbed()
        .setThumbnail(message.author.avatarURl)
        .setColor("RANDOM")
        .setTitle('**●Unban** !')
        .addField('**●User Unban :** ', `${user}` , true)
        .addField('**●By :**' ,       ` <@${message.author.id}> ` , true)
        .setAuthor(message.guild.name)
        message.channel.sendEmbed(embed)
    }
});
client.on('ready', () => {// افنت التشغيل 
  setInterval(function(){
      client.guilds.forEach(g => { // فور ايرج تدخل للسيرفرات كلها
                  var role = g.roles.find('name', 'Rainbow');//Rainbow  اسم الرتبة عشان يسوي ريمبو غيرها اذا تبي
                  if (role) {
                      role.edit({color : "RANDOM"});
                  };
      });
  }, 6000);// وقت الريمبو لا تغيرة لانه الوقت المسموح للتغيير
});
client.on('message', msg =>{//by roodx|67n
    var prefix = '!'//by roodx|67n
    var roodx = msg.content.split(' ').slice('1').join();//by roodx|67n
    if(msg.author.bot)return;//by roodx|67n
    if(!msg.channel.guild) return msg.reply("هاذا الامر فقط ل السيرفر");//by roodx|67n
    if(!msg.member.hasPermission('MANAGE_CHANNELS')) return msg.reply(":no_entry_sign:  الامر هاذا ل الاداره فقط ");//by roodx|67n
    if(msg.content.startsWith(prefix + 'setname'))//by roodx|67n
       msg.channel.setName(roodx);//by roodx|67n
       msg.reply('**:white_check_mark: تم تغير اسم الشات بنجاح**')//by roodx|67n
}//by roodx|67n);
});
client.on('message', message => {
    if (message.content.startsWith(prefix + 'clear')) {
       if(!message.channel.guild) return message.reply('** This command only for servers**');
      if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(`ماعندك هذا البرمشن[*MANAGE_MESSAGES*] `).catch(console.error);
  message.delete()
  if(!message.channel.guild) return;
  let args = message.content.split(" ").slice(1);
  
  const messagecount = parseInt(args.join(' '));
  
  message.channel.fetchMessages({
  
  limit: messagecount
  
  }).then(messages => message.channel.bulkDelete(messages));
  message.channel.sendMessage("", {embed: {
    title: "``✅ تــم مسح الشات ``",
    color: 0x06DF00,
    footer: {
    
    }
    }}).then(msg => {msg.delete(3000)});
  };
  
  });
client.login(process.env.BOT_TOKEN);