new Typewriter('h1', {
  strings: ["Huesday","Mooday"],
  autoStart: true,
  loop:true,
  delay:80
});

new Typewriter('p', {
  strings: "Either click on a mood wheel or manually input what mood you're in below",
  autoStart: true,
  delay:10

});

function helpinfo(){
  alert("Help?")
}

let helpElement = document.getElementById("help")
helpElement.addEventListener("click",helpinfo)