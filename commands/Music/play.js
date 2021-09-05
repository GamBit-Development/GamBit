module.exports = ({
    name: "play",
    aliases: ['p'],
    code: `
$customEmoji[check_yes;846833629627416626] Added $playSong[$message;1m;yes;no;$customEmoji[check_no;846833629627416626] An error has occurred.] to the queue.

$onlyIf[$voiceID!=;$customEmoji[check_no;846833629627416626] You must be in a voice channel to use this command.]
$argsCheck[>1;$customEmoji[check_no;846833629627416626] Invalid Usage. (\`$getServerVar[Prefix]play <song>\`)]
`
})