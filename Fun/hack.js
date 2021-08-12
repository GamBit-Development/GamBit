module.exports = {
    name: 'hack',
    aliases: ['getdismansloginsoicanhaxthemandthentheyllgobrrrrrr'],
    code: `$editMessage[$get[i];$username[$mentioned[1]]'s information

Full Name: $username[$mentioned[1]]

IP: $random[100;999].$random[101;999].$random[100;998].$random[101;998]

Email: $toLowercase[$username[$mentioned[1]]]@yahoo.com

Password: $randomString[10]

YouTube Channel: <https://youtube.com/channel/UCuAXFkgsw1L7xaCfnd5JJOw>

Phone Number: +1-$random[1;999]-$random[2;999]-$random[1;998]-$random[2;998]

Device: $randomText[iPhone 8;Windows 11;Windows 10;iMac Book Pro;nOkIa;iPhone 10;Windows 8;Windows 11;iPhone 8;Windows 10;iPhone 9;iPhone 10]

Running Discord on: $platform[$mentioned[1]]]

$wait[3s]

$let[i;$sendMessage[$customEmoji[load;846833629627416626] Attempting to hack $username[$mentioned[1]]...;yes]]`
}