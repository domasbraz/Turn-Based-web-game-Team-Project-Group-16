//adam
archerDmg = 0;
archerEnergy = 100;
archerAttack = 100;


function spreadShot(){
    archerEnergy = archerEnergy - 25;
    archerDmg = archerAttack  * 0.3;
}
function piercingShot(){
    archerEnergy = archerEnergy - 40;
    archerDmg = archerAttack  * 0.2;
}
function quickShot(){
    archerEnergy = archerEnergy - 10;
    archerDmg = archerAttack  * 0.5;
}
