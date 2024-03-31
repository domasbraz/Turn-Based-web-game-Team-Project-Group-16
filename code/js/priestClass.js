function createUnitPriest(position)
{
    let stats = [100, 20, 5, 100];
    let skills = [1, 2, 3, 4];

    createUnit("pUnit" + position, "priest", stats, skills);
}

function priestS1(origin)
{
    document.getElementsByClassName("skillInfo")[0].innerHTML =
    "<h1>Quick Heal</h1><br><p>Heals an ally for 50% of your attack<br><br>Cooldown: 2 rounds</p>";

    enableTargetting(false, "priestS1Heal", origin);
}

function priestS1Heal(target, origin)
{
    let targetHp = target.getAttribute("hp");
    let healAmount = origin.getAttribute("atk");

    healAmount /= 2;

    targetHp += healAmount;

    target.setAttribute("hp", targetHp)

    updateUnitHp(target);
    usedTurn(origin);
    nextDuel(origin);
}

function priestS2(origin)
{
    document.getElementsByClassName("skillInfo")[0].innerHTML =
    "<h1>Curse of Pain</h1><br><p>Curses an enemy, making them take 10% more damage for 2 rounds<br><br>Cooldown: 2 rounds</p>";

    if (hasCooldown(origin, "S2"))
    {
        enableTargetting(true, "priestS2Curse", origin);
    }
}

function priestS2Curse(target, origin)
{
    addStatusFx(target, "curse", 2);

    setCooldown(origin, "S2", 2);

    usedTurn(origin);
    nextDuel(origin);
}