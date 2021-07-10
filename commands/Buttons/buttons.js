module.exports = {
name :"button",
code : `$djseval[
client.api.channels(message.channel.id).messages.post({data: {
 components: [{
 type: 1,
 components: [{
	type: 2,
 	label: "Discord",
 	style: 5,
 	url: "https://discord.com",
 	}]
 }],
 content: "Test",
}
})
]`
}