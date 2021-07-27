module.exports = {
    name: 'antihoisting',
    code: `$customEmoji[check_yes;846833629627416626] Sucessfully enabled the \`Anti Hoisting\` protection.
$setServerVar[AntiHoisting;$messaged]

$onlyIf[$checkContains[$message;enable;disable]==true;$customEmoji[check_no;846833629627416626] Invalid Arg. Argument must be \`enable\` or \`disable\`.]
$argsCheck[>1;$customEmoji[check_no;846833629627416626] Invalid Usage. (\`$getServerVar[Prefix]antihoisting <enable/disable>\`)]`
}
