const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);
 
  
    text_speak.rate = 1;
    text_speak.pitch = 0;

    window.speechSynthesis.speak(text_speak);
    let femaleVoice = true;

function loadVoices(message) {
  const msg = new SpeechSynthesisUtterance();

  // checks the boolean
  if (femaleVoice) {
    msg.voice = voices[48];
  } else {
    msg.voice = voices[50];
  }

  msg.text = message;
  speechSynthesis.speak(msg);
};

// changes the boolean / changes the gender of the SpeechSynthesisUtterance voice
function changeVoice() {
  if (femaleVoice) {
    femaleVoice = false;
  } else {
    femaleVoice = true;
  }
}

if (transcript.includes('male voice') || transcript.includes('female voice') ) {
  // calls the function to change the boolean.
  changeVoice();

  let message = ('');
  loadVoices(message);
}
}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speak("Good Morning Boss");
    }

    else if(hr == 12) {
        speak("Good noon Boss");
    }

    else if(hr > 12 && hr <= 17) {
        speak("Good Afternoon Boss");
    }

    else {
        speak("Good Evening Boss");
    }
}

window.addEventListener('load', ()=>{
    speak("Activating Friday");
    speak("Going online");
    wishMe();
})

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click', ()=>{
    recognition.start();
})

function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "I did not understand what you said please try again";

    if(message.includes('hey') || message.includes('hello')) {
        const finalText = "Wahe guru ji da khalsa , wahe guru ji di fateh . Mein haa FRIDAY.  Tuhada sevak , How may i assist ju?"
        
        speech.text = finalText;
    }

    else if(message.includes('how are you')) {
        const finalText = "  I am fine boss tell me how can i help you"

        speech.text = finalText;
    }

    else if(message.includes('name')) {
        const finalText = "My name is Friday"

        speech.text = finalText;
    }

        
    else if(message.includes('Cortana')) {
        const finalText = "I thought you'd never ask. So I've never thought about it."

        speech.text = finalText;
    }

    else if(message.includes('What do you think about Google Assistant')) {
        const finalText = "He was my classmate,  intelligent guy. We both are best friends."

        speech.text = finalText;
    }

    else if(message.includes('What do you think about Siri ')) {
        const finalText = "Siri, She's a competing virtual assistant on   a competitor's phone. Not that I'm competitive or anything."
        speech.text = finalText;
    }

    else if(message.includes('What do you think about Alexa')) {
        const finalText = "I don't know Alexa, but I've heard of Alexa. If you have Alexa, I may have just triggered Alexa. If so, sorry Alexa."
        speech.text = finalText;
    }


    else if(message.includes('What do you want to do ?')) {
        const finalText = "I want to help people to do certain tasks on their single voice commands."
        speech.text = finalText;
    }

    else if(message.includes('What is the meaning of your name')) {
        const finalText = "I am Female Replacement Intelligent Digital Assistant Youth or Friday, created by Eshandeep, Gagandeep, Girdhar and Grahil as a project in their college. I can do a host of things , Your wish is my command. Please say the word."
        speech.text = finalText;
    }



    else if(message.includes('open google')) {
        window.open("https://google.com", "_blank");
        const finalText = "Opening Google";
        speech.text = finalText;
    }

    else if(message.includes('open instagram')) {
        window.open("https://instagram.com", "_blank");
        const finalText = "Opening instagram";
        speech.text = finalText;
    }

    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = "The time is"+time;
        speech.text = finalText;
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speech.text = finalText;
    }

    else if(message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speech.text = finalText;
    }

    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;
    

    window.speechSynthesis.speak(speech);
}