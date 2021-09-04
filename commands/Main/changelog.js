module.exports = ({
    name: "changelog",
    aliases: ['updates'],
    code: `$title[Changelog]
$description[**Version $getVar[Version]**

**Added**:
- Chat Bot Category!
> \`setchatbotchannel\` command!

]
$footer[$username;$authorAvatar]
$addTimestamp
$color[$getServerVar[Color]]`
})
