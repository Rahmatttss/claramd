let handler = async (m, { conn, command, text, args }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag Orangnya Sayang'
    let users = global.db.data.users
    users[who].koin += 9999
    conn.reply(m.chat, 'Sukses Ayang!', m)
}
handler.help = ['addkoin']
handler.tags = ['owner']
handler.command = /^addkoin(user)?$/i
handler.rowner = true

export default handler