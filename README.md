#Poet Poetry Generator

This is a project that generates random poems using a collection of poems from various poets. The poems are displayed on the webpage and can be read out loud using the built-in text-to-speech functionality in your browser.

This is a JavaScript code that fetches data from an API and uses the Web Speech API to read the fetched text out loud. Here's a breakdown of the code:

1> let paraRead and let isOn = false declare variables to hold the fetched text and to track whether the sound is on or off, respectively.
2> const paraRead1, const paraRead2, and const readButton use querySelector() and getElementById() to obtain references to the DOM elements where the fetched text will be displayed and the read button is located.

3> const api defines an asynchronous function that fetches data from the API using the fetch() method and returns the data as a JSON object using the json() method. If an error occurs during the fetch, it is logged to the console.

api() is called with then() and catch() methods to handle the returned data or an error, respectively.

4> if (!data) { return; } checks if the data is null, undefined or falsey, and returns if so.

5> const randomNumber generates a random number within the length of the fetched data.

6> const upText and const belowText extract the poetry from the data object using the random number and update the content of the HTML elements specified earlier using the textContent property.
paraRead concatenates the upText and belowText variables to form a single string that will be read out loud.

readButton.addEventListener() adds a click event listener to the read button.

7> const utterance creates a new SpeechSynthesisUtterance object that will contain the text to be read.

utterance.text sets the text content of the SpeechSynthesisUtterance object to the paraRead variable.

utterance.lang sets the language of the SpeechSynthesisUtterance object to Hindi-India.

utterance.rate sets the speed of the reading to 0.7 (70%).

utterance.volume sets the volume of the reading to maximum (1).

8> if (!isOn) checks if the sound is off.

readButton.innerHTML sets the inner HTML of the read button to display either 'ON' or 'OFF' and a speaker icon.

isOn toggles the sound on or off.

speechSynthesis.speak(utterance) speaks the text using the Web Speech API if the sound is on.
speechSynthesis.pause() pauses the reading if the sound is turned off.


Overall, this code shows how to use the Web Speech API to read text out loud from an API in a web application.
