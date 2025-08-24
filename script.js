const numbers = [1, 2, 2, 2, 3, 3, 2, 3]
let filterNumbers = []
for(let i = 0; i < numbers.length; i++){
    if(numbers[i - 1] !== numbers[i]){
        filterNumbers.push(numbers[i])
    }
}
console.log(filterNumbers)