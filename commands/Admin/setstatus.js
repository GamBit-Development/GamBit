module.exports = {
    name: 'setstatus',
    code: `$customEmoji[check_yes;846833629627416626] You have set the bot status to \`$message\`.
$if[$message==online]
$setVar[StatusColor;GREEN]
$setVar[Status;Online]

$elseif[$message==maintenance]
$setVar[StatusColor;YELLOW]
$setVar[Status;Maintenance Mode]
$endelseif

$elseif[$message==unstable]
$setVar[StatusColor;RED]
$setVar[Status;Unstable Mode]
$endelseif

$elseif[$message==offline]
$setVar[StatusColor;GRAY]
$setVar[Status;Offline]
$endelseif

$endif

$onlyIf[$checkContains[$message;offline;unstable;maintenance;online]==true;$customEmoji[check_no;846833629627416626] Invalid argument. (\`online / maintenance / unstable / offline\`)]
$argsCheck[>1;$customEmoji[check_no;846833629627416626] Invalid usage (\`$getServerVar[Prefix]setstatus online / maintenance / unstable / offline\`)]
$onlyForIDs[773750233762103296;852589645405487146;$customEmoji[check_no;846833629627416626] You are not allowed to run this command.]
`
}