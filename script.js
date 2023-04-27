function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

function getQuote() {
    const quotes = [
        {
            "quotee": "Ben",
            "quote": "I love you"
        },
        {
            "quotee": "Evi",
            "quote": "I love mummy! You can't love mummy!"
        },
        {
            "quotee": "Evi",
            "quote": "I not 'licious! I'm Evelyn June Ashley!"
        },
        {
            "quotee": "Evi",
            "quote": "This is trifficult!"
        },
        {
            "quotee": "Ben",
            "quote": "You are an amazing mother. Evi clearly loves you so much, and I love to see you with her. I can't wait to see how your bond grows over time."
        },
        {
            "quotee": "Ben",
            "quote": "There is nobody I'd rather move through this life with than you."
        },
        {
            "quotee": "Evi",
            "quote": "No! Get OFF my BEEED!"
        },
        {
            "quotee": "Evi",
            "quote": "Maybe mummy will feel better soon?"
        },
        {
            "quotee": "Ben",
            "quote": "Get out there and shit all over this day. It is your bitch."
        },
        {
            "quotee": "Evi",
            "quote": "No, go away! I'm doing a poo."
        }
    ];

    const index = randomIntFromInterval(0, quotes.length-1);

    console.log(index);

    return quotes[index];
}

function applyQuote(quote) {
    const quoteElement = document.getElementById("quote");
    const attributionElement = document.getElementById("quote-attribution");

    quoteElement.innerText=quote.quote;
    attributionElement.innerText=quote.quotee;
}


document.addEventListener('DOMContentLoaded', (event) => {
    const quote = getQuote();
    applyQuote(quote);
  });
