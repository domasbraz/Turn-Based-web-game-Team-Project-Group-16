var assassinHP = 100;
var assassinEnergy = 100;
var assassinAttack = 100;
var damageRecieved = 30;
var assassinArmourPiercing = 0;


/*
function CharacterData(Cname ,attack, energy, hp, armour){
    return{Cname ,attack, energy, hp, armour};
}


var enemy = [
    new CharacterData ("enemy" , 100 , 100 , 100 , 20),
]

var assassin = [
    new CharacterData ("assassin" , 100 , 100 , 100 , 20 ),
]*/

function stab(){
    assassinAttack = assassinAttack * 1;
    assassinEnergy = assassinEnergy - 15;
}

function backstab(){
    assassinAttack = assassinAttack * 1;
    assassinArmourPiercing = assassinArmourPiercing + 15; 
    assassinEnergy = assassinEnergy - 30;
}

/*
function test(){
    console.log(`enemy stats \n  ${enemy[0].attack} , ${enemy[0].hp} , ${enemy[0].armour}`);
    console.log(`assassin stats  \n  ${assassin[0].attack}, ${assassin[0].energy} , ${assassin[0].hp} ,  ${assassin[0].armour}`);

   // backstab();

    console.log(`enemy stats \n  ${enemy[0].attack} , ${enemy[0].hp} , ${enemy[0].armour}`);
    console.log(`assassin stats  \n  ${assassin[0].attack}, ${assassin[0].energy} , ${assassin[0].hp} ,  ${assassin[0].armour}`);


}
test();*/

// function displayPartyInfo(){
// console.log("assassins armour piercing " +assassinArmourPiercing);
// console.log("assassins energy " +assassinEnergy);
// console.log("assassins attack " +assassinAttack);

// stab();

// console.log("assassins armour piercing " +assassinArmourPiercing);
// console.log("assassins energy " +assassinEnergy);
// console.log("assassins attack " +assassinAttack);

// }

// displayPartyInfo();

let randomNumber

function randomNo(){
    randomNumber = Math.floor(Math.random() * 10);
   // return {randomNumber};
}

let smokeBombTurnCounter = 0;

function smokeBomb(){
    if (smokeBombTurnCounter === 0) {
        randomNo();
    
        if(randomNumber==0){
                damageRecieved = 0;
                console.log("smoke bomb has been released, damage : "+damageRecieved);
            }else{
                console.log("smoke bomb has not been released, damge: "+damageRecieved );
            }
            smokeBombTurnCounter = 2;  // Set the counter to 2 to prevent reactivation for the next two turns
        } else {
            console.log("Smoke bomb cannot be reactivated for the next two turns.");
        
        }
        
    }

//smokeBomb();

// let updatedHealth;

// function testSmokeBomb(){
//     updatedHealth = assassinHP-damageRecieved;
//    // console.log("assassin recieves " +damageRecieved+ " damage remaining "+updatedHealth+ " hp remaining");

//     smokeBomb();
//     updatedHealth = assassinHP-damageRecieved;

//     console.log("random number: "+randomNumber);

//     console.log("assassin recieves 30 damage " +updatedHealth+ " hp remaining");

// }
// testSmokeBomb();

// var turnCounter = 0;
// var roundCounter = 0;

// function roundCounters() {
//     for (let turn = 1; turn <= 15; turn++) {
//         // Increase the turn counter
//         turnCounter++;

//         if(roundCounter <2){ 
//             testSmokeBomb();
//         }

//         // Check if 5 turns have passed to increment the round counter
//         if (turnCounter % 5 === 0) {
//             roundCounter++;
//             console.log(`End of Round ${roundCounter}`);
//         }

//         // Check if 3 rounds have passed to end the simulation
//         if (roundCounter >= 3) {
//             console.log("Battle simulation completed.");
//             break;
//         }
//     }
// }
// // Call the battle simulation function
// roundCounters();


