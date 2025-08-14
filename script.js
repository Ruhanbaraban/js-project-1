let i = 0;


function forFunc(){
    for(let i = 0; i <= 10; i++){
        console.log(i)
    }
}

function whileFunc(){
    while(i < 100){
        i++;
        console.log(i);
    }
}

function func(number){
    for(let i = 2; i <= number; i++){
        if(number % i === 0) return false
    }
    return number !== 1
}

function func1(max){
    for(let i = 2; i <= max; i++){
        if(func(i)){
            console.log(i);
        }
    }
}

func1(100);