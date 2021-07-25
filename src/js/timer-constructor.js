export class CoundtownTimer {
    constructor({
    targetDate,
    daysField,
    hoursField,
    minutesField,
    secondsField,})
    {
        this.intervalId = null;
        this.onTick = onTick;
        this.targetDate = targetDate;
        this.daysField = daysField;
    this.hoursField = hoursField;
    this.minutesField = minutesField;
        this.secondsField = secondsField;
        this.remainingTime;
    }

        start() {
            this.updateClockface();

            clearInterval(this.intervalId);

       this.intervalId = setInterval(() => {
            if (this.getRemainingMs(this.targetDate) === 0) {
        clearInterval(this.intervalId);
        this.isTimerOn = false;
        return;
      }
      this.updateClockface();
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