import {CountdownTimer} from './timer-constructor'

const refs = {
    dateSelector: document.querySelector('#date-selector'),
    startBtn: document.querySelector('[data-start]'),
    daysField: document.querySelector('[data-days]'),
    hoursField: document.querySelector('[data-hours]'),
    minutesField: document.querySelector('[data-minutes]'),
    secondsField: document.querySelector('[data-seconds]'),
}

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



