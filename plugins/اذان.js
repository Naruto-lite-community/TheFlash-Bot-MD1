import fetch from "node-fetch"
import cheerio from "cheerio"

let handler = async (m, {
    text,
    usedPrefix,
    command
}) => {
if (!text) throw `ضع اسم دولتك بي الإنجليزية مثال: \n ${usedPrefix + command} egypt`
    try {
            let res = await fetchPrayerTimes(text)
            m.reply(`${Object.entries(res).map(([name, data]) => `صلاة *${name}* : ${data}`).join('\n').trim()}`.trim())
        } catch (e) {
            m.reply(eror)
        }
}
handler.help = ['adhan']
handler.tags = ['islam']
handler.command = /^(اذان|أذان|الاذان|الأذان)$/i
export default handler

async function fetchPrayerTimes(q) {
  const url = 'https://athantime.me/' + q; // Ganti URL_HALAMAN_ADZAN dengan URL halaman web yang berisi informasi jadwal waktu adzan

  try {
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);

    const prayerTimes = {
      تاريخ: $('b:contains("الأربعاء")').text().trim(), // Mengambil informasi tanggal adzan saat ini
      الفجر: $('td:contains("موعد اذان الفجر")').next().text().trim(), // Mengambil waktu adzan Fajr
      الضهر: $('td:contains("موعد اذان الظهر")').next().text().trim(), // Mengambil waktu adzan Dhuhr
      العصر: $('td:contains("موعد اذان العصر")').next().text().trim(), // Mengambil waktu adzan Asr
      المغرب: $('td:contains("موعد اذان المغرب")').next().text().trim(), // Mengambil waktu adzan Maghrib
      العشاء: $('td:contains("موعد اذان العشاء")').next().text().trim(), // Mengambil waktu adzan Isha
      الامساك: $('div.imsak li:contains("موعد الامساك اليوم")').text().trim().split(' ')[3], // Mengambil waktu imsak
    };
    return prayerTimes;
  } catch (error) {
    console.error('Terjadi kesalahan:', error);
    return null;
  }
}
