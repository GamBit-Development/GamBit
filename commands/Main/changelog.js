module.exports = ({
    name: "changelog",
    aliases: ['updates'],
    code: `$title[Changelog]
$description[**Version $getVar[Version]**

**Added**:
- \`Reaction Roles\` category!
> \`reactionrole\` command!
- \`Verification\` category!
> \`verify, captchasetup\` and more commands!

**Fixed**:
- Minor bugs

]
$footer[$username;$authorAvatar]
$addTimestamp
$color[$getServerVar[Color]]`
})
