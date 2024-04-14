function createUnitEnemySword(position, stats)
{
    //hp, atk, def, energy
    if (stats == undefined)
    {
        stats = [60, 30, 5, 100];
    }
    let skills = [1, 2];

    createUnit("eUnit" + position, "enemySword", stats, skills);
}

function enemySwordS1(target, origin)
{
    let atk = document.getElementById(origin.id).getAttribute("atk");
        
    let dmgMultiplyer = 1;

    let dmg = Math.floor(atk * dmgMultiplyer);

    usedTurn(origin);
    hideGuiBot(origin);
    playAttackAnimation(origin, "enemySword").then(() =>
    {
        finalAttackCalc(target, dmg).then(() =>
        {
            nextDuel();
        });
    });

}

function enemySwordS2(target, origin)
{
    let success = getRndInteger(1, 5) == 5;

    if (success)
    {
        let atk = document.getElementById(origin.id).getAttribute("atk");
        
        let dmgMultiplyer = getRndInteger(100, 200);
    
        let dmg = Math.floor((atk * dmgMultiplyer) / 100);
    
        usedTurn(origin);
        hideGuiBot();
        playAttackAnimation(origin, "enemySword").then(() =>
        {
            finalAttackCalc(target, dmg).then(() =>
            {
                nextDuel(origin);
            });
        });
    }
    else
    {
        enemySwordS1(target, origin);
    }
}

