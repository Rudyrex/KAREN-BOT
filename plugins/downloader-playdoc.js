import { youtubeSearch } from '@bochilteam/scraper'
import fetch from 'node-fetch'
let handler = async (m, { conn, command, text, usedPrefix }) => {
if (!text) throw `Que esta buscado? ingrese el titulo de la canciΓ³n\n\n*ββ Ejemplo:*\n*${usedPrefix + command} bad bunny*`
try {
let vid = (await youtubeSearch(text)).video[0]
let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
const urll = 'https://www.youtube.com/watch?v=' + videoId
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]
const buttons = [
{ buttonId: `#ytmp3doc ${urll}`, buttonText: { displayText: 'π΅ ππππππππ π΅' }, type: 1 },
{ buttonId: `#ytmp4doc ${urll}`, buttonText: { displayText: 'π₯ ππππππππ π₯' }, type: 1 },
{ buttonId: `#playlist ${text}`, buttonText: { displayText: 'π πππ ππππππππππ π' }, type: 1 }, ] 
m.react('π§')
let texto1 = `β­ββββͺ~*ββα°±β’β’β’ββπ α΄Κα΄Κ α΄α΄α΄α΄α΄α΄Ι΄α΄ πββ’β’β’α°±ββ*~*
ββ πΈοΈπ *α΄Ιͺα΄α΄Κα΄:* ${title}
ββ πΈοΈπ *α΄α΄ΚΚΙͺα΄α΄α΄α΄:* ${publishedTime}
ββ πΈοΈβ *α΄α΄Κα΄α΄Ιͺα΄Ι΄:* ${durationH}
ββ πΈοΈπ *α΄ Ιͺsα΄α΄s:* ${viewH}
ββ πΈοΈπ *α΄α΄sα΄ΚΙͺα΄α΄Ιͺα΄Ι΄:* ${description}
ββ πΈοΈπ *ΚΙͺΙ΄α΄:* ${urll}
ββ
ββΒ Β Β Β Β Β Β  *βββββββββββββ%100*
β°ββ’ββββ’β’β’β¦πβ³β¦β’β’β’ββββ’ββ―β€`.trim()
let buttonMessage = { "document": { url: "https://wa.me/5219992095479" }, "fileName": 'β πΏ Κα΄α΄Κα΄α΄α΄α΄α΄α΄Κ α΄α΄ Κα΄α΄α΄α΄Κα΄', "mimetype": 'application/vnd.ms-excel', "caption": texto1, "fileLength": '99999999999999', "mentions": [m.sender], "footer": wm, "buttons": buttons, "headerType": 4, contextInfo: { "mentionedJid": [m.sender], "externalAdReply": { "showAdAttribution": true, "title": `${title}`, "mediaType": 2, "previewType": "VIDEO", "thumbnail": await (await fetch(thumbnail)).buffer(), "mediaUrl": `${urll}`, "sourceUrl": `https://github.com/BrunoSobrino/TheMystic-Bot-MD` }}} 
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
} catch {
try {  
let vid2 = await (await fetch(`https://api.lolhuman.xyz/api/ytsearch?apikey=${lolkeysapi}&query=${text}`)).json()
let { videoId, title, views, published, thumbnail } = await vid2.result[0]
const url = 'https://www.youtube.com/watch?v=' + videoId
let ytLink = await fetch(`https://api.lolhuman.xyz/api/ytplay2?apikey=${lolkeysapi}&query=${text}`)
let jsonn = await ytLink.json()
let aud = await jsonn.result.audio
let capt = `β­ββββͺ~*ββα°±β’β’β’ββ¨ΝΝPΝΝΜΈLΝΜΈAΝΝΜΈYΝΝΜΈβ©ββ’β’β’α°±ββ*~*\nββ πΈοΈ π *α΄Ιͺα΄α΄Κα΄:* ${title}\nββ πΈπ *α΄α΄ΚΚΙͺα΄α΄α΄α΄:* ${published}\nββ πΈπ *α΄ Ιͺsα΄α΄s:* ${views}\nββ πΈπ *ΚΙͺΙ΄α΄:* ${url}\nββ\nββΒ Β Β Β Β Β Β  *βββββββββββββ%100*\nβ°ββ’ββββ’β’β’β¦πβ³β¦β’β’β’ββββ’ββ―β€`
const buttons = [{buttonId: `#playlist ${title}`, buttonText: {displayText: 'π πππ ππππππππππ π'}, type: 1}]
const buttonMessage = { image: {url: thumbnail}, caption: capt, footer: '*α΄Ι΄α΄ Ιͺα΄Ι΄α΄α΄ α΄α΄α΄Ιͺα΄, α΄Ι’α΄α΄Κα΄α΄ α΄Ι΄ α΄α΄α΄α΄Ι΄α΄α΄...*', buttons: buttons, headerType: 4 }
let msg = await conn.sendMessage(m.chat, buttonMessage, { quoted: m })
conn.sendMessage(m.chat, { document: { url: aud }, mimetype: 'audio/mpeg', fileName: `${title}.mp3`}, {quoted: msg})
} catch {  
throw '*[βππππβ] π΄πππΎπ, πΏπΎπ π΅π°ππΎπ πππ΄π»ππ° π° πΈπ½ππ΄π½ππ°ππ»πΎ*'}}}
handler.help = ['playdoc', 'play3'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play3|playdoc?$/i
handler.register = true
export default handler
