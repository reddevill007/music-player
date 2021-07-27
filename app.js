// Declaration of variables
const heading = document.getElementById('heading');
const subHeading = document.getElementById('sub-heading');
const songImg = document.getElementById('song-img');
const audio = document.getElementById('audio');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const play = document.getElementById('play');

// Play/Pause Btn Js
play.onclick = function () {
    if (audio.paused) {
        audio.play();
        play.src = "pause.png";
    }

    else {
        audio.pause();
        play.src = "play.png";
    }
}

// Audio control play/pause btn Js
audio.addEventListener('play', () => {
    play.src = "pause.png";
});
audio.addEventListener('pause', () => {
    play.src = "play.png";
});


// Array containing background images and song image
var img = new Array(
    "pic-1.jpg",
    "pic-2.jpg",
    "pic-3.jpg",
    "pic-4.jpg"
);

// Array containing songs
var music = new Array(
    "audio1.mp3",
    "audio2.mp3",
    "audio3.mp3",
    "audio4.mp3"
);

// Array containing song names
var song = new Array(
    "Song 1 Name",
    "Song 2 Name",
    "Song 3 Name",
    "Song 4 Name"
);

// Array containing artist names
var artist = new Array(
    "Singer 1",
    "Singer 2",
    "Singer 3",
    "Singer 4"
);

let i = 0;

// Next click event
next.onclick = function () {
    if (i <= 3) {
        // making loop of songs
        if (i == 3) {
            i = -1; // because we are using i++ so -1 + 2 = 0
        }

        // background change
        document.body.style.backgroundImage = 'linear-gradient(rgba(35, 43, 56, 0.9), rgba(35, 43, 56, 0.9)), url("' + img[i + 1] + '")';

        // Song img change
        songImg.src = img[i + 1];

        // audio change and play it
        audio.src = music[i + 1];
        audio.play();
        play.src = "pause.png";

        // Changing song name and artist name
        heading.innerHTML = song[i + 1];
        subHeading.innerHTML = artist[i + 1];
        i++;
    }
}

// Previous click event
prev.onclick = function () {
    if (i >= 0) {
        // making loop of songs
        if (i == 0) {
            i = 4; // because we are using i-- so 4 - 1 = 3
        }

        // background change
        document.body.style.backgroundImage = 'linear-gradient(rgba(35, 43, 56, 0.9), rgba(35, 43, 56, 0.9)), url("' + img[i - 1] + '")';

        // Song img change
        songImg.src = img[i - 1];

        // audio change and play it
        audio.src = music[i - 1];
        audio.play();
        play.src = "pause.png";

        // Changing song name and artist name
        heading.innerHTML = song[i - 1];
        subHeading.innerHTML = artist[i - 1];
        i--;
    }
}