module.exports = ({
    name: "$alwaysExecute",
    nonPrefixed: true,
    code: `Hi! My prefix on this server is \`$getServerVar[Prefix]\`! To start, do \`$getServerVar[Prefix]help\`!
$onlyIf[$checkContains[$message;<@818912169638756385>]==true;]`
})