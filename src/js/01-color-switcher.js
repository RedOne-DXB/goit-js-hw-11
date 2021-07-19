const refs = {
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]'),
    body: document.body,
    getRandomHexColor() {
          return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    },
};

let intervalId = null;

refs.startBtn.addEventListener('click', () => {
    intervalId = setInterval(() => {
        refs.body.style.backgroundColor = `${refs.getRandomHexColor()}`;
        console.log(setInterval)
    }, 1000);
     refs.startBtn.setAttribute('disabled', true);
});

refs.stopBtn.addEventListener('click', () => {
    clearInterval(intervalId);
    refs.startBtn.removeAttribute('disabled');
});
