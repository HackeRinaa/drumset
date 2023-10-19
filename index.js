
document.querySelectorAll(".drum").forEach((drums) => {
  drums.addEventListener("click",function(){
    this.style.color="white";
    switch(this.innerHTML) {
      case "w":
        var crash = new Audio('./sounds/crash.mp3');
        crash.play();
        break;
      case "a":
        var snare = new Audio('./sounds/snare.mp3');
        snare.play();
        break;
      case "s":
        var tom1 = new Audio('./sounds/tom-1.mp3');
        tom1.play();
        break;
      case "d":
        var tom2 = new Audio('./sounds/tom-2.mp3');
        tom2.play();
        break;
      case "j":
        var tom3 = new Audio('./sounds/tom-3.mp3');
        tom3.play();
        break;
      case "k" :
        var tom4 = new Audio('./sounds/tom-4.mp3');
        tom4.play();
        break;
      case "l" :
        var kick = new Audio('./sounds/kick-bass.mp3');
        kick.play();
        break;
      default:
        console.log(this.innerHTML);
    }
  });
});


document.addEventListener("keypress",(event) => {
    var name = event.key;
    switch(name) {
      case "w":
        var crash = new Audio('./sounds/crash.mp3');
        crash.play();
        break;
      case "a":
        var snare = new Audio('./sounds/snare.mp3');
        snare.play();
        break;
      case "s":
        var tom1 = new Audio('./sounds/tom-1.mp3');
        tom1.play();
        break;
      case "d":
        var tom2 = new Audio('./sounds/tom-2.mp3');
        tom2.play();
        break;
      case "j":
        var tom3 = new Audio('./sounds/tom-3.mp3');
        tom3.play();
        break;
      case "k" :
        var tom4 = new Audio('./sounds/tom-4.mp3');
        tom4.play();
        break;
      case "l" :
        var kick = new Audio('./sounds/kick-bass.mp3');
        kick.play();
        break;
      default:
        console.log(name);
    }

},false);

/*
Writting it with an anonymousu function be like :
document.querySelector("button").addEventListener("click",fuction (){
  alert("I got clicked yey!");
});
*/

/*
Can also implement it as follows :
for(var i=0; i<document.querySelector('.drum').lenght;i++){
  document.querySelector('.drum')[i].addEventListener("click",handleClick);
}
*/
