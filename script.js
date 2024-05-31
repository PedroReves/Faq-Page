const cards = document.querySelectorAll(".container__card");
cards.forEach(card => {
  const card_btn = card.querySelector(".container__card-image");
  const card_btn_minus = card.querySelector(".container__card-image-minus");
  const card_title = card.querySelector(".container__card-title");
  const card_desc = card.querySelector(".container__card-desc");

  card_btn.addEventListener("click", () => {
    card_btn.classList.add("disabled");
    card_btn_minus.classList.remove("disabled");
    card_desc.style.display = "block";
  });

  card_btn_minus.addEventListener("click", () => {
    card_btn_minus.classList.add("disabled");
    card_btn.classList.remove("disabled");
    card_desc.style.display = "none";
  });
})
