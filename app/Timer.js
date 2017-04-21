class Timer {
  constructor() {
    this.startTime = 0;
    this.animationFrame = null;
  }

  requestAnimFramePolyfill(fps) {
    console.log('called requestAnimationFrame');
    const defaultRequestAnimationFrame = (callback) => setTimeout(callback, 1000/fps);

    return defaultRequestAnimationFrame;

    // if (window) {
    //   return window.requestAnimationFrame ||
    //     window.webkitRequestAnimationFrame ||
    //     window.mozRequestAnimationFrame ||
    //     defaultRequestAnimationFrame;
    //   } else {
    //     return defaultRequestAnimationFrame;
    //   }
  }

  cancelAnimFramePolyfill() {
    console.log('called cancelAnimationFrame');
    const defaultCancelAnimationFrame = (interval) => clearInterval(interval);

    return defaultCancelAnimationFrame;

    // if (window) {
    //   return window.cancelAnimationFrame ||
    //     window.webkitCancelAnimationFrame ||
    //     window.mozCancelAnimationFrame ||
    //     defaultCancelAnimationFrame;
    //   } else {
    //     return defaultCancelAnimationFrame;
    //   }
  }

  startTimer() {
    console.log('called start');
    const callback = () => {
      // console.log(`timestamp: ${timestamp}`);
      // if (!this.startTime) { this.startTime = timestamp; }
      console.log(`this.startTime = ${this.startTime++}`);

      if (this.startTime == 10) {
        this.clearTimer();
      }
      //
      // if (progress % 10000 < 1) { console.log(`progress: ${progress}`); }

      // this.requestAnimFramePolyfill()(callback);
    };

    this.animationFrame = this.requestAnimFramePolyfill(1)(callback);
  }

  stopTimer() {
    console.log('called stop');
    this.cancelAnimFramePolyfill()(this.animationFrame);
  }

  clearTimer() {
    console.log('called clear');
    this.stopTimer();
    this.startTime = 0;
  }
}

export default Timer;
