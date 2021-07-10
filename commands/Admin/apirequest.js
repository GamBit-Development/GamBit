module.exports = ({
    name: "apirequest",
    aliases: ['api', 'apiEval'],
    code: `$jsonRequest[$message[1];$message[2];An error has occured. Please check your API format.]
$onlyIf[$checkContains[$message[1];https://;http://]==true;Invalid API!]
$argsCheck[>1;Please add your API Link and the property you want to get! (\`$apirequest https://myapi.com/meme link\`)`]
})