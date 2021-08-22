const form = document.getElementById('form')

form.addEventListener('submit', function (event) {
	event.preventDefault()
	const name = form.name.value
	const email = form.email.value
	const subject = form.subject.value
	const description = form.description.value
	const isEmailValid = validate(email)
	if (isEmailValid) {
		const mailData = {
			name,
			email,
			subject,
			description,
		}
		sendMail(mailData)
	} else {
		alert('Email Is Not Correct')
	}
	console.log(isEmailValid)
})
//  0e954bf3-495b-4c31-aec7-e157495d63e7
function sendMail(mailData) {
	// Email.send({
	// 	Host: 'smtp.gmail.com',
	// 	Username: 'mdsaied386@gmail.com',
	// 	Password: 'Janums$@$',
	// 	To: 'mdsaied386@gmail.com',
	// 	From: 'mdsaied386@gmail.com',
	// 	Subject: `${mailData.name} Send You A Message`,
	// 	Body: `
	//     <h3>${mailData.name} Wanted To Tell You About ....</h3> <br><br>
	//     <h5>${mailData.subject} On The Subject</h5> br><br>
	//     <p> Message : ${mailData.description} </p>

	//     `,
	// }).then((message) => alert(message))
	Email.send({
		SecureToken: 'bcf2f4fe-7102-4eef-b8ec-76865174580f',
		To: 'mdsaied386@gmail.com',
		From: 'mdsaied386@gmail.com',
		// Subject: `${mailData.name} Send You A Message`,
		// Body: `
		// <h3>${mailData.name} Wanted To Tell You About ....</h3> <br><br>
		// <h5>${mailData.subject} On The Subject</h5> br><br>
		// <p> Message : ${mailData.description} </p>
		// `,
		Subject: 'hello',
		Body: 'Hello Putki',
	}).then((message) => alert(message))
}

console.log(validate)
console.log(form)
