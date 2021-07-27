module.exports = ({
    name: "changelog",
    aliases: ['updates'],
    code: `$title[Changelog]
$description[**Version $getVar[Version]**

**Added**:
- \`say, deleteonsay\` commands!
- \`antihoisting\` protection (\`$getServerVar[Prefix]antihoisting\`) (BETA!)

]
$footer[$username;$authorAvatar]
$addTimestamp
$color[$getServerVar[Color]]`
})
