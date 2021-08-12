module.exports = ({
    name: "daily",
    code: `
You have claimed your daily reward! You claimed:
> :coin: $multi[$getGlobalUserVar[Level];$multi[$getGlobalUserVar[Level];$random[10;100]]] coins
$setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money];$multi[$getGlobalUserVar[Level];$random[10;100]]]]
$cooldown[1d;You must wait **%time%** to claim your daily again!]`
})