// Set the date we're counting down to
let countDownDate = new Date("Aug 13, 2024 17:55:00").getTime();

// List of song URLs
const songs = [
    "https://embed.music.apple.com/us/album/manjha/1501855474?i=1501855599",
    "https://embed.music.apple.com/us/album/baarish/1529550651?i=1529550658",
    "https://embed.music.apple.com/us/album/neethanae/1273602653?i=1273602659",
    "https://embed.music.apple.com/us/album/nee-from-varathan/1426253624?i=1426253958",
    "https://embed.music.apple.com/us/album/hayyoda-from-jawan/1702461244?i=1702461246",
    // Add more song URLs here
];

// Function to update the song every 10 seconds
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

// Change the song every 10 seconds
let songTimer = setInterval(updateSong, 10000);
