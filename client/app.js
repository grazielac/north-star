// Find the form element
const messageForm = document.querySelector("#messageForm");
const responseDiv = document.querySelector("#response");

// Function to handle form submission
function handleSubmitMessageForm(event) {
  event.preventDefault(); // prevent page reload

  const formData = new FormData(messageForm);
  const message = formData.get("message");

  fetch("http://localhost:3000/messages", {  // replace with deployed backend URL if needed
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  })
    .then(res => res.json())
    .then(data => {
      responseDiv.textContent = data.status;  // show server response
    })
    .catch(err => {
      responseDiv.textContent = "Error sending message";
      console.error(err);
    });

  messageForm.reset(); // clear input
}

// Attach event listener
messageForm.addEventListener("submit", handleSubmitMessageForm);