
let handler = async (m, { conn, args, text, usedPrefix, command }) => {
	 
   let tee = `β³οΈ πΈππππππ ππ πππ‘ππ πππππ\n\nπ π΄πΉπ΄πΌπΏπ»πΎ  : *${usedPrefix + command}* hola`
   let too = `β³οΈ  ππππππ π΄π» πππ‘ππ πππ ππ  *+* \n\nπ π΄πΉπ΄πΌπΏπ»πΎ : \n*${usedPrefix + command}* Nova *+* Bot`
    m.react(rwait)
let type = (command).toLowerCase()
switch (type) {
	
	case 'logololi':
	if (!text) throw tee 
	let img = global.API('fgmods', '/api/lolimaker', { text }, 'apikey')
	conn.sendFile(m.chat, img, 'logo.png', `β ππ΄πππ»ππ°π³πΎ`, m)
	m.react(done)
	break 
	case 'neon': 
	if (!text) throw tee
	let ne = global.API('fgmods', '/api/textpro/neon', { text }, 'apikey')
	conn.sendFile(m.chat, ne, 'logo.png', `β ππ΄πππ»ππ°π³πΎ`, m)
	m.react(done)
	break 
	case 'devil': 
	if (!text) throw tee
	let de = global.API('fgmods', '/api/textpro/devil', { text }, 'apikey')
	conn.sendFile(m.chat, de, 'logo.png', `β ππ΄πππ»ππ°π³πΎ`, m)
	m.react(done)
	break 
	case 'wolf': 
   if (!text) throw tee
   let wo = global.API('fgmods', '/api/textpro/logowolf2', { text: 'FG98', text2: text}, 'apikey')
	conn.sendFile(m.chat, wo, 'logo.png', `β ππ΄πππ»ππ°π³πΎ`, m)
	m.react(done)
	break 
	case 'phlogo': 
	if (!text) throw too
	if (!text.includes('+')) throw too  
	let [a, b] = text.split`+`   
	let ph = global.API('fgmods', '/api/textpro/pornhub', { text: a, text2: b}, 'apikey')
	conn.sendFile(m.chat, ph, 'logo.png', `β ππ΄πππ»ππ°π³πΎ`, m)
	m.react(done)
	break 
	default:
} 
} 
handler.help = ['logololi', 'neon', 'devil', 'wolf', 'phlogo']
handler.tags = ['maker']
handler.command = /^(logololi|neon|devil|wolf|phlogo)$/i
handler.diamond = true
handler.register = true
export default handler
