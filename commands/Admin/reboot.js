module.exports = ({
    name: "reboot",
    aliases: ['reset', 'shutdown'],
    code: `$reboot[server.js]
$wait[3s]
Bot will be reseting in **3** seconds!
$onlyForIDs[764799549033545758;773750233762103296;You can't run this command.]`
})