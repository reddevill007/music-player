
/*<================ VARIABLE DECLARATION ================>*/
const heading = document.getElementById('heading');
const subHeading = document.getElementById('sub-heading');
const songImg = document.getElementById('song-img');
const audio = document.getElementById('audio');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const play = document.getElementById('play');
const progress = document.getElementById('progress');
const progress_bar = document.getElementById('progress_bar');
const current = document.getElementById('current');
const total = document.getElementById('total');
const mutebtn = document.getElementById('mutebtn');
const link = document.getElementById('link');
const tbox = document.getElementById("tbox");
const toogle = document.getElementById("toogle");
const list = document.getElementById("list");


/*<================ TOGGLE MENU JS ================>*/
tbox.onclick = ()=>{
    toogle.classList.toggle('active');
    list.classList.toggle('active');
}

document.onclick = function(e){
    if(e.target.id !== 'tbox' && e.target.id !== 'toogle' && e.target.id !== 'list'){
        toogle.classList.remove('active');
        list.classList.remove('active');
    }
}


/*<================ MUTE/UNMUTE BTN JS ================>*/
mutebtn.onclick = function () {

    // IF AUDIO IS MUTED THEN UMUTE IT AND CHANGE ITS ICON
    if (audio.muted == true) {
        audio.muted = false;
        mutebtn.innerHTML = "<i class='fas fa-volume-up'></i>";
    }

    // IF AUDIO IS UNMUTED THEN MUTE IT AND CHANGE ITS ICON
    else {
        audio.muted = true;
        mutebtn.innerHTML = "<i class='fas fa-volume-mute red'></i>";
    }
}



/*<================ PLAY/PAUSE BTN JS ================>*/
play.onclick = function () {

    // IF AUDIO IS PAUSED THEN PLAY IT CHANGE THE ICON AND ADD ANIMATION CLASS
    if (audio.paused) {
        audio.play();
        play.src = "pause.png";
        songImg.classList.add('anime');
    }

    // IF AUDIO IS PLAYED THEN PAUSE IT CHANGE THE ICON AND REMOVE ANIMATION CLASS
    else {
        audio.pause();
        play.src = "play.png";
        songImg.classList.remove('anime');
    }
}


/*<================ ARRAY CONTAINING IMAGES ================>*/
var img = new Array(
    "pic-1.jpg",
    "pic-2.jpg",
    "pic-3.jpg",
    "pic-4.jpg",
    "pic-5.png"
);


/*<================ ARRAY CONTAINING SONGS ================>*/
var music = new Array(
    "audio1.mp3",
    "audio2.mp3",
    "audio3.mp3",
    "audio4.mp3",
    "audio5.mp3"
);


/*<================ ARRAY CONTAINING SONG NAME ================>*/
var song = new Array(
    "Song 1 Name",
    "Song 2 Name",
    "Song 3 Name",
    "Song 4 Name",
    "Song 5 Name"
);


/*<================ ARRAY CONTAINING SINGER NAME ================>*/
var artist = new Array(
    "Singer 1",
    "Singer 2",
    "Singer 3",
    "Singer 4",
    "Singer 5"
);


// VARIABLE USED TO LOOP THE NEXT AND PREVIOUS BTN
let i = 0;


/*<================ NEXT CLICK BTN JS ================>*/
next.onclick = function () {
    if (i <= 4) {

        // IF i == 4 THEN CHANGING ITS VALUE MAKING OUR WORK FOR INFINITY
        if (i == 4) {

            // BECAUSE WE ARE USING i++ SO -1 + 2 = 0
            i = -1;
        }

        // CHANGING BACKGROUND ON EVERY CLICK
        document.body.style.backgroundImage = 'linear-gradient(rgba(35, 43, 56, 0.9), rgba(35, 43, 56, 0.9)), url("' + img[i + 1] + '")';

        // CHANGING SONG IMAGE ON EVERY CLICK
        songImg.src = img[i + 1];

        // CHANGING SONG , PLAYING IT, ADDING ANIMATION CLASS AND CHANGING PLAY ICON TO PAUSE ON EVERY CLICK
        audio.src = music[i + 1];
        audio.play();
        play.src = "pause.png";
        songImg.classList.add('anime');

        // CHANGING SONG NAME AND SINGER NAME ON EVERY CLICK
        heading.innerHTML = song[i + 1];
        subHeading.innerHTML = artist[i + 1];

        // DOWNLOAD LINK CHANGE ON CLICK
        link.href = music[i + 1];

        // INCRIMENTING THE VALUE OF i ON EVERY CLICK
        i++;
    }
}


/*<================ PREVIOUS CLICK BTN JS ================>*/
prev.onclick = function () {
    if (i >= 0) {

        // IF i == 0 THEN CHANGING ITS VALUE MAKING OUR WORK FOR INFINITY
        if (i == 0) {

            // BECAUSE WE ARE USING i-- so 5 - 1 = 4
            i = 5;
        }

        // CHANGING BACKGROUND ON EVERY CLICK
        document.body.style.backgroundImage = 'linear-gradient(rgba(35, 43, 56, 0.9), rgba(35, 43, 56, 0.9)), url("' + img[i - 1] + '")';

        // CHANGING SONG IMAGE ON EVERY CLICK
        songImg.src = img[i - 1];

        // CHANGING SONG , PLAYING IT, ADDING ANIMATION CLASS AND CHANGING PLAY ICON TO PAUSE ON EVERY CLICK
        audio.src = music[i - 1];
        audio.play();
        play.src = "pause.png";
        songImg.classList.add('anime');

        // CHANGING SONG NAME AND SINGER NAME ON EVERY CLICK
        heading.innerHTML = song[i - 1];
        subHeading.innerHTML = artist[i - 1];

        // DOWNLOAD LINK CHANGE ON CLICK
        link.href = music[i - 1];

        // DECRIMENTING THE VALUE OF i ON EVERY CLICK
        i--;
    }
}


/*<================ PREVIOUS CLICK BTN JS ================>*/
total.innerHTML = Timer(audio.duration);


/*<================ REAL TIME PROGRESS BAR TO TRACK SONG PROGRESS AND CHANGING ITS TIME EVERY SECOND ================>*/
audio.ontimeupdate = function (e) {
    progress.style.width = Math.floor(100 * audio.currentTime / audio.duration) + "%";
    current.innerHTML = Timer(audio.currentTime);
    total.innerHTML = Timer(audio.duration);
}


/*<================ CHANGING SONG PLAYED POSITION ON CLICK ================>*/
progress_bar.onclick = function (e) {
    audio.currentTime = ((e.offsetX / progress_bar.offsetWidth) * audio.duration);
}


/*<================ FUNCTION TO CONVERT SECONDS TO MINUTE:SECONDS ================>*/
function Timer(num) {
    var minutes = parseInt(num / 60);
    var seconds = parseInt(num % 60);
    if (seconds < 10) {
        return "0" + minutes + ":0" + seconds;
    }

    else {
        return "0" + minutes + ":" + seconds;
    }
}


/*<================ AUTO PLAY FUNCTION ================>*/
audio.onended = function () {
    // IF i == 4 THEN CHANGING ITS VALUE MAKING OUR WORK FOR INFINITY
    if (i == 4) {

        // BECAUSE WE ARE USING i++ SO -1 + 2 = 0
        i = -1;
    }

    // CHANGING BACKGROUND ON SONG ENDING
    document.body.style.backgroundImage = 'linear-gradient(rgba(35, 43, 56, 0.9), rgba(35, 43, 56, 0.9)), url("' + img[i + 1] + '")';

    // CHANGING SONG IMAGE ON SONG ENDING
    songImg.src = img[i + 1];

    // CHANGING SONG , PLAYING IT, ADDING ANIMATION CLASS AND CHANGING PLAY ICON TO PAUSE ON SONG ENDING
    audio.src = music[i + 1];
    audio.play();
    play.src = "pause.png";
    songImg.classList.add('anime');

    // CHANGING SONG NAME AND SINGER NAME ON SONG ENDING
    heading.innerHTML = song[i + 1];
    subHeading.innerHTML = artist[i + 1];

    // DOWNLOAD LINK CHANGE ON SONG ENDING
    link.href = music[i + 1];

    // INCRIMENTING THE VALUE OF i ON SONG ENDING
    i++;
};
