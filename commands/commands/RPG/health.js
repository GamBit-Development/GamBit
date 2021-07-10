module.exports = ({
    name: "health",
    aliases: ['hp'],
    code: `Your current health is :health: **$getGlobalUserVar[Heatlh]**
You can heal by using HP Bottles. They can be found on the \`$getServerVar[Prefix]shop\`!
`
})