module.exports = {
    name: 'verify',
    code: `
$if[$message!=]
$if[$message==$getUserVar[Captcha]]
$giveRoles[$authorID;$getServerVar[CaptchaRole]]
$customEmoji[check_yes;846833629627416626] Successfully verified!

$else
$customEmoji[check_no;846833629627416626] Captcha code is invalid. Type \`$getServerVar[Prefix]verify\` to generate a new verification code.

$endif

$if[$getUserVar[CaptchaTries]>=$getServerVar[CaptchaMaxTries]]
$kick[$authorID;Exceding the maximum amount of tries to pass the verification.]
$sendDM[$authorID;You have been kicked from $serverName for exceding the maximum amount of tries to pass the verification.]
$setUserVar[CaptchaTries;0]

$else
$setUserVar[CaptchaTries;$sum[$getUserVar[CaptchaTries];1]]

$endif

$else
Your verification code is **$randomString[$getServerVar[CaptchaLength]]**. Type \`$getServerVar[Prefix]verify <code>\` to get access to $serverName!
$setUserVar[Captcha;$randomString[$getServerVar[CaptchaLength]]]

$endif


$onlyForChannels[$getServerVar[CaptchaChannel];]
`
}