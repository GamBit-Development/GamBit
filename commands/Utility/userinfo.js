module.exports = ({
  name: "userinfo",
  code: `
$onlyIf[$getUserVar[Blacklist]==false;You have been blacklisted from this bot. Please contact any Bot Administrators / Bot Developer for a blacklist appeal]
$title[$mentioned[1;yes]'s UserInfo]
$description[Username: **$username[$mentioned[1;yes]]**

Discriminator: **#$discriminator[$mentioned[1;yes]]**

ID: **$mentioned[1;yes]**

Joined At: **$memberJoinedDate[$mentioned[1;yes]]**

Account Created At: **$creationDate[$mentioned[1;yes]]**

User Badges: **$getUserBadges[$mentioned[1;yes]]**

Warns: **$getUserVar[Warns;$mentioned[1;yes]]**

User Permissions: $userPerms[$mentioned[1;yes];|]
]
$color[$getServerVar[Color]]
$footer[$username;$authorAvatar]
$thumbnail[$userAvatar[$mentioned[1;yes]]]
$addTimestamp`
});