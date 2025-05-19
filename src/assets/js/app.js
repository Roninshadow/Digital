const links = document.querySelectorAll('.header__nav-link')
const page = window.location.pathname.split('/').pop()
const faqs = document.querySelectorAll('.faq__item')
const dialog = document.getElementById('dialog')
const openDialog = document.getElementById('open')
const closeDialog = document.getElementById('close')

faqs.forEach(faq => {
	faq.addEventListener('click', () => {
		faqs.forEach(el => {
			if (el !== faq) {
				el.classList.remove('active-faq');
			}
		});
		faq.classList.toggle('active-faq');
	});
});


links.forEach(item => {
	const linkHref = item.getAttribute('href')
	if (linkHref === page) {
		item.classList.add('active')
	}
})


function openPopup () {
	dialog.showModal()
	document.body.classList.add('scroll-block')
}

function returnScroll() {
	document.body.classList.remove('scroll-block')
}

function closePopup() {
	dialog.close()
	returnScroll()
}
function closeOverlay ({ currentTarget, target }) {
	const dialog = currentTarget
	const OverlayClick = target === dialog 
	if (OverlayClick) {
		closePopup()
	}
}

openDialog.addEventListener('click', () => {
	openPopup()
})
closeDialog.addEventListener('click', () => {
	closePopup()
})
dialog.addEventListener('click', (e) => {
	closeOverlay(e)
})
dialog.addEventListener('cancel', () => {
	returnScroll()
});