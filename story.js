var currentLocation = "start";
var inventory = [];
var audio = new Audio('buttonclick.mp3');
var die = new Audio('die.mp3');
function save(){
    localStorage.setItem('currentLocation', JSON.stringify(currentLocation));
    localStorage.setItem('inventory', JSON.stringify(inventory));
}

function load(){
    currentLocation = JSON.parse(localStorage.getItem('currentLocation'));
    inventory = JSON.parse(localStorage.getItem('inventory'));
    console.log(currentLocation);
    
}

function changeLocation(dir){
    if(locations[currentLocation].directions[dir] !== undefined){
        currentLocation = locations[currentLocation].directions[dir]
        $('#game-text').empty().append("<p>" + locations[currentLocation].description + "</p>");
        $('#game-image').empty().append(locations[currentLocation].image);
        $('#game-place').empty().append(locations[currentLocation].place);
        $('#gamebuttons').empty().append(locations[currentLocation].buttonchoice.choice1);
        $('#gamebuttons').append(locations[currentLocation].buttonchoice.choice2);
        $('#gamebuttons').append(locations[currentLocation].buttonchoice.choice3);
    }

}

function showInventory(){
    if(inventory.length === 0){
        $('#gametoolbar').empty().append("<p>You are not carrying anything</p>");
        return
    }
    $('#gametoolbar').empty().append("<p>Here is your inventory: </p>");
    $('#gametoolbar').append("<p><ul>");
    for(var i = 0; i < commands.length; i++) {
        $('gametoolbar').append("<li>"+ commands[i] + "</li>");
    }
    $('gametoolbar').append("</ul></p>")
}

function showStats(){
    $('#gametoolbar').empty().append("<p>STATS</p>");
}


$(document).ready(function(){
    $('#game-text').append("<p>" + locations.start.description + "</p>");
    $('#game-image').append(locations.start.image);
    $('#gamebuttons').append(locations.start.buttonchoice.choice1);
})


document.getElementById('gamebuttons').addEventListener('click', function(evt) {
    var target = evt.target;

    console.log(target.id)
    switch(target.id){

    case "choice1":
        audio.play();
        console.log("hello1");
        changeLocation("choice1");
        break;

    case "choice2":
        audio.play();
        console.log("hello2");
        changeLocation("choice2");
        break;
        
    case "choice3":
        audio.play();
        console.log("hello3");
        changeLocation("choice3")
        break;
    case "die":
        audio.play();
        die.play();
        console.log("hello4");
        changeLocation("choice1")
        break;
    }
})
