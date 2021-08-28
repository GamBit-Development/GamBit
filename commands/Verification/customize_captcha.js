module.exports = [{
    name: 'setcaptcharole',
    aliases: ['scr'],
    code: `$customEmoji[check_yes;846833629627416626] Successfully set the Captcha Role to <@&$findRole[$message]>. This will now be given to users that pass the verification system.
$setServerVar[CaptchaRole;$findRole[$message]]

$argsCheck[>1;$customEmoji[check_no;846833629627416626] Invalid Usage. (\`$getServerVar[Prefix]setcaptcharole <role id / mention / name>\`)]
$onlyPerms[manageroles;$customEmoji[check_yes;846833629627416626] Missing **MANAGE_ROLES** permission.]
`
}, {
    name: 'setcaptchalength',
    aliases: ['scl'],
    code: `$customEmoji[check_yes;846833629627416626] Successfully set the Captcha Length to **$message** digits.
$setServerVar[CaptchaLength;$message]

$onlyIf[$message>=2;$customEmoji[check_no;846833629627416626] Captcha cannot be shorter than **2** digits.]
$onlyIf[$message<=16;$customEmoji[check_no;846833629627416626] Captcha cannot be longer than **16** digits.]
$onlyIf[$isNumber[$message]==true;$customEmoji[check_no;846833629627416626] Argument must be a number.]
$argsCheck[>1;$customEmoji[check_no;846833629627416626] Invalid Usage. (\`$getServerVar[Prefix]setcaptchalength <length>\`)]

$onlyPerms[managemessages;$customEmoji[check_no;846833629627416626] Missing **MANAGE_MESSAGES** permission.]`
}, {
    name: 'setcaptchamaxtries',
    aliases: ['scmt'],
    code: `$customEmoji[check_yes;846833629627416626] Successfully set the Captcha's Max Tries to **$message**.
$setServerVar[CaptchaMaxTries;$message]

$onlyIf[$isNumber[$message]==true;$customEmoji[check_no;846833629627416626] Argument must be a number.]
$argsCheck[>1;$customEmoji[check_no;84683362962741662] Invalid Usage. (\`$getServerVar[Prefix]setcaptchamaxtries <amount>\`)]

$onlyPerms[manageserver;$customEmoji[check_no;846833629627416626] Missing **MANAGE_SERVER** permission.]
`
}, {
    name: 'setcaptchatime',
    aliases: ['sct'],
    code: `$customEmoji[check_yes;846833629627416626] Successfully set the Maximum time to solve the Captcha to **$message**.
$setServerVar[CaptchaTime;$message]

$onlyIf[$checkContains[$message;s;m;h]==true;$customEmoji[check_no;846833629627416626] Specify the amount of time in seconds (s), minutes (m) or hours (h).]
$argsCheck[>1;$customEmoji[check_no;846833629627416626] Invalid Usage. (\`$getServerVar[Prefix]setcaptchatime <time>\`)]

$onlyPerms[managemessages;$customEmoji[check_no;846833629627416626] Missing **MANAGE_MESSAGES** permission.]

`
}, {
    name: 'setcaptchachannel',
    aliases: ['scc'],
    code: `$customEmoji[check_yes;846833629627416626] Successfully set the Captcha Channel to **$message**. An embed message was sent there.
$setServerVar[CaptchaChannel;$mentionedChannels[1]]

$channelSendMessage[$mentionedChannels[1];{title:Verification System}
{description:Welcome to $serverName! To see all the channels on the server, please type \`$getServerVar[Prefix]verify\`. You will get a captcha code that you will need to type!

**After successfully verifying, you will get access to the server!**

Thanks!
}
{color:BLUE}
{timestamp}
]

$setServerVar[CaptchaChannel;$message]

$onlyIf[$mentionedChannels[1]!=;$customEmoji[check_no;846833629627416626] Invalid Channel.]
$argsCheck[>1;$customEmoji[check_no;846833629627416626] Invalid Usage. (\`$getServerVar[Prefix]setcaptchachannel <channel mention>\`)]

$onlyPerms[managemessages;$customEmoji[check_no;846833629627416626] Missing **MANAGE_CHANNELS** permission.]`
}]