module.exports = {
    name: 'songinfo',
    code: `$title[Now Playing]
$description[Song Name: [$songInfo[title]\]($songInfo[url])

Author: $songInfo[publisher]

Duration: $songInfo[duration]

Added by: <@$songInfo[userID]>
]
$addTimestamp
$color[$getServerVar[Color]]

$onlyIf[$voiceID!=;$customEmoji[check_no;846833629627416626] You must be in a Voice channel to run this command.]`
}