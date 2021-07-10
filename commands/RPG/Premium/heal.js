module.exports = ({
    name: "heal",
    code: `You have been healed!
$setGlobalUserVar[Health;100]
$cooldown[15m;You must wait **%time%** to heal again!]
$onlyIf[$getGlobalUserVar[VIP]==true;You must have **VIP** Rank from the \`$getServerVar[Prefix]shop\`!]`
})