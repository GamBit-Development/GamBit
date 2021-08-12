module.exports = ({
  name: "nuke",
  code: `
$channelSendMessage[$get[channel];$customEmoji[check_yes;846833629627416626] Nuked this channel.]
$deleteChannels[$channelID]
$let[channel;$cloneChannel[$channelID;yes]]
$onlyPerms[managechannels;$customEmoji[check_no;846833629627416626] Missing **MANAGE_CHANNELS** permission.]
`
});