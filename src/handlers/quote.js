import { generateRandomInt } from "../utils/math.js";
import { handleFavorite } from "./favorites.js";

function chooseRandomQuote(quotes) {
  const randomIndex = generateRandomInt(quotes.length);
  return quotes[randomIndex];
}

function handleQuote(quotes,favoriteQuotes,setCurrentQuote) {
  const randomQuote = chooseRandomQuote(quotes);
  // check if ID of random quotes is among ID's of favorite quotes
  if(favoriteQuotes.find((quote)=>quote.id===randomQuote.id)){
    randomQuote.isFavorite=true
  }
  setCurrentQuote(randomQuote);
  displayQuote(randomQuote);
}

function displayQuote(quote) {
  const { id, text, author: quoteAuthor, isFavorite } = quote;
  const quoteElement = document.getElementById("quote");
  const quoteTextElement = document.getElementById("quote-text");
  const quoteAuthorElement = document.getElementById("quote-author");
  quoteElement.dataset.currentQuoteId = id;
  quoteTextElement.textContent = `"${text}"`;
  quoteAuthorElement.textContent = quoteAuthor;
  handleFavorite(isFavorite);
}

function findQuoteById(quotes, id) {
  return quotes.find((quote) => quote.id === id);
}

export { handleQuote, displayQuote, findQuoteById };
