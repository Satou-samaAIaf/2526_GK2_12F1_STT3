
function onSecretCardClick(event, card, link) {
  console.log("Secret card clicked:", link.href);
}

document.addEventListener("DOMContentLoaded", function () {
  const secretCard = document.querySelector(".card.secret-card");
  if (!secretCard) return;

  const secretLink = secretCard.querySelector("a");
  if (!secretLink) return;

  secretCard.addEventListener("click", function (event) {
    const targetLink = event.target.closest("a");
    if (targetLink !== secretLink) return;

    event.preventDefault();
    if (secretCard.classList.contains("spinning")) return;

    if (typeof onSecretCardClick === "function") {
      try {
        onSecretCardClick(event, secretCard, secretLink);
      } catch (err) {
        console.error("onSecretCardClick threw an error:", err);
      }
    }

    secretCard.classList.add("spinning");

    setTimeout(function () {
      secretCard.classList.remove("spinning");
      secretCard.classList.add("rotating");

      setTimeout(function () {
        window.location.href = secretLink.href;
      }, 600);
    }, 1000);
  });
});
