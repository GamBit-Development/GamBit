module.exports = {
    name: '$alwaysExecute',
    code: `$jsonRequest[https://api.affiliateplus.xyz/api/chatbot?message=$message;message;An error has occurred.]

$onlyIf[$getServerVar[ChatBotChannel]!=;]

$onlyForChannels[$getServerVar[ChatBotChannel];]`
}