const propertyCards = document.querySelectorAll(".propertyCard");

propertyCards.forEach(card => {
  const video = card.querySelector(".housevideo");

  card.addEventListener("mouseenter", () => {
    video.play();
  });

  card.addEventListener("mouseleave", () => {
    video.pause();
  });
});

