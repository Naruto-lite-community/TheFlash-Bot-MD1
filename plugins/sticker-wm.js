import { addExif } from '../lib/sticker.js'
let handler = async (m, { conn, text }) => {
if (!m.quoted) throw '╰⊱❗️⊱ *اعمل تاج لي الملصق الي عايز تسرقه يا حرامي 🗿* ⊱❗️⊱╮'
let stiker = false
try {
let [packname, ...author] = text.split('|')
author = (author || []).join('|')
let mime = m.quoted.mimetype || ''
if (!/webp/.test(mime)) throw '╰⊱❗️⊱ *اعمل تاج لي الملصق الي عايز تسرقه يا حرامي 🗿* ⊱❗️⊱╮'
let img = await m.quoted.download()
if (!img) throw '╰⊱❗️⊱ *اعمل تاج لي الملصق الي عايز تسرقه يا حرامي 🗿* ⊱❗️⊱╮'
stiker = await addExif(img, packname || '', author || '')
} catch (e) {
console.error(e)
if (Buffer.isBuffer(e)) stiker = e
} finally {
if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: wm, body: `𝐇𝐚𝐫𝐥𝐞𝐲 𝐥𝐢𝐠𝐡𝐭`, mediaType: 2, sourceUrl: canal1, thumbnail: imagen1}}}, { quoted: m })
else throw '╰⊱❗️⊱ *الامر واقف يابن الفقرية 🗿* ⊱❗️⊱╮'
}}
handler.help = ['wm <packname>|<author>']
handler.tags = ['sticker']
handler.command = /^سرقة|wm$/i
export default handler
