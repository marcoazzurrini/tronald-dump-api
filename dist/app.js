// ASSIGN DOM ELEMENTS TO VARIABLES
const form = document.getElementById('main-form');
const textInput = document.getElementById('text');
const output = document.getElementById('output');

// FORM LISTENS FOR SUBMIT
form.addEventListener('submit', getQuote);

// FUNCTION GET QUOTE
function getQuote(e) {
    e.preventDefault();

    fetch(`https://api.tronalddump.io/random/quote`, {
        headers: {
            "accept": "application/hal+json",
            mode: 'no-cors'
        },
    })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));

}