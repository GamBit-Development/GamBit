module.exports = {
    name: 'settings',
    code: `$title[GamBit's Settings]
$description[$customEmoji[on;846833629627416626] **Server Addons**

Welcome System $get[wlc]

Leave System $get[lve]

$customEmoji[moderator;846833629627416626] **Security**

Anti Links $get[al]
]
$footer[$username;$authorAvatar]
$addTimestamp
$color[$getServerVar[Color]]

$let[al;$if[$getServerVar[AntiLinks]==enabled]
$customEmoji[on;846833629627416626]
$else
$customEmoji[off;846833629627416626]
$endif]

$let[lve;$if[$serverChannelExists[$getServerVar[WelcomeChannel]]==true]
$customEmoji[on;846833629627416626]
$else
$customEmoji[of;846833629627416626]
$endif]

$let[wlc;$if[$serverChannelExists[$getServerVar[WelcomeChannel]]==true]
$customEmoji[on;846833629627416626]
$else
$customEmoji[off;846833629627416626]
$endif]`
}
