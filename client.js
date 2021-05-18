console.log('Here are all the available people:', people);

let rName = '';

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
    <div class="picture" data-name=${info.name}"><img src="https://github.com/${info.githubUsername}.png?size=250" alt="alt="Profile image of ${info.name}"></div>
    `)
    }//end for   
}//end printPeople

function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

function randomName() {
  rName = $('.nameClick').text(`Click On: ${people[randomNumber(1, 10)].name}`);

}

function handleClick() {
    let idOfClicked = $(this).data('name');
    console.log(idOfClicked);
    
    //determine name of photo clicked
    if(rName === idOfClicked) {

    console.log('clickPic --> Success!');
    $(this).text('Success!')

    } else {
        console.log('clickPic --> Wrong!');
        $(this).text('Wrong!')
    }
    //test name clicked against the prompted name

    
    //run program again to generate another name prompt
}

