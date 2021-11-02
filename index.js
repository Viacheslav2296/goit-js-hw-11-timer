class CountdownTimer {

    constructor({selector, targetDate}) {
        this.selector=selector;
        this.targetDate=targetDate;
        this.dateNow = Date.now();
        this.time = this.targetDate.getTime() - this.dateNow;
        this.refs = {
        valueDays: document.querySelector(`${this.selector} .value[data-value="days"]`),
        valueHours: document.querySelector(`${this.selector} .value[data-value="hours"]`),
        valueMins: document.querySelector(`${this.selector} .value[data-value="mins"]`),
        valueSecs: document.querySelector(`${this.selector} .value[data-value="secs"]`),
        };
    }
    CountdownTimerStart() {
    console.log('targetDate',  this.targetDate);
      
    const intervalId = setInterval(() => {
        
         if (this.time !== 1000) {
            const days = Math.floor(this.time / (1000 * 60 * 60 * 24));
            const hours = Math.floor((this.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const mins = Math.floor((this.time % (1000 * 60 * 60)) / (1000 * 60));
            const secs = Math.floor((this.time % (1000 * 60)) / 1000);

            this.time -= 1000;
            this.refs.valueDays.textContent = this.padStart(days);
            this.refs.valueHours.textContent = this.padStart(hours);
            this.refs.valueMins.textContent = this.padStart(mins);
            this.refs.valueSecs.textContent = this.padStart(secs);

            return;
        };
    clearInterval(intervalId);
}, 1000);
    }
    padStart(a) {
    return String(a).padStart(2, "0");
};
}

const countDown = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Nov 22, 2021'),
});

countDown.CountdownTimerStart();