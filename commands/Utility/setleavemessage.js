module.exports = ({
  name: "setleavemessage",
  code: `
$onlyIf[$getUserVar[Blacklist]==false;You have been blacklisted from this bot. Please contact any Bot Administrators / Bot Developer for a blacklist appeal]
$onlyPerms[admin;You must be an **Administrator** to run this command!]
$argsCheck[>1;Please add a message to set!]
$setServerVar[LeaveMessage;$message]
You have set the **Leave Message** to '$message'`
});
