module.exports = ({
  name: "slowmode",
  code: `
  $slowmode[$channelID;$message]
  You have set <#$channelID>'s slowmode to \`$message\`
  $onlyPerms[managechannels;$customEmoji[check_no;846833629627416626] Missing **MANAGE_CHANNELS** permission.]
  $argsCheck[>1;$customEmoji[check_no;846833629627416626] Invalid Usage. (\`$getServerVar[Prefix]slowmode <time>\`)]
`
});