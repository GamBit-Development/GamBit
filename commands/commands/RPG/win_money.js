module.exports = [{
    name: "hunt",
    code: `$if[$getGlobalUserVar[XP]>=$getGlobalUserVar[Req]]
You just leveled up to level **$getGlobalUserVar[Level]**! Congrats!
$setGlobalUserVar[Level;$sum[$getGlobalUserVar[Level];1]]
$setGlobalUserVar[Req;$multi[$getGlobalUserVar[Req];3]]
$endif

$if[$getGlobalUserVar[PrestigeMultiplier]>0]
You hunted in $getGlobalUserVar[Dimension] and won :coin:  $multi[$getGlobalUserVar[PrestigeMultiplier];$random[$getGlobalUserVar[MinMoney];$getGlobalUserVar[MaxMoney]]] and $multi[$getGlobalUserVar[PrestigeMultiplier];$multi[$getGlobalUserVar[Level];$random[15;50]]] XP.
$setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money];$multi[$getGlobalUserVar[PrestigeMultiplier];$random[$getGlobalUserVar[MinMoney];$getGlobalUserVar[MaxMoney]]]]]
$setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP];$multi[$getGlobalUserVar[PrestigeMultiplier];$multi[$getGlobalUserVar[Level];$random[15;50]]]]]

$else
You hunted in $getGlobalUserVar[Dimension] and won :coin: $random[$getGlobalUserVar[MinMoney];$getGlobalUserVar[MaxMoney]] and $multi[$getGlobalUserVar[Level];$random[15;50]] XP.
$setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money];$random[$getGlobalUserVar[MinMoney];$getGlobalUserVar[MaxMoney]]]]
$setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP];$multi[$getGlobalUserVar[Level];$random[15;50]]]]
$endif

$globalCooldown[3m;You may want to wait **%time%** to hunt again.]
`
}, {
    name: "mine",
    code: `$if[$getGlobalUserVar[XP]>=$getGlobalUserVar[Req]]
You just leveled up to level **$getGlobalUserVar[Level]**! Congrats!
$setGlobalUserVar[Level;$sum[$getGlobalUserVar[Level];1]]
$setGlobalUserVar[Req;$multi[$getGlobalUserVar[Req];3]]
$endif

$if[$getGlobalUserVar[PrestigeMultiplier]>0]
You mined in $getGlobalUserVar[Dimension] and won :coin:  $multi[$getGlobalUserVar[PrestigeMultiplier];$random[$getGlobalUserVar[MinMoney];$getGlobalUserVar[MaxMoney]]] and $multi[$getGlobalUserVar[PrestigeMultiplier];$multi[$getGlobalUserVar[Level];$random[15;50]]] XP.
$setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money];$multi[$getGlobalUserVar[PrestigeMultiplier];$random[$getGlobalUserVar[MinMoney];$getGlobalUserVar[MaxMoney]]]]]
$setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP];$multi[$getGlobalUserVar[PrestigeMultiplier];$multi[$getGlobalUserVar[Level];$random[15;50]]]]]

$else
You mined in $getGlobalUserVar[Dimension] and won :coin: $random[$getGlobalUserVar[MinMoney];$getGlobalUserVar[MaxMoney]] and $multi[$getGlobalUserVar[Level];$random[15;50]] XP.
$setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money];$random[$getGlobalUserVar[MinMoney];$getGlobalUserVar[MaxMoney]]]]
$setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP];$multi[$getGlobalUserVar[Level];$random[20;70]]]]
$endif

$globalCooldown[5m;You may want to wait **%time%** to mine again.]
`
}, {
    name: "explore",
    code: `$if[$getGlobalUserVar[XP]>=$getGlobalUserVar[Req]]
You just leveled up to level **$getGlobalUserVar[Level]**! Congrats!
$setGlobalUserVar[Level;$sum[$getGlobalUserVar[Level];1]]
$setGlobalUserVar[Req;$multi[$getGlobalUserVar[Req];3]]
$endif

$if[$getGlobalUserVar[PrestigeMultiplier]>0]
You went exploring in $getGlobalUserVar[Dimension] and won :coin: 
$multi[$getGlobalUserVar[PrestigeMultiplier];$random[$getGlobalUserVar[MinMoney];$getGlobalUserVar[MaxMoney]]] and $multi[$getGlobalUserVar[PrestigeMultiplier];$multi[$getGlobalUserVar[Level];$random[15;50]]] XP.

$else
You went exploring in $getGlobalUserVar[Dimension] and won :coin: $random[$getGlobalUserVar[MinMoney];$getGlobalUserVar[MaxMoney]] and $multi[$getGlobalUserVar[Level];$random[15;50]] XP.

$endif

$if[$randomText[no;no;no;no;true;no;no;true;true;no]==true]

$if[$getGlobalUserVar[ArmorProtection]>0]
You also lost $random[1;$getGlobalUserVar[ArmorProtection]] health while exploring. When you get to 0 health you will loose your stuff! Your current health is :heart: **$getGlobalUserVar[Health]**.
$setGlobalUserVar[Health;$sub[$getGlobalUserVar[Health];$random[1;$getGlobalUserVar[ArmorProtection]]]]

$else
You also lost $random[1;12] health while exploring. When you get to 0 health you will loose your stuff! Your current health is :heart: **$getGlobalUserVar[Health]**.
$setGlobalUserVar[Health;$sub[$getGlobalUserVar[Health];$random[1;12]]]

$endif
$endif

$if[$getGlobalUserVar[PrestigeMultiplier]>0]
$setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money];$multi[$getGlobalUserVar[PrestigeMultiplier];$random[$getGlobalUserVar[MinMoney];$getGlobalUserVar[MaxMoney]]]]]
$setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP];$multi[$getGlobalUserVar[PrestigeMultiplier];$multi[$getGlobalUserVar[Level];$random[25;80]]]]]

$else
$setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money];$random[$getGlobalUserVar[MinMoney];$getGlobalUserVar[MaxMoney]]]]
$setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP];$multi[$getGlobalUserVar[Level];$random[25;80]]]]
$endif
$globalCooldown[5m;You may want to wait **%time%** to explore again.]
`
}, {
    name: "dungeon",
    code: `$if[$getGlobalUserVar[XP]>=$getGlobalUserVar[Req]]
You just leveled up to level **$getGlobalUserVar[Level]**! Congrats!
$setGlobalUserVar[Level;$sum[$getGlobalUserVar[Level];1]]
$setGlobalUserVar[Req;$multi[$getGlobalUserVar[Req];3]]
$endif

$if[$getGlobalUserVar[PrestigeMultiplier]>0]
You went to a dungeon and found:
> :coin: $multi[$getGlobalUserVar[PrestigeMultiplier];$random[$getGlobalUserVar[MinMoney];$getGlobalUserVar[MaxMoney]]] coins
> :blue_circle: $multi[$prestigeMultiplier;$multi[$getGlobalUserVar[Level];$random[75;125]]] Experience

$if[$getGlobalUserVar[ArmorProtection]>0]
And you lost $sub[$getGlobalUserVar[ArmorProtection];$random[8;25]] health.
$setGlobalUserVar[Health;$sub[$getGlobalUserVar[Health];$sub[$getGlobalUserVar[ArmorProtection];$random[8;25]]]]
$setGlobalUserVar[Money;$multi[$getGlobalUserVar[PrestigeMultiplier];$random[$getGlobalUserVar[MinMoney];$getGlobalUserVar[MaxMoney]]]]
$setGlobalUserVar[XP;$multi[$getGlobalUserVar[PrestigeMultiplier];$multi[$getGlobalUserVar[Level];$random[75;125]]]]

$else
And you lost $random[8;25] health.
$setGlobalUserVar[Money;$multi[$getGlobalUserVar[PrestigeMultiplier];$random[$getGlobalUserVar[MinMoney];$getGlobalUserVar[MaxMoney]]]]
$setGlobalUserVar[XP;$multi[$getGlobalUserVar[PrestigeMultiplier];$multi[$getGlobalUserVar[Level];$random[75;125]]]]
$setGlobalUserVar[Health;$sub[$getGlobalUserVar[Health];$random[8;25]]]

$endif

$else
You went to a dungeon and found:
> :coin: $random[$getGlobalUserVar[MinMoney];$getGlobalUserVar[MaxMoney]] coins
> :blue_circle: $multi[$getGlobalUserVar[Level];$random[75;125]] Experience

$if[$getGlobalUserVar[ArmorProtection]>0]
And you lost $sub[$getGlobalUserVar[ArmorProtection];$random[8;25]] health.
$setGlobalUserVar[Health;$sub[$getGlobalUserVar[Health];$sub[$getGlobalUserVar[ArmorProtection];$random[8;25]]]]

$else
And you lost $random[8;25] health.
$setGlobalUserVar[Health;$sub[$getGlobalUserVar[Health];$random[8;25]]]

$endif

$setGlobalUserVar[Money;$sum[$getGlobalUservar[Money];$random[$getGlobalUserVar[MinMoney];$getGlobalUserVar[MaxMoney]]]]
$setGlobalUserVar[XP;$sum[$getGlobalUserVar[XP];$multi[$getGlobalUserVar[Level];$random[75;125]]]]

$endif
$globalCooldown[10m;You may want to wait **%time%** before going to another dungeon.]
`
}]