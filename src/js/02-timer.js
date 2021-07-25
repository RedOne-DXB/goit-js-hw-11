class CoundtownTimer {
    constructor({
    selector, targetDate})
    {
        this.selector = selector;
        this.targetDate = targetDate;
        this.intervalId = intervalId;
        this.updateDate();
    }

       getRefs() {
            return {
                dateSelector: document.querySelector('#date-selector'),
                startBtn: document.querySelector('[data-start]'),
                daysField: document.querySelector('[data-days]'),
                hoursField: document.querySelector('[data-hours]'),
                minutesField: document.querySelector('[data-minutes]'),
                secondsField: document.querySelector('[data-seconds]'),
            };
    }

   updateDate() {
        this.intervalId = setInterval(() => {
            const { days, hours, minutes, seconds } = this.getRefs()
            const time = this.targetDate - Date.now();
            if (time <= 0) {
                clearInterval(this.intervalId);
                return;
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
    
    getRemainingMs() {
    const targetTime = new Date(this.targetDate).getTime();
    const currentTime = new Date().getTime();
    const diffTime = targetTime - currentTime;
    if (diffTime < 1) {
      return 0;
    }
    return diffTime;
    }

    getRemainingTime() {
    return this.convertMs(this.getRemainingMs());
    }
    
    updateClockface({ days, hours, minutes, seconds }) {
        this.remainingTime = this.getRemainingTime();
    this.daysField.textContent = `${days}`;
    this.hoursField.textContent = `${hours}`;
    this.minutesField.textContent = `${minutes}`;
    this.secondsField.textContent = `${seconds}`;
}

pad(value) {
    return String(value).padStart(2, '0');
}
}
const 

refs.dateSelector.addEventListener('change', getDateFromInput);
let targetDate;

function getDateFromInput () {
   targetDate = new Date(refs.date.valueAsDate.setHours(0));
    const currentDate = new Date();

    if (!refs.dateSelector.value) {
        console.log('Здесь пока пусто!');
        return;
    }

    if (inputDateValue - currentDate < 1) {
        console.log('Здесь будет всплывать ошибка');
        refs.dateSelector.value = '';
        return;
    }
     refs.startBtn.setAttribute('disabled', false);
}

refs.startBtn.addEventListener('click', () => {
    timer.targetDate = targetDate;
    timer.start();
     refs.startBtn.setAttribute('disabled', true);
});




const timer = new CoundtownTimer ({
    targetDate: targetDate,
    daysField: refs.daysField,
  hoursField: refs.hoursField,
  minutesField: refs.minutesField,
  secondsField: refs.secondsField,
});



