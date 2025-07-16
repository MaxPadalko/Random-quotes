import { favoriteBtn } from "../../index.js";

function showFavoriteBtn(btn) {
  btn.style.display = "inline-block";
}

function hideFavoriteBtn(btn) {
  btn.style.display = "none";
}

function toggleFavoriteBtnIcon(isFavorite, el) {
  el.classList.toggle("fa", isFavorite);
  el.classList.toggle("far", !isFavorite);
}

function toggleFavorite(quote, btn, container) {
  quote.isFavorite = !quote.isFavorite;
  const { id, text, author: quoteAuthor, isFavorite } = quote;
  toggleFavoriteBtnIcon(isFavorite, btn);

  if (isFavorite) {
    showFavoriteCard(id, text, quoteAuthor, container);
  } else {
    hideFavoriteCard(quote.text);
  }
}

function handleFavorite(isFavorite) {
  showFavoriteBtn(favoriteBtn);
  toggleFavoriteBtnIcon(isFavorite, favoriteBtn);
}

function showFavoriteCard(id, text, author, container) {
  const favoriteCard = document.createElement("div");
  favoriteCard.classList.add("favorite-card");
  favoriteCard.dataset.quoteId = id;
  favoriteCard.innerHTML = `
<p>${text}</p>
<p class="author">${author}</p>
`;
  container.appendChild(favoriteCard);
}

function hideFavoriteCard(id) {
  const card = document.querySelector(`.favorite-card[data-quote-id="${id}"]`);
  console.log(card);
  if (card) {
    card.remove();
  }

  // const favoriteCards = document.querySelectorAll(".favorite-card");
  // favoriteCards.forEach((card) => {
  //   if (card.textContent.includes(text)) {
  //     card.remove();
  //   }
  // });
}

export { handleFavorite, toggleFavorite, hideFavoriteBtn };
