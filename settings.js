/*
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': 'Your Key',
}

// Other
global.owner = ['6288804947282','6288804947282','6288804947282']
global.premium = ['6283131214121']
global.ownername = 'Humanz'
global.botname = 'HumanzBitz-Md'
global.footer = 'Humanz'
global.ig = 'https://instagram.com/Kevinafsar_'
global.email = 'humanzbotiiz@gmail.com'
global.region = 'Indonesia'
global.sc = 'YOTUBE BANYAK BANG🏃'
global.myweb = 'https://kevinafsarmanik.github.io/nino-wife.github.io/'
global.packname = 'Humanz'
global.author = 'WhatsApp Bot'
global.sessionName = 'chika'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: ' Success onichan',
    admin: 'Fitur Khusus Admin sama!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahuluuu!',
    owner: 'Fitur Khusus Owner Kepin gamteng',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./image/chika.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
