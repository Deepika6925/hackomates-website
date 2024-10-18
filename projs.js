const hackathonGrid = document.querySelector('.hackathon-grid');
const navLinks = document.querySelectorAll('nav a');

// Sample hackathon data
const hackathons = [
	{
		id: 1,
		name: 'VCT Hackathon:esports manager challenge',
		timing: '24 hours',
		place: 'Online',
		requiredTech: ['JavaScript', 'HTML/CSS'],
		groupSize: '2-4 people',
		poster: 'vct.jpg'
	},
	{
		id: 2,
		name: 'Microsoft Fabric and AI learning hackathon',
		timing: '48 hours',
		place: 'New York',
		requiredTech: ['Python', 'Machine Learning'],
		groupSize: '3-5 people',
		poster: 'micro.png'
	},
	{
		id: 3,
		name: 'Gemini cloud gemini hackathon',
		timing: '12 hours',
		place: 'San Francisco',
		requiredTech: ['Java', 'Android'],
		groupSize: '2-3 people',
		poster: 'geminicloudgeminihackathon.png'
	},
	{
		id: 4,
		name: 'google chrome Built-in challenge',
		timing: '24 hours',
		place: 'Online',
		requiredTech: ['JavaScript', 'HTML/CSS'],
		groupSize: '2-4 people',
		poster: 'googlechromebuiltinaichallenge.jpg'
	},
	{
		id: 5,
		name: 'google photorealistic-3d maps challenge',
		timing: '24 hours',
		place: 'Online',
		requiredTech: ['JavaScript', 'HTML/CSS'],
		groupSize: '2-4 people',
		poster: 'googlephotorealistic3dmapschallenge.jpg'
	},

	// Add more hackathons here
];

hackathons.forEach(hackathon => {
	const hackathonBox = document.createElement('div');
	hackathonBox.className = 'hackathon-box';

	const hackathonName = document.createElement('h2');
	hackathonName.textContent = hackathon.name;

	const hackathonDetails = document.createElement('div');
	hackathonDetails.className = 'hackathon-details';

	const timing = document.createElement('span');
	timing.textContent = `Timing: ${hackathon.timing}`;

	const place = document.createElement('span');
	place.textContent = `Place: ${hackathon.place}`;

	const requiredTech = document.createElement('span');
	requiredTech.textContent = `Required Tech: ${hackathon.requiredTech.join(', ')}`;

	const groupSize = document.createElement('span');
	groupSize.textContent = `Group Size: ${hackathon.groupSize}`;

	hackathonDetails.appendChild(timing);
	hackathonDetails.appendChild(place);
	hackathonDetails.appendChild(requiredTech);
	hackathonDetails.appendChild(groupSize);

	hackathonBox.appendChild(hackathonName);
	hackathonBox.appendChild(hackathonDetails);
	const registerButton = document.createElement('button');
	registerButton.textContent = 'Register';
	registerButton.className = 'register-button';

	hackathonBox.appendChild(registerButton);

	const poster = document.createElement('img');
	poster.src = `${hackathon.poster}`;
	poster.alt = hackathon.name;
	poster.className = 'poster';

	hackathonBox.appendChild(poster);

	// const registerButton = document.createElement('button');
	// registerButton.textContent = 'Register';
	// registerButton.className = 'register-button';

	// hackathonBox.appendChild(registerButton);

	hackathonGrid.appendChild(hackathonBox);
});

// Add event listeners to register buttons
const registerButtons = document.querySelectorAll('.register-button');

registerButtons.forEach(button => {
	button.addEventListener('click', () => {
		// Handle registration process here
		alert('Registration successful!');
	});
});

// Add event listeners to navigation links
navLinks.forEach(link => {
	link.addEventListener('click', (e) => {
		e.preventDefault();
		const linkText = link.textContent.toLowerCase();
		switch (linkText) {
			case 'notifications':
				window.location.href = 'notifications.html';
				break;
			case 'chats':
				window.location.href = 'chats.html';
				break;
			case 'profile':
				window.location.href = 'profile.html';
				break;
			case 'tests':
				window.location.href = 'tests.html';
				break;
			default:
				break;
		}
	});
const contactUsLink = document.querySelector('a[href="#contact-us"]');
contactUsLink.addEventListener('click', function(event) {
  event.preventDefault();
  const contactUsSection = document.getElementById('contact-us');
  contactUsSection.scrollIntoView({
    behavior: 'smooth'
  });
});
const aboutUsLink = document.querySelector('a[href="#about-us"]');
aboutUsLink.addEventListener('click', function(event) {
  event.preventDefault();
  const aboutUsSection = document.getElementById('about-us');
  aboutUsSection.scrollIntoView({
    behavior: 'smooth'
  });
});
});


// Add event listeners to posters
const posters = document.querySelectorAll('.poster');

for (let i = 0; i < posters.length; i++) {
	let poster = posters[i];
	poster.addEventListener('click', () => {
		const posterImage = poster.src;
		const posterDetails = poster.alt;
		const hackathonDetails = poster.parentNode.querySelector('.hackathon-details');
		const hackathonName = poster.parentNode.querySelector('h2').textContent;
		const timing = hackathonDetails.querySelector('span:nth-child(1)').textContent;
		const place = hackathonDetails.querySelector('span:nth-child(2)').textContent;
		const requiredTech = hackathonDetails.querySelector('span:nth-child(3)').textContent;
		const groupSize = hackathonDetails.querySelector('span:nth-child(4)').textContent;

		const modal = document.createElement('div');
		modal.className = 'modal';
		modal.innerHTML = `
			<div class="modal-content">
				<span class="close">&times;</span>
				<img src="${posterImage}" alt="${posterDetails}">
				<h2>${hackathonName}</h2>
				<p>Timing: ${timing}</p>
				<p>Place: ${place}</p>
				<p>Required Tech: ${requiredTech}</p>
				<p>Group Size: ${groupSize}</p>
			</div>
		`;

		document.body.appendChild(modal);

		const closeButton = modal.querySelector('.close');
		closeButton.addEventListener('click', () => {
			modal.remove();
		});

		modal.addEventListener('click', (e) => {
			if (e.target === modal) {
				modal.remove();
			}
		});
	});
}