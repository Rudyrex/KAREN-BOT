//import db from '../lib/database.js'

let handler = async (m, { conn, text }) => {
  let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw '✳️ ᴛᴀɢᴜᴇᴀ ᴀʟ ᴜsᴜᴀʀɪᴏ'
  let txt = text.replace('@' + who.split`@`[0], '').trim()
  if (!txt) throw '✳️ ɪɴɢʀᴇsᴇ ʟᴀ ᴄᴀɴᴛɪᴅᴀᴅ ᴅᴇ *xᴘ* ǫᴜᴇ ǫᴜɪᴇʀᴇ ᴀñᴀᴅɪʀ'
  if (isNaN(txt)) throw ' 🔢 sᴏʟᴏ ɴᴜᴍᴇʀᴏs'
  let xp = parseInt(txt)
  let exp = xp
  
  if (exp < 1) throw '✳️ ᴍɪɴɪᴍᴏ ᴇs *1*'
  let users = global.db.data.users
  users[who].exp += xp

  await m.reply(`╔════ ≪ •❈• ≫ ════╗
║ *xᴘ ᴀñᴀᴅɪᴅᴏ*
║◤━━━━━ ☆. ∆ .☆ ━━━━━◥
║🔸 *ᴛᴏᴛᴀʟ:* ${xp}
╚═══════════════`)
 conn.fakeReply(m.chat, `🔸 ʀᴇᴄɪʙɪsᴛᴇ \n\n *+${xp} xᴘ*`, who, m.text)
}

handler.help = ['addxp <@user>']
handler.tags = ['econ']
handler.command = ['addxp'] 
handler.rowner = true
handler.register = true

export default handler

