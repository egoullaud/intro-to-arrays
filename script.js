//ARRAYS
// var timeOfDay = [6, "noon", 8, "morning", "evening", 12];
// var meals = [];
// console.log(timeOfDay[3]);
// timeOfDay[3] = "midnight";
// console.log(timeOfDay[3]);
// console.log(timeOfDay);
// console.log(timeOfDay.includes("morning"));
// console.log(timeOfDay.includes(9));

// timeOfDay.push("midnight");
// console.log(timeOfDay);

// timeOfDay.pop();
// console.log(timeOfDay);

// timeOfDay.splice(0, 2);
// console.log(timeOfDay);

// timeOfDay.splice(0, 2, "mid-afternoon", 7);
// console.log(timeOfDay);

// timeOfDay.splice(4, 0, "twilight", 2, 9);
// console.log(timeOfDay);

// var employeeAges = [15, 36, 78, 25, 17, 42, 19, 18];
// var age = employeeAges.indexOf(45);
// console.log(age);

//LOOPS
// var timeOfDay = [6, "noon", 8, "morning", "evening", "12"];
// for (var time of timeOfDay) {
//   console.log(`It is ${time}.`);}

// timeOfDay.forEach(function (time, index) {
//   console.log(`The ${time} element is at position ${index}.`);
// });

// var employeeAges = [15, 36, 78, 25, 17, 42, 19, 18];
// var adultAge = employeeAges.filter(function (item) {
//   return item >= 18;
// });
// console.log(adultAge);

var lastNames = ["Khan", "Martino", "Martinez", "Li", "Martindale", "Bai"];
var martinName = lastNames.filter(function (item) {
  return item.includes("Martin");
});
console.log(martinName);
