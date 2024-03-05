
// 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

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
    
  });
  
});

// Define a global memory array to store responses
let memory = [
  `your responses should be short and minimal and is straight forward to the point.`,
  "hi, what's good?"
];



// Function to interact with the OpenAI API to generate a response based on input text
async function generateResponse(inputText) {
    // Define your OpenAI API key
    const apiKey = 'API KEY';

    // Define the OpenAI API endpoint
    const apiUrl = 'https://api.openai.com/v1/completions';

    try {
        // Make a POST request to the OpenAI API
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo-instruct', // Adjust the model as needed
                prompt: inputText,
                max_tokens: 2000 // Adjust the max_tokens parameter as needed
            })
        });

        // Parse the response as JSON
        const responseData = await response.json();

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
        console.error('Error:', error);
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
    return response;
}

// Call the example usage function
// exampleUsage();

// =================================================================

const botName = document.getElementById("bot-name");
const defaultBotName = "Nick";
let botNames = [
  "Mike Oxlong",
  "Finn Gurrer",
  "Spongee Bob",
  "Donald McMurphy",
  "Thess Tickles",
  "Anita Hanjaab",
  "Anya Neeze",
  "Bhen Dover",
  "Clee Torres",
  "Dill Doe",
  "Dixie Normus",
  "Dixon B. Tweenerlegs",
  "Dixon Butts",
  "E. Norma Scock",
  "E. Norma Stits",
  "Herry Cox",
  "Heywood Japulmah Finga",
  "Laffmy Titsoff",
  "Lee Nover",
  "Lipin Jection",
  "Lou Briccant",
  "Lou Sirr",
  "Luke Atmyass",
  "Martha Fokker",
  "Mary Juana",
  "Mater Bates",
  "May I. Tutchem",
  "Roch Myaz",
  "Pat Myaz",
  "Rueben G. Spaut",
  "Seymour Buttz",
  "Sheeza Freak",
  "Ura Snotball",
  "Vye Brator",
  "Wilma Dhikfitt",
  "Wilma Fingerdoo",
  "Yuri Nator",
  "Hans Ohff",
  "Watson Herbush",
  "Weeney Stroker"
]

setTimeout(() => {
  let botInnerName = defaultBotName;
  
  botName.innerText = botInnerName;
  
});

let allowedRandomName = false;
let allowedGPT = true;

function toggleRandomName() {
  allowedRandomName = !allowedRandomName;

  if (allowedRandomName) {
    setTimeout(() => {
      let botInnerName = botNames[Math.floor(Math.random() * botNames.length)];
      
      botName.innerText = String (botInnerName);
      
    });
  } else {
    botName.innerText = defaultBotName;
  }

}


function toggleGPT() {
  allowedGPT = !allowedGPT;
}

toggleGPT();


console.log(allowedRandomName);



function firstBotMessage(text) {
  const mainSection = document.getElementById("main");
  
  let botMessageWrapper = document.createElement("div");
  let botMessageTime = document.createElement("span");
  let botMessage = document.createElement("div");
  let botInnerMessage = document.createTextNode(text);
  
  let botMessageTimeText = document.createTextNode(updateTime());
  
  botMessageWrapper.classList.add("bot-message-wrapper");
  botMessageTime.classList.add("message-time");
  botMessageTime.classList.add("hidden")
  botMessage.classList.add("bot-message");
  botMessage.classList.add("hidden");
  
  mainSection.append(botMessageWrapper);
  botMessageWrapper.append(botMessageTime);
  botMessageWrapper.append(botMessage);
  botMessageTime.append(botMessageTimeText);
  botMessage.append(botInnerMessage);
  
  addScrollAnimation();
  
}

firstBotMessage("Hi, How can i Help?");

function addScrollAnimation() {
  const hiddenElements = document.querySelectorAll(".hidden");
  hiddenElements.forEach((el) => {
    observer.observe(el);
    
  });
  
}

addScrollAnimation();

function addBotMessage(text) {  

  if (allowedGPT == false) {
    const mainSection = document.getElementById("main");
  
    let botMessageWrapper = document.createElement("div");
    let botMessageTime = document.createElement("span");
    let botMessage = document.createElement("div");
    let botInnerMessage = document.createTextNode(String(text));
    
    let botMessageTimeText = document.createTextNode(updateTime());
    
    botMessageWrapper.classList.add("bot-message-wrapper");
    botMessageTime.classList.add("message-time");
    botMessageTime.classList.add("hidden")
    botMessage.classList.add("bot-message");
    botMessage.classList.add("hidden");
    
    mainSection.append(botMessageWrapper);
    botMessageWrapper.append(botMessageTime);
    botMessageWrapper.append(botMessage);
    botMessageTime.append(botMessageTimeText);
    botMessage.append(botInnerMessage);
    
    addScrollAnimation();

  } else {
    const mainSection = document.getElementById("main");
  
    let botMessageWrapper = document.createElement("div");
    let botMessageTime = document.createElement("span");
    let botMessage = document.createElement("div");
    let botInnerMessage = document.createTextNode(String(text));
    console.log(text);
    
    let botMessageTimeText = document.createTextNode(updateTime());
    
    botMessageWrapper.classList.add("bot-message-wrapper");
    botMessageTime.classList.add("message-time");
    botMessageTime.classList.add("hidden")
    botMessage.classList.add("bot-message");
    botMessage.classList.add("hidden");
    
    mainSection.append(botMessageWrapper);
    botMessageWrapper.append(botMessageTime);
    botMessageWrapper.append(botMessage);
    botMessageTime.append(botMessageTimeText);
    botMessage.append(botInnerMessage);
    
  addScrollAnimation();
  }
  
}

function addUserMessage(text) {
  const mainSection = document.getElementById("main");
  
  let userMessageWrapper = document.createElement("div");
  let userMessageTime = document.createElement("span");
  let userMessage = document.createElement("div");
  let userInnerMessage = document.createTextNode(text);
  
  let userMessageTimeText = document.createTextNode(updateTime());
  
  userMessageWrapper.classList.add("user-message-wrapper");
  userMessageTime.classList.add("message-time");
  userMessageTime.classList.add("hidden");
  userMessage.classList.add("user-message");
  userMessage.classList.add("hidden");
  
  mainSection.append(userMessageWrapper);
  userMessageWrapper.append(userMessageTime);
  userMessageWrapper.append(userMessage);
  userMessageTime.append(userMessageTimeText);
  userMessage.append(userInnerMessage);
  
  addScrollAnimation();
  
}

const sendButton = document.getElementById("inputs-send");
const userMessageInput = document.getElementById("inputs-input");

document.onkeyup = (e) => {
 if (e.code === "Tab") {
  userMessageInput.click();

 } 

}

let userMessage = "";

sendButton.addEventListener("click", () => {
  if (userMessage == "") {
    return;
    
  } else {
    addUserMessage(userMessage);
    
    const mainSection = document.getElementById("main");
    
    setTimeout(function() {mainSection.lastChild.scrollIntoView()}, 250);
    
    if (allowedGPT == false) {
      setTimeout(() => botResponse(userMessage.toLowerCase()), 1250);
    } else {
      setTimeout(() => botResponse(userMessage), 1250);
    }
    
    userMessageInput.value = "";
    
  }
  
});

userMessageInput.addEventListener("input", () => {
  userMessage = userMessageInput.value;
  
});

document.onkeydown = (e) => {
  // console.log(e.code);
  if (e.code === "Enter") {
    if (userMessage == "") {
      return;
      
    } else {
      addUserMessage(userMessage);
      
      const mainSection = document.getElementById("main");
      
      setTimeout(function() {mainSection.lastChild.scrollIntoView()}, 250);
      
      if (allowedGPT == false) {
        setTimeout(() => botResponse(userMessage.toLowerCase()), 1250);
      } else {
        setTimeout(() => botResponse(userMessage), 1250);
      }
      
      userMessageInput.value = "";
      
    }

  }
}

function botResponse(userMessage) {

  if (allowedGPT == false) {
    let response = "";
  
    const findResponse = data.find(response => response.inputs.includes(userMessage));
    
    if (findResponse) {
      response = findResponse.outputs[Math.floor(Math.random() * findResponse.outputs.length)];
      
    } else {
      response = unkownMessageResponse[Math.floor(Math.random() * unkownMessageResponse.length)];
      
    }
    
    addBotMessage(response);
  } else {

    let message = exampleUsage(userMessage);
    addBotMessage(message);
  }
  
  const mainSection = document.getElementById("main");
    
  setTimeout(function() {mainSection.lastChild.scrollIntoView()}, 250);
  
  userMessage = "";
  
}

let data = [
  {
    inputs: [
      "hello",
      "hi",
      "sup"
    ],
    outputs: [
      "hello",
      "hi",
      "sup"
    ]
  },
  {
    inputs: [
      "ask me",
      "ask"
    ],
    outputs: [
      "whats the meaning of life?",
      "whats your favourite color?"
    ]
  },
  {
    inputs: [
      "haha",
      "hahah",
      "hahaha",
      "hahahah",
      "hahahaha",
      "hahahahah",
      "hahahahaha",
      "hahahahahah",
      "hahahahahaha",
      "hahahahahahah",
      "hahah",
      "hahahh",
      "hahahhh",
      "hahh",
      "hahahah",
      "hahha",
      "hahhah",
      "hahhahh"
    ],
    outputs: [
      "haha",
      "hahah",
      "HAHAHA",
      "hahahah",
      "hahahaha",
      "hahahahah",
      "HAHAHAHAHA",
      "hahahahahah",
      "hahahahahaha",
      "hahahahahahah",
      "hahah",
      "HaHHAH",
      "hahahhh"
    ]
  }
]

let unkownMessageResponse = [
  
  "I'm sorry, I didn't catch that.",
  "Apologies, I'm not quite sure what you mean.",
  "Sorry, I'm having trouble understanding your input.",
  "I'm sorry if I seem a bit confused.",
  "Apologies, I didn't get that. Can you provide more details?",
  "Sorry, it seems I'm not following. Can you try again?",
  "I apologize if I'm not quite on the same page.",
  "Sorry, I'm having difficulty interpreting your input.",
  "I'm sorry if I'm not understanding. Could you try explaining differently?",
  "Apologies, I didn't quite catch the meaning of your message.",
  "Sorry, it looks like I'm having trouble with your input.",
  "I apologize if I'm missing something. Can you please rephrase?",
  "Sorry, I'm not sure I follow. Can you clarify your input?",
  "I'm sorry if I'm not getting it. Can you try explaining differently?",
  "Sorry, it seems I'm not grasping your message. Can you provide more context?",
  "I apologize if I'm not following. Can you provide more information?",
  "Sorry, I'm not sure what you mean. Can you try explaining in a different way?",
  "I'm sorry if I'm not understanding your input correctly.",
  "Apologies, I'm struggling to comprehend your input.",
  "Sorry, I didn't quite catch that. Can you express it in a different way?",
  
  "I'm sorry, I didn't catch that. Can you please rephrase?",
  "Sorry, I'm having trouble understanding your input. Could you try again?",
  "Apologies, I didn't quite get what you said. Can you provide more details?",
  "I'm sorry if I'm not understanding. Could you express that differently?",
  "Sorry, I'm not sure I follow. Can you clarify your input?",
  "I apologize if I'm missing something. Could you please reword your message?",
  "Sorry, I didn't recognize that input. Can you try phrasing it differently?",
  "I'm sorry if I'm not on the same page. Could you restate your message?",
  "Apologies, I'm having difficulty interpreting your input. Can you try another way?",
  "Sorry, it seems I'm not grasping your message. Can you provide more context?",
  "I'm sorry if I'm not getting it. Could you try explaining differently?",
  "Sorry for any confusion. I'm having trouble understanding. Can you try rephrasing?",
  "I apologize if I'm not following. Can you provide more information?",
  "Sorry, I'm not sure what you mean. Can you try explaining in a different way?",
  "I'm sorry if I'm not understanding your input correctly. Can you try again?",
  "Sorry, it looks like I'm having difficulty with your input. Could you try another way?",
  "Apologies, I'm struggling to comprehend your input. Can you provide more details?",
  "I'm sorry if I'm not getting the message right. Can you rephrase?",
  "Sorry, I didn't quite catch that. Can you express it in a different way?",
  "I apologize if I'm not following. Could you please reword your input?"

];

function updateTime() {
  
  const date = new Date();
  
  let hrs = date.getHours();
  let min = date.getMinutes();
  let amOrPm = hrs > 12 ? "pm" : "am";
  
  hrs = (hrs % 12) || 12;
  
  hrs = formatZero(hrs);
  min = formatZero(min);
  
      
  function formatZero(time) {
    time = time.toString();
    return ( time.length < 2 ) ? "0" + time : time
      
  }
  
  return `${hrs}:${min} ${amOrPm}`
  
}