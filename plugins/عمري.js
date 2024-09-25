let handler = async (m, { text }) => {
  try {

    let dateOfBirth = text.replace('عمري ', '').trim();
    let [day, month, year] = dateOfBirth.split('-').map(Number);

    if (!day || !month || !year || isNaN(day) || isNaN(month) || isNaN(year)) {
      m.reply('⎔ ⋅ ───━ •﹝👑﹞• ━─── ⋅ ⎔\n\n👑⤺┇ يرجى كتابة تاريخ الميلاد بصيغة صحيحة. \n\n مثلًا: .عمري 22-7-2000\n\n*⎔ ⋅ ───━ •﹝👑﹞• ━─── ⋅ ⎔*');
      return;
    }

    let birthDate = new Date(year, month - 1, day);
    let now = new Date();
    
    if (birthDate > now) {
      m.reply('⎔ ⋅ ───━ •﹝👑﹞• ━─── ⋅ ⎔\n\n*👑⤺┇ تاريخ الميلاد يجب أن يكون في الماضي.\n\n⎔ ⋅ ───━ •﹝👑﹞• ━─── ⋅ ⎔*');
      return;
    }


    let diff = now - birthDate;

    let ageDate = new Date(diff);
    let years = ageDate.getUTCFullYear() - 1970;
    let months = ageDate.getUTCMonth();
    let days = ageDate.getUTCDate() - 1;

    m.reply(`*⎔ ⋅ ───━ •﹝👑﹞• ━─── ⋅ ⎔*\n\n*👑⤺┇ عمرك هو*\n\n*👑⤺┇${years} سنة*\n*👑⤺┇${months} شهر*\n*👑⤺┇${days} يوم*\n\n*⎔ ⋅ ───━ •﹝👑﹞• ━─── ⋅ ⎔*`);
  } catch (error) {
    console.error('Error calculating age:', error);
    m.reply('حدث خطأ أثناء حساب العمر. يرجى المحاولة مرة أخرى.');
  }
}

handler.command = /^(عمري)$/i;

export default handler;
