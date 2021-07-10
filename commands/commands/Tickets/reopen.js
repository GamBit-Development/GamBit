module.exports = {
    name: 'reopen',
    code: `$customEmoji[check_yes;846833629627416626] Successfully reopened ticket.
$modifyChannelPerms[$channelID;+viewchannel;$getChannelVar[TicketUser]]
$editChannel[$channelID;$default;ticket-$getServerVar[TicketCount];$default;no;$default;$default;no]

$onlyIf[$isTicket[$channelID]==true;$customEmoji[check_no;846833629627416626] This channel is not a ticket.]`
}