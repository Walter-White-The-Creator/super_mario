const buttons = document.querySelectorAll("button[id^='knop']");
const gif = document.getElementById("mijnGif");

buttons.forEach(button => {
    button.addEventListener("click", function() {
        gif.style.display = "block";
    });
});
