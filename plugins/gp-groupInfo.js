let handler = async (m, { conn, participants, groupMetadata }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './avatar_contact.png'
const { antiToxic, antiTraba, antiviewonce, isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, antiLink2, temporal, reaction, antiTelegram, antiFacebook, antiTiktok, antiYoutube, modohorny, antiTwitter, antiInstagram, stickers, autolevelup, autosticker, antitoxic, antibadword, antifake, modoadmin, audios, delete: del } = global.db.data.chats[m.chat]
const groupAdmins = participants.filter(p => p.admin)
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin
 === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
    let text = `
*┌──「 معلومات المجموعة 」*
*▢ ♻️المعرف:* ${groupMetadata.id}
*▢ 🔖الاسم* : ${groupMetadata.subject}
*▢ 👥الأعضاء* : ${participants.length}
*▢ 🤿مالك المجموعة:* 
*▢ @${owner.split('@')[0]}*
*└──────────────⊷*
*┌───⊷*
▢ *🕵🏻‍♂️المشرفون:*
${listAdmin}
*└──────────────⊷*
*┌───⊷*
*▢ 🪢إعدادات المجموعة:*
*•↲ welcome : ${welcome ? '✅' : '❌'} الترحيب*
*•↲ detect : ${detect ? '✅' : '❌'} مُكتَشَف*
*•↲ autolevelup : ${global.db.data.users[m.sender].autolevelup ? '✅' : '❌'} لفل تلقائي*
*•↲ restrict : ${global.db.data.settings[conn.user.jid].restrict ? '✅' : '❌'} الطرد والاضافه*
*•↲ modoadmin : ${modoadmin ? '✅' : '❌'} الادارة*
*•↲ antibadword : ${antibadword ? '✅' : '❌'} انتي شتم*
*•↲ antitoxic : ${antitoxic ? '✅' : '❌'} انتي توكسيك*
*•↲ antiTraba : ${antiTraba ? '✅' : '❌'} انتي فايرس*
*•↲ autosticker : ${autosticker ? '✅' : '❌'} اوتو استيكر*
*•↲ stickers : ${stickers ? '✅' : '❌'} الاستيكرات*
*•↲ reaction : ${reaction ? '✅' : '❌'} الرياكشن*
*•↲ audios : ${audios ? '✅' : '❌'} الصوت*
*•↲ antifake : ${antifake ? '✅' : '❌'} انتي فيك*
*•↲ antiviewonce : ${antiviewonce ? '✅' : '❌'} مضاد المشاهده*
*•↲ delete : ${global.db.data.chats[m.chat].delete ? '✅' : '❌'} مضاد الحذف*
*•↲ antiLink : ${antiLink ? '✅' : '❌'} انتي لينك*
*•↲ antiLink : ${antiLink2 ? '✅' : '❌'} انتي لينك2*
*•↲ antiTiktok : ${antiTiktok ? '✅' : '❌'} انتي تيكتوك*
*•↲ antiYoutube : ${antiYoutube ? '✅' : '❌'} انتي يوتيوب*
*•↲ antiTelegram : ${antiTelegram ? '✅' : '❌'} انتي تليجرام*
*•↲ antiFacebook : ${antiFacebook ? '✅' : '❌'} انتي فيسبوك*
*•↲ antiTwitter : ${antiTwitter ? '✅' : '❌'} انتي تويتر*
*•↲ antiInstagram : ${antiInstagram ? '✅' : '❌'} انتي انستغرام*
*└──────────────⊷*
*┌───⊷*
*▢  📬إعدادات الرسائل:*
*• الترحيب:* ${sWelcome}
*• وداعاً:* ${sBye}
*• ترقية:* ${sPromote}
*• تخفيض:* ${sDemote}
*└──────────────⊷*
*┌───⊷*
*▢ 📌الوصف :*
   • ${groupMetadata.desc?.toString() || 'غير معروف'}
*└──────────────⊷*`.trim()
    conn.sendFile(m.chat, pp, 'pp.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}

handler.help = ['infogp']
handler.tags = ['group']
handler.command = ['قروبي','infogroup', 'groupinfo', 'infogp','جروبي'] 
handler.group = true
handler.admin = true

export default handler
