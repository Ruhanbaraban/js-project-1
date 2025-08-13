
const a = 10;
const b = 13;
const c = 8;

function remainderCalc(){
    if(a % 2 !== 0){
        console.log("This number is not even");
    } else{
        console.log("This number is even");
    }

    if(b % 2 !== 0){
        console.log("This number is not even");
    } else{
        console.log("This number is even");
    }

    if(c % 2 !== 0){
        console.log("This number is not even");
    } else{
        console.log("This number is even");
    }
}

remainderCalc()

function identification(name){
    name = "";

    if(name == undefined || name == null || name == ""){
        console.log("Hello, Guest!")
    } else{
        console.log("Hello, " + name);
    }
}

identification();