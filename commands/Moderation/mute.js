module.exports = ({
  name: "mute",
  code: `
$giveRoles[$mentioned[1];$getServerVar[MutedRole]]
$customEmoji[check_yes;846833629627416626] You have muted **<@$mentioned[1]>**
$onlyPerms[managemessages;$customEmoji[check_no;846833629627416626] Missing **MANAGE_MESSAGES** permission.]
$onlyIf[$getServerVar[MutedRole]!=;$customEmoji[check_no;846833629627416626] **$serverName[$guildID]** hasn't set up the muted role.]
$argsCheck[>1;$customEmoji[check_no;846833629627416626] Invalid Usage. (\`$getServerVar[Prefix]mute <user>\`)]`
});