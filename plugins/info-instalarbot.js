let handler = async (m, { conn, usedPrefix }) => {
let pp = 'https://i.imgur.com/lkch77g.jpeg' 
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
await m.reply(`╰⊱🔰⊱ *𝙸𝙽𝚂𝚃𝙰𝙻𝙰𝙲𝙸𝙾𝙽* ⊱🔰⊱╮`)
  //conn.sendButton(m.chat, str, author, await(await fetch(pp)).buffer(), [['Menu', '/menu']], m)
let texto1 = `
ᴘᴀsᴏ ᴅᴇʟ ɪɴsᴛᴀʟᴀᴄɪᴏɴ 
ɴᴏᴠᴀʙᴏᴛ-ᴍᴅ ʏᴀ ᴇsᴛᴀ ʟɪsᴛᴀ ᴘᴀʀᴀ ʟᴀ ɪɴsᴛᴀʟᴀᴄɪᴏɴ 

📌 ᴘᴀsᴏ ᴘᴀʀᴀ ɪɴsᴛᴀʟᴀʀ ᴇʟ ʙᴏᴛ ᴇʟ ᴛᴇʀᴍᴜx
📌 ᴄᴏᴍᴏ ɪɴsᴛᴀʟᴀʀ ᴇʟ ʙᴏᴛ: 
ʜᴛᴛᴘs://ʏᴏᴜᴛᴜ.ʙᴇ/13xʙᴄǫ2ɪғɢs
📌 ɪɴsᴛᴀʟᴀʀ ᴛᴇʀᴍᴜx ᴅᴇʟ ɢᴏᴏɢʟᴇ 👇
https://www.mediafire.com/file/t2yaabinm704frd/Termux_118_by_shan.apk/file
📌 ɴᴇᴄᴇsɪᴛᴀ 2 ᴄᴇʟᴜʟᴀʀᴇs ᴏ 1 ᴄᴇʟᴜ ʏ ᴜɴᴀ ᴘᴄ sᴏʟᴏ ᴘᴀʀᴀ ᴇsᴄᴀɴᴇᴀ ᴇʟ ǫʀ

------------------------------------

*—◉ ᴄᴏᴍᴀɴᴅᴏ ᴛᴇʀᴍᴜx*
>  termux-setup-storage
>  pkg install
>  pkg upgrade
>  pkg install git
>  pkg install ffmpeg && pkg install libwebp
>  pkg install nodejs
>  pkg install yarn
>  git clone https://github.com/elrebelde21/NovaBot-MD
>  cd NovaBot-MD
>  npm install
>  yarn
>  npm start
(ʏ ᴀᴄᴀ ǫᴜᴇ ᴠᴀɴ ᴍᴀɴᴅᴀ ᴇʟ ǫʀ ᴛᴇɴᴇʀ ʟᴀ ᴏᴘᴄɪᴏɴ sᴀᴄᴀ ᴜɴᴀ ᴄᴀʀᴛᴜʀᴀ ʏ ᴍᴀɴᴅᴀʟᴀ ᴀ ᴛᴜ ᴏᴛʀᴏ ᴄᴇʟᴜʟᴀʀ ʏ ᴇsᴄᴀɴᴇᴀ ʀᴀᴘɪᴅᴏ)

📌 sɪ ɴᴇᴄᴇsɪᴛᴀs ᴀʏᴜᴅᴀ ᴇɴᴛʀᴀ ᴀʟ ɢʀᴜᴘᴏ ᴅᴇʟ ʙᴏᴛ (ᴜᴘᴅᴀᴛᴇ)

📌 *https://chat.whatsapp.com/JESaesjOEcB6wnGX0QYT9o*

 ᴏ ᴇsᴄʀɪʙɪᴍᴇ ᴀʟ wa.me/56964787183
 sᴏʟᴏ ᴘᴏʀ ᴛᴇᴍᴀ ᴅᴇʟ ʙᴏᴛ`
let buttonMessage= {
'document': { url: `https://youtu.be/13xBCq2ifGs` },
'mimetype': `application/${document}`,
'fileName': `𝑻𝒉𝒆 𝑳𝒐𝒍𝒊𝑩𝒐𝒕-𝑴𝑫`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'https://youtu.be/13xBCq2ifGs',
'mediaType': 2,
'previewType': 'pdf',
'title': 'tutorial del instalación',
'body': wm,
 }},
'caption': texto1,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: '✳️ MENU ✳️'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })}
handler.command = /^(instalarbot|instalarbot)$/i
handler.register = true
export default handler
