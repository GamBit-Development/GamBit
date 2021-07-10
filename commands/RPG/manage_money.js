module.exports = [{
    name: "deposit",
    aliases: ['dep'],
    code: `$if[$isNumber[$message]==true]
Sucessfully deposited **$message**!
$setGlobalUserVar[Bank;$sum[$getGlobalUserVar[Bank];$message]]
$setGlobalUserVar[Money;$sub[$getGlobalUserVar[Money];$message]]
$onlyIf[$message<=$getGlobalUserVar[Money];You dont have that amount to deposit!]
$onlyIf[$message!=0;You cant deposit 0 money lol.]

$elseif[$message==all]
$setGlobalUserVar[Money;$sub[$getGlobalUserVar[Money];$getGlobalUserVar[Money]]]
$setGlobalUserVar[Bank;$sum[$getGlobalUserVar[Bank];$getGlobalUserVar[Money]]]
Sucessfully deposited **$getGlobalUserVar[Money]**!

$endelseif
$endif
$argsCheck[>1;Please add an amount of money to deposit!]
`
}, {
    name: "withdraw",
    aliases: ['with'],
    code: `$if[$isNumber[$message]==true]
Sucessfully deposited **$message**!
$setGlobalUserVar[Bank;$sub[$getGlobalUserVar[Bank];$message]]
$setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money];$message]]
$onlyIf[$message<=$getGlobalUserVar[Bank];You dont have that amount to withdraw!]
$onlyIf[$message!=0;You cant withdraw 0 money lol.]

$elseif[$message==all]
$setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money];$getGlobalUserVar[Money]]]
$setGlobalUserVar[Bank;$sub[$getGlobalUserVar[Bank];$getGlobalUserVar[Money]]]
Sucessfully withdrew **$getGlobalUserVar[Bank]**!

$endelseif
$endif
`
}]