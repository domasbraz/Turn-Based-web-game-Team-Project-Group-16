//adam
var knightEnergy = 100;
var knightAttack = 100;
var knightBasicAttackSkillMultiplyer = 100;

var knightDamage;
var knightArmourPiercing;
var knightArmourIncrease;

var knightCounter = 0;

var knightDefence = 100;

function knightBasicAttack(){  
    knightDamage = Math.floor((attack / 100) * knightBasicAttackSkillMultiplyer);
    knightEnergy = knightEnergy - 15;
}

function knightHeavyAttack(){  
    knightBasicAttackSkillMultiplyer = Math.floor(Math.random() * 101) + 100; //range of 100 - 200
    knightDamage = Math.floor((knightAttack / 100) * knightBasicAttackSkillMultiplyer);
    knightEnergy = knightEnergy - 30;
    knightArmourPiercing = knightArmourPiercing + 10;
}

function knightGuard(){  
    knightEnergy = knightEnergy - 5;
    knightDefence = knightDefence * 1.3;
    knightCounter = knightCounter + 2;
}


/* 
function round(){
    while(knightCounter !== 0){
        knightCounter = knightCounter - 1;
        if(knightCounter === 0){
            knightDefence = knightDefence * 1;
        }
    }
}
*/