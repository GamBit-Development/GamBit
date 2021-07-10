module.exports = ({
  name: "hexcolorgen",
  code: `
$onlyIf[$getUserVar[Blacklist]==false;You have been blacklisted from this bot. Please contact any Bot Administrators / Bot Developer for a blacklist appeal]
$title[Hex Color Gen & Checker]
$description[Hex Generated: **#$randomString[6]**
$footer[$username;$authorAvatar]
$addTimestamp
$color[$getServerVar[Color]]`
});