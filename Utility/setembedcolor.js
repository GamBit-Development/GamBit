module.exports = ({
    name: 'setembedcolor',
    code: `$customEmoji[check_yes;846833629627416626] You have set the embed color to \`$message\`.
$setServerVar[Color;$message]
$argsCheck[>1;$customEmoji[check_no;846833629627416626] Invalid Usage. (\`$getServerVar[Prefix]setembedcolor GREEN/YELLOW/ORANGE/MAGENTA/PURPLE/RED/PINK\`)`
})