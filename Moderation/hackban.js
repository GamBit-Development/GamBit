module.exports = ({
  name: "hackban",
  code: `
$customEmoji[check_yes;846833629627416626] You have successfully hackbanned <@$message>
$ban[$message;HackBanned;7]
$onlyPerms[ban;$customEmoji[check_no;846833629627416626] Missing **BAN_MEMBERS** permission.]
$onlyIf[$userExists[$message]==true;$customEmoji[check_no;846833629627416626] User does not exist.]
$argsCheck[>1;$customEmoji[check_no;846833629627416626] Invalid Usage. (\`$getServerVar[Prefix]hackban <user id>\`)]`
});
