import Notiflix from 'notiflix';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const delay = Number(form.delay.value);
  const step = Number(form.step.value);
  const amount = Number(form.amount.value);
  const promises = [];

  for (let i = 0; i < amount; i++) {
    const position = i + 1;
    const promiseDelay = delay + step * i;
    promises.push(createPromise(position, promiseDelay));
  }

  Promise.all(
    promises.map(promise => {
      return promise
        .then(result => {
          const { position, delay } = result;
          Notiflix.Notify.success(
            `✅ Fulfilled promise ${position} in ${delay}ms`
          );
        })
        .catch(result => {
          const { position, delay } = result;
          Notiflix.Notify.failure(
            `❌ Rejected promise ${position} in ${delay}ms`
          );
        });
    })
  )
    .then(() => {
      console.log('All promises have been settled');
    })
    .catch(error => {
      console.error('Something went wrong:', error);
    });
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

