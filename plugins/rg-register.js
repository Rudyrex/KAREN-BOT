import { createHash } from 'crypto'
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { text, usedPrefix, command }) {
	function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
	let namae = conn.getName(m.sender)
	const sections = [
	{
	title: "SELECCIONA TU EDAD AQUI!",
	rows: [
	    {title: "Años Random", rowId: '.reg ' + namae + '.' + pickRandom(['30','29','28','27','26','25','24','23','22','21','20','19','18','17','16','15','14','13','12','11','10','9'])}
	]
    },
    {
	title: "ADULTO",
	rows: [
	    {title: "30 Años", rowId: '.reg ' + namae + '.30 '},
	    {title: "29 Años", rowId: '.reg ' + namae + '.29 '},
	    {title: "28 Años", rowId: '.reg ' + namae + '.28 '},
	{title: "27 Años", rowId: '.reg ' + namae + '.27 '},
	{title: "26 Años", rowId: '.reg ' + namae + '.26 '},
	{title: "25 Años", rowId: '.reg ' + namae + '.25 '},
	{title: "24 Años", rowId: '.reg ' + namae + '.24 '},
	{title: "23 Años", rowId: '.reg ' + namae + '.23 '},
	{title: "22 Años", rowId: '.reg ' + namae + '.22 '},
	{title: "21 Años", rowId: '.reg ' + namae + '.21 '}
	]
    },
    {
	title: "JOVEN",
	rows: [
	    {title: "20 Años", rowId: '.reg ' + namae + '.20 '},
	    {title: "19 Años", rowId: '.reg ' + namae + '.19 '},
	    {title: "18 Años", rowId: '.reg ' + namae + '.18 '},
	{title: "17 Años", rowId: '.reg ' + namae + '.17 '},
	{title: "16 Años", rowId: '.reg ' + namae + '.16 '},
	{title: "15 Años", rowId: '.reg ' + namae + '.15 '},
	{title: "14 Años", rowId: '.reg ' + namae + '.14 '},
	{title: "13 Años", rowId: '.reg ' + namae + '.13 '},
	{title: "12 Años", rowId: '.reg ' + namae + '.12 '},
	{title: "11 Años", rowId: '.reg ' + namae + '.11 '},
	{title: "10 Años", rowId: '.reg ' + namae + '.10 '},
	{title: "9 Años", rowId: '.reg ' + namae + '.9 '}
	]
    },
]

const listMessage = {
  text: `┆ᴘᴏʀ ғᴀᴠᴏʀ sᴇʟᴇᴄᴄɪᴏɴᴀ ᴛᴜ ᴇᴅᴀᴅ ᴘᴜʟsᴀɴᴅᴏ ᴇʟ ʙᴏᴛᴏɴ...\n┆ᴛᴜ ɴᴏᴍʙʀᴇ: ${conn.getName(m.sender)}\n┆ǫᴜɪᴇʀᴇs ᴘᴏɴᴇʀ ᴏᴛʀᴏ ᴍᴏᴍʙʀᴇ?\n┆ᴇsᴄʀɪʙɪ *${usedPrefix + command} Nombre.Años*\n╰──────•◈•───────╯`,
  footer: global.wm,
  title: "╭──────• ʀᴇɢɪsᴛʀᴏ •──────╮",
  buttonText: "Pulsa Aqui!",
  sections
}

  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `✳️ʏᴀ ᴇsᴛᴀ ʀᴇɢɪsᴛʀᴀᴅᴏ(ᴀ)!!\nsɪ ǫᴜɪᴇʀᴇ ᴀɴᴜʟᴀʀ sᴜ ʀᴇɢɪsᴛʀᴏ ᴜsᴇ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ\n*${usedPrefix}unreg numero de serie*\nsɪ ɴᴏ ʀᴇᴄᴜᴇʀᴅᴀ sᴜ ɴᴜᴍᴇʀᴏ ᴅᴇ sᴇʀɪᴇ ᴜsᴇ ᴇsᴛᴇ ᴄᴏᴍᴀɴᴅᴏ\n*${usedPrefix}myns*`
  if (!Reg.test(text)) return conn.sendMessage(m.chat, listMessage, m)
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'El nombre no puede esta vacio'
  if (!age) throw 'La edad no puede esta vacia (Numeros)'
  age = parseInt(age)
  if (age > 100) throw 'Que viejo (。-`ω´-)'
  if (age < 5) throw '🚼  Basado, los bebes saber escribir.✍️😳'
  if (name.length >= 30) throw '🐈 Fua que basado, el nombre es muy largo que quiere un puente como nombre😹' 
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? conn.user.jid : m.sender
global.db.data.users[m.sender].limit += 5
global.db.data.users[m.sender].exp += 400
  let caption = `┏──━∞ *ʀᴇɢɪsᴛʀᴀᴅᴏ* ∞─━─┓
┃ *ɴᴏᴍʙʀᴇ* 
┃➠ ${name}
┃• • • • • • • • • • • • • • • • • • •
┃ *ᴇᴅᴀᴅ*
┃➠ ${age} años
┃• • • • • • • • • • • • • • • • • • •
┃ *ɴᴜᴍᴇʀᴏ ᴅᴇ sᴇʀɪᴇ*
┃➠ ${sn}
┗─━─━─━∞◆∞━─━─━─┛`
//let author = global.author
await conn.sendButton(m.chat, caption, `ᴛᴜ ɴᴜᴍᴇʀᴏ ᴅᴇ sᴇʀɪᴇ ᴛᴇ sᴇʀᴠɪʀᴀ ᴇɴ ᴄᴀsᴏ ǫᴜᴇ ǫᴜɪᴇʀᴀ ʙᴏʀʀᴀʀ sᴜ ʀᴇɢɪsᴛʀᴏ\nᴇᴊᴇᴍᴘʟᴏ ${usedPrefix}unreg ɴᴜᴍᴇʀᴏ ᴅᴇ sᴇʀɪᴇ\n${wm}`, [['ᴠᴇʀɪғᴀᴄᴀᴅᴏ(ᴀ)!! ✅', '/profile']], m)
await m.reply(`${sn}`) 
}
handler.help = ['daftar', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['rg']

handler.command = /^(verify|verificar|reg(ister)?)$/i

export default handler