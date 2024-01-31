//map 
const num = [1, 2, 3, 4, 5, 6];
const d = num.map((num) => {
return num * 2;
});
console.log(d);

// filter 
const even = num.filter((num) => {
return num % 2 == 0;
});
console.log(even);

// reduce -
let total = 0;
const s = num.reduce((num, total) => {
return (total = total + num);
});
console.log(s);