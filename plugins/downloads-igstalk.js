
import fg from 'api-dylux'
let handler= async (m, { conn, args, text, usedPrefix, command }) => {
	
    if (!args[0]) throw `โณ๏ธ Ingrese el Username de Instagram\n\n๐Ejemplo: ${usedPrefix + command} fg98_ff` 
    let res = await fg.igStalk(args[0])
    let te = `
โญโโโโโโโชโซโโโโโโโฎ
โ โก  *STALKING* 
โโโโโโโยซโขยปโโโโโโ
โ๐ธ *๐Nombre:* ${res.name} 
โ๐ธ *๐Username:* ${res.username}
โ๐ธ *๐ฅSeguidores:* ${res.followersH}
โ๐ธ *๐ซSiguiendo:* ${res.followingH}
โ๐ธ *๐Bio:* ${res.description}
โ๐ธ *๐๏ธPosts:* ${res.postsH}
โโโโโโโยซโขยปโโโโโโ
โ๐ธ *๐ Link* : https://instagram.com/${res.username.replace(/^@/, '')}
โฐโโโโโโโชโซโโโโโโโฏ`

     await conn.sendFile(m.chat, res.profilePic, 'tt.png', te, m)
     
}
handler.help = ['igstalk']
handler.tags = ['downloader']
handler.command = ['igstalk'] 
handler.register = true

export default handler
