import fs from 'fs';
const handler = async (m, {text, usedPrefix, command}) => {
  if (!text) throw `امم.. ما الاسم الذي أعطيه للأمر الإضافي؟`;
  if (!m.quoted.text) throw `الرد على الرسالة!`;
  const path = `plugins/${text}.js`;
  await fs.writeFileSync(path, m.quoted.text);
  m.reply(`تم الحفظ باسم ${path}`);
};
handler.help = ['saveplugin'].map((v) => v + ' <nombre>');
handler.tags = ['owner'];
handler.command = ['ضيف','addp','addplugin'];
handler.owner = true;

export default handler;
