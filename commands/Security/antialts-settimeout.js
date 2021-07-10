module.exports = {
    name: 'antialtstime',
    code: `$customEmoji[check_yes;846833629627416626] Successfully set the Account Creation Time Requirement to **$message days**.
$setServerVar[AntiAltsTime;$math[$message*86400000]]

$onlyIf[$checkContains[$message;d]==false;$customEmoji[check_no;846833629627416626] Invalid Day format. Please remove \`d\`.]
$argsCheck[>1;$customEmoji[check_no;846833629627416626] Invalid Usage. (\`$getServerVar[Prefix]antialtstime <time in days>\`)]
$onlyPerms[admin;$customEmoji[check_no;846833629627416626] Missing **ADMINISTRATOR** permission.]
`
}