module.exports = ({
  name: "setwelcomemessage",
  code: `
$if[$checkContains[$message;--embed]==true]
$customEmoji[check_yes;846833629627416626] Sucessfully set the Welcome Message to an embed. Do \`$getServerVar[Prefix]joinmessagepreview\` to preview it.

$setServerVar[JoinTitle;$splitText[1]]
$setServerVar[JoinDes;$splitText[2]]
$setServerVar[JoinFooter;$splitText[3]]
$setServerVar[JoinColor;$splitText[4]]
$setServerVar[JoinImage;$replaceText[$replaceText[$checkCondition[$splitText[5]==];true; ;-1];false;$splitText[5];-1]]

$textSplit[$messageSlice[1];|]

$elseif[$message==--rembed]
$customEmoji[check_yes;846833629627416626] Sucessfully removed the Embed from the Welcome Message

$setServerVar[JoinTitle;]
$setServerVar[JoinDes;]
$setServerVar[JoinFooter;]
$setServerVar[JoinColor;]
$setServerVar[JoinImage;]

$endelseif

$else
$customEmoji[check_yes;846833629627416626] Sucessfully set the Welcome Message to \`$message\`
$setServerVar[WelcomeMessage;$message]

$endif

$argsCheck[>1;$customEmoji[check_no;846833629627416626] Invalid Usage. (\`$getServerVar[Prefix]setwelcomemessage <message / --embed <title|description|footer (optional)|color|image (optional)>>\`)]
$onlyPerms[admin;$customEmoji[check_no;846833629627416626] Missing **ADMINISTRATOR** permission.]

`
});