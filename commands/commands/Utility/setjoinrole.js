module.exports = {
    name: 'setjoinrole',
    code: `$customEmoji[check_yes;846833629627416626] Successfully set the Join Role to **$findRole[$message]**

$if[$mentionedRoles[1]==]
$if[$roleName[$message]!=]
$setServerVar[JoinRole;$message]

$endif

$elseif[$mentionedRoles[1]!=]
$setServerVar[JoinRole;$mentionedRoles[1]]

$endelseif
$endif


$onlyPerms[admin;$customEmoji[check_no;846833629627416626] Missing \`ADMINISTRATOR\` permission.]
$argsCheck[>1;$customEmoji[check_no;846833629627416626] Invalid Usage. (\`$getServerVar[Prefix]setjoinrole <role id/mention>\`)`
}