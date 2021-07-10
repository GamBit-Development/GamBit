module.exports = ({
  name: "checkplatform",
  code: `<@$message> is running Discord on **$platform[$message]**
  $log[User with ID "$authorID" checked platform from ID "$message"]
    $onlyForIDs[$botOwnerID;852589645405487146;You can't run this command!]
    $argsCheck[>1;Please add a user ID!]`
})