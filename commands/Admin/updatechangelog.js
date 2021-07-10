module.exports = ({
    name: "updatechangelog",
    aliases: ['uc'],
    code: `You have set the changelog to:
\`$message\`
$setVar[Changelog;$message]
$argsCheck[>1;Add a new changelog!]
$onlyForIDs[773750233762103296;You cant run this command!]`
})