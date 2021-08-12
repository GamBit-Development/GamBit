module.exports = ({
  name: "unban",
  code: `
$customEmoji[check_yes;846833629627416626] You have unbanned <@$message>.
$unban[$message]
$onlyPerms[ban;$customEmoji[check_no;846833629627416626] Missing **BAN_MEMBERS** permission.]
$onlyIf[$userExists[$message]==true;$customEmoji[check_no;846833629627416626] User doesn't exist.]
$argsCheck[>1;$customEmoji[check_no;846833629627416626] Invalid Usage. (\`$getServerVar[Prefix]unban <user id>\`)]`
});
