module.exports = ({
    name: "skip",
    code: `$if[$isNumber[$message]!=]
$customEmoji[check_yes;846833629627416626] Successfully skipped to queue position **$message**
$skipTo[$message]

$else
$customEmoji[check_yes;846833629627416626] Successfully skipped $get[s].
$skipSong
$let[s;$songInfo[title]]

$endif
$onlyIf[$voiceID!=;$customEmoji[check_no;846833629627416626] You must be in a Voice channel to use this command.]
`
})