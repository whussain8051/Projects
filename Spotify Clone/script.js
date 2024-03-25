console.log("Welcome to Spotify");
let songIndex =0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");


let songs = [
    {songName: "Salam-e-Ishq", filePath: "songs/1.mp3", coverPath: "cover/1.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/1.mp3", coverPath: "cover/1.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/1.mp3", coverPath: "cover/1.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/1.mp3", coverPath: "cover/1.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/1.mp3", coverPath: "cover/1.jpg"},
]

// audioElement.play();

// Handle Play, Pause
masterPlay.addEventListener("click", ()=>{
    if (audioElement.pauseed || audioElement.currentTime<=0) {
        audioElement.play();
    }
})

myProgressBar.addEventListener("timeupdate", ()=>{
    console.log("timeupdate");
})