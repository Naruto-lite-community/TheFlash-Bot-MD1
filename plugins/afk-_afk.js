//import db from '../lib/database.js'

export function before(m) {
    let user = global.db.data.users[m.sender]
    if (user.afk > -1) {
        m.reply(`
✅ لقد توقفت عن كونك غير متواجد
${user.afkReason ? ' \n▢ السبب : ' + user.afkReason : ''}
▢ مدة الغياب : ${(new Date - user.afk).toTimeString()}
        `.trim())
        user.afk = -1
        user.afkReason = ''
    }
    let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
    for (let jid of jids) {
        let user = global.db.data.users[jid]
        if (!user)
            continue
        let afkTime = user.afk
        if (!afkTime || afkTime < 0)
            continue
        let reason = user.afkReason || ''
        m.reply(`
💤 المستخدم الذي تمت الإشارة إليه غير متواجد

${reason ? '▢ السبب : ' + reason : '▢ السبب : بدون سبب'}
▢ مدة الغياب : ${(new Date - afkTime).toTimeString()}
        `.trim())
    }
    return true
}
