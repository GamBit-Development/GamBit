module.exports = [{
    name: 'enablelevels',
    code: `$customEmoji[check_yes;846833629627416626] Sucessfully enabled the Levels System. Users will now get XP from chatting!
$setServerVar[LevelEnabled;true]

$onlyPerms[admin;$customEmoji[check_no;846833629627416626] Missing **ADMINISTRATOR** permission.]`
}, {
    name: 'disablelevels',
    code: `$customEmoji[check_yes;846833629627416626] Sucessfully disabled the Levels System. Users will no longer get XP from chatting.
$setServerVar[LevelEnabled;false]

$onlyPerms[admin;$customEmoji[check_no;846833629627416626] Missing **ADMINISTRATOR** permission.]`
}]