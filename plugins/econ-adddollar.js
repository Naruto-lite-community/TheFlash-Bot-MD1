let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw '✳️ من فضلك قم بعمل تاج للمستخدم'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) throw '✳️ قم بإدخال الكمية المراد إضافتها من *الدولارات*'
    if (isNaN(txt)) throw '🔢 فقط الأرقام مسموح بها'
    let dmt = parseInt(txt)
    let diamond = dmt

    if (diamond < 1) throw '✳️ الحد الأدنى *1*'
    let users = global.db.data.users
    users[who].dollar += dmt

    await m.reply(`≡ *تمت الإضافة بنجاح*
┌──────────────
▢ *الإجمالي:* ${dmt}
└──────────────`)
    conn.fakeReply(m.chat, `▢ هل تلقيت \n\n *+${dmt}* الدولارات؟`, who, m.text)
}

handler.help = ['addgold <@مستخدم>']
handler.tags = ['اقتصاد']
handler.command = ['دولار+'] 
handler.rowner = true

export default handler
