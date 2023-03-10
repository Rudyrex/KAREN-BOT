
import { areJidsSameUser } from '@adiwajshing/baileys'

let handler = async (m, { conn, args, participants }) => {
  let users = Object.entries(global.db.data.users).map(([key, value]) => {
    return {...value, jid: key}
  })
  let sortedExp = users.map(toNumber('exp')).sort(sort('exp'))
  let sortedLim = users.map(toNumber('diamond')).sort(sort('diamond'))
  let sortedLevel = users.map(toNumber('level')).sort(sort('level'))
  let usersExp = sortedExp.map(enumGetKey)
  let usersLim = sortedLim.map(enumGetKey)
  let usersLevel = sortedLevel.map(enumGetKey)
  let len = args[0] && args[0].length > 0 ? Math.min(50, Math.max(parseInt(args[0]), 5)) : Math.min(5, sortedExp.length)
  let text = `
ππ°π±π»π° π³π΄ π²π»π°ππΈπ΅πΈπ²π°π²πΈπΎπ½
 
βββ *ππΎπΏ ${len} ππΏ* π§¬ 
βππ : *${usersExp.indexOf(m.sender) + 1}* ππ *${usersExp.length}*
${sortedExp.slice(0, len).map(({ jid, exp }, i) => `β${i + 1}. ${participants.some(p => areJidsSameUser(jid, p.id)) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} β­ _*π‘π ${exp}*_`).join`\n`}
ββββββββββββββββ  

βββ *ππΎπΏ ${len} π³πΈπ°πΌπ°π½ππ΄π π*
βππ : *${usersLim.indexOf(m.sender) + 1}* ππ *${usersLim.length}*
${sortedLim.slice(0, len).map(({ jid, diamond }, i) => `β${i + 1}. ${participants.some(p => areJidsSameUser(jid, p.id)) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} β­ _*π³ππππππππ ${diamond}*_`).join`\n`}
ββββββββββββββββ

βββ *ππΎπΏ ${len} π½πΈππ΄π»* β¬οΈ
βππ : *${usersLevel.indexOf(m.sender) + 1}* ππ *${usersLevel.length}*
${sortedLevel.slice(0, len).map(({ jid, level }, i) => `β${i + 1}. ${participants.some(p => areJidsSameUser(jid, p.id)) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} β­ _*π½ππππ ${level}*_`).join`\n`}
ββββββββββββββββ`.trim()
  conn.reply(m.chat, text, m, {
    mentions: [...usersExp.slice(0, len), ...usersLim.slice(0, len), ...usersLevel.slice(0, len)].filter(v => !participants.some(p => areJidsSameUser(v, p.id) )) 
})
 
}
handler.help = ['leaderboard']
handler.tags = ['econ']
handler.command = ['leaderboard', 'lb', 'top'] 
handler.register = true
export default handler

function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
  else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
  if (property) return (a, i, b) => {
    return {...b[i], [property]: a[property] === undefined ? _default : a[property]}
  }
  else return a => a === undefined ? _default : a
}

function enumGetKey(a) {
  return a.jid
}
