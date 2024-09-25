const xpperbank = 1
let handler = async (m, { conn, command, args }) => {
    let count = command.replace(/^(ايداع|deposit)$/i, '')
    count = count ? /depall/i.test(count) ? Math.floor(global.db.data.users[m.sender].dollar / xpperbank) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
    count = Math.max(1, count)
    if (global.db.data.users[m.sender].dollar >= xpperbank * count) {
      global.db.data.users[m.sender].dollar -= xpperbank * count
      global.db.data.users[m.sender].bank += count
      conn.reply(m.chat, `لقد قمت بتحويل 💵 ${count} دولار إلى حسابك المصرفي`, m)
    } else conn.reply(m.chat, `🟥 *لا تمتلك دولارات كافية في محفظتك لإتمام هذه العملية*`, m)
  }
  handler.help = ['deposit']
  handler.tags = ['economy']
  handler.command = ['ايداع', 'dep', 'depall'] 

  handler.disabled = false

  export default handler
