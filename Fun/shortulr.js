module.exports = ({
    name: "shorturl",
    aliases: ['surl'],
    code: `$title[Short URL.js]
$description[Your shorten URL is here!: 
$jsonRequest[https://api.toxy.ga/api/shorten?url=$message;url;Cannot return URL. Invalid URL.]
]
$footer[$username;$authorAvatar]
$addTimestamp
$color[$getServerVar[Color]]`
})