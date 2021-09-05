module.exports = {
    name: 'shufflequeue',
    aliases: ['sq', 'squeue', 'randomizequeue', 'rqueue'],
    code: `$customEmoji[check_yes;846833629627416626] Successfully shuffled the queue.
$shuffleQueue

$onlyIf[$voiceID!=;$customEmoji[check_no;846833629627416626] You must be in a Voice channel to run this command.]`
}