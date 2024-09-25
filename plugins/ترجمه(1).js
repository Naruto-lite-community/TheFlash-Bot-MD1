import translate from '@vitalets/google-translate-api'
const defaultLang = 'ar'
const tld = 'cn'

let handler = async (m, { args, usedPrefix, command }) => {
    let err = `
╮ ── ⋆⋆ ── ⋆⋆ ── ⋆⋆ ── ⋆⋆ ── ⋆⋆ ── ⋆⋆ ╭ـ
˼🤖˹┆ الـاسـم┆⌟𝐅𝐋𝐀𝐒𝐇⌜
˼🤖˹┆ مثال┆⌟ .ترجم hello pro⌜
╯ ── ⋆⋆ ── ⋆⋆ ── ⋆⋆ ── ⋆⋆ ── ⋆⋆ ── ⋆⋆ ╰ـ
> ˼👻˹ مــلـاحـــظـــة ⇅ ↶
╮ ── ⋆⋆ ── ⋆⋆ ── ⋆⋆ ── ⋆⋆ ── ⋆⋆ ── ⋆⋆ ╭ـ
> تابع قناة البوت يا برو 👽👇🏻
https://whatsapp.com/channel/0029VaoUBmSKmCPIIiEatx1H
╯ ── ⋆⋆ ── ⋆⋆ ── ⋆⋆ ── ⋆⋆ ── ⋆⋆ ── ⋆⋆ ╰ـ
> 𝐅𝐋𝐀𝐒𝐇﹝⚡﹞𝐁𝐎𝐓 © 𝐁𝐘 𝐍𝐀𝐑𝐔𝐓𝐎&𝐙𝐀𝐂𝐊`.trim()

    let lang = args[0]
    let text = args.slice(1).join(' ')
    if ((args[0] || '').length !== 2) {
        lang = defaultLang
        text = args.join(' ')
    }
    if (!text && m.quoted && m.quoted.text) text = m.quoted.text

    try {
       let result = await translate(text, { to: lang, autoCorrect: true }).catch(_ => null) 
       m.reply(result.text)
    } catch (e) {
        throw err
    } 

}
handler.help = ['trad <leng> <text>']
handler.tags = ['tools']
handler.command = ['tl', 'ترجم']

export default handler
