
for(var n=0; n<document.querySelectorAll(".drum").length; n++){
    document.querySelectorAll(".drum")[n].addEventListener("click",function(){
       var buttonClicked=this.innerHTML;
       makesound(buttonClicked);
    });
}
document.addEventListener("keypress",function(event){
 var keyPressed=event.key;
 makesound(keyPressed);
})
function makesound(key){
    switch(key) { 
        case "w":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        default:
            console.log("wrong key clicked");
            break;
       } 
}

 