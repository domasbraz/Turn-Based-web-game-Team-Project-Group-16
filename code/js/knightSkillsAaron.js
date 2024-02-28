//var knightMaxEnergy = 100;
var knightEnergy = 100;

var knightBasicAttackSkillMultiplyer = 100;
var knightHP=100;

var knightDamage;
var knightArmourPiercing;
var knightArmourIncrease;
var knightCounter;

var knightDefence = 100;
var knightEmpowerStack = 0;


let turns;
let knightAttack = 100;
let selectedAllyAttack = 0;



function increasePartyArmour(party){
    for(let i = 0;i < party.length;i++){
        party[i].armour = (party[i].armour * 1.1);
    }
}
function increasePartyArmour2(party){
    for(let i = 0;i < party.length;i++){
        party[i].armour = (party[i].armour * 1.2);
    }
}



function knightEmpower(){
    if(knightEmpowerStack == 1){
        knightMaxEnergy = (knightMaxEnergy * 1.1);
        increasePartyArmour(party);
    }
    if(knightEmpowerStack == 2){
        knightMaxEnergy = (100 * 1.2);
        increasePartyArmour2(party);
    }



}

// // uncomment to test knightEmpower
// // Function to create a sample character
// function createCharacter(name, armour) {
//     return { name, armour };
// }

// // Sample party with characters

// var party = [
//     createCharacter("Character1", 50),
//     createCharacter("Character2", 30),
//     createCharacter("Character3", 40),
//     createCharacter("Character4", 60)
// ];


// // Set initial values
// let knightMaxEnergy = 100;

// // Function to display party information
// function displayPartyInfo() {
//     console.log("Party Information:");
//     for (let i = 0; i < party.length; i++) {
//         console.log(`${party[i].name} - Armour: ${party[i].armour}`);
//     }
//     console.log(`Knight Max Energy: ${knightMaxEnergy}`);
//     console.log("--------------------------");
// }

// // Function to test knightEmpower
// function testKnightEmpower() {
//     console.log("Before Empower:");
//     displayPartyInfo();

//     knightEmpowerStack = prompt("1, 2");
//     // Call knightEmpower
//     knightEmpower();
//    // knightEmpower();
    

//     console.log("After Empower:");
//     displayPartyInfo();
// }

// // Call the testing function
// testKnightEmpower();

function knightGuardian(){

let damageDoneToSelectedAlly;
allyHp + damageDoneToSelectedAlly;
knightHP=knightHP-damageDoneToSelectedAlly;
knightEnergy = knightEnergy - 10;

}




let turnsForEncourage = 2;

function knightEncourage(){

    function  resetStats(){
         knightAttack = 100;
         selectedAllyAttack = 0;
    }
    
    if(turnsForEncourage > 0){
        resetStats();
        knightAttack = (knightAttack * 0.5);
        selectedAllyAttack = selectedAllyAttack + knightAttack;
        turnsForEncourage--;
        }

    
}


// // uncomment to test knightEncourage function
// function simulateBattle() {
//     console.log("Initial Knight Attack:", knightAttack);
//     console.log("Initial Selected Ally Attack:", selectedAllyAttack);
//     console.log("turns left : ", turnsForEncourage);

//     // Call the knightEncourage function
//   while(turnsForEncourage!==0){
//             knightEncourage();
//   }

    

//     console.log("Final Knight Attack:", knightAttack);
//     console.log("Final Selected Ally Attack:", selectedAllyAttack);
//     console.log("turns left : ", turnsForEncourage);

// }

// // Call the simulation function
// simulateBattle();

