module.exports = ({
  name: "botinfo",
  code: `
$title[Gambit Bot Info]

$addField[:brain: CPU Usage;\`\`\`%$cpu\`\`\`;yes]

$addField[:alarm_clock: Uptime;\`\`\`$uptime\`\`\`;yes]

$addField[:ping_pong: Current ping;\`\`\`$ping ms\`\`\`;yes]

$addField[:globe_with_meridians: Total Servers;\`\`\`$serverCount\`\`\`;yes]

$addField[:bust_in_silhouette: Total Members;\`\`\`$allMembersCount\`\`\`;yes]

$addField[:orange_book: Bot Library;\`\`\`Aoi.js\`\`\`;yes]

$addField[:gear: Bot Version;\`\`\`$getVar[Version]\`\`\`;yes]

$addField[:wrench: Bot Developer;\`\`\`Zumo#5792\`\`\`;yes]

$footer[$username;$authorAvatar]
$addTimestamp
$color[$getServerVar[Color]]
$onlyIf[$getUserVar[Blacklist]==false;You have been blacklisted from this bot. Please contact any Bot Administrators / Bot Developer for a blacklist appeal]`
});
