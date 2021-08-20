module.exports = {
    name: 'rank',
    code: `$title[$username[$mentioned[1;yes]]'s Rank]
$description[Level: \`$getUserVar[Level;$mentioned[1;yes]]\`

Total Experience: \`$getUserVar[XP;$mentioned[1;yes]]\`

Experience needed for Next Level: \`$sub[$getUserVar[Req];$getUserVar[XP]]\`

Leaderboard Position: \`$getLeaderboardInfo[Level;$mentioned[1;yes];user;top]\`
]
$footer[$username;$authorAvatar]
$addTimestamp
$color[$getServerVar[Color]]
`
}