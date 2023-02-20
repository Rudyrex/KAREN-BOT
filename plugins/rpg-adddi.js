//import db from '../lib/database.js'

let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw '✳️ ᴛᴀɢᴜᴇᴀ ᴀʟ ᴜsᴜᴀʀɪᴏ'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) throw '✳️ ɪɴɢʀᴇsᴇ ʟᴀ ᴄᴀɴᴛɪᴅᴀᴅ ᴅᴇ *xᴘ* ǫᴜᴇ ǫᴜɪᴇʀᴇ ᴀñᴀᴅɪʀ'
    if (isNaN(txt)) throw '🔢 sᴏʟᴏ ɴᴜᴍᴇʀᴏs'
    let dmt = parseInt(txt)
    let diamond = dmt
    
    if (diamond < 1) throw '✳️ ᴍɪɴɪᴍᴏ ᴇs *1*'
    let users = global.db.data.users
   users[who].diamond += dmt

    await m.reply(`╔════ ≪ •❈• ≫ ════╗
║ *💎 ᴀñᴀᴅɪᴅᴏ*
║◤━━━━━ ☆. ∆ .☆ ━━━━━◥
║🔸 *ᴛᴏᴛᴀʟ:* ${dmt}
╚═══════════════`)
   conn.fakeReply(m.chat, `🔸 ʀᴇᴄɪʙɪsᴛᴇ \n\n *+${dmt}* ᴅɪᴀᴍᴀɴᴛᴇs`, who, m.text)
}

handler.help = ['adddi <@user>']
handler.tags = ['econ']
handler.command = ['adddi'] 
handler.rowner = true

export default handler

