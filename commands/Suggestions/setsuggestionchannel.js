module.exports = {
    name: 'setsuggestionchannel',
    code: `$customEmoji[check_yes;846833629627416626] Successfully set the Suggestions Channel to <#$mentionedChannels[1]>
$setServerVar[SuggestionChannel;$mentionedChannels[1]]

$onlyIf[$mentionedChannels[1]!=;$customEmoji[check_no;846833629627416626] Invalid Channel. Please mention one.]
$argsCheck[>1;$customEmoji[check_no;846833629627416626] Invalid Usage. (\`$getServerVar[Prefix]setsuggestionchannel <channel mention>\`)]
$onlyPerms[managechannels;$customEmoji[check_no;846833629627416626] Missing **MANAGE_CHANNELS** permission.]
`
}