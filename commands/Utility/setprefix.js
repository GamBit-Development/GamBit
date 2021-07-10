module.exports = ({
  name: "setprefix",
  code: `$setServerVar[Prefix;$message]
You have set the new prefix to **$message**. To reset it, please do \`$messagesetprefix $\`
$argsCheck[>1;Please add a new prefix!]
$onlyPerms[admin;You must be an **administrator** to run this command!]`
})