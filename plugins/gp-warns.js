
let handler = async (m, { conn, args, groupMetadata}) => {
       let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
       if (!(who in global.db.data.users)) throw `β³οΈ π΄π πππππππ ππ ππ πππππππππ ππ ππ ππππ ππ πππππ`
       let warn = global.db.data.users[who].warn
       let name = conn.getName(who)
      m.reply(`
ββββββΰ³ΰ³ββββββ
β   *π°π³ππ΄πππ΄π½π²πΈπ°*
β  β€βββββ β. β .β ββββββ₯
β  πΈοΈ*π½πππππ :* ${name} 
β  πΈοΈ*πππππ :* ${warn}
ββββββΰ³ΰ³ ββββββ`)
}

handler.help = ['warns']
handler.tags = ['group']
handler.command = ['warns'] 
handler.group = true
handler.register = true

export default handler
