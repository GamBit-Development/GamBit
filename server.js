const Aoi = require("aoi.js")
 
const bot = new Aoi.Bot({
token: "no token for u", 
prefix: "$getServerVar[Prefix]",
autoUpdate: true
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


// Callbacks

bot.onReactionAdd({
    channel: '$channelID',
    code: `$setUserVar[GWReacted;true]
$onlyForChannels[$channelID;]`
})

bot.onMessageDelete({
    channel: "$channelID",
    code: `$setChannelVar[SnipeUser;$authorID]
$setChannelVar[SnipeContent;$message]`
})

bot.onMessageDelete()

bot.joinCommand({
    channel: "$getServerVar[WelcomeChannel]",
    code: `$eval[$getServerVar[WelcomeMessage]]`
})

bot.onJoined()

bot.leaveCommand({
    channel: "$getServerVar[LeaveChannel]",
    code: `$eval[$getServerVar[LeaveMessage]]`
})

bot.onLeave()

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

bot.loopCommand({
code: `$editMessage[854790235560738826;{title:**Bot Status**} {description::ping_pong: **Ping**: $ping

:white_check_mark: **Status**: $getVar[Status]

-----------------------

**Pending Quests**:

$customEmoji[check_yes;846833629627416626] 20,000 Total Members ($allMembersCount / 20,000)

$customEmoji[check_no;846833629627416626] 75 Servers ($serverCount / 75)} {footer:$username:$authorAvatar} {color:$getVar[StatusColor]};854018963104202832]`,
channel: "854012461014188109",
executeOnStartup: true,
every: 30000
})

//Commands

bot.awaitedCommand({
    name: "addHPBottles",
    code: `$setGlobalUserVar[HPBottles;$math[$getGlobalUserVar[HPBottles]+1]]`
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
    TicketMessage: 'Welcome to your ticket! Please wait for a Staff to attend you.',
    TicketInvited: 'false',
    AntiRaid: 'disabled',
    TicketUser: '',
    DelChannel1: '',
    DelChannel2: '',
    DelChannel3: '',
    DelChannel4: '',
    DelChannel5: '',
    Status: 'Online',
    StatusColor: 'GREEN',
    JoinRole: '',
    SuggestionChannel: '',
    SuggestionCount: '0',
    SuggestionAuthor: '',
    SuggestionContent: '',
    SuggestionNumber: '0',
    IsSuggestion: 'false',
    HasBeenModified: 'false',
    AntiAlts: 'disabled',
    AntiAltsTime: '604800000'
})