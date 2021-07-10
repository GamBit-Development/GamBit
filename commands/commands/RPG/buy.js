module.exports = ({
    name: "buy",
    code: `$if[$message[1]==1]
You have bought x$message[2] HP Bottles for \`$multi[$message[2];350]\`!
$setGlobalUserVar[HPBottles;$sum[$getGlobalUserVar[HPBottles];1]]
$setGlobalUserVar[Money;$sub[$getGlobalUserVar[Money];350]]
$onlyIf[$getGlobalUserVar[Money]>=350;You dont have :coin: \`$multi[$message[2];350]\` in your Cash to buy $message[2] HP Bottles!]
$argsCheck[>2;Please add the amount of items to buy!]

$elseif[$message[1]==2]
You have bought a prestige! The prestige now costs \`$getGlobalUserVar[PrestigeCost]\`

$setGlobalUserVar[Money;0]
$setGlobalUserVar[Bank;0]
$setGlobalUserVar[Health;100]
$setGlobalUserVar[HPBottles;1]
$setGlobalUserVar[XP;0]
$setGlobalUserVar[Level;1]
$setGlobalUserVar[Req;250]
$setGlobalUserVar[Bow;[COMMON\] Bow]
$setGlobalUserVar[Arrows;0]
$setGlobalUserVar[Sword;[COMMON\] Wooden Sword]
$setGlobalUserVar[Dimension;Earth]
$setGlobalUserVar[Armor;]
$setGlobalUserVar[MinMoney;50]
$setGlobalUserVar[MaxMoney;300]
$setGlobalUserVar[ArmorProtection;0]
$setGlobalUserVar[Prestige;$sum[$getGlobalUserVar[Prestige];1]]
$setGlobalUserVar[PrestigeMultiplier;$multi[$getGlobalUserVar[PrestigeMultiplier];2]]
$setGlobalUserVar[PrestigeCost;$multi[$getGlobalUserVar[PrestigeCost];2]]

$onlyIf[$getGlobalUserVar[Money]>=$getGlobalUserVar[PrestigeCost];You dont have :coin: \`$getGlobalUserVar[PrestigeCost]\` in Cash to buy a prestige!]

$endelseif

$elseif[$message[1]==3]
You have bought **VIP Rank**! 
$setGlobalUserVar[VIP;true]

$endelseif

$else
Item ID not found!
$endif

$argsCheck[>1;Please add an item to buy!]

`
})