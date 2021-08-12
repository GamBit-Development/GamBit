module.exports = ({
    name: "inventory",
    aliases: ['inv'],
    code: `$title[$username[$mentioned[1;yes]]'s Inventory]
$description[**Economy**

:moneybag: Money: \`$getGlobalUserVar[Money;$mentioned[1;yes]]\`

:bank: Bank: \`$getGlobalUserVar[Money;$mentioned[1;yes]]\`

:money_with_wings: Total: \`$math[$getGlobalUserVar[Money;$mentioned[1;yes]]+$getGlobalUserVar[Money;$mentioned[1;yes]]]\`

-------------------------------------------------------------------

**Profile**

$replaceText[$replaceText[$checkCondition[$getGlobalUserVar[VIP]==];true;:crown: User is VIP;-1];false; ;-1]

:crossed_swords: Sword: \`$getGlobalUserVar[Sword;$mentioned[1;yes]]\`

:bow_and_arrow:  Bow: \`$getGlobalUserVar[Bow;$mentioned[1;yes]] ($getGlobalUserVar[Arrows] arrows)\`

:military_helmet: Armor: \`$replaceText[$replaceText[$checkCondition[$getGlobalUserVar[Armor;$mentioned[1;yes]]!=];false;None;-1];true;$getGlobalUserVar[Armor;$mentioned[1;yes]];-1]\`

:heart: HP Bottles: \`$getGlobalUserVar[HPBottles]\` 

-------------------------------------------------------------------

**Experience**

:crystal_ball: Level: \`$getGlobalUserVar[Level;$mentioned[1;yes]]\`

:scales: XP: \`$getGlobalUserVar[XP;$mentioned[1;yes]]\`

:question: XP Required for Next Level: \`$getGlobalUserVar[Req;$mentioned[1;yes]]\`

:shield: Prestige Level: \`$getGlobalUserVar[Prestige;$mentioned[1;yes]]\`

$replaceText[$replaceText[$checkCondition[$getGlobalUserVar[Prestige;$mentioned[1;yes]]>1];true;:ideograph_advantage: Prestige Boost: \`$getGlobalUserVar[PrestigeMultiplier;$mentioned[1;yes]]\`;-1];false; ;-1]

-------------------------------------------------------------------

**Others**

:heart: Health: \`$getGlobalUserVar[Health;$mentioned[1;yes]]\`
]
$footer[$username;$authorAvatar]
$addTimestamp
$color[$getServerVar[Color]]
`
})