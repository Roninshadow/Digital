const links = document.querySelectorAll('.header__nav-link')
const page = window.location.pathname.split('/').pop()
const faqs = document.querySelectorAll('.faq__item')

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