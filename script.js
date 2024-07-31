// Set the date we're counting down to
let countDownDate = new Date("Aug 13, 2024 17:55:00").getTime();

// List of song URLs
const songs = [
    "https://embed.music.apple.com/us/album/neethanae/1273602653?i=1273602659",
    "https://embed.music.apple.com/us/album/samjho-na/1609282579?i=1609282695",
    "https://embed.music.apple.com/us/album/sadqay/1726588954?i=1726588955",
    "https://embed.music.apple.com/us/album/lover/1581006360?i=1581006912",
    "https://embed.music.apple.com/us/album/kabhi-kabhi-aditi/1121136760?i=1121136870",
    "https://embed.music.apple.com/us/album/po-indru-neeyaga-from-velai-illa-pattadhaari/1702960081?i=1702960085",
    "https://embed.music.apple.com/us/album/megham-karukatha-from-thiruchitrambalam/1634831241?i=1634831254",
    "https://embed.music.apple.com/us/album/tere-bina/264849882?i=264849919",
    "https://embed.music.apple.com/us/album/love-ya/1724181545?i=1724181551",
    "https://embed.music.apple.com/us/album/adiye-from-bachelor/1587686174?i=1587686190",
    "https://embed.music.apple.com/us/album/kadhal-sadugudu/1338740582?i=1338741014",
    // Add more song URLs here
];

// Function to update the song every 24 hours
let songIndex = 0;
function updateSong() {
    document.getElementById("musicPlayer").src = songs[songIndex];
    songIndex = (songIndex + 1) % songs.length; // Cycle through the songs
}

// Update the count down every 1 second
let x = setInterval(function() {
    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the elements with id="days", "hours", "minutes", and "seconds"
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
    }
}, 1000);

// Change the song every 24 hours
let songTimer = setInterval(updateSong, 86400000); // 24 hours in milliseconds
