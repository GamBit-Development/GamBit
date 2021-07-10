module.exports = ({
    name: "update",
    code: `Version has been changed to **$message**!
$setVar[Version;$message]
$onlyForIDs[773750233762103296;852589645405487146;You can't run this command.]`
})