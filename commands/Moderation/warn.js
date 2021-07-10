module.exports = ({
  name: "warn",
  code: `
$dm[$mentioned[1;yes]]
$channelSendMessage[$channelID;$customEmoji[check_yes;846833629627416626] You have warned **<@$mentioned[1]>**
Reason: \`$replaceText[$replaceText[$checkCondition[$noMentionMessage==];true;Unspecified];false;$noMentionMessage]\`]
You Have been Warned!

Warned by: **$username#$discriminator[$authorID]**

Server: **$serverName[$guildID]**

Reason: =\`$replaceText[$replaceText[$checkCondition[$noMentionMessage==];true;Unspecified];false;$noMentionMessage]\`

You now have **$getUserVar[Warns;$mentioned[1]]** warns
$setUserVar[Warns;$sum[$getUserVar[Warns;$mentioned[1]];1];$mentioned[1]]]
$onlyPerms[managemessages;$customEmoji[check_no;846833629627416626] Missing **MANAGE_MESSAGES** permission.]
$argsCheck[>1;$customEmoji[check_no;846833629627416626] Invalid Usage. (\`$getServerVar[Prefix]warn <user> (reason)\`)]
$onlyIf[$mentioned[1]!=$authorID;$customEmoji[check_no;846833629627416626] You cant warn yourself.]`
});
