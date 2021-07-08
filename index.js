const Discord = require('discord.js.old'),
    client = new Discord.Client(),
    clientUser = new Discord.Client(),
    config = require('./config');

clientUser.on("messageDelete", async (messageDelete) => {
    if(messageDelete.guild) return;
    if(messageDelete.author.id === clientUser.user.id) return;
    if(messageDelete.author.bot) return;

    var imgLogger = client.channels.get(config.imageLogger);
    var msgLogger = client.channels.get(config.messageLogger);

    if(messageDelete.channel.type === "dm"){
        const messagePrivate = new Discord.RichEmbed()
            .setColor('#3541F1')
            .setTitle(`📸 PrivateDM ${messageDelete.author.username} (${messageDelete.author.id})`)
            .setDescription(`${messageDelete}`)
            .setTimestamp()
            .setFooter('Dev by Spaso.')
        msgLogger.send(messagePrivate)
        msgLogger.send(`<@${clientUser.user.id}>`);

    }else{
        if(message.attachment !== null) return;
        const messagePrivate = new Discord.RichEmbed()
            .setColor('#3541F1')
            .setTitle(`📸 GoupeDM ${messageDelete.author.username} (${messageDelete.author.id})`)
            .setDescription(`${messageDelete}`)
            .setTimestamp()
            .setFooter('Dev by Spaso.')
        msgLogger.send(messagePrivate)
        msgLogger.send(`<@${clientUser.user.id}>`)

    }
     if(messageDelete.channel.type === "dm"){
         messageDelete.attachments.forEach(attachment => {
             const ImageLink = attachment.proxyURL;
             const embedDM = new Discord.RichEmbed()
                 .setColor('#3541F1')
                 .setTitle(`📸 PrivateDM ${messageDelete.author.username} (${messageDelete.author.id})`)
                 .setImage(`${ImageLink}`)
                 .setTimestamp()
                 .setFooter('Dev by Spaso.')
             imgLogger.send(embedDM)
             imgLogger.send(`<@${clientUser.user.id}>`)

         });
     }else{
         messageDelete.attachments.forEach(attachment => {
             const ImageLink = attachment.proxyURL;
             const messageGroup = new Discord.RichEmbed()
                 .setColor('#3541F1')
                 .setTitle(`📸 GoupeDM | ${message.author.username} (${message.author.id})`)
                 .setImage(`${ImageLink}`)
                 .setTimestamp()
                 .setFooter('Dev by Spaso.')
             imgLogger.send(messageGroup)
             imgLogger.send(`<@${clientUser.user.id}>`)

         });
     }

})

client.on("ready", () => {
    console.log(`${client.user.username} Connected BOT!`);
})

clientUser.on("ready", () => {
    console.log(`${clientUser.user.username} Connected UserToken!`);
})

client.login(config.tokenBot);
clientUser.login(config.tokenUser);
