//test case
for (let x = 1; x < 5; x++)
{
    createUnitKnight(x);
    createUnitEnemy1(x);
}

setTurns();

console.log(playerTurns + " " + aiTurns);