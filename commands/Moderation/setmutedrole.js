module.exports = ({
  name: "setmutedrole",
  code: `

$if[$message==--create]
$channelSendMessage[$channelID;$customEmoji[check_yes;846833629627416626] Successfully created and configured a new Muted Role.]
$forEachGuildChannel[configmute]
$modifyRole[$roleID[GamBit Mute];Muted]
$setServerVar[MuteRole;$roleID[GamBit Mute]]
$createRole[GamBit Mute;999999;no;no]
$customEmoji[idle;846833629627416626] Creating new Muted role. This may take a while

$else
$customEmoji[check_yes;846833629627416626] You have set the muted role to '**$message**'
$setServerVar[MuteRole;$mentionedRoles[1]]

$endif

$onlyPerms[manageroles;$customEmoji[check_no;846833629627416626] Missing **MANAGE_ROLES** permission.]
$argsCheck[>1;$customEmoji[check_no;846833629627416626] Invalid Usage. (\`$getServerVar[Prefix]setmutedrole <role mention / --create>\`)]
`
});
