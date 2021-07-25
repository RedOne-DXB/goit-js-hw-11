const refs = {
    dateSelector: document.querySelector('#date-selector'),
    startBtn: document.querySelector('[data-start]'),
    daysField: document.querySelector('[data-days]'),
    hoursField: document.querySelector('[data-hours]'),
    minutesField: document.querySelector('[data-minutes]'),
    secondsField: document.querySelector('[data-seconds]'),
}

refs.dateSelector.addEventListener('change', onChange);


function onChange () {
let inputDateValue = Date.parse(refs.dateSelector.value);
    // let currentTime = Date.parse(new Date());
    // const countdownTimer = inputDateValue - currentTime;

    console.log(inputDateValue);
    console.log(countdownTimer);
}

refs.startBtn.addEventListener('click', () => {
    timer.start();
     refs.startBtn.setAttribute('disabled', true);
});

function updateClockface({ days, hours, minutes, seconds }) {
    refs.daysField.textContent = `${days}`;
    refs.hoursField.textContent = `${hours}`;
    refs.minutesField.textContent = `${minutes}`;
    refs.secondsField.textContent = `${seconds}`;
}

class Timer {
    constructor({onTick}) {
        this.intervalId = null;
        this.onTick = onTick;
    }

        start() {
        const startTime = Date.now();

       this.intervalId = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = currentTime - startTime;
            const timeConversion = this.convertMs(deltaTime);

           updateClockface(timeConversion);
        }, 1000);
    }

    convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = this.pad(Math.floor(ms / day));
  // Remaining hours
  const hours = this.pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = this.pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = this.pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

pad(value) {
    return String(value).padStart(2, '0');
}
}

const timer = new Timer({
    onTick: updateClockface,
});



// f8004439