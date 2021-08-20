module.exports = ({
    name: "changelog",
    aliases: ['updates'],
    code: `$title[Changelog]
$description[**Version $getVar[Version]**

**Added**:
- Levels Category!
> \`enablelevels, rank, levelsettings\` commands!
- Extra field in \`botinfo\` command

]
$footer[$username;$authorAvatar]
$addTimestamp
$color[$getServerVar[Color]]`
})
