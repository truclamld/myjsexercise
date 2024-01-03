let countdown;
const timerDisplay = document.querySelector(".display__time-left");
const endtimeDisplay = document.querySelector(".display__end-time");
const buttons = document.querySelectorAll("[data-time]");
let twentyfour = false;

function timer(seconds)
{
    clearInterval(countdown);
    const now = Date.now();
    const then = now + seconds*1000;
    displayTime(seconds);
    displayEndTime(seconds);

    countdown = setInterval(() => {
        const secLeft = Math.round((then - Date.now()) / 1000);
        if (secLeft < 0)
        {
            clearInterval(countdown);
            return;
        }
        displayTime(secLeft);
    }, 1000);
}

function displayTime(seconds)
{

    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    const display = (min < 10 ? '0' : '') + min + ":" + (sec < 10 ? '0' : '') + sec;
    timerDisplay.textContent = display;
    document.title = display;
    console.log();
}

function displayEndTime(seconds)
{
    const now = Date.now();
    const then = new Date(now + seconds*1000);
    const hour = then.getHours();
    const min = then.getMinutes();
    const endTime = (hour > 12 ? hour - 12 : hour) + ":" + (min < 10 ? '0' : '') + min + (hour >= 12 ? " PM" : " AM");
    //const endTime = hour + ":" + min;
    //console.log(then.getHours() + ":" + then.getMinutes());
    endtimeDisplay.textContent = "🔔 " + endTime;
}

function startTime()
{
    timer(this.dataset.time);
}

buttons.forEach(button => {
    button.addEventListener("click", startTime);
})

document.customForm.addEventListener("submit", function(e) {
   e.preventDefault(); 
   const min = this.minutes.value;
   timer(min*60);
   this.reset();
});

