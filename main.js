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
  
  let articleHearts = document.querySelectorAll(".like-glyph");
  
  function likeCallback(e) {
    let heart = e.target;
    mimicServerCall()
      .then(function(serverMessage){

        alert("You notified the server!");
         alert(serverMessage);
         heart.innerText = glyphStates[heart.innerText];
         heart.style.color = colorStates[heart.style.color];
      })
      .catch(function(error) {
        alert("Something went wrong!");
      });
  }
 
  for (let glyph of articleHearts) {
    glyph.addEventListener("click", likeCallback);
    }
  
  function mimicServerCall() {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve("Pretend remote server notified of action!");
      }, 300);
    });
  }