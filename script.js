const form = document.getElementById('login-form');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const email = document.getElementById('email').value;
	const password = document.getElementById('password').value;

	// Add validation and authentication logic here
	// For demonstration purposes, we'll assume the credentials are correct
	if (email === 'example@example.com' && password === 'password') {
		window.location.href = 'index.html';
	} else {
		alert('Invalid credentials');
	}
});