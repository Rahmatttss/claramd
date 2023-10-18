//Sc by Xyro base Clara MD
//Di Tulis Ulang VynaChan
//Buat lu semua yang jual sc ini gua ga bakal share lagi!

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['6282275937345', 'Noxxa', true], //Ganti aja
['6281263843003', 'Maxx', true],
['6282275937345', 'Noxxa', true],   
['6281263843003', 'Maxx', true]
]    
    
global.admiralcontroller = [
['62878377037268', 'fauzii', true],
['6282275937345', 'maxx', true],
['6283152615606', 'malixx', true]
]

// Apikey
global.xyro = 'j9XFN6zChx'
// Catatan : Jika Mau Work Fiturnya
// Masukan Apikeymu
// Gapunya Apikey? Ya Daftar
// Website: https://api.xyroinee.xyz
// Daftar Ke Website Tersebut Untuk
// Mendapatkan Apikey Kamu
global.APIs = {
    xyro: "https://api.xyroinee.xyz",
}

/*Apikey*/
global.APIKeys = {
    "https://api.xyroinee.xyz": "j9XFN6zChx",
}


global.mods = ['62878377037268']
global.prems = []
// Info
global.nomorwa = '6282275937345' //Ganti
global.packname = '© NoxxaXBot'
global.author = 'Made by Noxxa'
global.namebot = 'NoxxaBotz-MD'
global.wm = '© Noxxa X Maxx'
global.stickpack = 'Dibuat Oleh NoxxaBotz-MD'
global.stickauth = 'ig : @axlfauzixy\nwa.me/6282275937345'
// Link Sosmed
global.sig = 'https://instagram.com/_xwby_?igshid=ZDc4ODBmNjlmNQ=='
global.sgh = 'https://github.com/Ajabsbshsisi'
global.sgc = 'https://chat.whatsapp.com/IYO6BgsJpZeLYpASduZuPM'
// Donasi
global.pdana = '-'
global.pgopay = '-'
global.povo = '-'
// Info
global.wait = '⏳ Proses...'
global.eror = 'Maaf Fitur Sedang Eror! Silahkan Cobalagi nanti'
global.multiplier = 69 
// Apikey
let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})