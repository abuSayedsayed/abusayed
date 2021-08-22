window.onload = function () {
	// ?Initializing the particle js library
	particlesJS.load('particles-js', 'assets/particles.json', function () {
		console.log('callback - particles.js config loaded')
	})
	// Function for responsive nav bar
	expandNav()
	// this function will create the type writer effect
	typeWriterEffect()
	// sticky navigation bar
	stickNav()
	// This function will expand the skill level
	expandSkill()
	// Making the call
	makeCall()
}

function expandNav() {
	const hamburger = document.querySelector('.hamburger')
	const hamburgerIcon = hamburger.children[0]
	const navmenu = document.querySelector('.navmenu')
	let isNavbarExpanded = false

	// Function for making responsive navbar
	hamburger.addEventListener('click', function (event) {
		if (!isNavbarExpanded) {
			navmenu.style.width = '80%'
			navmenu.style.left = '0'
			navmenu.style.opacity = '1'
			hamburgerIcon.className = 'fa fa-times'
			isNavbarExpanded = true
		} else {
			navmenu.style.width = '0%'
			navmenu.style.left = '-50px'
			navmenu.style.opacity = '0'
			hamburgerIcon.className = 'fa fa-hamburger'
			isNavbarExpanded = false
		}
	})
}
// giving a bg to the navbar
function stickNav() {
	const header = document.getElementById('header')
	window.addEventListener('scroll', function () {
		if (window.scrollY !== 0) {
			header.style.backgroundColor = '#333647'
		} else {
			header.style.backgroundColor = 'transparent'
		}
	})
}
// Creating the typewriter effect

function typeWriterEffect() {
	// Creating the type Writer main effect
	const textElement = document.querySelector('.dynamic-txt')
	const words = JSON.parse(textElement.getAttribute('data-words'))
	const wait = Number.parseInt(textElement.getAttribute('data-wait'))

	// initializing the typewriter class
	class TypeWriter {
		constructor(textElement, words, wait = 300) {
			this.textElement = textElement
			this.words = words
			this.wait = wait
			this.wordIndex = 0
			this.text = ''
			this.isDeleting = false
			this.type()
		}

		type() {
			const current = this.wordIndex % this.words.length
			let fullText = words[current]
			let typeSpeed = 100
			// console.log(fullText)
			if (this.isDeleting) {
				this.text = fullText.slice(0, this.text.length - 1)
			} else {
				this.text = fullText.slice(0, this.text.length + 1)
			}
			this.textElement.innerHTML = `${this.text}`
			// decreasing the delete speed
			if (this.isDeleting) {
				typeSpeed = 20
			}
			// change the is deleting state for deleting the text
			if (!this.isDeleting && this.text === fullText) {
				typeSpeed = this.wait
				this.isDeleting = true
			} else if (this.isDeleting && this.text === '') {
				this.isDeleting = false
				typeSpeed = 500
				this.wordIndex++
			}
			setTimeout(() => this.type(), typeSpeed)
		}
	}
	new TypeWriter(textElement, words, wait)
}
// This function will expand the skill level
function expandSkill() {
	const skills = document.getElementById('skills')
	const barRange = document.querySelectorAll('.bar-range')
	const growBar = document.querySelectorAll('.grow-bar')
	const valueBar = document.querySelectorAll('.value-bar')

	let isEventFired = false
	let value = 0
	console.log(barRange)
	// scroll event is finished  do the increase of the value
	window.addEventListener('scroll', function () {
		const getHeight = skills.getBoundingClientRect().top
		if (!isEventFired) {
			if (getHeight < 0) {
				isEventFired = true
				barRange.forEach((element, index) => {
					increaseValue(element, growBar[index], valueBar[index])
				})
				// isEventFired = true
			}
		}
	})
	// this function will increase the value
	function increaseValue(barRange, growBar, valueBar) {
		const target = parseInt(barRange.getAttribute('data-percent'))
		for (let i = 0; i <= target; i++) {
			;(function (i) {
				setTimeout(() => {
					growBar.style.width = `${i + 2}%`
					valueBar.style.left = `${i}%`
					valueBar.innerText = `${i}%`
				}, 10 * i)
			})(i)
		}
	}
}

function makeCall() {
	const phoneNbr = document.getElementById('phone-nbr')
	phoneNbr.addEventListener('click', function (event) {
		event.preventDefault()
		window.open(`tel://+8801784069416`, '_blank', true)
	})
}
