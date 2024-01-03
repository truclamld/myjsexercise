
const keyboard = document.querySelectorAll(".key");

function findKey(e)
{
    keyboard.forEach(key => {
        if (e.key.toUpperCase() == key.textContent)
            console.log(e.key);
    })
}

console.log(keyboard);


window.addEventListener("keydown", findKey);