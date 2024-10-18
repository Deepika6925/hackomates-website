// Get the notifications list element
const notificationsList = document.getElementById('notifications-list');

// Array of notifications
const notifications = [
    {
        id: 1,
        type: 'new_match',
        text: 'You have a new match for the upcoming hackathon! Chat with them now.',
        time: '5 minutes ago',
        icon: 'fa fa-user-plus'
    },
    {
        id: 2,
        type: 'test_result',
        text: 'Your test results are in! Check your skills and find a compatible partner.',
        time: '1 hour ago',
        icon: 'fa fa-chart-bar'
    },
    {
        id: 3,
        type: 'hackathon_alert',
        text: 'New hackathon alert! "Hack for Good" is happening in your area on March 12th.',
        time: '2 hours ago',
        icon: 'fa fa-bell'
    },
    // ...
];

console.log(notifications);
notifications.forEach((notification) => {
	const listItem = document.createElement('li');
	listItem.innerHTML = `
	  <div class="notification">
		<i class="notification-icon ${notification.icon}"></i>
		<span class="notification-text">${notification.text}</span>
		<span class="notification-time">${notification.time}</span>
	  </div>
	`;
	notificationsList.appendChild(listItem);
  }); // Check that the notifications array is being populated correctly

// Generate the notifications list
notifications.forEach((notification) => {
    console.log(notification); // Check that each notification object is being processed correctly
    const listItem = document.createElement('li');
    const notificationElement = document.createElement('div');
    notificationElement.classList.add('notification');

    const iconElement = document.createElement('i');
    iconElement.classList.add('notification-icon', notification.icon);
    notificationElement.appendChild(iconElement);

    const textElement = document.createElement('span');
    textElement.classList.add('notification-text');
    textElement.textContent = notification.text;
    notificationElement.appendChild(textElement);

    const timeElement = document.createElement('span');
    timeElement.classList.add('notification-time');
    timeElement.textContent = notification.time;
    notificationElement.appendChild(timeElement);

    listItem.appendChild(notificationElement);
    notificationsList.appendChild(listItem);
});