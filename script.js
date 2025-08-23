//1
const string = "потоп";
function check(str){
    let lowStr = str.toLowerCase();
    let array = lowStr.split("")
    if(array.join("") == array.reverse().join("")){
        return true;
    }else{
        return false;
    }
}
console.log(check(string))

//2 
const sentence = "Маленька овощечистка ставит меня в тупик";
function check2(sent){
    let arraySent = sent.split(" ");
    let longestWord = arraySent[0];
    for(let i = 1; i <  arraySent.length; i++){
        if(longestWord.length < arraySent[i].length){
            longestWord = arraySent[i];
        }
    }
    return longestWord
}
console.log(check2(sentence))

//3
const phoneNum = "89284933214";
function createPhoneNum(phoneNum){
    const number = phoneNum.split("")

    if(number.length !== 11){
        return "Не верный формат"
    }

    return `${number[0]} (${number.slice(1, 4).join("")}) ${number.slice(4, 7).join("")}-${number.slice(7, 10).join("")}`
}
console.log(createPhoneNum(phoneNum))

//4
const numbers = [2, 4, 3, 8, 1]
function checkNums(nums){
    let minNum = numbers[0];
    let maxNum = numbers[0];
    for(let i = 0; i < nums.length; i++){
        if(minNum > nums[i]){
            minNum = nums[i];
        }
        if(maxNum < nums[i]){
            maxNum = nums[i];
        }
    }
    console.log(minNum)
    console.log(maxNum)
}
checkNums(numbers);

//5
const numbers2 = [1, 4, 2, 3, 5]
function sort(arr){
    sortArr = [...arr];
    for(let i = 0; i < sortArr.length; i++){
        for(let j = i + 1; j < sortArr.length; j++){
            if(sortArr[i] > sortArr[j]){
                [sortArr[i], sortArr[j]] = [sortArr[j], sortArr[i]]
            }
        }
    }
    return sortArr
}
console.log(sort(numbers2))