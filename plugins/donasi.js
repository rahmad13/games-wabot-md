let handler = async (m, { conn, command, usedPrefix }) => {
conn.sendHydrated(m.chat, `
╭─「 Donasi • Pulsa 」
│ • Telkomsel [082328303332]
╰────

╭─「 Donasi • Digital 」
│ • Ovo [082328303332]
│ • Paypal [rizkynursanto48@gmail.com]
│ • Dana [082328303332]
│ • Saweria []
╰────

Seiklasnya aja:>
`, author, `https://github.com/Rizxyu/games-wabot-md/raw/private/plugins/donasi.js`, `${webs}`, `Website`, null, null, [[null, null]], m)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
