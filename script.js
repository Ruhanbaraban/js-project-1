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




let number = 2;

for(let i = 2; i <= 100; i++){
    if(i % number === 0){
        console.log("")
    } else if(i % i === 0 && i % 1 === 0){
        console.log(i)
    }
}