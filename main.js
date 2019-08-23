let submit = document.getElementById('submit');
submit.addEventListener('click', submitForm);

// make sure forms are filled out correctly
function submitForm(event) {
	let firstName = document.getElementById('fname').value;
	let fnameError = document.getElementById('firstName-error');
	if (firstName === '') {
		fnameError.style.color = 'red';
	}
}
