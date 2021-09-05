const Aoi = require("aoi.js")
const PlaceHolder = require('./placeholder')

const ph = new PlaceHolder()

const bot = new Aoi.Bot({
token: "i hate when i forget to change the token omfg at least discord regenerates it automactically so yeah", 
prefix: "t$",
autoUpdate: true,
    fetchInvites: true
})
 
bot.onMessage()
 
bot.loadCommands('./commands/')

let user = ph.createPlaceHolder('nab')

bot.command({
    name: "load",
    code: `Commands were succesfully loaded!
$updateCommands
$onlyForIDs[773750233762103296;764799549033545758;You are not allowed to run this command.]`
})

bot.command({
    name: 'test',
    code: `Hi ${user}`
})

//custom commands

bot.awaitedCommand({
    name: 'choose',
    code: `$randomUserID`
})

bot.awaitedCommand({
    name: 'lockall',
    code: `$modifyChannelPerms[$channelID;-sendmessages;$guildID]`
})

bot.awaitedCommand({
    name: 'unlock',
    code: `$modifyChannelPerms[$channelID;+sendmessages;$guildID]`
})

bot.awaitedCommand({
    name: 'ch',
    code: `$channelSendMessage[855078410393223220;$channelName[$channelID]]`
})


// Callbacks

//Triggers

bot.onReactionAdd()
bot.onReactionRemove()
bot.onMessageDelete()
bot.onJoined()
bot.onLeave()


//Actions

bot.deletedCommand({
    channel: '$channelID',
    code: `$setChannelVar[DelMsg;$message]
$setChannelVar[DelAuthor;$username]`
})

bot.reactionAddCommand({
    channel: '$channelID',
    code: `$giveRoles[$authorID;$getMessageVar[RRole]]
$onlyIf[$emojiToString==$getMessageVar[RREmoji];]
$onlyIf[$channelID==$getMessageVar[RRChannel];]`
})

bot.reactionRemoveCommand({
    channel: '$channelID',
    code: `$takeRoles[$authorID;$getMessageVar[RRole]]
$onlyIf[$emojiToString==$getMessageVar[RREmoji];]
$onlyIf[$channelID==$getMessageVar[RRChannel];]`
})


bot.joinCommand({
    channel: "$getServerVar[WelcomeChannel]",
    code: `$if[$getServerVar[InviteTracker]==true]
$djsEval[message.channel.send('$eval[$getServerVar[IWelcomeMessage];yes]'
.replace('{user}', '$username')
.replace('{user.id}', '$authorID')
.replace('{inviter}', '$username[$userInfo[inviter]]')
.replace('{inviter.id}', '$userInfo[inviter]')
.replace('{invites.total}', '$sum[$userInfo[real];$userInfo[fake]]')
.replace('{invites.real}', '$userInfo[real]')
.replace('{invites.fake}', '$userInfo[fake]')
)]

$else
$eval[$getServerVar[WelcomeChannel]]
$endif`
})

bot.leaveCommand({
    channel: "$getServerVar[LeaveChannel]",
    code: `$eval[$getServerVar[LeaveMessage]]`
})


bot.musicStartCommand({
    channel: "$channelID",
    code: `$title[Now Playing]
$description[Song Name: [$songInfo[title]\]($songInfo[url])

Author: $songInfo[publisher]

Duration: $songInfo[duration]

Added by: <@$songInfo[userID]>
]
$addTimestamp
$color[$getServerVar[Color]]`
})

bot.rateLimitCommand({
    channel: '847104458168336394',
    code: `I've been rate limited!
Timeout: $rateLimt[timeout]
Limit: $rateLimit[limit]
Method: $rateLimit[method]
Path: $rateLimit[path]
Route: $rateLimit[route]`
})

//Commands

bot.awaitedCommand({
    name: 'CaptchaSetup',
    code: `$modifyChannelPerms[$channelID;+viewchannel;$getServerVar[CaptchaRole]]`
})

bot.awaitedCommand({
    name: 'CaptchaSetup2',
    code: `$modifyChannelPerms[$channelID;-viewchannel;$guildID]`
})

// Statuses

bot.status({
  text: "$getVar[Testers] official testers",
  type: "WATCHING",
  time: 12
})

// Variables


bot.variables({
    LeavesChannel: "",
    WelcomeChannel: "",
    WelcomeMessage: "$username just joined the server!",
    LeaveChannel: "",
    LeaveMessage: "$username just left :(",
    Muted: "false",
    MuteRole: "",
    AntiLinks: "false",
    Version: "1.0 BETA",
    Warns: "0",
    Prefix: "$",
    Blacklist: "false",
    AFK: "false",
    AFKMessage: "",
    Playing: "false",
    Changelog: "",
    Money: "0",
    Bank: "0",
    Prestige: "0",
    PrestigeCost: "250000",
    PrestigeMultiplier: "0",
    XP: "0",
    Req: "250",
    Level: "1",
    Health: "100",
    Dungeon: "1",
    Sword: "[COMMON] Wooden Sword",
    DamageMultiplier: "0",
    Bow: "[COMMON] Bow",
	Arrows: "0",
    Armor: "",
	Dimension: "Earth",
	MinMoney: "50",
	MaxMoney: "300",
	ArmorProtection: "0",
	HPBottles: "1",
    VIP: "false",
    SnipeUser: '$username',
    SnipeContent: "",
	Color: 'RANDOM',
    GWActive: 'false',
    GWRole: '',
    GWReacted: 'false',
    AntiLinks: 'disabled',
    AntiLinksPerms: 'embedlinks',
    AntiJoins: 'disabled',
    AntiEveryone: 'disabled',
    AntiEveryonePerms: 'mentioneveryone',
    TicketCount: '0000',
    OpenedTickets: '0',
    MaxTickets: '1',
    TicketMessage: 'Welcome to your ticket, $username! Please wait for a Staff to attend you.',
    TicketInvited: 'false',
    AntiRaid: 'disabled',
    TicketUser: '',
    DelChannel1: '',
    DelChannel2: '',
    DelChannel3: '',
    DelChannel4: '',
    DelChannel5: '',
    Testers: '0',
    Tester: 'false',
    Status: 'online',
    StatusColor: 'GREEN'
})

bot.variables({
    RREmoji: '',
    RRole: '',
    RRChannel: ''
})

bot.variables({
    DelMsg: '',
    DelAuthor: ''
})

bot.variables({
    Captcha: '',
    CaptchaRole: '',
    CaptchaTime: '30s',
    CaptchaLength: '6',
    CaptchaMaxTries: '3',
    CaptchaChannel: '',
    
    CaptchaTries: '0'
})

bot.variables({
    InviteTracker: 'true',
    
    IWelcomeMessage: '{user} joined, invited by {inviter} ({invites.total} invites)',
    IWelcomeChannel: '880575536974430229'
})
