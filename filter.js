// Список курсов
let courses = [
  { name: "Courses in England", prices: [0, 100] },
  { name: "Courses in Germany", prices: [500, null] },
  { name: "Courses in Italy", prices: [100, 200] },
  { name: "Courses in Russia", prices: [null, 400] },
  { name: "Courses in China", prices: [50, 250] },
  { name: "Courses in USA", prices: [200, null] },
  { name: "Courses in Kazakhstan", prices: [56, 324] },
  { name: "Courses in France", prices: [null, null] },
];

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];

// Функция принимает как аргумент массив из двух значений(минимальное и максимальное). в начале null = 0; В конце беспокнечность. Функиция возвращает отфлитровванный массив из курсов, который входит в диапозон по цене
function getFilter(range) {
  return courses.filter((courses) => (range[0] <= courses.prices[1] || courses.prices[1] === null) && (range[1] >= courses.prices[0] || range[1] === null))
}

//Функция возвращает массив отсортированный курсов по минимальной цене
function sortPrices() {
  return courses.sort((a, b) => Number(a.prices[0]) - Number(b.prices[0]))
}
