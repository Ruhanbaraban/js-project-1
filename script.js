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

function check(num){
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            return false;
        }
    }
    return num !== 1;
}

function print(max){
    for(let i = 2; i <= max; i++){
        if(check(i)){
            console.log(i)
        }
    }
}

print(100)
