module.exports = ({
  name: "setleavemessage",
  code: `
$if[$checkContains[$message;--embed]==true]
$customEmoji[check_yes;846833629627416626] Sucessfully set the Leave Message to an embed. Do \`$getServerVar[Prefix]leavemessagepreview\` to preview it.

$setServerVar[LeaveTitle;$splitText[1]]
$setServerVar[LeaveDes;$splitText[2]]
$setServerVar[LeaveFooter;$splitText[3]]
$setServerVar[LeaveColor;$splitText[4]]
$setServerVar[LeaveImage;$replaceText[$replaceText[$checkCondition[$splitText[5]==];true; ;-1];false;$splitText[5];-1]]

$textSplit[$messageSlice[1];|]

$elseif[$message==--rembed]
$customEmoji[check_yes;846833629627416626] Sucessfully removed the Embed from the Leave Message

$setServerVar[LeaveTitle;]
$setServerVar[LeaveDes;]
$setServerVar[LeaveFooter;]
$setServerVar[LeaveColor;]
$setServerVar[LeaveImage;]

$endelseif

$else
$customEmoji[check_yes;846833629627416626] Sucessfully set the Leave Message to \`$message\`
$setServerVar[LeaveMessage;$message]

$endif

$argsCheck[>1;$customEmoji[check_no;846833629627416626] Invalid Usage. (\`$getServerVar[Prefix]setleavemessage <message / --embed <title|description|footer (optional)|color|image (optional)>>\`)]
$onlyPerms[admin;$customEmoji[check_no;846833629627416626] Missing **ADMINISTRATOR** permission.]

`
});