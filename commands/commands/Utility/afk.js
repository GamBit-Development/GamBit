module.exports = [{
  name: "afk",
  code: `
$setUserVar[AFKMessage;$replaceText[$replaceText[$checkCondition[$message==];true;Unspecified;];false;$message]]
$setGlobalUserVar[AFK;true;$authorID]
You have set your AFK:
\`$replaceText[$replaceText[$checkCondition[$message==];true;Unspecified];false;$message]\`

`
}, {
    name: "$alwaysExecute",
    code: `Welcome back, $username. I removed ur AFK!
$setGlobalUserVar[AFK;false;$authorID]
$onlyIf[$checkContains[$message;afk]==false;]
$onlyIf[$getGlobalUserVar[AFK;$authorID]==true;]`
}];