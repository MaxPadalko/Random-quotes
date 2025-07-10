import quotes from "../data/quotes.js";
import { generateRandomInt } from "../utils.js";
import { handleFavorite } from "./favorites.js";

let currentQuote = null;

function chooseRandomQuote(quotes) {
  const randomIndex = generateRandomInt(quotes.length);
  return quotes[randomIndex];
}

function handleQuote() {
  const randomQuote = chooseRandomQuote(quotes);
  currentQuote = randomQuote;
  displayQuote(randomQuote);
}

function displayQuote(quote) {
  const { text, author: quoteAuthor, isFavorite } = quote;
  const quoteElement = document.getElementById("quote");
  const quoteAuthorElement = document.getElementById("quote-author");
  quoteElement.textContent = text;
  quoteAuthorElement.textContent = quoteAuthor;
  handleFavorite(isFavorite);
}

export { handleQuote, currentQuote };
