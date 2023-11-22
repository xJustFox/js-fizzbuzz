// Loop numeri da 1 a 100
for (let i=1; i<= 100; i++) {

    const first_list = document.getElementById("first-list");

    // Variabile per assegnare un nome alle diverse classi di multipli
    let name_multiple;

    // multipli sia di 3 che di 5
    if (i % 3 == 0 && i % 5 == 0) {
        name_multiple = "FizzBuzz";
        let li = `<li id="item-${i}">${name_multiple}</li>`;
        first_list.innerHTML += li;

        console.log(name_multiple);
    } 

    // multipli di 5
    else if(i % 5 == 0){
        name_multiple = "Buzz";
        let li = `<li id="item-${i}">${name_multiple}</li>`;
        first_list.innerHTML += li;

        console.log(name_multiple);
    }

    // multipli di 3
    else if(i % 3 == 0){
        name_multiple = "Fizz";
        let li = `<li id="item-${i}">${name_multiple}</li>`;
        first_list.innerHTML += li;

        console.log(name_multiple);
    }
    else{
        let li = `<li id="item-${i}">${i}</li>`;
        first_list.innerHTML += li;

        console.log(i);
    }
}
