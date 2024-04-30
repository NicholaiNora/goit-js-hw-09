import Notiflix from 'notiflix';

const delay = document.querySelector("[name='delay']");
const step = document.querySelector("[name='step']");
const amount = document.querySelector("[name='amount']")
const form = document.querySelector(".form");

console.log(amount.value);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // if (delay.value < 1 || step.value < 1 || amount.value < 1) {
  //   Notiflix.Notify.failure(`❌ Rejected Value Please Enter a Positive Value`);
  //   form.reset();
  //   return;
  // }
  let delayValue = Number(delay.value);
  for (let i = 1; i <= amount.value; i++) {
    createPromise(i , delayValue)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay}) => {
         Notiflix.Notify.failure(
           `❌ Rejected promise ${position} in ${delay}ms`
         );
      });
    delayValue += Number(step.value);
  }
})

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({position, delay})
      } else {
        reject({position, delay})
      }
    }, delay)

  })

}