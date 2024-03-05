// Define a global memory array to store responses
let memory = [
  `your responses should be short and minimal and is straight forward to the point.`,
  "hi, what's good?"
];

// Function to interact with the OpenAI API to generate a response based on input text
async function generateResponse(inputText) {
  // Define your OpenAI API key
  const apiKey = "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";

  // Define the OpenAI API endpoint
  const apiUrl = "https://api.openai.com/v1/completions";

  try {
    // Make a POST request to the OpenAI API
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo-instruct", // Adjust the model as needed
        prompt: inputText,
        max_tokens: 2000, // Adjust the max_tokens parameter as needed
      }),
    });

    // Parse the response as JSON
    const responseData = await response.json();
    console.log(responseData);

    // Store the generated text in memory
    memory.push(responseData.choices[0].text.trim());

    // Check if the total length of all responses in memory exceeds 2048 tokens
    let totalLength = memory.reduce((acc, curr) => acc + curr.length, 0);
    while (totalLength > 2048) {
      // Remove the second eldest memory
      memory.shift();
      totalLength = memory.reduce((acc, curr) => acc + curr.length, 0);
    }

    // Return the generated text from the API response
    return responseData.choices[0].text.trim();
  } catch (error) {
    // Handle errors
    console.error("Error:", error);
    return null;
  }
}

// Example usage of the function
async function exampleUsage(text) {
  memory.push(text + ".");
  const inputText = memory[memory.length - 1];
  console.log(memory[memory.length - 1]);
  const response = await generateResponse(inputText);
  console.log(response);
}

// Call the example usage function
exampleUsage("Hello, how are you?");
