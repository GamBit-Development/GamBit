module.exports = {
    name: '$alwaysExecute',
    code: `
$deleteIn[6s]
$deletecommand
$customEmoji[check_no;846833629627416626] You don't have permission to post links on this server.

$onlyIf[$hasPerms[$authorID;$getServerVar[AntiLinksPerms]]==false;]
$onlyIf[$checkContains[$message;https;http]==true;]
$onlyIf[$getServerVar[AntiLinks]==enabled;]
`
}