const NOTIFICATION_TITLE = 'Title'
const NOTIFICATION_BODY = 'The app start!'
const CLICK_MESSAGE = 'Notification clicked!'

new Notification( NOTIFICATION_TITLE, { body: NOTIFICATION_BODY })
.onclick = () => document.getElementById("output").innerText = CLICK_MESSAGE

document.body.querySelector("#new-notification").addEventListener("click", function () {

	let myNotification = new Notification("Title", {
	body: "Lorem Ipsum Dolor Sit Amet"
	})

	myNotification.onclick = () => {
	console.log("Notification clicked")
	}

})
