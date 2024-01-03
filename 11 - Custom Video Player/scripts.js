const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skips = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");
const fullscr = player.querySelector(".full_screen");

function togglePlay()
{
    if (video.paused)
        video.play();       
    else
        video.pause();
        
}

function toggleButton()
{
    const icon = this.paused ? "►" : "❚ ❚";
    toggle.textContent = icon;
}

function skipping()
{
    console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRange()
{
    console.log(this.name);
    console.log(this.value);
    video[this.name] = this.value;
    
}

function handleProgress()
{
    const percentage = (video.currentTime / video.duration) * 100;
    //console.log(percentage);
    progressBar.style.flexBasis = percentage + "%";
}

function toggleProgress(e)
{
    const time = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = time;
}

function toggleFullScr()
{

    // if (video.requestFullscreen)
         video.requestFullscreen();
    // else if (video.mozRequestFullScreen)
    //     video.mozRequestFullScreen();
    // else if (video.webkitRequestFullscreen)
    //     video.webkitRequestFullscreen();
    // else if (video.msRequestFullscreen)
    //     video.msRequestFullscreen();
    
}

video.addEventListener("click", togglePlay);
video.addEventListener("play", toggleButton);
video.addEventListener("pause", toggleButton);
video.addEventListener("timeupdate", handleProgress);
toggle.addEventListener("click", togglePlay);
skips.forEach(skip => { skip.addEventListener("click", skipping) });
ranges.forEach(range => { range.addEventListener("change", handleRange)})
ranges.forEach(range => { range.addEventListener("mousemove", handleRange)})

let clicked = false;
progress.addEventListener("click", toggleProgress);
progress.addEventListener("mousemove", (e) => { clicked && toggleProgress(e)});
progress.addEventListener("mousedown", () =>{ clicked = true;});
progress.addEventListener("mousedown", () =>{ clicked = false;});

fullscr.addEventListener("click", toggleFullScr);