
const num = [1, 2, 3, 4, 5];
const numbers = num.forEach((number) => {
    console.log(number * number)});

const num2 = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5]
const numbers2 = num2.filter((item, pos) => { 
    return num2.indexOf(item) == pos;
});
console.log(numbers2)

const num3 = [1, 2, 3, 4, 5]
sumNum = num.reduce((lastNum, currentNum) => {
    return lastNum + currentNum;
} , 0)

console.log(sumNum);

function reverseArr(array){
    newArr = [];
    for(let i = array.length - 1; i > -1; i--){
        newArr.push(array[i])
    }
    return newArr;
}
console.log(reverseArr([1, 2, 3, 4, 5]))

let a = "a";
const b = "b";
a = "c";
console.log(a);
console.log(b) //В отличие от let, const не переопределяется и выдает ошибку при попытке его переопределить

let letArr = [1, 2, 3];
const constArr = [1, 2, 3];
letArr = [1, 2, 3, 4];
console.log(letArr);
console.log(constArr) //здесь происходит абсолютно то же самое, что и выше