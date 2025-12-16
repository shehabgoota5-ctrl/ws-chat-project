const ws = new WebSocket("ws://localhost:8080");
const chat = document.getElementById("chat");

ws.onopen = () => {
  chat.innerHTML += "<p><em>Connected to server</em></p>";
};

ws.onmessage = (event) => {
  const msg = document.createElement("p");
  msg.textContent = event.data;
  chat.appendChild(msg);
};

function sendMessage() {
  const input = document.getElementById("message");
  if (input.value !== "") {
    ws.send(input.value);
    input.value = "";
  }
}

Add WebSocket client
