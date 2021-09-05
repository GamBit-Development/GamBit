module.exports = ({
    name: "loop",
    aliases: ['loopqueue'],
    code: `$customEmoji[check_yes;846833629627416626] Queue loop is now set to \`$loopQueue\`.

$onlyIf[$voiceID!=;$customEmoji[check_no;846833629627416626] You must ve in a Voice channel to use this command.]
`
})