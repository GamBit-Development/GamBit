module.exports = {
    name: 'suggest',
    code: `$channelSendMessage[$channelID;$customEmoji[check_yes;846833629627416626] Successfully sent suggestion!]

$setMessageVar[SuggestionAuthor;$username;$get[msg]]
$setMessageVar[SuggestionContent;$message;$get[msg]]
$setMessageVar[SuggestionNumber;$getServerVar[SuggestionCount];$get[msg]]
$setMessageVar[IsSuggestion;true;$get[msg]]

$let[msg;$channelSendMessage[$getServerVar[SuggestionChannel];
{author:$username:$authorAvatar}
{title:Suggestion #$getServervar[SuggestionCount]}
{description:$message}
{footer:👍 Upvote | 👎 Downvote}
{timestamp}
{color:YELLOW}
{reactions:👍,👎}
;yes]]
$setServerVar[SuggestionCount;$math[$getServerVar[SuggestionCount]+1]]


$argsCheck[>1;$customEmoji[check_no;846833629627416626] Invalid usage. (\`$getServerVar[Prefix]suggest <suggestion>\`)]
$onlyIf[$getServerVar[SuggestionChannel]!=;$customEmoji[check_no;846833629627416626] The server hasn't setup the suggestions channel.]`
}