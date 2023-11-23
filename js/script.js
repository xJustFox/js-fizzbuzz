// Loop numeri da 1 a 100
for (let i=1; i<= 100; i++) {

    const first_list = document.getElementById("first-list");

    // Variabile per assegnare un nome alle diverse classi di multipli
    let name_multiple;
    let li;

    // multipli sia di 3 che di 5
    if (i % 3 == 0 && i % 5 == 0) {
        name_multiple = "FizzBuzz";
        li = `<li id="item-${i}">${name_multiple}</li>`;

        console.log(name_multiple);
    } 

    // multipli di 5
    else if(i % 5 == 0){
        name_multiple = "Buzz";
        li = `<li id="item-${i}">${name_multiple}</li>`;

        console.log(name_multiple);
    }

    // multipli di 3
    else if(i % 3 == 0){
        name_multiple = "Fizz";
        li = `<li id="item-${i}">${name_multiple}</li>`;

        console.log(name_multiple);
    }
    else{
        li = `<li id="item-${i}">${i}</li>`;
        
        console.log(i);
    }

    first_list.innerHTML += li;
}
