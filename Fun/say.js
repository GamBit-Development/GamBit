module.exports = {
    name: 'say',
    code: `$if[$mentionType[$message[1]]==none]
$message

$elseif[$mentionType[$message[1]]==user]
$sendWebhook[$getChannelVar[WebhookID];$getChannelVar[WebhookToken];$messageSlice[1]]

$if[$webhookExists[$getChannelVar[WebhookID];$getChannelVar[WebhookToken]]==true]
$modifyWebhook[$getChannelVar[WebhookID];$getChannelVar[WebhookToken];$username[$mentioned[1]];$userAvatar[$mentioned[1]]]

$else
$setChannelVar[WebhookToken;$splitText[2]]
$setChannelVar[WebhookID;$splitText[1]]

$textSplit[$createWebhook[$channelID;$username[$mentioned[1]];$userAvatar[$mentioned[1]];yes;/];/]

$endif

$endelseif
$endif

$if[$getServerVar[DeleteOnSay]==true]
$deletecommand
$endif

$disableMentions
$argsCheck[>1;$customEmoji[check_no;846833629627416626] Invalid Usage. (\`$getServerVar[Prefix]say (mention) <text>\`)]
`
}
