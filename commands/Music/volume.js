module.exports = ({
    name: "volume",
    code: `$customEmoji[check_yes;846833629627416626] Successfully set the volume to **$message%**.
$volume[$message]

$if[$message[2]!=--force]
$onlyIf[$message<=100;$customEmoji[check_no;846833629627416626] Volume must be less than **100%**]
$onlyIf[$message>0;$customEmoji[check_no;846833629627416626] Volume must be higher than **0%**]
$endif

$onlyIf[$isNumber[$message]==true;$customEmoji[check_no;846833629627416626] Argument is not a number.]
$argsCheck[>1;$customEmoji[check_no;846833629627416626] Invalid Usage. (\`$getServerVar[Prefix]volume <amount>)]`
})