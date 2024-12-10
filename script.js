// Toggle between Dark and Light Themes
const themeToggle = document.getElementById('toggle-theme');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  body.classList.toggle('light-theme');
});

// Chatbot Functionality
const chatbotBtn = document.getElementById('chatbot-btn');
const chatbot = document.getElementById('chatbot');
const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// Predefined Chatbot Responses
const responses = {
  "what is your name": "Hey, I am Robot Neyo, developed by Team Elite.",
  "who developed you": "I was developed officially by the members of Team Elite.",
  "name all the members": "Adarsh Kumar Singh, Virat Soni, R2, S4, S6.",
  "tell me about yourself": "I am Robot Neyo developed by Team Elite. But I am only the robo inside your phone. The real Robot Neyo is at the exhibition on 28 December 2024 at Lucknow Public School Anand Nagar.",
  "what do you like": "I like talking with you.",
  "contact us": "Email me at: adarshkumarsinghmac@gmail.com",
  "default": "I'm sorry, I didn't understand that. Try asking something else."
};

chatbotBtn.addEventListener('click', () => {
  chatbot.style.display = chatbot.style.display === 'none' || chatbot.style.display === '' ? 'flex' : 'none';
});

sendBtn.addEventListener('click', () => {
  const userMessage = userInput.value.toLowerCase().trim();
  const botReply = responses[userMessage] || responses['default'];
  
  // Display user message and bot reply
  chatMessages.innerHTML += `<p><strong>You:</strong> ${userMessage}</p>`;
  chatMessages.innerHTML += `<p><strong>Robot Neyo:</strong> ${botReply}</p>`;
  
  // Clear input and scroll to the bottom of chat
  userInput.value = '';
  chatMessages.scrollTop = chatMessages.scrollHeight;
});

// Feedback Form Submission
const feedbackForm = document.getElementById('feedback-form');

feedbackForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const teamMember = document.getElementById('team-member').value.trim();
  const message = document.getElementById('message').value.trim();

  // Simulate sending feedback via email
  alert(`Feedback sent successfully!\n\nName: ${name}\nTeam Member: ${teamMember}\nMessage: ${message}`);
  
  // Clear the form
  feedbackForm.reset();
});

// Password Facts
const passwordInput = document.getElementById('password-input');
const revealFacts = document.getElementById('reveal-facts');
const factsDisplay = document.getElementById('facts-display');

revealFacts.addEventListener('click', () => {
  const password = passwordInput.value.trim();
  if (password.length === 4 && !isNaN(password)) {
    factsDisplay.textContent = `Here are four amazing facts about me:
1. I am powered by Arduino.
2. I can avoid obstacles.
3. I understand voice commands.
4. I am Bluetooth controlled!`;
  } else {
    factsDisplay.textContent = "Please enter a valid 4-digit number.";
  }
});
