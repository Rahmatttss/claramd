import axios from 'axios'
import { Sticker, StickerTypes } from 'wa-sticker-formatter'

let handler = async(m, { conn, args, text }) => {
var arr = ["atas", "bawah"]
if (!arr.includes(args[0])) throw "Pilih Atas Atau Bawah?"
var terbang = arr.getRandom()
var res
var pesan
var stiker
var MiliSecond = 3000 //1 second

let coins = parseInt(Math.floor(Math.random() * 1000))
let exp = parseInt(Math.floor(Math.random() * 1000))
let player = global.db.data.users[m.sender]

    if (terbang == "atas") {
        res = "https://cdn-icons-png.flaticon.com/512/1490/1490832.png"
        stiker = await createSticker(false, res, "Clara-MD", "Xyroine", 30)
    m.reply(stiker)
    
     pesan = `*[ Menang ]*

Kamu Mendapatkan:
${new Intl.NumberFormat('en-US').format(coins)} Koin
${new Intl.NumberFormat('en-US').format(exp)} XP
`

setTimeout(function() {
 conn.reply(m.chat, pesan, m)
}, MiliSecond)

    player.koin += coins * 1
    player.exp += exp * 1
    } else if (terbang == "bawah") {
        res = "https://cdn-icons-png.flaticon.com/512/4315/4315581.png"
        stiker = await createSticker(false, res, "Clara-MD", "Xyroine", 30)
    m.reply(stiker)
    
   pesan = `*[ Kalah ]*

Kamu Kehilangan::
${new Intl.NumberFormat('en-US').format(coins)} Koin
${new Intl.NumberFormat('en-US').format(exp)} XP
`
setTimeout(function() {
 conn.reply(m.chat, pesan, m)
}, MiliSecond)

    player.koin -= coins * 1
    player.exp -= exp * 1
    }
}
handler.help = ["putarkoin"]
handler.tags = ["game"]
handler.command = /^(putarkoin)$/i
export default handler

async function createSticker(img, url, packName, authorName, quality) {
    let stickerMetadata = {
        type: 'full',
        pack: packName,
        author: authorName,
        quality
    }
    return (new Sticker(img ? img : url, stickerMetadata)).toBuffer()
}