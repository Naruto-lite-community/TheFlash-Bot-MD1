let handler = async (m, {conn, usedPrefix}) => {

    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let user = global.db.data.users[who]
    let username = conn.getName(who)
    if (!(who in global.db.data.users)) throw `✳️ المستخدم غير موجود في قاعدة بياناتي`

    var wealth = '*مفلس😭*'
    if (`${user.bank}` <= 3000) {
        wealth = '*فقير 😞*'
    } else if (`${user.bank}` <= 6000) {
        wealth = '*👔 موظف حكومي*'
    } else if (`${user.bank}` <= 100000) {
        wealth = '*رجل اعمال 🤴🏼*'
    } else if (`${user.bank}` <= 1000000) {
        wealth = '*غني💸*'
    } else if (`${user.bank}` <= 10000000) {
        wealth = '*مليونير🤑💵*'
    } else if (`${user.bank}` <= 1000000000) {
        wealth = '*ملياردير💰*'
    }

    conn.reply(m.chat, `> ˼🏦˹ الــــبــــنــــك╿↶
╮──────────────────⟢ـ
┇〉🔮↜ ${username}
┇〉💵↜ دولار: ${user.bank}
┇〉💰↜ ثروة: ${wealth}
╯──────────────────⟢ـ
˼📜˹ نصائح╿↶
~اكتب~ " .محفظة "
> ⏎ عشان تعرف معك كم دولار
~اكتب~ " .إيداع " 
> ⏎ لإيداع دولارات إلى البنك
~اكتب~ " .سحب " 
> ⏎ لسحب دولارات من البنك

`, m, { mentions: [who] })
}

handler.help = ['bank']
handler.tags = ['economy']
handler.command = ['البنك', 'بنك']

export default handler
