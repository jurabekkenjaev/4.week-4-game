console.log("Game has loaded");

// =============================================
// GLOBAL VARIABLES
var character = document.getElementsByClassName("character");
console.log(character);

var characterSelected = document.getElementById("character-selected");
console.log(characterSelected);

var availableCharacters = document.getElementById("available-characters");
console.log(availableCharacters);

var obiWanKenobi = document.getElementById("obiWanKenobi");
console.log(obiWanKenobi);
obiWanKenobi.setAttribute("data-attack", "10");
obiWanKenobi.setAttribute("data-health", "120");
obiWanKenobi.setAttribute("data-counter", "12");

var lukeSkywalker = document.getElementById("lukeSkywalker");
console.log(lukeSkywalker);
lukeSkywalker.setAttribute("data-attack", "11");
lukeSkywalker.setAttribute("data-health", "100");
lukeSkywalker.setAttribute("data-counter", "10");

var darthSidious = document.getElementById("darthSidious");
console.log(darthSidious);
darthSidious.setAttribute("data-attack", "12");
darthSidious.setAttribute("data-health", "150");
darthSidious.setAttribute("data-counter", "11");

var darthMaul = document.getElementById("darthMaul");
console.log(darthMaul);
darthMaul.setAttribute("data-attack", "13");
darthMaul.setAttribute("data-health", "180");
darthMaul.setAttribute("data-counter", "13");

var currentCharacterIsSelected = false;
var availableCharactersArray = [];

// =============================================
// GLOBAL FUNCTIONS
function assignEventListeners(arrayOfCharacters) {
    for (var i = 0; i < arrayOfCharacters.length; i++) {
        arrayOfCharacters[i].addEventListener("click", function(event) {
            console.log(this);
            console.log(this.getAttribute("data-attack"))
            selectAHero(this);
            for (var i = 0; i < 4; i++){
            	availableCharacters.html(character[i]);            
            }
            
        });
    }
}

function selectAHero(thing) {
    if (currentCharacterIsSelected == false) {
        console.log("Trying to select a character");
        thing.setAttribute("class", "hero col-sm-2 character");
        $(characterSelected).html(thing);
        currentCharacterIsSelected = true;
    }
}

// =============================================
// MAIN CODE
assignEventListeners(character);

// =============================================
// =============================================
// =============================================
