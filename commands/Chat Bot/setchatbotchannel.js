module.exports = {
    name: 'setchatbotchannel',
    aliases: ['sscbc', 'setcbchannel'],
    code: `$customEmoji[check_yes;846833629627416626] Successfully set the Chat Bot Channel to <#$mentionedChannels[1]>
$setServerVar[ChatBotChannel;$mentionedChannels[1]]

$argsCheck[>1;$customEmoji[check_no;846833629627416626] Invalid Usage(\`$getServerVar[Prefix]setcbchannel <channel>\`)]
$onlyPerms[managechannels;$customEmoji[check_no;846833629627416626] Missing **MANAGE_CHANNELS** permission.]
`
}