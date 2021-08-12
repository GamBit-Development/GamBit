module.exports = ({
    name: "changelog",
    aliases: ['updates'],
    code: `$title[Changelog]
$description[**Version $getVar[Version]**

**Added**:
- Permission checks on \`setticketcooldown\` command!
- New response on \`8ball\` command!
- You can now create embeds on your Welcome and Leave commands!
- \`hack\` command!
- Welcome and Leave categories!
\`welcomemessagepreview, leavemessagepreview\` commands!

**Removed**:
- RPG Category (poll)
- \`hexcolorgen\` command (useless)
- \`versions\` command (versions are discontinued)

**Updated**:
- \`setleavechannel, setleavemessage\` commands
- Moved all welcome functions to Welcome category and leave functions to Leave category

]
$footer[$username;$authorAvatar]
$addTimestamp
$color[$getServerVar[Color]]`
})
