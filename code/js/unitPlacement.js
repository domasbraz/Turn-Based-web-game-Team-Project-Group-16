//test case
for (let x = 1; x < 5; x++)
{
    setUnitKnight(x);
    setUnitEnemy1(x);
}

setTurns();

console.log(playerTurns + " " + aiTurns);