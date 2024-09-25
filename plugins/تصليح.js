/* Codigo hecho por @Fabri115 y mejorado por BrunoSobrino */

import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync } from 'fs';
import path from 'path';

const handler = async (m, { conn, usedPrefix }) => {
  if (global.conn.user.jid !== conn.user.jid) {
    return conn.sendMessage(m.chat, {text: '*[❗] استخدم هذا الأمر مباشرة في العدد الرئيسي من الروبوت*'}, {quoted: m});
  }
  const chatId = m.isGroup ? [m.chat, m.sender] : [m.sender];
  const sessionPath = 'GataBotSession';
  try {
    const files = await fs.readdir(sessionPath);
    let filesDeleted = 0;
    for (const file of files) {
      for (const id of chatId) {
        if (file.includes(id.split('@')[0])) {
          await fs.unlink(path.join(sessionPath, file));
          filesDeleted++;
          break;
        }
      }
    }
    if (filesDeleted === 0) {
      await conn.sendMessage(m.chat, {text: '*[❗] لم يتم العثور على ملف يتضمن معرف الدردشة*'}, {quoted: m});
    } else {
      await conn.sendMessage(m.chat, {text: `*┊˹🚀˼┊ تم حذف [ ${filesDeleted} ] ملف من الجلسة┊˹🚀˼┊*`}, {quoted: m});
    }
  } catch (err) {
    console.error('خطأ في قراءة المجلد أو ملفات الجلسة:', err);
    await conn.sendMessage(m.chat, {text: '*[❗] حدث خطأ عند إزالة ملفات الجلسة*'}, {quoted: m});
  }
 await conn.sendMessage(m.chat, {text: '*┊˹🚀˼┊هل تراني الآن يا ياحب؟┊˹🚀˼┊*'}, {quoted: m});
};
handler.help = ['fixmsgespera'];
handler.tags = ['fix'];
handler.command = /^(صلح|ds)$/i;
export default handler;
