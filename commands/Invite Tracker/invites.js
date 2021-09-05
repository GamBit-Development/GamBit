module.exports = {
    name: 'invites',
    code: `$title[$username[$mentioned[1;yes]]'s Invites]
$description[Total Invites: \`$sum[$userInfo[real;$mentioned[1;yes]];$userInfo[fake;$mentioned[1;yes]]]\`

Real Invites: \`$userInfo[real;$mentioned[1;yes]]\`

Fake Invites: \`$userInfo[fake;$mentioned[1;yes]]\`
]
$footer[$username;$authorAvatar]
$addTimestamp
$color[$getServerVar[Color]]

$onlyIf[$getServerVar[InviteTracker]==true;]
`
}