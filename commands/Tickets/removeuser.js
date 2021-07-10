module.exports = {
    name: 'removeuser',
    aliases: ['remvuser', 'rmvuser'],
    code: `$customEmoji[check_yes;846833629627416626] Successfully removed user <@$message>
$modifyChannelPerms[$channelID;-viewchannel;$message]

$onlyIf[$userExists[$message]==true;$customEmoji[check_no;846833629627416626] Invalid user ID.]
$onlyIf[$isNumber[$message]==true;$customEmoji[check_no;846833629627416626] Invalid user ID.]
$argsCheck[>1;$customEmoji[check_no;846833629627416626] Invalid usage. (\`$getServerVar[Prefix]removeuser <user id>\`)]
$onlyPerms[managechannels;$customEmoji[check_no;846833629627416626] Missing **MANAGE_CHANNELS** permission.]`
}