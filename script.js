document.addEventListener("DOMContentLoaded", () => {
    // Load the TensorFlow.js model (adjust the path to your model)
    async function loadModel() {
        const model = await tf.loadLayersModel('tfjs_layers_model/model.json');
        console.log(model.summary())
        return model;
    }

    const chatlog = document.getElementById("chatlog");
    const userMessage = document.getElementById("userMessage");
    const sendMessage = document.getElementById("sendMessage");

    let chatbotModel;

    // Initialize the chatbot when the page loads
    loadModel().then((model) => {
        chatbotModel = model;
        appendMessage("Chatbot", "Hello! How can I assist you today?");
    });

    // Function to append a message to the chatlog
    function appendMessage(sender, message) {
        const messageElement = document.createElement("div");
        messageElement.className = sender === "User" ? "user-message" : "chatbot-message";
        messageElement.textContent = `${sender}: ${message}`;
        chatlog.appendChild(messageElement);
    }

    // Function to handle user messages
    function handleUserMessage() {
        const message = userMessage.value;
        if (message.trim() === "") return; // Don't send empty messages

        appendMessage("User", message);

        // Use the chatbot model to generate a response (adjust this logic)
        const response = "Hello There"; // Replace with your chatbot logic

        appendMessage("Chatbot", response);

        // Clear the input field
        userMessage.value = "";
    }

    // Event listener for sending messages
    sendMessage.addEventListener("click", handleUserMessage);
    userMessage.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            handleUserMessage();
        }
    });
});
