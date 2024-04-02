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

function priestS3(origin)
{
    document.getElementsByClassName("skillInfo")[0].innerHTML =
    "<h1>Poison Mist</h1><br><p>Attacks an enemy 5 times with a 20% chance of applying poison<br><br>Cooldown: 2 rounds</p>";

    if (hasCooldown(origin, "S3"))
    {
        enableTargetting(true, "priestS3Attack", origin);
    }
}

function priestS3Attack(target, origin)
{
    let numOfAtks = 5;

    for (numOfAtks; numOfAtks > 0; numOfAtks--)
    {
        let chance = getRndInteger(1, 5);

        if (chance == 1)
        {
            addStatusFx(target, "poison", 99);
        }
    }

    setCooldown(origin, "S3", 2);
    usedTurn(origin);
    nextDuel(origin);
}

function priestS4(origin)
{
    document.getElementsByClassName("skillInfo")[0].innerHTML =
    "<h1>Divine Blessing</h1><br><p>Heal your party for 30% of your attack<br><br>Cooldown: 2 rounds</p>";

    if (hasCooldown(origin, "S4"))
    {
        enableTargetting(false, "priestS4Heal", origin);
    }
}

function priestS4Heal(target, origin)
{
    //target not used but included because of structure of how the skill functions are called

    let heal = parseFloat(origin.getAttribute("atk"));
    heal *= 0.3;
    let units = document.querySelectorAll(".pUnits");

    units.forEach(function (unit)
    {
        let hp = parseFloat(unit.getAttribute("hp"));
        hp += heal;
        unit.setAttribute("hp", hp);
        updateUnitHp(unit);
    })

    setCooldown(origin, "S4", 2);
    usedTurn(origin);
    nextDuel(origin);
}