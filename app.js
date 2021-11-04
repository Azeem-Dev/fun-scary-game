const spookyPicture = document.querySelector(".spooky-picture");
const screamSound = document.querySelector(".scream-sound");
const collisionCheck = (values) => {
  if (values === "maze-border") {
    screamSound.muted = true;
    screamSound.play();
    spookyPicture.style.display = "block";
    document.body.style.background = "black";
  }
};
window.addEventListener("mousemove", (e) => {
  let check = e.target.classList.value;
  collisionCheck(check);
});
