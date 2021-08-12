module.exports = {
    name: 'setticketcooldown',
    code: `$customEmoji[check_yes;846833629627416626] You have set the Ticket Opening cooldown to **$message**
$setServerVar[TicketCooldown;$message]

$onlyPerms[admin;$customEmoji[check_no;846833629627416626] Missing **ADMINISTRATOR** permission]
`
}