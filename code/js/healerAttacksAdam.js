//adam, not completed yet 
let poisonStack = 0;
let maxPoisonStack = 100;
let poisonChance;


let healerCooldown = 0;
let healerAllyEffected = true;

let enemyMaxHealth = 100; 
let enemyCurrentHealth = 100;

function purify() {
    
}

function poisonMist() {
    for (let i = 0; i < 5; i++) {
        poisonChance = Math.floor(Math.random() * 5); 
        //console.log("Number:", poisonChance); 
        if (poisonChance < 1) {
            poison();
        }
    }
    healerCooldown = healerCooldown + 1;
}

function bloodBoil() {
    
    healerCooldown = healerCooldown + 3;
}

function poison() {
    if (poisonStack >= maxPoisonStack) {
        poisonStack = maxPoisonStack;
    }
    const poisonDamage = enemyMaxHealth * 0.01;
    enemyCurrentHealth -= poisonDamage;
    poisonStack++;
    poisonStack %= 2;
}

poisonMist();
console.log("enemey hp now: ", enemyCurrentHealth);