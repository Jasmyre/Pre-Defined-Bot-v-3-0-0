
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
    
  });
  
});



const botName = document.getElementById("bot-name");

let botNames = [
  "Spongee Bob",
]

setTimeout(() => {
  let botInnerName = document.createTextNode(botNames[Math.floor(Math.random() * botNames.length)]);
  
  botName.append(botInnerName);
  
});

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
    
    setTimeout(() => botResponse(userMessage.toLowerCase()), 1250);
    
    userMessageInput.value = "";
    
  }
  
});

userMessageInput.addEventListener("input", () => {
  userMessage = userMessageInput.value;
  
});

document.onkeydown = (e) => {
  console.log(e.code);
  if (e.code === "Enter") {
    if (userMessage == "") {
      return;
      
    } else {
      addUserMessage(userMessage);
      
      const mainSection = document.getElementById("main");
      
      setTimeout(function() {mainSection.lastChild.scrollIntoView()}, 250);
      
      setTimeout(() => botResponse(userMessage.toLowerCase()), 1250);
      
      userMessageInput.value = "";
      
    }

  }
}

function botResponse(userMessage) {
  let response = "";
  
  const findResponse = data.find(response => response.inputs.includes(userMessage));
  
  if (findResponse) {
    response = findResponse.outputs[Math.floor(Math.random() * findResponse.outputs.length)];
    
  } else {
    response = unkownMessageResponse[Math.floor(Math.random() * unkownMessageResponse.length)];
    
  }
  
  addBotMessage(response);
  
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
