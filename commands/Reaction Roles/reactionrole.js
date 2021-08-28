module.exports = {
    name: 'reactionrole',
    aliases: ['rr', 'rrole'],
    code: `
$customEmoji[check_yes;846833629627416626] Sucessfully created a Reaction Role embed on this channel.

$setMessageVar[RRole;$findRole[$messageSlice[1]];$get[id]]
$setMessageVar[RRChannel;$channelID;$get[id]]
$setMessageVar[RREmoji;$message[1];$get[id]]
$addMessageReactions[$channelID;$get[id];$message[1]]

$let[id;$channelSendMessage[$channelID;
{title:Reaction Role}
{description:React with $message[1] to get the role <@&$findRole[$messageSlice[1]]>!}
{footer:Created by $username:$authorAvatar}
{color:$getServerVar[Color]}
{timestamp}
;yes]]


$argsCheck[>2;$customEmoji[check_no;846833629627416626] Invalid Usage. (\`$getServerVar[Prefix]rr <emoji> <role>\`)]
$onlyIf[$hasAnyPerm[manageroles;managemessages]==true;$customEmoji[check_no;846833629627416626] Missing **MANAGE_ROLES**, **MANAGE_MESSAGES** permission.]`
}