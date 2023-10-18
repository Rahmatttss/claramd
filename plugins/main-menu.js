import speed from 'performance-now'
import { spawn, exec, execSync } from 'child_process'
import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
const { generateWAMessageFromContent, proto } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()
  let user = db.data.users[m.sender]
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let pp = 'https://telegra.ph/file/a9e9ba5e70cd4cc77c2eb.jpg'
  let { premium, level, limit, exp, udahklaim, daftar, regTime, umur, pasangan, koin, role } = global.db.data.users[m.sender]
  let username = conn.getName(who)
  let name = conn.getName(who)
  const chats = Object.keys(await conn.chats)
  const groups = Object.keys(await conn.groupFetchAllParticipating())
  const block = await conn.fetchBlocklist()
  const more = String.fromCharCode(8206)
  const readmore = more.repeat(4001)
  let timestamp = speed();
  let latensi = speed() - timestamp;
let awal = `╔┈┈┈┈「 *Informasi User* 」
╎╭─────────✧
╎│• *Nama:* _${daftar ? name : ''}_
╎│• *Nomor:* _${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}_
╎│• *Umur:* ${daftar ? umur : ''} _Tahun_
╎│• *Pasangan:*  ${pasangan ? `_@${pasangan.split("@")[0]}_` : `_Tidak Punya_`}
╎│• *Premium:* ${premium ? "_Aktif_" :"_Tidak_"}
╎│• *Limit Tersisa:* _${limit}_
╎│• *Koin Tersisa:* _${koin}_
╎│• *Level Saat Ini:* _${level}_
╎│• *Role Saat Ini:* _${role}_
╎╰─────────────✧
╠┈┈┈┈「 *Informasi System* 」
╎╭──────────✧
╎│• *${groups.length}* _Grup Bergabung_
╎│• *${chats.length - groups.length}* _Chat Pribadi_
╎│• *${Object.keys(global.db.data.users).length}*  _Pengguna Bot_
╎│• *${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}* _Chat Terbanned_
╎│• *${Object.entries(global.db.data.users).filter(user => user[1].banned).length}* _User Terbanned_
╎│• *${latensi.toFixed(4)}-ms* _Kecepatan Respon_
╎╰─────────────✧
╠┈┈┈┈「 *List Menu Michika* 」
╎╭──────────✧
╎│• *Allmenu*
╎│• *Menu AI*
╎│• *Menu Anime*
╎│• *Menu Download*
╎│• *Menu Internet*
╎│• *Menu Tools*
╎│• *Menu Maker*
╎│• *Menu Random*
╎│• *Menu Group*
╎│• *Menu Game*
╎│• *Menu Sticker*
╎│• *Menu Owner*
╎│• *Menu Main*
╎╰────────────✧
╚┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧`
let ai = `❏ *Name:* Michika 
❏ *Mode:* Public
❏ *Platform:* Linux
❏ *Type:* Node.Js
❏ *Library:* Baileys
❏ *Prefix:* Multi
❏ *Database:* ${Object.keys(global.db.data.users).length} User
${readmore}
╔┈┈「 *AI* 」
╎ぎ .animedif
╎ぎ .beauty
╎ぎ .carbon
╎ぎ .differentme
╎ぎ .diffusion
╎ぎ .hairstyle
╎ぎ .ai
╎ぎ .remini
╎ぎ .color
╎ぎ .hdr
╎ぎ .toanime
╎ぎ .txt2img
╎ぎ .blur
╎ぎ .ocr
╎ぎ .voicevox
╚┈┈┈┈┈┈┈┈┈❖`
let anim = `❏ *Name:* Michika 
❏ *Mode:* Public
❏ *Platform:* Linux
❏ *Type:* Node.Js
❏ *Library:* Baileys
❏ *Prefix:* Multi
❏ *Database:* ${Object.keys(global.db.data.users).length} User
${readmore}
╔┈┈「 *Animanga* 」
╎ぎ .amv
╎ぎ .animeinfo
╎ぎ .charainfo
╎ぎ .doujinsearch
╎ぎ .doujindetail
╎ぎ .doujinlatest
╎ぎ .komikusearch
╎ぎ .komikudetail
╎ぎ .komikulatest
╎ぎ .mangainfo
╎ぎ .mangatoons
╎ぎ .nhentaisearch
╎ぎ .nhentaidetail
╎ぎ .otakusearch
╎ぎ .otakudetail
╎ぎ .otakulatest
╎ぎ .storyanime
╎ぎ .whatanime
╚┈┈┈┈┈┈┈┈┈❖`
let search = `❏ *Name:* Michika 
❏ *Mode:* Public
❏ *Platform:* Linux
❏ *Type:* Node.Js
❏ *Library:* Baileys
❏ *Prefix:* Multi
❏ *Database:* ${Object.keys(global.db.data.users).length} User
${readmore}
╔┈┈「 *Internet* 」
╎ぎ .artic
╎ぎ .bukalapak
╎ぎ .charagi
╎ぎ .cuaca
╎ぎ .fetch
╎ぎ .get
╎ぎ .cekcodid
╎ぎ .cekffid
╎ぎ .cekmlid
╎ぎ .gempa
╎ぎ .githubsearch
╎ぎ .gimage
╎ぎ .githubstalk
╎ぎ .google
╎ぎ .heroml
╎ぎ .jadwalbola
╎ぎ .lk21search
╎ぎ .liriklagu
╎ぎ .modeldif
╎ぎ .pexels
╎ぎ .playstore
╎ぎ .soundsearch
╎ぎ .ssweb
╎ぎ .wattpad
╎ぎ .wikipedia
╎ぎ .wikimedia
╎ぎ .xnxxsearch
╎ぎ .monitor
╎ぎ .stalktelegram
╎ぎ .chord
╎ぎ .jadwaltv
╎ぎ .webcek
╎ぎ .jarak
╚┈┈┈┈┈┈┈┈┈❖`
let download = `❏ *Name:* Michika 
❏ *Mode:* Public
❏ *Platform:* Linux
❏ *Type:* Node.Js
❏ *Library:* Baileys
❏ *Prefix:* Multi
❏ *Database:* ${Object.keys(global.db.data.users).length} User
${readmore}
╔┈┈「 *Downloader* 」
╎ぎ .danbooru
╎ぎ .facebook
╎ぎ .gdrive
╎ぎ .gitclone
╎ぎ .instagram
╎ぎ .mediafire
╎ぎ .pinterest
╎ぎ .pixiv
╎ぎ .play
╎ぎ .ringtone
╎ぎ .sfile
╎ぎ .soundcloud
╎ぎ .tiktok
╎ぎ .twitter
╎ぎ .xnxxvideo
╎ぎ .ytmp3
╎ぎ .yts
╎ぎ .ytmp4
╚┈┈┈┈┈┈┈┈┈❖`
let tools = `❏ *Name:* Michika 
❏ *Mode:* Public
❏ *Platform:* Linux
❏ *Type:* Node.Js
❏ *Library:* Baileys
❏ *Prefix:* Multi
❏ *Database:* ${Object.keys(global.db.data.users).length} User
${readmore}
╔┈┈「 *Tools*」
╎ぎ .monitor
╎ぎ .smeme
╎ぎ .addvn
╎ぎ .addmsg
╎ぎ .addvideo
╎ぎ .addaudio
╎ぎ .addimg
╎ぎ .addstiker
╎ぎ .addgif
╎ぎ .delmsg
╎ぎ .all
╎ぎ .listdoc
╎ぎ .listvn
╎ぎ .listmsg
╎ぎ .listvideo
╎ぎ .listgif
╎ぎ .listaudio
╎ぎ .listimg
╎ぎ .liststicker
╎ぎ .qr
╎ぎ .qrcode
╎ぎ .react
╎ぎ .readmore
╎ぎ .spoiler
╎ぎ .readviewonce
╎ぎ .run
╎ぎ .wastalk
╎ぎ .style
╎ぎ .tomp3
╎ぎ .tovn
╎ぎ .upload
╎ぎ .translate
╎ぎ .tts
╎ぎ .encrypt
╚┈┈┈┈┈┈┈┈┈❖`
let maker = `❏ *Name:* Michika 
❏ *Mode:* Public
❏ *Platform:* Linux
❏ *Type:* Node.Js
❏ *Library:* Baileys
❏ *Prefix:* Multi
❏ *Database:* ${Object.keys(global.db.data.users).length} User
${readmore}
╔┈┈「 *Maker* 」
╎ぎ .filter
╎ぎ .bonk
╎ぎ .burn
╎ぎ .discordhouse
╎ぎ .glitch
╎ぎ .insta
╎ぎ .pesbuk
╎ぎ .kaneki
╎ぎ .loliggo
╎ぎ .nekosad
╎ぎ .nekosad
╎ぎ .sertitolol
╎ぎ .simpcard
╚┈┈┈┈┈┈┈┈┈❖`
let random = `❏ *Name:* Michika 
❏ *Mode:* Public
❏ *Platform:* Linux
❏ *Type:* Node.Js
❏ *Library:* Baileys
❏ *Prefix:* Multi
❏ *Database:* ${Object.keys(global.db.data.users).length} User
${readmore}
╔┈┈「 *Random* 」
╎ぎ .maid
╎ぎ .waifu
╎ぎ .marin-kitagawa
╎ぎ .mori-calliope
╎ぎ .raiden-shogun
╎ぎ .oppai
╎ぎ .selfies
╎ぎ .uniform
╎ぎ .ass
╎ぎ .hentai
╎ぎ .milf
╎ぎ .oral
╎ぎ .paizuri
╎ぎ .ecchi
╎ぎ .ero
╎ぎ .blackpink
╎ぎ .bocil
╎ぎ .bts
╎ぎ .china
╎ぎ .cosplay
╎ぎ .geayubi
╎ぎ .gensin
╎ぎ .hentai
╎ぎ .indonesia
╎ぎ .japan
╎ぎ .korea
╎ぎ .loli
╎ぎ .malaysia
╎ぎ .thailand
╎ぎ .vietnam
╚┈┈┈┈┈┈┈┈┈❖`
let group = `❏ *Name:* Michika 
❏ *Mode:* Public
❏ *Platform:* Linux
❏ *Type:* Node.Js
❏ *Library:* Baileys
❏ *Prefix:* Multi
❏ *Database:* ${Object.keys(global.db.data.users).length} User
${readmore}
╔┈┈「 *Group* 」
╎ぎ .enable
╎ぎ .disable
╎ぎ .cekid
╎ぎ .ceksewa
╎ぎ .delete
╎ぎ .demote
╎ぎ .hidetag
╎ぎ .infogrup
╎ぎ .linkgc
╎ぎ .promote
╎ぎ .revoke
╎ぎ .setbye
╎ぎ .setdesc
╎ぎ .sdesc
╎ぎ .setnamagc
╎ぎ .setppgc
╎ぎ .group
╎ぎ .setwelcome
╎ぎ .gcsider
╎ぎ .tagadmin
╎ぎ .tagall
╎ぎ .tagme
╎ぎ .cekpacar
╎ぎ .ikhlasin
╎ぎ .tembak
╎ぎ .putus
╎ぎ .terima
╎ぎ .tolak
╎ぎ .odemote
╎ぎ .getprofile
╚┈┈┈┈┈┈┈┈┈❖`
let game = `❏ *Name:* Michika 
❏ *Mode:* Public
❏ *Platform:* Linux
❏ *Type:* Node.Js
❏ *Library:* Baileys
❏ *Prefix:* Multi
❏ *Database:* ${Object.keys(global.db.data.users).length} User
${readmore}
╔┈┈「 *Games* 」
╎ぎ .caklontong
╎ぎ .family100
╎ぎ .iqtest
╎ぎ .math
╎ぎ .siapakahaku
╎ぎ .suit
╎ぎ .susunkata
╎ぎ .tebakanime
╎ぎ .tebakbendera
╎ぎ .tebakchara
╎ぎ .tebaksurah
╎ぎ .tekateki
╎ぎ .tebakkata
╎ぎ .tictactoe
╎ぎ .ttt
╎ぎ .judi
╎ぎ .casino
╎ぎ .putarkoin
╎ぎ .merampok
╎ぎ .petshop
╚┈┈┈┈┈┈┈┈┈❖`
let sticker = `❏ *Name:* Michika 
❏ *Mode:* Public
❏ *Platform:* Linux
❏ *Type:* Node.Js
❏ *Library:* Baileys
❏ *Prefix:* Multi
❏ *Database:* ${Object.keys(global.db.data.users).length} User
${readmore}
╔┈┈「 *Sticker* 」
╎ぎ .getexif
╎ぎ .qc
╎ぎ .sticker
╎ぎ .s
╎ぎ .toimg
╎ぎ .tovideo
╎ぎ .ttp2
╎ぎ .ttp
╎ぎ .wm
╚┈┈┈┈┈┈┈┈┈❖`
let owner = `❏ *Name:* Michika 
❏ *Mode:* Public
❏ *Platform:* Linux
❏ *Type:* Node.Js
❏ *Library:* Baileys
❏ *Prefix:* Multi
❏ *Database:* ${Object.keys(global.db.data.users).length} User
${readmore}
╔┈┈「 *Owner* 」
╎ぎ .enable
╎ぎ .disable
╎ぎ .add
╎ぎ .+
╎ぎ .addlimit
╎ぎ .addprem
╎ぎ .addsewa
╎ぎ .balas
╎ぎ .banchat
╎ぎ .ban
╎ぎ .bcchats
╎ぎ .bcgc
╎ぎ .block
╎ぎ .unblock
╎ぎ .cleartmp
╎ぎ .clearwin
╎ぎ .creategroup
╎ぎ .delprem
╎ぎ .delsewa
╎ぎ .deleteuser
╎ぎ .df
╎ぎ .getdb
╎ぎ .getfile
╎ぎ .getplugin
╎ぎ .gp
╎ぎ .join
╎ぎ .kick
╎ぎ .-
╎ぎ .leavegc
╎ぎ .out
╎ぎ .opromote
╎ぎ .setppbot
╎ぎ .saveplugin
╎ぎ .simulate
╎ぎ .unbanchat
╎ぎ .unban
╎ぎ .addstore
╎ぎ .delstore
╚┈┈┈┈┈┈┈┈┈❖`
const pre = generateWAMessageFromContent(m.chat, { liveLocationMessage:{
  degreesLatitude: 34.672314,
  degreesLongitude: 135.484802,
  accuracyInMeters: 100,
  speedInMps: 999,
  degreesClockwiseFromMagneticNorth: 99,
  caption: awal.trim(),
  sequenceNumber: 774236889,
  timeOffset: 8600,
  jpegThumbnail: await(await fetch(pp)).buffer(),
  contextInfo: { mentionedJid: [m.sender] }
}}, { quoted: m })

  try {
    if (/menu/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'ai':
            conn.sendMessage(m.chat, {
      text: ai,
      contextInfo: {
      externalAdReply: {
      title: `Rest-APIs Xyroinee`,
      body: global.author,
      thumbnailUrl: global.fotonya,
      sourceUrl: sgc,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
            break
            case 'anime':
            conn.sendMessage(m.chat, {
      text: anim,
      contextInfo: {
      externalAdReply: {
      title: `Rest-APIs Xyroinee`,
      body: global.author,
      thumbnailUrl: global.fotonya,
      sourceUrl: sgc,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
            break
            case 'internet':
            conn.sendMessage(m.chat, {
      text: search,
      contextInfo: {
      externalAdReply: {
      title: `Rest-APIs Xyroinee`,
      body: global.author,
      thumbnailUrl: global.fotonya,
      sourceUrl: sgc,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
            break
            case 'download':
            conn.sendMessage(m.chat, {
      text: download,
      contextInfo: {
      externalAdReply: {
      title: `Rest-APIs Xyroinee`,
      body: global.author,
      thumbnailUrl: global.fotonya,
      sourceUrl: sgc,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
            break
            case 'tools':
            conn.sendMessage(m.chat, {
      text: tools,
      contextInfo: {
      externalAdReply: {
      title: `Rest-APIs Xyroinee`,
      body: global.author,
      thumbnailUrl: global.fotonya,
      sourceUrl: sgc,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
            break
            case 'maker':
            conn.sendMessage(m.chat, {
      text: maker,
      contextInfo: {
      externalAdReply: {
      title: `Rest-APIs Xyroinee`,
      body: global.author,
      thumbnailUrl: global.fotonya,
      sourceUrl: sgc,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
            break
            case 'random':
            conn.sendMessage(m.chat, {
      text: random,
      contextInfo: {
      externalAdReply: {
      title: `Rest-APIs Xyroinee`,
      body: global.author,
      thumbnailUrl: global.fotonya,
      sourceUrl: sgc,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
            break
            case 'group':
            conn.sendMessage(m.chat, {
      text: group,
      contextInfo: {
      externalAdReply: {
      title: `Rest-APIs Xyroinee`,
      body: global.author,
      thumbnailUrl: global.fotonya,
      sourceUrl: sgc,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
            break
            case 'game':
            conn.sendMessage(m.chat, {
      text: game,
      contextInfo: {
      externalAdReply: {
      title: `Rest-APIs Xyroinee`,
      body: global.author,
      thumbnailUrl: global.fotonya,
      sourceUrl: sgc,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
            break
            case 'sticker':
            conn.sendMessage(m.chat, {
      text: sticker,
      contextInfo: {
      externalAdReply: {
      title: `Rest-APIs Xyroinee`,
      body: global.author,
      thumbnailUrl: global.fotonya,
      sourceUrl: sgc,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
            break
            case 'owner':
            conn.sendMessage(m.chat, {
      text: owner,
      contextInfo: {
      externalAdReply: {
      title: `Rest-APIs Xyroinee`,
      body: global.author,
      thumbnailUrl: global.fotonya,
      sourceUrl: sgc,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
            break
            case 'info':
            conn.sendMessage(m.chat, {
      text: info,
      contextInfo: {
      externalAdReply: {
      title: `Rest-APIs Xyroinee`,
      body: global.author,
      thumbnailUrl: global.fotonya,
      sourceUrl: sgc,
      mediaType: 1,
      renderLargerThumbnail: true
      }}})
            break
          default:
            return await conn.relayMessage(m.chat, pre.message, { messageId: pre.key.id })
        }
    } 
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(menu|help)/i

export default handler

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' *Hari* ', h, ' *Jam* ', m, ' *Menit* ', s, ' *Detik*'].map(v => v.toString().padStart(2, 0)).join('')
}