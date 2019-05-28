const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "."
var adminprefix = '.' // Alpha Codes Ghost

client.on('message', message => {
    if (message.content === ".help") {
    let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setFooter(`DgPro`, 'https://cdn.discordapp.com/attachments/505643202053931011/519449304310480907/LastBot.png')
  .setColor("#000000")
  .addField("Done | تــــم" , ":envelope: | :sleuth_or_spy::skin-tone-3:شيك علي في الخاص") // Alpha Codes Ghost
  
  
  
  message.channel.sendEmbed(embed);  // Alpha Codes Ghost
  }
  });
  
 
  
   client.on("message", message => {
    if (message.content === ".help") {
     const embed = new Discord.RichEmbed()   // Alpha Codes Ghost
         .setColor("#00FF00")
         .setDescription(`**❓❔❗️❕وش مميزات البوت❗️❕❓❔**
        **__1-__:books:🧐 بوت عربي🧐:books:
         __2-__:white_check_mark: :part_alternation_mark:️ استخدامه جدا سهل:part_alternation_mark:️:white_check_mark: 
         __3-__:gear:️صيانه كل يوم:gear:️
         __4-__:money_with_wings: مجاني :money_with_wings:**`)
   message.author.sendEmbed(embed)
   
   }
   });
  

   client.on("message", message => {
      if (message.content === ".help") {  // Alpha Codes Ghost
       const embed = new Discord.RichEmbed() 
           .setColor("#FF0000")
           .setDescription(`**🕴🏾الاوامر العامة|Public Commands🕴🏾**
  ** __.id__->**معلومات عنك
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__.server__->**معلومات عن السيرفر
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__.avatar__->**صورتك
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__.help__->**تظهر لك هذي القائمة
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__.inv__->**لدعوة البوت
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-  `) // Alpha Codes Ghost
     message.author.sendEmbed(embed)
     
     }
     });

   client.on("message", message => {  // Alpha Codes Ghost
    if (message.content === ".help") {
     const embed = new Discord.RichEmbed() 
         .setColor("#FFFF00")
         .setDescription(`**:video_game:   الالعاب :video_game: **
SoOn`)
   message.author.sendEmbed(embed)
   
   }
   });  // Alpha Codes Ghost
  
  
  
   client.on("message", message => {
      if (message.content === ".help")   // Alpha Codes Ghost
       const embed = new Discord.RichEmbed() 
           .setColor("#57FEFF")
           .setDescription(`**⚙️اوامر الادارة|Administrator⚙️**
  ** __.kick__->**طرد
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__.ban__->**باند
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__.mute__->**ميوت
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__.unmute__->**فك ميوت
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__.cl__->**قفل الشات
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__.op__->**فتح الشات
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  ** __.ct__->**انشاء شات
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__.cv__->**انشاء روم
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__.clear__->**حذف الشات
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__.bans__->**عدد الااشخاص المبندين
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__.say__->**البوت يكرر كلامك
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
  **__.sayem__->**يكرر كلامك بامبيد
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
`)
     message.author.sendEmbed(embed) // Alpha Codes Ghost
     }
     });

  
     client.on("message", message => {
      if (message.content === ".help") {
       const embed = new Discord.RichEmbed()   // Alpha Codes Ghost
           .setColor("#FF00FF")
           .setFooter('By Kemuda')
           .setDescription(`**__أتمنى يعجبكم البوت يا أغلى ناس ❤️ 💛 💚 💙 💜 🖤__**`)
     message.author.sendEmbed(embed)
     
     }
     });

  client.on("message", msg => {
    var prefix = ".";
if(msg.content.startsWith (prefix + "id")) {  // Alpha Codes Ghost
if(!msg.channel.guild) return msg.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
const embed = new Discord.RichEmbed();
embed.addField(":cloud_tornado:  الاسم", `**[ ${msg.author.username}#${msg.author.discriminator} ]**`, true)
   .addField(":id:  الايدي", `**[ ${msg.author.id} ]**`, true)
   .setColor("RANDOM")
   .setFooter(msg.author.username , msg.author.avatarURL)
   .setThumbnail(`${msg.author.avatarURL}`)  // Alpha Codes Ghost
   .setTimestamp()
   .setURL(`${msg.author.avatarURL}`)
   .addField(':spy:  الحالة', `**[ ${msg.author.presence.status.toUpperCase()} ]**`, true)
   .addField(':satellite_orbital:   Playing', `**[ ${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name} ]**`, true)
   .addField(':military_medal:  الرتب', `**[ ${msg.member.roles.filter(r => r.name).size} ]**`, true)
msg.channel.send({embed: embed})
}
});
  
client.on("message", async message => {
        if(!message.channel.guild) return;  // Alpha Codes Ghost
 var prefix= ".";
        if(message.content.startsWith(prefix + 'server')) {  // Alpha Codes Ghost
        let guild = message.guild
        let channel = message.channel
        let guildicon = guild.icon_url  
        let members = guild.memberCount
        let bots = guild.members.filter(m => m.user.bot).size
        let humans = members - bots
        let allchannels = guild.channels.size
        let textchannels = guild.channels.filter(e => e.type === "text")
        let voicechannels = guild.channels.filter(e => e.type === "voice")
          var embed = new Discord.RichEmbed()
          .setColor("#000000")
          .setTitle(`معلومات عن السيرفر`)
          .setDescription(`معلومات عن : ${guild.name}`)
          .addField(":crown: صاحب السيرفر :", `${guild.owner}`, true)
          .addField(":id: أيدي السيرفر :", `${guild.id}`, true)
          .addField(":earth_africa: موقع السيرفر :", `${guild.region}`, true)
          .addField(":earth_africa:مستوى حماية السيرفر :", `${guild.verificationLevel}`, true)
          .addField(":speech_balloon: عدد الرومات الصوتية :", `${voicechannels.size}`, true)
          .addField(":speech_balloon: عدد الرومات الكتابية :", `${textchannels.size}`, true)
          .addField(":busts_in_silhouette: عدد اعضاء السيرفر :", `${members}`, true)
          .addField(":robot: عدد البوتات :", `${bots}`, true)
          .addField(":busts_in_silhouette: عدد الاشخاص :", `${humans}`, true)
          .addField(":closed_lock_with_key: عدد رتب السيرفر :", `${guild.roles.size}`, true)
          .addField(`أيموجيات الخاصة بالسيرفر : (${guild.emojis.size})`, `- ${guild.emojis.array()}`, true)
          .setFooter(`تم انشاء هذه السيرفر في: ${guild.createdAt}`)
 
       message.channel.send({ embed: embed });
 
      }
    });

client.on('message', message => {
    if (message.content.startsWith(".avatar")) {  // Alpha Codes Ghost
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);  // Alpha Codes Ghost
    }
});

client.on('message', message => {
    if (message.content.startsWith(prefix + 'clear')) {  // Alpha Codes Ghost
      if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(`YouNeedPerm[*MANAGE_MESSAGES*] `).catch(console.error);
  message.delete()
  if(!message.channel.guild) return;
  let args = message.content.split(" ").slice(1);
  
  const messagecount = parseInt(args.join(' '));
  
  message.channel.fetchMessages({
  
  limit: messagecount
  
  }).then(messages => message.channel.bulkDelete(messages));  // Alpha Codes Ghost
  message.channel.sendMessage("", {embed: {
    title: "**Done Delete Message** :white_check_mark: ",
    color: 0x06DF00,
    footer: {
    
    }
    }}).then(msg => {msg.delete(3000)});  // Alpha Codes Ghost
  };
  
  });


	
client.on('message', message => {

    if (message.content === ".cl") {
                        if(!message.channel.guild) return message.reply(' هذا الامر فقط للسيرفرات !!');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("تم تقفيل الشات :lock: ")  // Alpha Codes Ghost
           });
             }
if (message.content === ".op") {
    if(!message.channel.guild) return message.reply(' هذا الامر فقط للسيرفرات !!');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("تم فتح الشات :unlock: ")  // Alpha Codes Ghost
           });
             }



});
	
client.on('message', message => {
    if (message.content.startsWith(".bans")) {  // Alpha Codes Ghost
        message.guild.fetchBans()
        .then(bans => message.channel.send(`**__${bans.size}__ Members Baneed From Server**`))
  .catch(console.error);
}
});
	
client.on("message", (message) => {
if (message.content.startsWith(".ct")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'text');  // Alpha Codes Ghost
message.channel.sendMessage('**تـم إنـشاء روم كـتابـي**')

}
});
	
client.on("message", (message) => {
if (message.content.startsWith(".cv")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'voice');
    message.channel.sendMessage('**تـم إنـشاء روم صـوتي**')  // Alpha Codes Ghost
    
}
});
	
client.on('message', message => {
const prefix = ".";
  if (message.author.kick) return;  // Alpha Codes Ghost
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return;
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("You Don't Have KICK_MEMBERS Permission").then(msg => msg.delete(5000));
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("I Don't Have KICK_Members Permission");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");

  if (message.mentions.users.size < 1) return message.reply("منشن شخص");  // Alpha Codes Ghost
  if(!reason) return message.reply ("**Text KICK Reason**");
  if (!message.guild.member(user)
  .bannable) return message.reply("لايمكنني طرد شخص اعلى من رتبتي");

  message.guild.member(user).kick(7, user);

  const banembed = new Discord.RichEmbed()  // Alpha Codes Ghost
  .setAuthor('Kicked !', user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("User:",  `[ + ${user.tag} + ]`)
  .addField("By:", `[  + ${message.author.tag} +  ]`)  // Alpha Codes Ghost
  .addField("Reason:", `[ + ${reason} +  ]`)
  client.channels.get("519259147967922176").send({embed : banembed})
}
});

  client.on('message', message => {
  if (message.author.codes) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];  // Alpha Codes Ghost
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**'); // Alpha Codes Ghost
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**انت لا تملك الصلاحيات المطلوبه**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**يجب ان تكون رتبة البوت اعلي من رتبه الشخص المراد تبنيدة**");  // Alpha Codes Ghost
  

  message.guild.member(user).ban(7, user);

message.channel.send(`**Baneed From This Server :airplane: **`)

}
});
	
client.on('message', async message => {
  let args = message.content.split(" ");
  if(message.content.startsWith(prefix + "mute")) {
    if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send('').then(msg => {  // Alpha Codes Ghost
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    let mention = message.mentions.members.first();
    if(!mention) return  message.channel.send('').then(msg => {  // Alpha Codes Ghost
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(mention.id === message.author.id) return message.channel.send('**:x:You Cannot give mute to your self**').then(msg => { // Alpha Codes Ghost
	
      message.delete(3500);
    });
   
    if(mention.hasPermission('ADMINISTRATOR')) return message.channel.send(`**:x: لا يمكن آعطاء ميوت لادارة السيرفر**`); 
 
    if(message.guild.member(mention).roles.find('name', 'Muted')) return message.channel.send(`**:information_source: ${mention.user.username} Already Muted**`);// Alpha Codes Ghost
 
   
    if(mention.position >= message.guild.member(message.author).positon) return message.channel.send('You Donot Have Permission **Muted_Members** ').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
   
    if(mention.positon >= message.guild.member(client.user).positon) return message.channel.send('I Donot Have Permission **Muted_Members**').then(msg => { // Alpha Codes Ghost
      msg.delete(3500);
      message.delete(3500); 
    });
   
    let duration = args[2];
    if(!duration) message.channel.send(`**:hash: You Can Use ${prefix}mute @user Time Reason**`).then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    if(isNaN(duration))  message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500);
    });
 
    let reason = message.content.split(" ").slice(3).join(" "); // Alpha Codes Ghost
    if(!reason) reason = " [ **لم يذكر لماذا** ] ";
 
    let thisEmbed = new Discord.RichEmbed()
    .setAuthor(mention.user.username, mention.user.avatarURL)
    .setTitle('**تم آعطائك ميوت**')
    .addField('**__السيرفر__**',[ message.guild.name ]) 
    .addField('**__تم آعطائك ميوت بواسطة__**', [ message.author ])
    .addField('**__آلسبب__**',reason)
    .addField('**__وقت الميوت__**',duration) // Alpha Codes Ghost
 
    let role = message.guild.roles.find('name', 'Muted') || message.guild.roles.get(r => r.name === 'Muted');
    if(!role) try {
      message.guild.createRole({
        name: "Muted",
        permissions: 0 
      }).then(r => {
        message.guild.channels.forEach(c => {
          c.overwritePermissions(r , {
            SEND_MESSAGES: false,  // Alpha Codes Ghost
            READ_MESSAGES_HISTORY: false,
            ADD_REACTIONS: false
          });
        });
      }); 
    } catch(e) {
      console.log(e.stack);
    }
    mention.addRole(role).then(() => {
      mention.send(thisEmbed); // Alpha Codes Ghost
      message.channel.send(`**:white_check_mark: ${mention.user.username}  Muted! :zipper_mouth:  **  `);
      mention.setMute(true); 
    });
    setTimeout(() => {
      if(duration === 0) return;
      mention.setMute(false);
      mention.removeRole(role)
    },duration * 60000); 
  } // Alpha Codes Ghost
});
client.on('message', async message => {
    let mention = message.mentions.members.first();
let command = message.content.split(" ")[0];
     command = command.slice(prefix.length);
    let args = message.content.split(" ").slice(1);  
if(command === `unmute`) {2
  if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.sendMessage("**You Donot HavePermission Mute_Members**").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**I donot Have Permission Mute_Members**").then(msg => msg.delete(6000))
 
  let kinggamer = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
     if(!kinggamer) return message.channel.send('').then(msg => {
      msg.delete(3500);
      message.delete(3500); 
    }); // Alpha Codes Ghost
 
  let role = message.guild.roles.find (r => r.name === "Muted");
 
  if(!role || !kinggamer.roles.has(role.id)) return message.channel.sendMessage(`**:information_source:${mention.user.username} لقد تم فك الميوت عنه مسبقا**`)
 
  await kinggamer.removeRole(role) 
  message.channel.sendMessage(`**:white_check_mark: ${mention.user.username}  Unmuted! **`);
 
  return;
 
  }
 
});
	
	
client.on('message', message => {

  if (message.author.bot) return; // Alpha Codes Ghost

  if (!message.content.startsWith(prefix)) return;


  let command = message.content.split(" ")[0];

  command = command.slice(prefix.length);


  let args = message.content.split(" ").slice(1);


// -say

 if (command === "say") { // Alpha Codes Ghost
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("**You Donot HavePermission ADMINISTRATOR**").then(m => m.delete(5000));
          message.delete()

    message.channel.sendMessage(args.join(" ")).catch(console.error);

  }

  
 // Alpha Codes Ghost
 


if (command == "sayem") {
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.sendMessage("**You Donot HavePermission ADMINISTRATOR**").then(m => m.delete(5000));
    let say = new Discord.RichEmbed()

    .setDescription(args.join(" "))

    .setColor(0x23b2d6) // Alpha Codes Ghost

    message.channel.sendEmbed(say);

    message.delete();

  }



});


const developers = ["415142691282616330,268986012309520386"]
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' '); // Alpha Codes Ghost
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'setgame')) {
    client.user.setGame(argresult);
      message.channel.send(`**✅   ${argresult}**`)
  } else 
     if (message.content === (adminprefix + "leave")) {
    message.guild.leave();        
  } else  
  if (message.content.startsWith(adminprefix + 'setwat')) { // Alpha Codes Ghost
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'setlis')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**✅   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'setstream')) {
    client.user.setGame(argresult, "https://www.twitch.tv/dream"); // Alpha Codes Ghost
      message.channel.send(`**✅**`)
  }
  if (message.content.startsWith(adminprefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.send(`Changing The Name To ..**${argresult}** `)
} else
if (message.content.startsWith(adminprefix + 'setava')) {
  client.user.setAvatar(argresult);
    message.channel.send(`Changing The Avatar To :**${argresult}** `); // Alpha Codes Ghost
}
});



client.on('ready', () => {
   console.log(`----------------`);
      console.log(`NewBot Update 1.0`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : EX Clan ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`.help | Server ${client.guilds.size}`,"http://twitch.tv/Dream")
client.user.setStatus("dnd") // Alpha Codes Ghost
});

   client.on("message", inv => {
      if (inv.content === ".inv") {
       const embed = new Discord.RichEmbed() 
           .setColor("#FF0000")
           .setDescription(`**رابط البوت
		   https://discordapp.com/api/oauth2/authorize?client_id=582628256424132618&permissions=8&scope=bot**`)
     inv.author.sendEmbed(embed) // Alpha Codes Ghost
     
     }
     });

client.login(process.env.BOT_TOKEN);
