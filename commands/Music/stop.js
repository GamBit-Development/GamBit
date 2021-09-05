module.exports = ({
    name: "stop",
    code: `$if[$message==--leave]
$leaveVC
$endif

$customEmoji[check_yes;846833629627416626] You have stopped the queue.
$stopSong

$onlyIf[$voiceID!=;$customEmoji[check_no;846833629627416626] You must be in a Voice channel to use this command.]
`
})