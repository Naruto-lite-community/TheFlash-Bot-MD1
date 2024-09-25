import {createHash} from 'crypto';
const Reg = /\|?(.*)([.|] *?)([0-9]*)$/i;
const handler = async function(m, {conn, text, usedPrefix, command}) {
  const user = global.db.data.users[m.sender];
  const name2 = conn.getName(m.sender);
  const pp = await conn.profilePictureUrl(m.chat, 'image').catch((_) => global.imagen1);
  if (user.registered === true) throw `مثل\nتفعيل زاك.17.`;
  if (!Reg.test(text)) throw `*[❗مساعده❗] انت مش مسجل عليك التسجيل اولا*\n\n*—◉ مثل: ${usedPrefix + command} الاسم.العمر*\n*—◉ مثل: ${usedPrefix + command} فينوم.18*`;
  let [_, name, splitter, age] = text.match(Reg);
  if (!name) throw '*مثل .تفعيل ناروتو.18*';
  if (!age) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝙻𝙰 𝙴𝙳𝙰𝙳 𝙽𝙾 𝙿𝚄𝙴𝙳𝙴 𝙴𝚂𝚃𝙰𝚁 𝚅𝙰𝙲𝙸𝙰*';
  if (name.length >= 30) throw '[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝙴𝚂 𝙳𝙴𝙼𝙰𝚂𝙸𝙰𝙳𝙾 𝙻𝙰𝚁𝙶𝙾';
  age = parseInt(age);
  if (age > 100) throw '*لماذا تستخدم الواتس كلها 5 دقايق و تموت 👴🏻*';
  if (age < 5) throw '*اطفال تستخدم الواتس غير معقول? 😲*';
  user.name = name.trim();
  user.age = age;
  user.regTime = + new Date;
  user.registered = true;
  const sn = createHash('md5').update(m.sender).digest('hex');
  const caption = `┏┅ ━━━━━━━━━━━━ ┅ ━
┇「 معلوماتك 」
┣┅ ━━━━━━━━━━━━ ┅ ━
┃ *الاسم:* ${name}
┃ *العمر:* ${age} سنع
┃ *الايدي:* 
┃ ${sn}
┣┅ ━━━━━━━━━━━━ ┅ ━
┃ ¡الايدي سوف يساعدك
┃ في حال كنت تريد حذف 
┃ تسجيلك في البوت!
┗┅ ━━━━━━━━━━━━ ┅ ━`;
  // let author = global.author
  await conn.sendFile(m.chat, pp, 'mystic.jpg', caption);
  // conn.sendButton(m.chat, caption, `¡𝚃𝚄 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴 𝚂𝙴𝚁𝙸𝙴 𝚃𝙴 𝚂𝙴𝚁𝚅𝙸𝚁𝙰 𝙿𝙾𝚁 𝚂𝙸 𝙳𝙴𝚂𝙴𝙰𝚂 𝙱𝙾𝚁𝚁𝙰𝚁 𝚃𝚄 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙾 𝙴𝙽 𝙴𝙻 𝙱𝙾𝚃!\n${author}`, [['¡¡𝙰𝙷𝙾𝚁𝙰 𝚂𝙾𝚈 𝚄𝙽 𝚅𝙴𝚁𝙸𝙵𝙸𝙲𝙰𝙳𝙾/𝙰!!', '/profile']], m)
  global.db.data.users[m.sender].money += 10000;
  global.db.data.users[m.sender].exp += 10000;
};
handler.help = ['verificar'];
handler.tags = ['xp'];
handler.command = /^(verify|register|تفعيل|reg|registrar)$/i;
export default handler;
