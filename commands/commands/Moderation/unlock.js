module.exports = ({
  name: "unlock",
  code: `
$modifyChannelPerms[$channelID;+sendmessages;$guildID]
$customEmoji[check_yes;846833629627416626] You have unlocked **<#$channelID>**.
$onlyPerms[managechannels;$customEmoji[check_no;846833629627416626] Missing **Manage Messages** permission.]`
});
