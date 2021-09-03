/*
1) Создать функцию, которая при каждом вызове будет показывать разницу в секундах между временем,
когда ее вызывали последний раз и теперешним.
Если вызываем первый раз, то возвращаем строку 'Enabled' и сохраняем время вызова функции.
Последующий вызов функции вернет строку вида '2 seconds have passed'
Запрещается использовать глобальные переменные как хранилище значений.
*/
function makeCounter() {
  let counter = 0;
  return function () {
    if (counter) {
      let time = new Date().getTime() / 1000;
      let intervalTime = time - counter;
      counter = time;
      return `${Math.round(intervalTime)} seconds have passed`;
    } else {
      counter = new Date().getTime() / 1000;
      return 'Enabled';
    }
  };
};

let getTime = makeCounter();

/*
2) Создать таймер обратного отсчета, который будет в console выводить время в формате MM:SS.
Где MM - количество минут, SS - количество секунд. При этом когда закончится время, нужно вывести в console строку "Timer End".
*/

const timer = time => {
  intervaId = setInterval(() => {
    if (time) {
      let minutes = Math.floor(time % 3600 / 60).toString().padStart(2, '0');
      let seconds = Math.floor(time % 60).toString().padStart(2, '0');
      time = --time;
      console.log(`${minutes}:${seconds}`)
    } else { clearInterval(intervaId); console.log('Timer End') }

  }, 1000);
}

// timer(120)
// 02:00
// 01:59
// 01:58
// 00:01
// Time End


// timer(59)
 // 00:59
 // 00:58
 // 00:57
 // 00:01
 // Time End