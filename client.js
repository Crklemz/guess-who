console.log('Here are all the available people:', people);

$(document).ready(readyNow);

function readyNow() {
    console.log('JQ');
    printPeople(people);
    randomName();

    //click listeners

    $('.pics').on('click', '.picture', handleClick);

}

function printPeople() {
    console.log('in printPeople');

    for(let info of people) {

    $('.pics').append(`
    <div class="picture" data-name=${info.name}><img src="https://github.com/${info.githubUsername}.png?size=250" alt="alt="Profile image of ${info.name}"></div>
    `)
    }//end for   
}//end printPeople

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

let rName = '';
let rEmployee = '';

function randomName() {

    rEmployee = people[randomNumber(1, 10)];
    console.log(rEmployee);
    
    $('.nameClick').append(`<div class="rando">${rEmployee.name}</div>`);
    
}

function handleClick() {
    let idOfClicked = $(this).data('name');
    rName = rEmployee.name;
    console.log(idOfClicked);
    console.log(rName);
    
    
    //determine name of photo clicked
    //test name clicked against the prompted name

    if(rName == idOfClicked) {

    console.log('clickPic --> Success!');
    window.alert('Correct - Let\s play again!');
    //run program again to generate another name prompt
    location.reload();

    } else {

        console.log('clickPic --> Wrong!');
        window.alert('Wrong - try again!');

    }//end if else

}//end handleClick

