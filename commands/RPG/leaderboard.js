module.exports = ({
    name: "leaderboard",
    aliases: ['lb', 'top'],
    code: `$if[$message==money]
$title[Money Leaderboard]
$description[$globalUserLeaderboard[Money;asc;:medal: {top} | {username}: :coin: {value}]]
$footer[$username | Your leaderboard position: $getLeaderboardInfo[Money;$authorID;globaluser;top];$authorAvatar]
$addTimestamp
$color[$getServerVar[Color]]

$elseif[$message==bank]
$title[Bank Leaderboard]
$description[$globalUserLeaderboard[Bank;asc;:medal: {top} | {username}: :bank: {value}]]
$footer[$username | Your leaderboard position: $getLeaderboardInfo[Bank;$authorID;globaluser;top];$authorAvatar]
$addTimestamp
$color[$getServerVar[Color]]
$endelseif

$elseif[$message==level]
$title[Level Leaderboard]
$description[$globalUserLeaderboard[Level;asc;:medal: {top} | {username}: Level {value}]]
$footer[$username | Your leaderboard position: $getLeaderboardInfo[Level;$authorID;globaluser;top];$authorAvatar]
$addTimestamp
$color[$getServerVar[Color]]
$endelseif

$elseif[$message==xp]
$title[XP Leaderboard]
$description[$globalUserLeaderboard[XP;asc;:medal: {top} | {username}: :blue_circle: {value}]]
$footer[$username | Your leaderboard position: $getLeaderboardInfo[XP;$authorID;globaluser;top];$authorAvatar]
$addTimestamp
$color[$getServerVar[Color]]
$endelseif

$elseif[$message==prestige]
$title[Prestige Leaderboard]
$description[$globalUserLeaderboard[Prestige;asc;:medal: {top} | {username}: :magic_ball: {value}]]
$footer[$username | Your leaderboard position: $getLeaderboardInfo[Prestige;$authorID;globaluser;top];$authorAvatar]
$addTimestamp
$color[$getServerVar[Color]]
$endelseif

$else
Invalid leaderboard type.

$endif
$argsCheck[>1;Please add a leaderboard type! (\`money / bank / level \ xp \ prestige\`)]
`
})