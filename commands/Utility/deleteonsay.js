module.exports = {
    name: 'deleteonsay',
    aliases: ['dos'],
    code: `$customEmoji[check_yes;846833629627416626] Sucessfully $get[arg] the \`Delete On Say\` function.
$setServerVar[DeleteOnSay;$message]

$let[arg;$if[$message==true] 
enabled 
$else 
disabled 
$endif
]

$onlyIf[$checkContains[$message;true;false]==true;$customEmoji[check_no;846833629627416626] Invalid Arg. Argument must be \`true\` or \`false\`.]
$argsCheck[>1;$customEmoji[check_no;846833629627416626] Invalid Usage. (\`$getServerVar[Prefix]deleteonsay <true/false>\`)]
`
}
