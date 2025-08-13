function remainder(number){
    if(number > 0){
        console.log("This number is positive");
    }else if(number == 0){
        console.log("Null");
    }else{
        console.log("This number is negative");
    }
}
remainder(0)

function imt(w, h){
   imt = w / h**2;
   console.log(imt);
}
imt(62, 1.7)

function month(number){
    let monthName;
    switch(number){
        case 1:
            monthName = "January"; 
            break;
        
        case 2:
            monthName = "February"; 
            break;

        case 3:
            monthName = "March"; 
            break;

        case 4:
            monthName = "April"; 
            break;

        case 5:
            monthName = "May"; 
            break;

        case 6:
            monthName = "June"; 
            break;

        case 7:
            monthName = "July"; 
            break;

        case 8:
            monthName = "August"; 
            break;

        case 9:
            monthName = "September"; 
            break;

        case 10:
            monthName ="October"; 
            break;

        case 11:
            monthName = "November"; 
            break;

        case 12:
            monthName = "December"; 
            break;
    }
    console.log(monthName)
}
month(8)

function myFunc(season){
    let answer;
    switch(season){
        case "winter":
            answer = "Brrrr, i dont like this";
            break;
        
        case "spring":
            answer = "WOOOW, i like it too";
            break;

        case "summer":
            answer = "This is hot, friend XD"
            break;

        case "autumn":
            answer = "Good choice :)"
            break;
    }
    console.log(answer);
}

myFunc("spring");