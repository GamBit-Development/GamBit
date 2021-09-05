module.exports = {
    name: 'translate',
    code: `$title[Translator]
$description[$jsonRequest[https://api.popcat.xyz/translate?text=$replaceText[$messageSlice[1]; ;+;-1]&to=$message[1];translated;An error has occurred]]
$footer[$username;$authorAvatar]
$addTimestamp
$color[$getServerVar[Color]]

$argsCheck[>1;$customEmoji[check_no;846833629627416626] Invalid Usage. (\`$getServerVar[Prefix]translate <text>\`)]
`
}