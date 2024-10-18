// Get the messagers list element
const messagersList = document.getElementById('messagers-list');

// Get the chat log element
const chatLog = document.getElementById('chat-log');

// Get the chat form element
const chatForm = document.getElementById('chat-form');

// Get the message input element
const messageInput = document.getElementById('message-input');

// Get the send button element
const sendButton = document.getElementById('send-button');

// Array of messagers' names
const messagers = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
    { id: 3, name: 'Bob Smith' },
    // ...
];

// Generate the messagers list
messagers.forEach((messager) => {
    const listItem = document.createElement('li');
    listItem.textContent = messager.name;
    listItem.dataset.messagerId = messager.id;
    messagersList.appendChild(listItem);
});

// Add event listener to each messager list item
messagersList.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        const messagerId = event.target.dataset.messagerId;
        // Get the chat log for the selected messager
        const chatLogHtml = getChatLogHtml(messagerId);
        chatLog.innerHTML = chatLogHtml;
    }
});

// Function to get the chat log HTML for a given messager ID
function getChatLogHtml(messagerId) {
    // Return the chat log HTML for the selected messager
    // This can be fetched from a database or API
    return '';
}

// Add event listener to the send button
sendButton.addEventListener('click', (event) => {
    event.preventDefault();
    const message = messageInput.value.trim();
    if (message !== '') {
        // Send the message to the server
        // This can be done using AJAX or WebSocket
        console.log('Message sent:', message);

        // Display the sent message on both sides of the chat
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', 'me');
        messageElement.textContent = message;
        chatLog.appendChild(messageElement);

        // Simulate the other person's response
        const responseMessage = 'Hello!';
        const responseMessageElement = document.createElement('div');
        responseMessageElement.classList.add('message', 'other');
        responseMessageElement.textContent = responseMessage;
        chatLog.appendChild(responseMessageElement);

        // Clear the message input field
        messageInput.value = '';
    }
});