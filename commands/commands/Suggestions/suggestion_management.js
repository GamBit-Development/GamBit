module.exports = [{
    name: 'comment',
    code: `$customEmoji[check_yes;846833629627416626] Successfully added a comment to the suggestion with ID **$message**.
$editMessage[$message[1];{author:$getMessageVar[SuggestionAuthor;$message[1]]:$userAvatar[$userID[$getMessageVar[SuggestionAuthor;$message[1]]]]}
{title: Suggestion #$getMessageVar[SuggestionNumber;$message[1]]}
{description:$getMessageVar[SuggestionContent;$message[1]]

**Comment by $userTag**
$messageSlice[1]}
{timestamp}
{color:YELLOW}
;$getServerVar[SuggestionChannel]]

$onlyIf[$getMessageVar[IsSuggestion;$message[1]]==true;$customEmoji[check_no;846833629627416626] Selected message isn't marked as a suggestion.]
$onlyIf[$messageExists[$getServerVar[SuggestionChannel];$message[1]]==true;$customEmoji[check_no;846833629627416626] Message doesn't exist or I can't access it.]
$onlyIf[$isNumber[$message[1]]==true;$customEmoji[check_no;846833629627416626] Invalid message ID format.]
$argsCheck[>2;$customEmoji[check_no;846833629627416626] Invalid Usage. (\`$getServerVar[Prefix]comment <message id> <comment>\`)
`
}, {
    name: 'accept',
    code: `$customEmoji[check_yes;846833629627416626] Successfully accepted the suggestion with ID **$message** for \`$messageSlice[1]\`

$setMessageVar[HasBeenModified;true;$message[1]]
$editMessage[$message[1];{author:$getMessageVar[SuggestionAuthor;$message[1]]:$userAvatar[$userID[$getMessageVar[SuggestionAuthor;$message[1]]]]}
{title:(ACCEPTED) Suggestion #$getMessageVar[SuggestionNumber;$message[1]]}
{description:$getMessageVar[SuggestionContent;$message[1]]

**Accepted by $userTag**
$messageSlice[1]}
{timestamp}
{color:GREEN}
;$getServerVar[SuggestionChannel]]

$onlyIf[$getMessageVar[HasBeenModified;$message[1]]==false;$customEmoji[check_no;846833629627416626] This suggestion has already been modified (accepted / rejected).]
$onlyIf[$getMessageVar[IsSuggestion;$message[1]]==true;$customEmoji[check_no;846833629627416626] Selected message isn't marked as a suggestion.]
$onlyIf[$messageExists[$getServerVar[SuggestionChannel];$message[1]]==true;$customEmoji[check_no;846833629627416626] Message doesn't exist or I can't access it.]
$onlyIf[$isNumber[$message[1]]==true;$customEmoji[check_no;846833629627416626] Invalid message ID format.]
$argsCheck[>2;$customEmoji[check_no;846833629627416626] Invalid Usage. (\`$getServerVar[Prefix]accept <message id> <reason>\`)`
}, {
    name: 'reject',
    code: `$customEmoji[check_yes;846833629627416626] Successfully rejected the suggestion with ID **$message** for \`$messageSlice[1]\`

$setMessageVar[HasBeenModified;true;$message[1]]
$editMessage[$message[1];{author:$getMessageVar[SuggestionAuthor;$message[1]]:$userAvatar[$userID[$getMessageVar[SuggestionAuthor;$message[1]]]]}
{title:(REJECTED) Suggestion #$getMessageVar[SuggestionNumber;$message[1]]}
{description:$getMessageVar[SuggestionContent;$message[1]]

**Rejected by $userTag**
$messageSlice[1]}
{timestamp}
{color:RED}
;$getServerVar[SuggestionChannel]]

$onlyIf[$getMessageVar[HasBeenModified;$message[1]]==false;$customEmoji[check_no;846833629627416626] This suggestion has already been modified (accepted / rejected).]
$onlyIf[$getMessageVar[IsSuggestion;$message[1]]==true;$customEmoji[check_no;846833629627416626] Selected message isn't marked as a suggestion.]
$onlyIf[$messageExists[$getServerVar[SuggestionChannel];$message[1]]==true;$customEmoji[check_no;846833629627416626] Message doesn't exist or I can't access it.]
$onlyIf[$isNumber[$message[1]]==true;$customEmoji[check_no;846833629627416626] Invalid message ID format.]
$argsCheck[>2;$customEmoji[check_no;846833629627416626] Invalid Usage. (\`$getServerVar[Prefix]reject <message id> <reason>\`)`
}]