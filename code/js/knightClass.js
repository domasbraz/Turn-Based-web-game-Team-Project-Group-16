function setUnitKnight(position)
{
    let stats = [100, 100, 5, 100];
    let skills = [1, 2, 3, 4];

    setUnit("pUnit" + position, "knight", stats, skills);
}

function knightS1(origin)
{
    //for some unknown reason JS decides not to pass to correct value though the parameter so I must reset the correct value
    origin = origin.id;
    //description
    document.getElementsByClassName("skillInfo")[0].innerHTML =
    "<h1>Basic Attack</h1><br><p>Attacks an enemy unit dealing 100% of your attack as damage<br><br>Cost: 15 energy</p>";

    enableTargeting(true, "knightS1Damage", origin);
}

function knightS1Damage(target, origin)
{
    let energy = document.getElementById(origin.id).getAttribute("energy");

    let energyCost = 15;

    if (energy >= energyCost)
    { 
        let atk = document.getElementById(origin.id).getAttribute("atk");
        

        let dmgMultiplyer = 1;

        let dmg = Math.floor(atk * dmgMultiplyer);
        energy -= energyCost;

        document.getElementById(origin.id).setAttribute("energy", energy);

        finalAttackCalc(target, dmg);

        updateUnitEnergy(origin);
    }
    else
    {
        //TODO: inform user of insuficient energy
    }
}