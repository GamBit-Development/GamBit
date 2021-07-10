module.exports = ({
  name: "$alwaysExecute",
  code: `
<@$mentioned[1]> is AFK:
\`$getUserVar[AFKMessage;$mentioned[1]]\`
$onlyIf[$getUserVar[AFK;$mentioned[1]]==true;]
$onlyIf[$mentioned[1]!=;]
`
});