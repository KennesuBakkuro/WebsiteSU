document.getElementById('myButton').onclick = function(){

    username = document.getElementById("myText").value;
    inputValue = document.getElementById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = "Hey There " + username  + "!" 
    + " Check Out Our Cool Stuff Down Below!" ;

    /*this one took me a while to figure out, im not that good in javascript, but the way it works is 
    similar to line 6, when the user input their name, myLabel id get's manipulated, so my idea is
    when the user inputed the easter egg name i will manipulate the stuffs in the website
    or bring them to another html*/

    if (inputValue.includes("Sayori")) {
        window.location.href = "https://kennesubakkuro.github.io/SU_ADD/sayori.html";
      }
    if (inputValue.includes("Natsuki")) {
        window.location.href = "https://kennesubakkuro.github.io/SU_ADD/natsuki.html";

    }
    if (inputValue.includes("Yuri")) {
        window.location.href = "https://kennesubakkuro.github.io/SU_ADD/yuri.html";

    }
    if (inputValue.includes("Monika")) {
        window.location.href = "https://kennesubakkuro.github.io/SU_ADD/monika.html";

    }
    if (inputValue.includes("Yupiel")) {
        window.location.href = "https://kennesubakkuro.github.io/SU_ADD/yupiel.html";

    }
    if (inputValue.includes("Mirrored")) {
        document.getElementById("myLabel").innerHTML = "Oh hey Jamie!! "
    }
    if (inputValue.includes("x40arcade")) {
        document.getElementById("myLabel").innerHTML = "hi, nice to meet you!! "
    }
    if (inputValue.includes("Bakkuro")) {
        document.getElementsByTagName("h1")[0].innerHTML = "BAKKURO HAS AWOKEN"
    }
    if (inputValue.includes("Bakkuro")) {
        document.getElementById("myLabel").innerHTML = "dun... dun... dun..."
    }
    if (inputValue.includes("Jamie")) {
        document.getElementById("myLabel").innerHTML = "?"
    }


}
