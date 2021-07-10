module.exports = ({
    name: "meme",
    code: `$title[$jsonRequest[https://api.techhost.cc/meme;title;Cannot find module title of undefined]]
$image[$jsonRequest[https://api.techhost.cc/meme;link;Error]]
$color[$getServerVar[Color]]
$footer[$username;$authorAvatar]
$addTimestamp`
})