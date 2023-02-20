
let handler = async (m, {conn, usedPrefix}) => {
	
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let user = global.db.data.users[who]
    if (!(who in global.db.data.users)) throw `✳️ ᴇʟ ᴜsᴜᴀʀɪᴏ ɴᴏ sᴇ ᴇɴᴄᴜᴇɴᴛʀᴀ ᴇɴ ᴍɪ ʙᴀsᴇ ᴅᴇ ᴅᴀᴛᴏs`
    conn.reply(m.chat, `
╔════ ≪ •❈• ≫ ════╗
║ *𝙱𝙰𝙻𝙰𝙽𝙲𝙴*
║ • *📌𝙽𝚘𝚖𝚋𝚛𝚎* : _@${who.split('@')[0]}_
║ • *💎𝙳𝚒𝚊𝚖𝚊𝚗𝚝𝚎𝚜* : _${user.diamond}_
║ • *⬆️𝚇𝚙* : _Total ${user.exp}_
║◤━━━━━ ☆. ∆ .☆ ━━━━━◥
║ *𝙽𝙾𝚃𝙰 :* 
║𝙿𝚞𝚎𝚍𝚎𝚜 𝚌𝚘𝚖𝚙𝚛𝚊𝚛 💎 𝚍𝚒𝚊𝚖𝚊𝚗𝚝𝚎𝚜
║𝚞𝚜𝚊𝚗𝚍𝚘 𝚕𝚘𝚜 𝚌𝚘𝚖𝚊𝚗𝚍𝚘𝚜
║ • *${usedPrefix}buy <cantidad>*
║ • *${usedPrefix}buyall*
╚═══════════════`, m, { mentions: [who] })
}
handler.help = ['balance']
handler.tags = ['econ']
handler.command = ['bal', 'diamantes', 'diamond', 'balance'] 
handler.register = true

export default handler
