module.exports = ({
  name: "divide",
  code: `
$title[Calculator]
$description[**$message[1]** ÷ **$message[2]** = **$divide[$message[1];$Message[2]]**
]
$footer[$username;$authorAvatar]
$addTimestamp
$color[$getServerVar[Color]]

$argsCheck[>1;Please enter **2** numbers to be calculated!]`
});