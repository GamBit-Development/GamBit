const Aoi = require("aoi.js")
/*const express = require('express') //creates monitor website
const app = express() //idk what this does

app.get('/', function (req, res) {
  res.send('i monitor gambeet')
})
 
app.listen(1028)

this was supposed to be a monitor but yeah*/
 
const bot = new Aoi.Bot({
token: 'ODE4OTEyMTY5NjM4NzU2Mzg1.YEe9Yw.DPd4ppXrRd59wccuYERXOESj5V8', 
prefix: '$getServerVar[Prefix]',
autoUpdate: false,
fetchInvites: true
})

bot.onMessage()

/*const loader = new Aoi.LoadCommands(bot)
 loader.load(bot.cmd,"./commands/")
 
 AOI V5 STUFF
*/

bot.loadCommands('./commands')

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
    code: `$if[$getServerVar[InviteTracker]==true]
$djsEval["$eval[$getServerVar[IWelcomeMessage];yes]"
.replace("{user}", "$username")
.replace("{user.id}", "$authorID")
.replace("{inviter}", "$username[$userInfo[inviter]]")
.replace("{inviter.id}", "$userInfo[inviter]")
.replace("{invites.total}", "$sum[$userInfo[real];$userInfo[fake]]")
.replace("{invites.real}", "$userInfo[real]")
.replace("{invites.fake}", "$userInfo[fake]")
.replace("'", "\'")
]

$else
$djsEval["$eval[$getServerVar[WelcomeMessage];yes]"
.replace("{user}", "$username")
.replace("{user.id}", "$authorID")
.replace("{server}", "$serverName")
.replace("{members}", "$membersCount")
.replace("'", "\'")
]
$endif`
})

bot.leaveCommand({
    channel: "$getServerVar[LeaveChannel]",
    code: `
$djsEval["$eval[$getServerVar[LeaveMessage];yes]"
.replace("{user}", "$username")
.replace("{user.id}", "$authorID")
.replace("{server}", "$serverName")
.replace("{members}", "$membersCount")
.replace("'", "\'")
]
`
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
    Muted: "false",
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

//Tickets

bot.variables({
    TicketUser: '',
    TicketCount: '0',
    TicketMessage: '',
    OpenedTickets: '0'
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

//Chatbot

bot.variables({
    ChatBotChannel: ''
})

//Invite Tracker

bot.variables({
    InviteTracker: 'false',
    
    IWelcomeMessage: '{user} joined, invited by {inviter} ({invites.total} invites)',
    IWelcomeChannel: '880575536974430229'
})
