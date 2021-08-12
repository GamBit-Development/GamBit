module.exports = {
    name: 'leavemessagepreview',
    aliases: ['lmp'],
    code: `$if[$getServerVar[LeaveTitle]==]
$eval[$getServerVar[LeaveMessage]]

$else
$eval[$getServerVar[LeaveMessage]]
$title[$eval[$getServerVar[LeaveTitle];yes]]
$description[$eval[$getServerVar[LeaveDes];yes]]
$footer[$eval[$getServerVar[LeaveFooter];yes]]
$color[$getServerVar[LeaveColor]]
$image[$replaceText[$replaceText[$checkCondition[$isValidLink[$getServerVar[LeaveImage]]==];true;$getServerVar[LeaveImage];-1];false; ;-1]]

$endif`
}