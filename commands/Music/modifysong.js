module.exports = {
    name: 'modifysong',
	code: `$customEmoji[check_yes;846833629627416626] Successfully modified the \`$toLocaleUppercase[$message[1]\` to \`$message[2]\`
$songFilter[$message[1]:$get[r]]
$let[r;$if[$checkContains[$toLowerCase[$message[1]];pulsator;gate;flanger;phaser;surround;earwax]$checkContains[$message;on;off;1;0]==truetrue]
$replaceText[$replaceText[$checkCondition[$message[1]==]on;1;-1];off;0;-1]
$else$message[2]$endif]

$onlyIf[$checkContains[$message[1];pitch;bass;echo;speed;vibrato;pulsator;gate;flanger;phaser;surround;earwax]==true;$customEmoji[check_no;846833629627416626] Invalid Usage. (\`$getServerVar[Prefix]modifysong <arg> <value>)]
$argsCheck[>1;$customEmoji[check_no;846833629627416626] Invalid Usage. (\`$getServerVar[Prefix]modifysong <arg> <value>\`)]`
}