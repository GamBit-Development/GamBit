module.exports = ({
  name: "multi",
  code: `
$onlyIf[$getUserVar[Blacklist]==false;You have been blacklisted from this bot. Please contact any Bot Administrators / Bot Developer for a blacklist appeal]
$title[Calculator]
$description[**$message[1]** x **$message[2]** = **$multi[$message[1];$message[2]]**
]
$footer[$username;$authorAvatar]
$addTimestamp
$color[$getServerVar[Color]]
$onlyIf[$getUserVar[Blacklist]==false;You have been blacklisted from this bot. Please contact any Bot Administrators / Bot Developer for a blacklist appeal]
$argsCheck[>2;Please enter **2** numbers to be calculated!]`
});