module.exports = {
    name: 'prune',
    code: `$customEmoji[check_yes;846833629627416626] Successfully pruned members that were inactive for **$message[1]** days.
Reason: \`$replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;Unspecified;-1];false;$messageSlice[1];-1]\`
$pruneMembers[$message[1];$guildID;$replaceText[$replaceText[$checkCondition[$messageSlice[1]==];true;Unspecified;-1];false;$messageSlice[1];-1]]

$onlyIf[$message[1]>=1;$customEmoji[check_no;846833629627416626] Amount cant be less than **1**
$onlyIf[$message[1]<=30;$customEmoji[check_no;846833629627416626] Amount cant be higher than **30**.]
$onlyIf[$checkContains[$message[1];d]==false;$customEmoji[check_no;846833629627416626] Invalid Input. Please instert the days **without** a \`d\`.]
$argsCheck[>1;$customEmoji[check_no;846833629627416626] Invalid usage. (\`$getServerVar[Prefix]prune <days> \(reason\)\`)]
$onlyIf[$ownerID==$authorID;$customEmoji[check_no;846833629627416626] Only the server owner can run this command.]
`
}