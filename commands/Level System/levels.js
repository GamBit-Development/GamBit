module.exports = [{
    name: '',
    code: `$setUserVar[XP;$sum[$getUserVar[XP];$random[$getServerVar[MinXPPerMsg];$getServerVar[MaxXPPerMsg]]]]
$cooldown[$getServerVar[XPCooldown];]
$onlyIf[$getServerVar[LevelEnabled]==true;]`
}, {
    name: '',
    code: `$eval[$getServerVar[LevelUpMessage]]
$setUserVar[Level;$sum[$getUserVar[Level];1]]
$setUserVar[Req;$math[$getUserVar[Req]*$getServerVar[ReqMultiplier]]]
$onlyIf[$getUserVar[XP]>=$getUserVar[Req];]
$onlyIf[$getServerVar[LevelEnabled]==true;]`
}]