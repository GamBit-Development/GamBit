module.exports = ({
    name: "hide",
    code: `$customEmoji[check_yes;846833629627416626] You have hidden this channel from everyone.
$modifyChannelPerms[$channelID;-viewchannel;$guildID]
$onlyPerms[managechannels;$customEmoji[check_no;846833629627416626] Missing **MANAGE_CHANNELS** permission.]
`
})