module.exports = ({
    name: "resetstats",
    code: `You have reseted <@$mentioned[1;yes]>'s RPG stats!
$setGlobalUserVar[Money;0;$mentioned[1;yes]]
$setGlobalUserVar[Bank;0;$mentioned[1;yes]]
$setGlobalUserVar[Health;100;$mentioned[1;yes]]
$setGlobalUserVar[HPBottles;1;$mentioned[1;yes]]
$setGlobalUserVar[XP;0;$mentioned[1;yes]]
$setGlobalUserVar[Level;1;$mentioned[1;yes]]
$setGlobalUserVar[Req;250;$mentioned[1;yes]]
$setGlobalUserVar[Bow;[COMMON\] Bow;$mentioned[1;yes]]
$setGlobalUserVar[Arrows;0;$mentioned[1;yes]]
$setGlobalUserVar[Sword;[COMMON\] Wooden Sword;$mentioned[1;yes]]
$setGlobalUserVar[Dimension;Earth;$mentioned[1;yes]]
$setGlobalUserVar[Armor;;$mentioned[1;yes]]
$setGlobalUserVar[MinMoney;50;$mentioned[1;yes]]
$setGlobalUserVar[MaxMoney;300;$mentioned[1;yes]]
$setGlobalUserVar[ArmorProtection;0;$mentioned[1;yes]]
$setGlobalUserVar[Prestige;0;$mentioned[1;yes]]
$setGlobalUserVar[PrestigeMultiplier;0;$mentioned[1;yes]]
$setGlobalUserVar[PrestigeCost;250000;$mentioned[1;yes]]
$onlyForIDs[773750233762103296;852589645405487146;You cant run this command!]`
})