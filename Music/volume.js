module.exports = ({
    name: "volume",
    code: `You have set the volume to **$message%**!
$volume[$message]
$onlyIf[$message=<100;Volume cannot be more than 100%!]
$onlyIf[$message>0;Volume must be at least 1%!]
$onlyIf[$isNumber[$message]==true;Invalid number!]
$argsCheck[>1;Please add the new volume!]`
})