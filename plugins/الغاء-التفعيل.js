import {createHash} from 'crypto';
const handler = async function(m, {args}) {
  if (!args[0]) throw '*[❗𝐍𝐅𝐎❗] ادخل الايدي, اذا لا تعرف الايدي بتاعك اكتب #ايدي*';
  const user = global.db.data.users[m.sender];
  const sn = createHash('md5').update(m.sender).digest('hex');
  if (args[0] !== sn) throw '*[❗𝐍𝐅𝐎❗] الرقم السري خطا, اتاكد ان انت كتبته صح!*\n\n*اذا لا تعرف الايدي بتاعك اكتب #ايدي*';
  user.registered = false;
  m.reply(`*[ ✔ ] تم بنجاح, لم تعد مسجل في البوت*`);
};
handler.help = ['', 'ister'].map((v) => 'unreg' + v + ' <numero de serie>');
handler.tags = ['xp'];
handler.command = /^(الغاء-التفعيل)$/;
handler.register = true;
export default handler;
