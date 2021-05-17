console.log('Here are all the available people:', people);

$(document).ready(readyNow);

function readyNow() {
    console.log('JQ');
    printPeople(people);
    
}

function printPeople() {
    console.log('in printPeople');

    for(let info of people) {

    $('.pics').append(`
    <div data-name=${info.name}"><img src="https://github.com/${info.githubUsername}.png?size=250" alt="alt="Profile image of ${info.name}"></div>
    `)


    
    }//end for   
}//end printPeople

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}