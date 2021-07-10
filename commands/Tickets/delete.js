module.exports = {
    name: 'delete',
    code: `$closeTicket[$customEmoji[check_no;846833629627416626] This channel is not a ticket!]
$wait[5s]
$setUserVar[OpenedTickets;$math[$getUserVar[OpenedTickets;$getChannelVar[TicketUser]]-1];$getChannelVar[TicketUser]]
$channelSendMessage[$channelID;$customEmoji[check_yes;846833629627416626] Ticket will be closing in **5** seconds!]
$onlyIf[$isTicket[$channelID]==true;$customEmoji[check_no;846833629627416626] This channel is not a ticket!]
`
}