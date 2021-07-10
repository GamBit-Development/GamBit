module.exports = {
    name: 'antieveryone',
    code: `$if[$message==enable]
You have \`enabled\` the Anti Everyone protection!
$setServerVar[AntiEveryone;enabled]

$elseif[$message==disable]
You have \`disabled\` then Anti Everyone protection.
$setServerVar[AntiEveryone;disabled]

$endelseif
$else
$customEmoji[check_no;846833629627416626] Invalid Usage. (\`$getServerVar[Prefix]antieveryone enable / disable\`)

$endif
$argsCheck[>1;$customEmoji[check_no;846833629627416626] Invalid Usage. (\`$getServerVar[Prefix]antieveryone enable / disable\`)]
$onlyPerms[admin;$customEmoji[check_no;846833629627416626] Missing **ADMINISTRATOR** permission.]`
}