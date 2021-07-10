module.exports = ({
  name: "setbotname",
  code: `
  Successfully set bot name to: **$message**
  $log[Bot Name Changed by: $username with ID: $authorID]
   $onlyForIDs[773750233762103296;852589645405487146;You can't run this command!]`
});