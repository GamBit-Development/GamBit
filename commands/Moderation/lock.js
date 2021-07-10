module.exports = ({
  name: "lock",
  code: `
$modifyChannelPerms[$channelID;-sendmessages;$guildID]
$customEmoji[check_yes;846833629627416626] You have successfully locked <#$channelID>.
$onlyPerms[managechannels;$customEmoji[check_no;846833629627416626] Missing **MANAGE_CHANNELS** permission.]`
});