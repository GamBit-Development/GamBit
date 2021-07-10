module.exports = ({
  name: "setservervalue",
  code: `
$setServerVar[$message[1];$messageSlice[1]]
You have reseted the value from **$serverName[$guildID]** to **$messageSlice[1]**
$suppressErrors[Invalid value!]
$onlyForIDs[773750233762103296;852589645405487146;You can't use this!]
$argsCheck[>1;Please mention a value type!]`
});