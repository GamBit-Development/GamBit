module.exports = ({
  name: "avatar",
  code: `
$description[**[Avatar Link\]($userAvatar[$mentioned[1;yes]])**]
$image[$userAvatar[$mentioned[1;yes]]]
$color[$getServerVar[Color]]`
});