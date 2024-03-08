const count_down = () => {
  let minutes = 25;
  let seconds = 0;

  document.querySelector('.container-mins h3').textContent = minutes;
  document.querySelector('.container-seconds h3').textContent = seconds;

  const timer_interval = setInterval(() => {
    seconds--;
    if(seconds < 0){
      seconds = 59;
      minutes--;
    }

    document.querySelector('.container-mins h3').textContent = minutes;
    document.querySelector('.container-seconds h3').textContent = seconds;
    
    if(minutes === 0 && seconds === 0){
      clearInterval(timer_interval);
    }
  }, 1000);
}

const start_button = document.getElementById('start-button');
start_button.addEventListener('click', count_down);
