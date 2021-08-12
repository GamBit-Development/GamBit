module.exports = ({
  name: "checkwarnings",
  code: `
**<@$mentioned[1]>** has \`$getUserVar[Warns;$mentioned[1]]\` warnings
$onlyPerms[managemessages;$customEmoji[check_no;846833629627416626] Missing **MANAGE_MESSAGES** permission.]
$argsCheck[>1;$customEmoji[check_no;846833629627416626] Invalid Usage. (\`$getServerVar[Prefix]checkwarnings <user>\`)]`
});