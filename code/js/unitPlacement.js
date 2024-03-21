createKnights(2);
createEnemy1s(2);

function createKnights(amount)
{
    for (let x = 1; x <= amount; x++)
    {
        createUnitKnight(x);
    }
}

function createEnemy1s(amount)
{
    for (let x = 1; x <= amount; x++)
    {
        createUnitEnemy1(x);
    }
}

setTurns();

console.log(playerTurns + " " + aiTurns);