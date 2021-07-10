module.exports = {
    name: 'close',
    code: `
$channelSendMessage[$channelID;$customEmoji[check_yes;846833629627416626] Ticket closed successfully.]
$editChannel[$channelID;$default;closed-$getServerVar[TicketCount];$default;no;$default;$default;no]
$modifyChannelPerms[$channelID;-viewchannel;$getChannelVar[TicketUser]]

$onlyIf[$isTicket[$channelID]==true;$customEmoji[check_no;846833629627416626] This channel is not a ticket!]
`
}