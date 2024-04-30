import flatpickr from 'flatpickr';
// Additional styles import
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const inputTime = document.querySelector("input#datetime-picker");
const startBtn = document.querySelector("button[data-start]");
const days = document.querySelector("[data-days]");
const hours = document.querySelector("[data-hours]");
const minutes = document.querySelector("[data-minutes]");
const seconds = document.querySelector("[data-seconds]")

startBtn.setAttribute("disabled", "");
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      const selectedDate = selectedDates[0]
      const currentDate = Date.now();

      if (selectedDate < currentDate) {
          Notiflix.Notify.failure("Please choose a date in the future");
          return;
      }

      startBtn.disabled = false;
      let timerId = null;
      startBtn.addEventListener("click", () => {
          startBtn.disabled = true;
          inputTime.setAttribute("disabled", "");
          timerId = setInterval(() => {
              const currentTime = Date.now();
              if (selectedDate < currentTime) {
                  clearInterval(timerId);
                  inputTime.disabled = false;
                  return;
              }
              const timeDiff = selectedDate-currentTime;
              
              const convertedTime = convertMs(timeDiff);
              days.textContent = addLeadingZero(convertedTime.days);
              hours.textContent = addLeadingZero(convertedTime.hours);
              minutes.textContent = addLeadingZero(convertedTime.minutes);
              seconds.textContent = addLeadingZero(convertedTime.seconds);
          });
      })
  },
};

flatpickr(inputTime, options);


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return value.toString().padStart(2, 0);
}