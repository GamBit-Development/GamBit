module.exports = ({
  name: "setleavechannel",
  code: `
$onlyIf[$getUserVar[Blacklist]==false;You have been blacklisted from this bot. Please contact any Bot Administrators / Bot Developer for a blacklist appeal]
$onlyPerms[admin;You must be an **Administrator** to run this command!]
$argsCheck[>1;Please mention a channel to log the left users!]
$setServerVar[LeaveChannel;$mentionedChannels[1]]
You have set the **Leave Channel** to '$message'
`
});