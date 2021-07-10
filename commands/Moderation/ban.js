
module.exports = ({
  name: "ban",
  code: `
$ban[$mentioned[1];$replaceText[$replaceText[$checkCondition[$noMentionMessage==];true;Unspecified;-1];false;$noMentionMessage;-1];7]

$channelSendMessage[$channelID;$customEmoji[check_yes;846833629627416626] Successfully banned **<@$mentioned[1]>** for: \`$replaceText[$replaceText[$checkCondition[$noMentionMessage==];true;Unspecified;-1];false;$noMentionMessage;-1]\`]
$sendDM[$mentioned[1];
You have been banned!

Banned By: **$username#$discriminator[$authorID]**

Server: **$serverName[$guildID]**

Reason: **$replaceText[$replaceText[$checkCondition[$noMentionMessage==];true;Unspecified;-1];false;$noMentionMessage;-1]**
]

$onlyPerms[ban;You must have **Ban Members** permission to run this command!]
$onlyIf[$mentioned[1]!=$ownerID;$customEmoji[check_no;846833629627416626] You can't ban the Server Owner.]
$argsCheck[>1;$customEmoji[check_no;846833629627416626] Invalid Usage. (\`$getServerVar[Prefix]ban <user> (reason)\`)]
$onlyIf[$mentioned[1]!=$authorID;$customEmoji[check_no;846833629627416626] You can't ban yourself.]`
});
