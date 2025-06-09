// iTGid.info - курс JS24/2

// Данная работа выполняется без каких-либо настроек локали, часового пояса и т.д. Т.е. "как есть".
// Task 01
// Напишите функцию, которая возвращает текущее время (в миллисекундах) с помощью Date.now().

function t01() {
  const now = new Date();
  const parsedDate = Date.parse(now);
  return parsedDate
}

document.querySelector('.b-1').addEventListener('click', () => {
  document.querySelector('.out-1').textContent = t01();
});

// Task 02
// Напишите функцию, которая получает время в секундах как аргумент и возвращает год данного времени.


function t02(sec) {
  const date = new Date(sec * 1000);
  const year = date.getFullYear();
  return year;
}

document.querySelector('.b-2').addEventListener('click', () => {
  document.querySelector('.out-2').textContent = t02(894330000);
});


// Task 03
// Напишите функцию, которая получает время в секундах как аргумент и возвращает номер месяца данного времени.

function t03(sec) {
  const date = new Date(sec * 1000);
  return date.getMonth();
}

document.querySelector('.b-3').addEventListener('click', () => {
  document.querySelector('.out-3').textContent = t03(894330000);
});

// Task 04
// Напишите функцию, которая получает время в секундах как аргумент и возвращает название месяца данного времени. Название - возьмите из массива months.

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function t04(sec) {
  const date = new Date(sec * 1000);
  const monthIndex = date.getMonth();
  return months[monthIndex];
}

document.querySelector('.b-4').addEventListener('click', () => {
  document.querySelector('.out-4').textContent = t04(894330000);
});


// Task 05
// Напишите функцию, которая получает время в секундах как аргумент и возвращает номер дня недели данного времени.


function t05(sec) {
  const date = new Date(sec * 1000);
  return date.getDate();
}

document.querySelector('.b-5').addEventListener('click', () => {
  document.querySelector('.out-5').textContent = t05(894330000);
});



// Task 06
// Напишите функцию, которая получает время в секундах как аргумент и возвращает название дня недели данного времени. Название - возьмите из массива days.

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function t06(sec) {
  const date = new Date(sec * 1000);
  const dayIndex = date.getDate();
  return days[dayIndex]
}

document.querySelector('.b-6').addEventListener('click', () => {
  document.querySelector('.out-6').textContent = t06(894330000);
});



// Task 07
// Напишите функцию, которая получает время в секундах как аргумент и возвращает строку в виде строки 'часы:минуты'. 

function t07(sec) {
  const date = new Date(sec * 1000);
  const strTime = date.getMinutes() + ':' + date.getSeconds();
  return strTime
}

document.querySelector('.b-7').addEventListener('click', () => {
  document.querySelector('.out-7').textContent = t07(894355795540);
});


// Task 08
//  Напишите функцию, которая получает строку времени, как аргумент и возвращает время в миллисекундах.

function t08(time) {
  return Date.parse(time);
}

document.querySelector('.b-8').addEventListener('click', () => {
  document.querySelector('.out-8').textContent = t08('Friday, July 10, 2020 11:09:00 AM GMT+03:00');
});


// Task 09
// Напишите функцию, которая получает дату из .i-9 и возвращает данную дату в миллисекундах.

function t09() {
  const i9 = document.querySelector('.i-9').value;
  return Date.parse(i9)
}

document.querySelector('.b-9').addEventListener('click', () => {
  document.querySelector('.out-9').textContent = t09();
});



// Task 10
// Напишите функцию, которая получает дату в секундах и устанавливает данную дату в input.i-10. При необходимости добавления ведущего нуля применяйте функцию lZ (leading Zero).

const lZ = (data) => String(data).padStart(2, '0');

function t10(time) {
  const date = new Date(time * 1000); // секунды → миллисекунды

  const year = date.getFullYear();
  const month = lZ(date.getMonth() + 1);
  const day = lZ(date.getDate());

  const formatted = `${year}-${month}-${day}`;

  const i10 = document.querySelector('input.i-10');
  i10.value = formatted;
}

document.querySelector('.b-10').addEventListener('click', () => {
  t10(1643760000);
});


// Task 11
// Напишите функцию, которая создает объект Date и устанавливает год 1988. Функция должна возвращать созданный объект. 

function t11() {
  const date = new Date();
  date.setFullYear(1988);
  return date
}

document.querySelector('.b-11').addEventListener('click', () => {
  document.querySelector('.out-11').textContent = (t11()).getFullYear();
});


// Task 12
// Напишите функцию, которая создает объект Date и устанавливает год 2024. Месяц и день - считываются из select.s-121 и select.s-122 и тоже задаются объекту. Функция должна возвращать созданный объект.

function t12() {
  const s121 = document.querySelector('select.s-121');
  const s122 = document.querySelector('select.s-122');
  const date = new Date();
  date.setFullYear(2024);
  date.setMonth(s121.value);
  date.setDate(s122.value);
  return date
}

document.querySelector('.b-12').addEventListener('click', () => {
  document.querySelector('.out-12').textContent = (t12()).toDateString();
});

(function createSelectS121() {
  const select = document.createElement('select');
  select.classList.add('s-121');
  months.forEach((item, index) => {
    const option = document.createElement('option');
    option.value = index + 1;
    option.text = item;
    select.append(option);
  });
  document.querySelector('.select-s-121').append(select);
  createSelectS122();
  select.oninput = createSelectS122;
})();

function createSelectS122() {
  document.querySelector('.select-s-122').innerHTML = '';
  const select = document.createElement('select');
  select.classList.add('s-122');
  const dInMonth = new Date(2024, document.querySelector('.s-121').value, 0).getDate();
  for (let i = 1; i <= dInMonth; i++) {
    const option = document.createElement('option');
    option.value = i;
    option.text = i;
    select.append(option);
  }
  document.querySelector('.select-s-122').append(select);
}

// Task 13
// Изучите как работают функции createSelectS121 и createSelectS122. Если по ним есть вопросы - задайте в чате.


// Task 14
// Напишите функцию, которая получает строку - дату и возвращает true если день недели рабочий, и false, если выходной. Выходными считаем дни Sunday, Saturday.

function t14(time) {
  const date = new Date(time);
  const dayOfWeek = date.getDay();

  if (dayOfWeek === 0 || dayOfWeek === 6) {
    return false; // выходной
  }
  return true; // рабочий день
}

document.querySelector('.b-14').addEventListener('click', () => {
  document.querySelector('.out-14').textContent = t14('2024-05-18');
});

// Task 15
// Напишите функцию, которая возвращает время последней полуночи в секундах.

function t15() {

}

document.querySelector('.b-15').addEventListener('click', () => {
  document.querySelector('.out-15').textContent = t15();
});



// Task 16
// Напишите функцию, которая возвращает время следующей полуночи в секундах.

function t16() {

}

document.querySelector('.b-16').addEventListener('click', () => {
  document.querySelector('.out-16').textContent = t16();
});

// Task 17
// Напишите функцию, которая возвращает количество суток прошедших с даты, переданной в функцию.

function t17(time) {

}

document.querySelector('.b-17').addEventListener('click', () => {
  document.querySelector('.out-17').textContent = t17('2024-05-01');
});

// Task 18
// Напишите функцию, которая возвращает массив дат понедельников текущего месяца. Даты в массиве должны идти по возрастанию.

function t18() {

}

document.querySelector('.b-18').addEventListener('click', () => {
  document.querySelector('.out-18').textContent = t18().join(' ');
});

// Task 19
// Напишите функцию, которая получает строку даты и времени и возвращает ее в виде 'YYYY-MM-DD' с ведущим нулем (при необходимости).

function t19(time) {

}

document.querySelector('.b-19').addEventListener('click', () => {
  document.querySelector('.out-19').textContent = t19('2024/03/17');
});

// Task 20
// Напишите функцию, которая получает строку даты и времени и возвращает объект вида: 
// { 'Y' : 2024, 'y' : 24, 'M' : 5, 'M0': '05', 'd' : 7, 'd0' : '07'}
// { 'Y' : 2024, 'y' : 24, 'M' : 15, 'M0': '15', 'd' : 17, 'd0' : '17'}

function t20(time) {

}

document.querySelector('.b-20').addEventListener('click', () => {
  console.log(t20('2024-03-17'));
});