module.exports = ({
    name: "use",
    code: `$if[$message==1]
You have used a **HP Bottle**! Your health has been maxed!
$setGlobalUserVar[Health;100]
$setGlobalUserVar[HPBottles;$sub[$getGlobalUserVar[HPBottles];1]]
$onlyIf[$getGlobalUserVar[HPBottles]>0;You dont own any HP Bottle!]

$else
Unknown item ID.
$endif
`
})