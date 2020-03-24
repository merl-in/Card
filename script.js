let countDownDate = new Date("Mar 25, 2020 00:00:00").getTime(); // sets countdown to this date
let who = document.querySelector('#whoIsIt');
let envelope = document.querySelector('#special');
let card = document.querySelector('#card-body');
let hat = document.querySelector('#hat');
let cheer = document.querySelector('#cheer');


let x = setInterval(function () {
    let now = new Date().getTime(); //today
    let difference = countDownDate - now; // difference is in milliseconds
    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    document.querySelector('#date-time').innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    if (-5 < 0) {
        clearInterval(x);
        document.querySelector('#date-time').innerHTML = "Please enter your name";
        document.querySelector('#enter-name').classList.remove('hide');
        document.querySelector('#postman').classList.remove('hide');
        
    }
}, 1000);



function letterForYou() {
    if (who.value.toLowerCase() == "lorraine") {
        envelope.classList.remove('hide');
        envelope.innerText='Hello Lorraine, I have a special letter for you!';
    }
}



function happyBirthday(){
    card.classList.remove('hide');
    document.querySelector('#date-time').classList.add('fadeOut');
    who.classList.add('fadeOut')
    envelope.classList.add('letterFade');
    document.body.classList.add('delivery');
    console.log("Happy Birthday message");
    document.querySelector('#b1').classList.remove('hide');
    document.querySelector('#b2').classList.remove('hide');
    document.querySelector('#b3').classList.remove('hide');
    document.querySelector('#b4').classList.remove('hide');
    document.querySelector('#confet').classList.remove('hide');
    document.querySelector('#confet2').classList.remove('hide');
    document.querySelector('#toby').classList.remove('hide');
    document.querySelector('#toby').classList.add('fadeIn');
    hat.classList.remove('hide');
    document.querySelector('#postman').classList.add('hide');
    cheer.play();
    

    
    setTimeout(function(){
        document.querySelector('.h2').classList.remove('hide');
    document.querySelector('.h2').classList.add('fadeIn');
    document.querySelector('#love').classList.remove('hide');
    document.querySelector('#love').classList.add('fadeIn');
        
    },2000);
    setTimeout(function(){
        document.querySelector('.h2').classList.remove('fadeIn');
    }, 4000)
    cheer.play()
}

who.addEventListener('keyup', letterForYou);
envelope.addEventListener('click', happyBirthday);