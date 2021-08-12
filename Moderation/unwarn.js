module.exports = ({
  name: "unwarn",
  code: `
$setUserVar[Warns;$sub[$getUserVar[Warns;$mentioned[1]];1];$mentioned[1]]
$customEmoji[check_yes;846833629627416626] You have removed a warning from <@$mentioned[1]>. They now have \`$sub[$getUserVar[Warns;$mentioned[1]];1]\` warnings.
$onlyPerms[managemessages;$customEmoji[check_no;846833629627416626] Missing **MANAGE_MESSAGES** permission.]
$argsCheck[>1;$customEmoji[check_no;846833629627416626] Invalid Usage. (\`$getServerVar[Prefix]unwarn <user>\`)]
$onlyIf[$getUserVar[Warns;$mentioned[1]]>=1;$customEmoji[check_no;846833629627416626] You can't remove a warning from someone that has no warnings.]`
});