module.exports = ({
    name: "changelog",
    aliases: ['updates'],
    code: `$title[Changelog]
$description[**Version $getVar[Version]**

**Added**:
- A new developer <3 (\`Yukimero#7235\`)
- Suggestions category!
> \`setsuggestionchannel, suggest, comment, approve & reject\` commands!

**Fixed**:
- Some typos in some commands i cant remember lmao

]
$footer[$username;$authorAvatar]
$addTimestamp
$color[$getServerVar[Color]]`
})