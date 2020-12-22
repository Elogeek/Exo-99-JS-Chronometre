// Make it count up on a timer, calling this function
let seconds = document.getElementById("seconds");
let countUp = function(){};
let play = document.getElementById('play');
play.addEventListener('click', function() {
    setTimeout(function() {
        seconds.innerHTML = (parseFloat(seconds.innerHTML) + 1).toString();
        countUp();
    }, 1000);
});
// How can you make it stop counting?
let stopButton = document.getElementById("stop-button");
let stopCountUp = function() {
    clearTimeout(play);
}
stopButton.removeEventListener("click", stopCountUp());



