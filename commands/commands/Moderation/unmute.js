module.exports = ({
  name: "unmute",
  code: `
$customEmoji[check_yes;846833629627416626] You have unmuted <@$mentioned[1]>.
$takeRoles[$mentioned[1];$getServerVar[MutedRole]]
$onlyPerms[managemessages;$customEmoji[check_no;846833629627416626] Missing **MANAGE_MESSAGES** permission.]
$onlyIf[$getServerVar[MutedRoleSet]==true;$customEmoji[check_no;846833629627416626] **$serverName[$guildID]** hasn't set a muted role.]
$argsCheck[>1;$customEmoji[check_no;846833629627416626] Invalid Usage. (\`$getServerVar[Prefix]unmute <user>\`)]
$suppressErrors[$customEmoji[check_no;846833629627416626] <@$mentioned[1]> isn't muted or I can't manage the muted role.]`
});