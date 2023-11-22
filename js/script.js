// Loop numeri da 1 a 100
for (let i=1; i<= 100; i++) {

    // Variabile per assegnare un nome alle diverse classi di multipli
    let name_multiple;

    // multipli sia di 3 che di 5
    if (i % 3 == 0 && i % 5 == 0) {
        name_multiple = "FizzBuzz";
        console.log(name_multiple);
    } 

    // multipli di 5
    else if(i % 5 == 0){
        name_multiple = "Buzz";
        console.log(name_multiple);
    }

    // multipli di 3
    else if(i % 3 == 0){
        name_multiple = "Fizz";
        console.log(name_multiple);
    }
    else{
        console.log(i);
    }
}
