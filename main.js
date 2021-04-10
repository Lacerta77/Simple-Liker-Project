// We use this code, known as Objects, to control toggling like / unlike status

const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const glyphStates = {
  "♡": "♥",
  "♥": "♡"
};

const colorStates = {
  "red" : "",
  "": "red"
};
  
  const articleHearts = document.querySelectorAll(".like-glyph");
  
  function likeCallback(e) {
    const heart = e.target;
    mimicServerCall("bogusUrl")
      .then(function(serverMessage){
         heart.innerText = glyphStates[heart.innerText];
         heart.style.color = colorStates[heart.style.color];
      })
      .catch(function(error) {
        const modal = document.getElementById("modal");
        modal.className = "";
        modal.innerText = error;
        setTimeout(() =>  modal.className = "hidden", 3000);
      });
  }
  
  for (const glyph of articleHearts) {
    glyph.addEventListener("click", likeCallback);
  }
  
  function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      const isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Something went wrong, try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}