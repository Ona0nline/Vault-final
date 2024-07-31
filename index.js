new Typewriter('h1', {
  strings: ["Huesday","Mooday"],
  autoStart: true,
  loop:true,
  delay:80
});

new Typewriter('p', {
  strings: "Either click on a mood wheel that describes your day or manually input what mood best describes your day",
  autoStart: true,
  delay:10

});

function helpinfo(){
  alert("Help?")
}

let helpElement = document.getElementById("help")
helpElement.addEventListener("click",helpinfo)