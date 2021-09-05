module.exports = ({
    name: "pause",
    code: `$customEmoji[check_yes;846833629627416626] Successfully paused the queue.
$pauseSong

$onlyIf[$voiceID!=;$customEmoji[check_no;846833629627416626] You must be in a Voice channel to use this command.]`
})