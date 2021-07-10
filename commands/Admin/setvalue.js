module.exports = ({
  name: "setvalue",
  code: `
$setUserVar[$message[1];$message[2];$mentioned[1;yes]]
You have reseted the variable value from <@$mentioned[1;yes]>
$suppressErrors[Invalid variable!]
$onlyForIDs[773750233762103296;852589645405487146;You can't use this command!]
$argsCheck[>1;Please mention a valid variable!]`
});