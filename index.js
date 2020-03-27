const durationInput = document.querySelector("#durationInput");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const timer = new Timer(durationInput, startButton, pauseButton, {
  onStart() {
    console.log("Timer Started");
  },
  onTick() {
    console.log("Timer ticked down");
  },
  onComplete() {
    console.log("timer is Compleated");
  }
});
