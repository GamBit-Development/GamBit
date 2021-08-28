const Aoi = require("aoi.js")
 
const bot = new Aoi.Bot({
token: "Never gonna give you up", 
prefix: "$getServerVar[Prefix]",
autoUpdate: true,
fetchInvites: true
})
 
bot.onMessage()
 
bot.loadCommands('./commands/')



bot.command({
    name: "load",
    code: `Commands were succesfully loaded!
$updateCommands
$onlyForIDs[773750233762103296;764799549033545758;You are not allowed to run this command.]`
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
    name: 'configmute',
    code: `$modifyChannelPerms[$channelID;-sendmessages;$getServerVar[MuteRole]]`
})

//Triggers

bot.onReactionAdd()
bot.onReactionRemove()
bot.onMessageDelete()
bot.onJoined()
bot.onLeave()

// Callbacks

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
    code: `$eval[$getServerVar[WelcomeMessage]]`
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
  text: "$allMembersCount members and $serverCount servers! - ($help)",
  type: "WATCHING",
  time: 12
})

bot.status({
    text: "Version $getVar[Version] - ($help)",
    type: "WATCHING",
    time: 12
})

// Variables


//Joins
bot.variables({
    LeavesChannel: "",
    WelcomeChannel: "",
    WelcomeMessage: "$username just joined the server!",
    LeaveChannel: "",
    LeaveMessage: "$username just left :(",
    Muted: "false",
    JoinRole: '',
    
    JoinTitle: "",
    JoinDes: '',
    JoinFooter: '',
    JoinColor: '',
    JoinImage: '',
    
    LeaveTitle: '',
    LeaveDes: '',
    LeaveFooter: '',
    LeaveColor: '',
    LeaveImage: '',
    
    LogJoins: 'false'
})

//Security
bot.variables({
    AntiLinks: 'disabled',
    AntiLinksPerms: 'embedlinks',
    AntiJoins: 'disabled',
    AntiEveryone: 'disabled',
    AntiEveryonePerms: 'mentioneveryone',
})

//Tickets
bot.variables({
    TicketCount: '0000',
    OpenedTickets: '0',
    MaxTickets: '1',
    TicketMessage: 'Welcome to your ticket! Please wait for a Staff to attend you.',
    TicketInvited: 'false',
})

//Suggestions
bot.variables({
    SuggestionChannel: '',
    SuggestionCount: '0',
    SuggestionAuthor: '',
    SuggestionContent: '',
    SuggestionNumber: '0',
    IsSuggestion: 'false',
    HasBeenModified: 'false',
})

//Leveling
bot.variables({
    LevelEnabled: 'false',
    
    XP: '0',
    Req: '200',
    Level: '0',
    
    MinXPPerMsg: '1',
    MaxXPPerMsg: '15',
    XPCooldown: '1s',
    ReqMultiplier: '2',
    LevelUpMessage: 'Congrats, $username! You just advanced to level **$getUserVar[Level]**!'
})

//Others
bot.variables({
    MuteRole: "",
    Version: "1.8.1",
    Warns: "0",
    Prefix: "$",
    Blacklist: "false",
    AFK: "false",
    AFKMessage: "",
    Playing: "false",
    Changelog: "",
    Color: "RANDOM",
    Dev: 'false'
})

//Webhooks
bot.variables({
    WebhookID: '',
    WebhookToken: '',
    DeleteOnSay: 'false'
})

//Reaction Roles

bot.variables({
    RREmoji: '',
    RRole: '',
    RRChannel: ''
})

//Snipe

bot.variables({
    DelMsg: '',
    DelAuthor: ''
})

//Verification

bot.variables({
    Captcha: '',
    CaptchaRole: '',
    CaptchaTime: '30s',
    CaptchaLength: '6',
    CaptchaMaxTries: '3',
    CaptchaChannel: '',
    
    CaptchaTries: '0'
})