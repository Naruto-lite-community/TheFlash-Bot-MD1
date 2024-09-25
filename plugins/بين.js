import { pinterest } from '@bochilteam/scraper'

let handler = async(m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `✳️ ما هي الصورة التي تريدني أن أبحث عنها؟\n\n📌 مثال  : ${usedPrefix + command} ناروتو`
  const json = await pinterest(text)
  conn.sendFile(m.chat, json.getRandom(), 'pinterest.jpg', `
*▢  بينتريست:*  ${text}
`.trim(), m)
}
handler.help = ['pinterest']
handler.tags = ['img']
handler.command = ['بين'] 

export default handler
