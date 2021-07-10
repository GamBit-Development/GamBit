module.exports = ({
    name: "shop",
    code: `$title[GamBit's RPG Shop]
$description[Use \`$getServerVar[Prefix]buy <item ID>\` to buy an item!

:heart: **HP Bottle**
- A magic bottle to max your health.
> ID: 1
> Price per item: :coin: \`350\`

:crystal_ball: **Prestige**
- Reset all your progress, but get better rewards!
> ID: 2
> Price: :coin: \`$getGlobalUserVar[PrestigeCost]\` (Cost duplicates every prestige.)

:crown: **VIP Rank**
- Better advantages!
> ID: 3
> Price: :coin: \`750000\` 
> Advantages: \`heal command, more comming soon\`

More items comming soon!]
$footer[$username;$authorAvatar]
$addTimestamp
$color[GREEN]
`
})