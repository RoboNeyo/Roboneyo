// Toggle between Dark and Light Themes
const themeToggle = document.getElementById('toggle-theme');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  body.classList.toggle('light-theme');
});

// Chatbot Functionality
const chatbot = document.getElementById('chatbot');
const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

const responses = {
  "what is your name": "Hey, I am Robot Neyo, developed by Team Elite.",
  "who developed you": "I was developed officially by the members of Team Elite.",
  "name all the members": "Adarsh Kumar Singh, Virat Soni, R2, S4, S6.",
  "tell me about yourself": "I am Robot Neyo developed by Team Elite. The real Robot Neyo is at the exhibition on 28 December 2024.",
  "default": "I'm sorry, I didn't understand that."
};

sendBtn.addEventListener('click', () => {
  const userMessage = userInput.value.toLowerCase().trim();
  const botReply = responses[userMessage] || responses['default'];
  chatMessages.innerHTML += `<p><strong>You:</strong> ${userMessage}</p>`;
  chatMessages.innerHTML += `<p><strong>Robot Neyo:</strong> ${botReply}</p>`;
  userInput.value = '';
  chatMessages.scrollTop = chatMessages.scrollHeight;
});