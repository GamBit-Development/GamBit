module.exports = ({
    name: "help",
    code: `$title[GamBit Help Panel]
$description[
:tools: **Command List**: \`$getServerVar[Prefix]cmds\`

:scroll: **Changelog**: \`$getServerVar[Prefix]changelog\`

:man_technologist: **Staff List**: \`$getServerVar[Prefix]staff\`

:link: **Important Links**

[Invite me!\](https://discord.com/api/oauth2/authorize?client_id=818912169638756385&permissions=8&scope=bot) | [Vote\](https://top.gg/bot/818912169638756385) | [Support Server\](https://discord.gg/SS3JyGJbc7)]
$footer[$username;$authorAvatar]
$color[$getServerVar[Color]]
$addTimestamp
`
})