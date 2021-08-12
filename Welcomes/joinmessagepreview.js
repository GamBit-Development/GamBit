module.exports = {
    name: 'joinmessagepreview',
    aliases: ['jmp'],
    code: `$if[$getServerVar[JoinTitle]==]
$eval[$getServerVar[WelcomeMessage]]

$else
$eval[$getServerVar[WelcomeMessage]]
$title[$eval[$getServerVar[JoinTitle];yes]]
$description[$eval[$getServerVar[JoinDes];yes]]
$footer[$eval[$getServerVar[JoinFooter];yes]]
$color[$getServerVar[JoinColor]]
$image[$replaceText[$replaceText[$checkCondition[$isValidLink[$getServerVar[JoinImage]]==];true;$getServerVar[JoinImage];-1];false; ;-1]]

$endif`
}