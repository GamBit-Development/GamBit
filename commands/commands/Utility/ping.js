module.exports = ({
  name: "ping",
  code: `
$onlyIf[$getUserVar[Blacklist]==false;You have been blacklisted from this bot. Please contact any Bot Administrators / Bot Developer for a blacklist appeal]
Bot Current Ping: \`$ping ms\``
});