// const ourKey = document.querySelectorAll(".key");
// const ourAudio = document.querySelectorAll("audio");
// let count = 0;

// ourKey.forEach(key => {
//     key.addEventListener("click", () => {
//         // console.log(key.getAttribute("data-key"));
//         ourAudio.forEach(audio => {
//             if (key.getAttribute("data-key") == audio.getAttribute("data-key")) {
//                 audio.currentTime = 0;
//                 audio.play();
//                 console.dir(audio);
//                 key.classList.add("playing");

//                 setTimeout(() => {
//                     key.classList.remove("playing");
//                 }, 5000);

//                 count += 10;

//                 key.style.marginTop = count + "px";
//             }
//         })
//     })
// })

// window.addEventListener("keydown", function(e) {
//     console.log(e.key);
// })

//const keys = document.querySelectorAll('.key');
let count = 0;

window.addEventListener('keydown', function(e) {
    let code = `audio[data-key="${e.keyCode}"]`;

    const audio = document.querySelector(code);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');

    count += 10;
    key.style.marginTop = count + "px";

    if (count == 100) {
        count = 0;
        key.style.marginTop = count + "px";
    }

    setTimeout(() => {
        key.classList.remove("playing");
    }, 1000);

})




