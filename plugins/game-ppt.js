let handler = async (m, { conn, text, command, usedPrefix, args }) => {
let pp = 'https://www.bighero6challenge.com/images/thumbs/Piedra,-papel-o-tijera-0003318_1584.jpeg'
await conn.sendPresenceUpdate('composing', m.chat)
let reseqv = `๐ฅแดษชแดแดสแดs, ๐แดแดแดแดส, แด โ๏ธแดษชแดแดสแด\nแดแดแดแดแด แดsแดส แดsแดแดs แดแดแดแดษดแดแด\n๐ฅ.ppt piedra\n๐ .ppt papel\nโ๏ธ.ppt tijera\n\nแดsแด แดษด แดษชษดแดsแดแดสแดs\n\nEjemplo : *${usedPrefix + command}* papel\n`
    if (!text) throw reseqv
var astro = Math.random()
if (astro < 0.34) {
astro = 'piedra' 
} else if (astro > 0.34 && astro < 0.67) {
astro = 'tijera' 
} else {
astro = 'papel'
}
if (text == astro) {
global.db.data.users[m.sender].exp += 500
m.reply(`๐ฐ EMPATE! ๐ค\n\n๐๐ป TU: ${text}\n๐๐ป EL BOT: ${astro}\n๐ PREMIOS +500 XP`)
} else if (text == 'papel') {
if (astro == 'piedra') {
global.db.data.users[m.sender].exp += 2000
m.reply(`๐ฅณ HA GANADO! ๐\n\n๐๐ป TU: ${text}\n๐๐ป EL BOT: ${astro}\n๐ PREMIO +2000 XP`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`HA PERDIDO ! ๐คก\n\n๐๐ป TU: ${text}\n๐๐ป EL BOT: ${astro}\nโ PREMIO -300 XP`)
}
} else if (text == 'tijera') {
if (astro == 'papel') {
global.db.data.users[m.sender].exp += 1000
m.reply(`๐ฅณ HA GANADO! ๐\n\n๐๐ป TU: ${text}\n๐๐ป EL BOT: ${astro}\n๐ PREMIO +1000 XP`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`HA PERDIDO! ๐คก\n\n๐๐ป TU: ${text}\n๐๐ป EL BOT: ${astro}\nโ PREMIO -300 XP`)
}
} else if (text == 'tijera') {
if (astro == 'papel') {
global.db.data.users[m.sender].exp += 1000
m.reply(`๐ฅณ HA GANADO! ๐\n\n๐๐ป TU: ${text}\n๐๐ป EL BOT: ${astro}\n๐ PREMIO +1000 XP`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`HA PERDIDO! ๐คก\n\n๐๐ป TU: ${text}\n๐๐ป ๐ฌ๐ ๐๐๐: ${astro}\nโ PREMIO -300 XP`)
}
} else if (text == 'papel') {
if (astro == 'piedra') {
global.db.data.users[m.sender].exp += 1000
m.reply(`๐ฅณ HA GANADO! ๐\n\n๐๐ป TU: ${text}\n๐๐ป EL BOT: ${astro}\n๐ PREMIO +1000 XP`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`HA PERDIDO! ๐คก\n\n๐๐ป TU: ${text}\n๐๐ป ๐ฌ๐ ๐๐๐: ${astro}\nโ PREMIO -300 XP`)
}
} else if (text == 'piedra') {
if (astro == 'tijera') {
global.db.data.users[m.sender].exp += 1000
m.reply(`๐ฅณ HA GANADO! ๐\n\n๐๐ป TU: ${text}\n๐๐ป EL BOT: ${astro}\n๐ PREMIO +1000 XP`)
} else {
global.db.data.users[m.sender].exp -= 300
m.reply(`HA PERDIDO! ๐คก\n\n๐๐ป TU: ${text}\n๐๐ป EL BOT: ${astro}\nโ PREMIO -300 XP`)
}
}}
handler.help = ['ppt']
handler.tags = ['game']
handler.register = true 
handler.command = /^(ppt)$/i
export default handler