var myAudio = document.getElementById("myAudio");
var clickCount = 0;

function playPause() {
    if (myAudio.paused) {
        myAudio.play();
    } else {
        myAudio.pause();
    }
}

function expandGif() {
    if (clickCount < 25) {
        clickCount++;
        var gif = document.querySelector(".gif");
        var scaleFactor = 1.5 + clickCount * 0.1; // Увеличиваем масштаб с каждым нажатием
        gif.style.transform = "scale(" + scaleFactor + ")";
        gif.style.transition = "transform 0.5s ease-in-out";

        // Добавьте здесь дополнительные анимации или эффекты
    }
}

