module.exports = ({
  name: "clear",
  code: `
$customEmoji[check_yes;846833629627416626] You have deleted **$message** messages!
$clear[$message]
$deletecommand
$onlyPerms[managemessages;$customEmoji[check_no;846833629627416626] Missing **MANAGE_MESSAGES** permission.]
$argsCheck[>1;$customEmoji[check_no;846833629627416626] Invalid Usage. (\`$getServerVar[Prefix]clear <amount>\`)]
$onlyIf[$isNumber[$message]==true;$customEmoji[check_no;846833629627416626] Argument is not a number.]
$onlyIf[$message<=1000;$customEmoji[check_no;846833629627416626] Amount must be less than **1000**.]`
});