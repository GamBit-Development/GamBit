module.exports = {
    name: 'invitesettings',
    aliases: ['isettings'],
    code: `$if[$message[1]==enable]
$customEmoji[check_yes;846833629627416626] Successfully enabled the Invite Tracker system!
$setServerVar[InviteTracker;true]

$onlyPerms[admin;$customEmoji[check_no;846833629627416626] Missing **ADMINISTRATOR** permission.]

$elseif[$message[1]==disable]
$customEmoji[check_no;846833629627416626] Successfully disabled the Invite Tracker system.
$setServerVar[InviteTracker;false]

$onlyPerms[admin;$customEmoji[check_no;846833629627416626] Missing **ADMINISTRATOR** permission.]

$endelseif

$elseif[$message[1]==setwelcomemessage]
$customEmoji[check_yes;846833629627416626] Successfully set the Welcome Message (Invite Tracker) to \`$message\`
$setServerVar[IWelcomeMessage;$message]

$onlyPerms[manageserver;$customEmoji[check_no;846833629627416626] Missing **MANAGE_SERVER** permission.]
$onlyIf[$getServerVar[InviteTracker]==true;]

$endelseif

$elseif[$message[1]==setwelcomechannel]
$customEmoji[check_yes;846833629627416626] Successfully set the Welcome Channe (Invite Tracker) to <#$mentionedChannels[1]>
$setServerVar[IWelcomeChannel;$mentionedChannels[1]]

$onlyPerms[managechannels;$customEmoji[check_no;846833629627416626] Missing **MANAGE_CHANNELS** permission.]
$onlyIf[$getServerVar[InviteTracker]==true;]

$endelseif
$endif

$argsCheck[>2;$customEmoji[check_no;846833629627416626] Invalid Usage. (\`$getServerVar[Prefix]isettings <enable / disable / property> <args>\`)
`
}