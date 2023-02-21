// Get references to the DOM elements
let paraRead;
let isOn = false;

const paraRead1 = document.querySelector('.read1');
const paraRead2 = document.querySelector('.read2');
const readButton = document.getElementById('read-button');


// Define an async function to fetch the API data
const api = async () => {
    try {
        const response = await fetch('https://mocki.io/v1/7c0083f0-8857-44aa-a394-001f75d7230d');
        // const response = await fetch('https://mocki.io/v1/00887465-bd68-47da-9265-b2e9927a3915');
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Error fetching data:', error);
    }
}

// Call the API function and update the UI with the returned data
api().then((data) => {
    if (!data) {
        return;
    }

    console.log(data)
    let upText;
    let belowText;
    //Generate Random number
    const randomNumber = Math.floor(Math.random() * data.length);

    // Update the paragraph text with the first item in the data array
    if (randomNumber < data.length-1) {
        upText = data[randomNumber].poetry[0];
        belowText = data[randomNumber].poetry[1];
        paraRead1.textContent = `${upText}`;
        paraRead2.textContent = `${belowText}`;

        paraRead = `${upText} ${belowText}`;
        console.log(randomNumber)
        // Add an event listener to the Read button
        readButton.addEventListener('click', () => {
            const utterance = new SpeechSynthesisUtterance();

            // Set the text, language, and rate of the utterance
            utterance.text = paraRead;
            utterance.lang = 'hi-IN';
            utterance.rate = 0.7;
            utterance.volume = 1;

            try {

                // Sound ON Or OFF
                if (!isOn) {
                    readButton.innerHTML = `<img src="sound.png" alt="" width="30" height="30"> ON`
                    isOn = true;
                    // Speak the utterance using the speech synthesis API
                speechSynthesis.speak(utterance);
                console.log(utterance)
                }
                else {
                    readButton.innerHTML = `<img src="sound.png" alt="" width="30" height="30"> OFF`
                    isOn = false;
                    // pause the utterance using the speech synthesis API
                    speechSynthesis.pause();
                }

            } catch (error) {
                console.error('Error speaking text:', error);
            }
        });
    }
}).catch((error) => {
    console.error('Error loading data:', error);
});