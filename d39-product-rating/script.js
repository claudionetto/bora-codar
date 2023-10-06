const stars = document.querySelectorAll(".ph-star");
const btnConfirm = document.getElementById("btn-confirm");
const arrowReturn = document.getElementById("arrow-return");
const btnSend = document.getElementById("btn-send");

stars.forEach((element) => {
  element.addEventListener("click", () => {
    const starSelected = document.querySelector(".selected");
    if (starSelected) {
      starSelected.classList.remove("selected");
    }

    element.classList.add("selected");
  });
});

btnConfirm.addEventListener("click", checkRating);
arrowReturn.addEventListener("click", toggleCard);
btnSend.addEventListener("click", sendAvalation);

function sendAvalation() {
  const starSelected = document.querySelector(".selected");
  const starValue = starSelected.getAttribute("data-value");
  const reviewComment = document.getElementById("review-comment");
  const commentText = reviewComment.value;

  alert(
    `Você classificou em ${starValue} estrelas, e deixou o seguinte comentario: "${commentText}"`
  );
}

function checkRating() {
  const starSelected = document.querySelector(".selected");
  if (!starSelected) {
    alert("Avalie antes de continuar");
    return;
  }

  toggleCard();
}

function toggleCard() {
  const firstCard = document.getElementById("first-card");
  const secondCard = document.getElementById("second-card");

  firstCard.classList.toggle("active");
  secondCard.classList.toggle("active");
}
