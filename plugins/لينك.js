import fs from 'fs';
const handler = async (m, {conn, args}) => {
  const group = m.chat;
  conn.reply(m.chat, 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group), m, {
    contextInfo: {externalAdReply: {mediaUrl: null, mediaType: 1, description: null,
      title: 'لينك الجروب',
      body: '𝐅𝐋𝐀𝐒𝐇﹝⚡﹞𝐁𝐎𝐓',
      previewType: 0, thumbnail: fs.readFileSync('./Menu.png'),
      sourceUrl: `https://whatsapp.com/channel/0029ValRCUIFi8xmK9xBOr0I`}}});
};
handler.help = ['linkgroup'];
handler.tags = ['group'];
handler.command = /^لينك|link(gro?up)?$/i;
handler.group = true;
handler.botAdmin = true;
export default handler;
