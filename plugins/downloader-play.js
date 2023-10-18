import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
  if (!text) throw `Judulnya?`
  m.reply(wait)
  try {
  let satu = await fetch(`https://api.xyroinee.xyz/api/search/soundcloud?q=${text}&apikey=${global.xyro}`)
  let aanu = await satu.json()
  let anu = aanu.data.getRandom()
  let dua = await fetch(`https://api.xyroinee.xyz/api/downloader/soundcloud?url=${anu.link}&apikey=${global.xyro}`)
  let json = await dua.json()
  let { title, duration, quality, thumbnail, download } = json.data
  await conn.sendFile(m.chat, thumbnail, 'oh.jpg', `Title: ${title}
Duration: ${duration}
Quality: ${quality}
`, m)
 await conn.sendFile(m.chat, download, '', m)
  } catch (e) {
  m.reply(`Terjadi Kesalahan Saat Mengambil Data`)
  }
}
handler.help = ['play']
handler.tags = ['downloader']
handler.command = /^(play)$/i
handler.limit = true

export default handler
