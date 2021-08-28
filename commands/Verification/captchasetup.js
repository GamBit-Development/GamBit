module.exports = {
    name: 'captchasetup',
    code: `$customEmoji[check_yes;846833629627416626] Successfully finished setting up the permissions for the Verification System.

$modifyChannelPerms[$getServerVar[CaptchaChannel];-viewchannel;$getServerVar[CaptchaRole]]
$modifyChannelPerms[$getServerVar[CaptchaChannel];+viewchannel;$guildID]
$forEachGuildChannel[CaptchaSetup]
$forEachGuildChannel[CaptchaSetup2]

$channelSendMessage[$channelID;$customEmoji[load;846833629627416626] Setting up the permissions for the Verification System. This may take a while depending on the amount of channels you have.]

$onlyIf[$channelExists[$getServerVar[CaptchaChannel]]==true;$customEmoji[check_no;846833629627416626] Captcha channel hasn't been set up yet. Set up one with \`$getServerVar[Prefix]setcaptchachannel <channel mention>\`.]
$onlyIf[$getServerVar[CaptchaRole]!=;$customEmoji[check_no;846833629627416626] Captcha role hasn't been set up yet. Set up one with \`$getServerVar[Prefix]setcaptcharole <role id / mention / name>\`.]

$onlyPerms[admin;$customEmoji[check_no;846833629627416626] Missing **ADMINISTRATOR** permission.]`
}