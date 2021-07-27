const refs = {
            days : document.querySelector('[data-value="days"]'),
            hours : document.querySelector('[data-value="hours"]'),
            minute : document.querySelector('[data-value="mins"]'),
            seconds : document.querySelector('[data-value="secs"]'),
            timer: document.querySelector('.timer'),
}

class Timer  {
    constructor({ selector, targetDate, intervalId = null }) {
    (this.selector = selector),
      (this.targetDate = targetDate),
      (this.intervalId = intervalId);
  }
    start() {
            this.timerUpdate(0);
    
        this.intervalId = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = this.targetDate - currentTime;
            this.timerUpdate(deltaTime);
            if (deltaTime <= 0) {
                this.stop();
                return;
            }
            
        }, 1000);
    }

    stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
   
    this.timerUpdate(0);
  }


    timerUpdate(time) {   
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.minute.textContent = `${mins}`;
    refs.seconds.textContent = `${secs}`;  
  }
   pad(value) {
    return String(value).padStart(2, '0'); 
    }
};

  const myTimer = new Timer({
  selector: '#timer-1',
  targetDate: new Date('Sep 30 2021'),
  });

myTimer.start();
  
