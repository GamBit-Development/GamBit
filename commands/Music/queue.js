module.exports = ({
    name: "queue",
    aliases: ['q'],
    code: `$title[Current Queue]
$description[
There are currently **$sub[$queueLength;1]** songs in the queue:
$queue[1;30;{number} | {title} added by <@{userID}>]
]
$footer[The queue is currently $queueStatus | $username;$authorAvatar]
$addTimestamp
$color[RANDOM]
`
})