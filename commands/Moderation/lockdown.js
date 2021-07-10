module.exports = {
    name: 'lockdown',
    code: `$customEmoji[check_yes;846833629627416626] You have locked down the whole server.
$forEachGuildChannel[lockall]
$onlyPerms[admin;$customEmoji[check_no;846833629627416626] Missing **ADMINISTRATOR** permission.]`
}