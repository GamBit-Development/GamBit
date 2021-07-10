module.exports = ({
  name: "clearwarnings",
  code: `
$setUserVar[Warns;0;$mentioned[1]]
$customEmoji[check_yes;846833629627416626] You have reset the warnings from <@$mentioned[1]>
$onlyPerms[managemessages;$customEmoji[check_no;846833629627416626] Missing **MANAGE_MESSAGES** permission.]
$argsCheck[>1;$customEmoji[check_no;846833629627416626] Invalid Usage. (\`$getServerVar[Prefix]clearwarnings <user>\`)]
$onlyIf[$getUserVar[Warns;$mentioned[1]]>=1;$customEmoji[check_no;846833629627416626] Mentioned user has no warnings.]`
});