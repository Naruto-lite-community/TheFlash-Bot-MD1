let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message = `*قــلــب فـلاش مـن جـوا 👀⚡*`;
await conn.sendMessage(m.chat, { react: { text: '🙌', key: m.key } })
    conn.sendFile(m.chat, 'https://envs.sh/06H.jpg', 'image.jpg', message, m);
};

handler.customPrefix = /^فلاش$/i;
handler.command = new RegExp;

export default handler;
