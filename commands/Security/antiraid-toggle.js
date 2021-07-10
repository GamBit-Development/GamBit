module.exports = {
    name: 'antiraid',
    code: `$if[$message==enable]
$customEmoji[check_yes;846833629627416626] You have \`enabled\` the AntiRaid protection.

$elseif[$message==disable]
$customEmoji[check_yes;846833629627416626] You have \`disabled\` the AntiRaid protection

$endelseif
$endif

$argsCheck[>1;$customEmoji[check_no;846833629627416626] Invalid Usage. (\`$getServerVar[Prefix]antiraid enable / disable\`)]
$onlyPerms[admin;$customEmoji[check_no;846833629627416626] Missing \`ADMINISTRATOR\` permission.]
`}