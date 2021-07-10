module.exports = ({
  name: "kick",
  code: `
$kick[$mentioned[1]]


$channelSendMessage[$channelID;$customEmoji[check_yes;846833629627416626] You have kicked **<@$mentioned[1]>** 
Reason: \`$replaceText[$replaceText[$checkCondition[$noMentionMessage==];true;Unspecified;-1];false;$noMentionMessage;-1]\`]
$sendDM[$mentioned[1];You have been kicked!

Kicked by: **$username#$discriminator[$authorID]**

Server: **$serverName[$guildID]**

Reason: **$replaceText[$replaceText[$checkCondition[$noMentionMessage==];true;Unspecified;-1];false;$noMentionMessage;-1]**]

$onlyPerms[kick;$customEmoji[check_no;846833629627416626] Missing**KICK_MEMBERS** permission.]
$onlyIf[$mentioned[1]!=$authorID;$customEmoji[check_no;846833629627416626] You can't kick yourself]
$argsCheck[>1;$customEmoji[check_no;846833629627416626] Invalid Usage. (\`$getServerVar[Prefix]kick. <user> (reason)\`)]`
});
