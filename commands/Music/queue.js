module.exports = ({
    name: "queue",
    aliases: ['q'],
    code: `$title[Current Queue]
$description[There are currently **$queueLength** songs in the queue:
$queue[1;30;{number} | {title} added by <@{userID}>]
]
$footer[$username;$authorAvatar]
$addTimestamp
$color[RANDOM]
`
})