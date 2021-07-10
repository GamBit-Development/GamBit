module.exports = {
    name: 'antilinks',
    code: `$if[$message==enable]
You have \`enabled\` the Anti Links protection!
$setServerVar[AntiLinks;enabled]

$elseif[$message==disable]
You have \`disabled\` the Anti Links protection.
$setServerVar[AntiLinks;disabled]

$endelseif
$endif

$argsCheck[>1;$customEmoji[check_no;846833629627416626] Invalid Usage. (\`$getServerVar[Prefix]antilinks enable / disable\`)]
$onlyPerms[admin;$customEmoji[check_no;846833629627416626] Missing **ADMINISTRATOR** permission.]`
}