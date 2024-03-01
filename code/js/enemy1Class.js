function createUnitEnemy1(position)
{
    //hp, atk, def, energy
    let stats = [100, 10, 5, 100];
    let skills = [1, 2];

    createUnit("eUnit" + position, "enemy1", stats, skills);
}

function enemy1S1(target, origin)
{
    let atk = document.getElementById(origin.id).getAttribute("atk");
        
    let dmgMultiplyer = 1;

    let dmg = Math.floor(atk * dmgMultiplyer);

    finalAttackCalc(target, dmg);

    usedTurn(origin);

}

