module.exports = {
    name: 'levelsettings',
    code: `$if[$message[1]==setminxppermsg]
$customEmoji[check_yes;846833629627416626] Sucessfully set the Minimum XP Per Message sent to \`$message[2]\`
$setServerVar[MinXPPerMsg;$message[2]]
$onlyIf[$isNumber[$message[2]==true];$customEmoji[check_no;846833629627416626] Argument must be a number. (\`i.e.: 5\`)]

$elseif[$message[1]==setmaxxppermsg]
$customEmoji[check_yes;846833629627416626] Sucessfully set the Maximum XP Per Message sent to \`$message[2]\`
$setServerVar[MaxXPPerMsg;$message[2]]
$onlyIf[$isNumber[$message[2]]==true;$customEmoji[check_no;846833629627416626] Argument must be a number. (\`i.e.: 20\`)]

$endelseif
$elseif[$message[1]==setxpcooldown]
$customEmoji[check_yes;846833629627416626] Sucessfully set the XP Cooldown per message to \`$message[2]\`
$setServerVar[XPCooldown;$message[2]]
$onlyIf[$checkContains[$message;s]==true;$customEmoji[check_no;846833629627416626] Argument must be a number in seconds. (\`i.e.: 1s\`)]

$endelseif

$elseif[$message[1]==setreqmultiplier]
$customEmoji[check_yes;846833629627416626] Sucessfully set the XP Requirement Multiplier to \`$message[2]\`
$setServerVar[ReqMultiplier;$message[2]]
$onlyIf[$isNumber[$message[2]]==true;$customEmoji[check_no;846833629627416626] Argument must be a number. (\`i.e.: 3\`)]


$endelseif
$elseif[$message[1]==setlevelupmessage]
$customEmoji[check_yes;846833629627416626] Sucessfully set the Level Up Message to \`$message[2]\`
$setServerVar[LevelUpMessage;$message]

$endelseif
$endif

$argsCheck[>2;$customEmoji[check_no;846833629627416626] Invalid Usage. (\`$getServerVar[Prefix]levelsettings <setminxppermessage / setmaxxppermsg / setxpcooldown / setreqmultiplier / setlevelupmessage) <arg(s)>\`]
$onlyPerms[admin;$customEmoji[check_no;846833629627416626] Missing **ADMINISTRATOR** permission.]
`
}