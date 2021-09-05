module.exports = {
    name: 'clearqueue',
    aliases: ['cq'],
    code: `$if[$message!=--stop]
$customEmoji[check_yes;846833629627416626] Successfully cleared the queue. The current song will still play.
$clearSongQueue

$else
$customEmoji[check_yes;846833629627416626] Successfully cleared the queue. The current song will now stop.
$clearSongQueue
$stopSong

$endif`
}