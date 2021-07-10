module.exports = {
    name: 'antialts',
    code: `$if[$message==enable]
$customEmoji[check_yes;846833629627416626] You have \`enabled\` the Anti Alts protection.
$setServerVar[AntiAlts;enabled]

$elseif[$message==disable]
$customEmoji[check_yes;846833629627416626] You have \`disabled\` then Anti AntiAlts protection.
$setServerVar[AntiAlts;disabled]

$endelseif
$else
$customEmoji[check_no;846833629627416626] Invalid Usage. (\`$getServerVar[Prefix]antialts enable / disable\`)

$endif
$argsCheck[>1;$customEmoji[check_no;846833629627416626] Invalid Usage. (\`$getServerVar[Prefix]antialts enable / disable\`)]
$onlyPerms[admin;$customEmoji[check_no;846833629627416626] Missing **ADMINISTRATOR** permission.]`
}