const output = document.getElementById('output');
const input = document.getElementById('input');

output.textContent = "AI: Hello There! It's LS08 ChatBot here\n";

input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    const command = input.value.trim();
    output.textContent += `You: ${command}\n`;
    processCommand(command);
    input.value = '';
  }
});

function processCommand(command) {
  if (command.toLowerCase() === 'hello','Hello', 'Hi', 'hi', 'Hey', 'hey') {
    output.textContent += `AI: Hello There!\n`;
  } else {
    output.textContent += `AI: This Website is Still Under Development Contact: ls08universe@gmail.com.\n`;
  }
}