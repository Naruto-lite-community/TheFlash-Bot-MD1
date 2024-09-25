import axios from 'axios'
import cheerio from 'cheerio'

let handler = async (m, { text }) => {
  if (!text) throw `يرجى إدخال ما ترغب في البحث عنه في ويكيبيديا`
  
  try {
    const link = await axios.get(`https://ar.wikipedia.org/wiki/${encodeURIComponent(text)}`)
    const $ = cheerio.load(link.data)
    let wik = $('#firstHeading').text().trim()
    let resulw = $('#mw-content-text > div.mw-parser-output').find('p').text().trim()
    m.reply(`▢ *ويكيبيديا*

‣ البحث: ${wik}

${resulw}`)
  } catch (e) {
    m.reply('⚠️ لم يتم العثور على نتائج')
  }
}
handler.help = ['wikipedia']
handler.tags = ['tools']
handler.command = ['wiki', 'ويكي','ويكيبيديا']

export default handler
