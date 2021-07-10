module.exports = ({
  name: "sum",
  code: `
$title[Calculator]
$description[**$message[1]** + **$message[2]** = **$sum[$message[1];$message[2]]**
]
$footer[$username;$authorAvatar]
$addTimestamp
$color[$getServerVar[Color]]
$onlyIf[$getUserVar[Blacklist]==false;You have been blacklisted from this bot. Please contact any Bot Administrators / Bot Developer for a blacklist appeal]
$argsCheck[>2;Please enter **2** numbers to be calculated!]`
});
