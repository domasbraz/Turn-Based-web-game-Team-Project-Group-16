function createUnitKnight(position, skills)
{
    //hp, atk, def, energy
    let stats = [100, 30, 20, 100];
    if (skills == undefined)
    {
        skills = [1, 2, 3, 6];
    }

    createUnit("pUnit" + position, "knight", stats, skills);
}

function knightS1(origin)
{

    //description
    document.getElementsByClassName("skillInfo")[0].innerHTML =
    "<h1>Basic Attack</h1><br><p>Attacks an enemy unit dealing 100% of your attack as damage<br><br>Cost: 15 energy</p>";

    if (hasEnoughtEnergy(origin, 15))
    {
        enableTargeting(true, "knightS1Damage", origin.id);
    }
    else
    {
        document.getElementsByClassName("skillInfo")[0].innerHTML += "<p><b>Not Enough Energy</b></p>"
    }
}

function knightS1Damage(target, origin)
{
    let energy = document.getElementById(origin.id).getAttribute("energy");

    let energyCost = 15;

    if (energy >= energyCost)
    { 
        let atk = document.getElementById(origin.id).getAttribute("atk");
        

        let dmgMultiplyer = 100;

        let dmg = Math.floor((atk * dmgMultiplyer) / 100);
        energy -= energyCost;

        document.getElementById(origin.id).setAttribute("energy", energy);

        updateUnitEnergy(origin);

        usedTurn(origin);
        hideGuiBot();

        playAttackAnimation(origin, "knight").then(() =>
        {
            finalAttackCalc(target, dmg).then(()=>
            {
                nextDuel(origin);
            });
        });




        
    }
    else
    {
        //TODO: inform user of insuficient energy
    }
}

//TODO: add post conditions
function knightS2(origin)
{
    disableTargeting(true);
    document.getElementsByClassName("skillInfo")[0].innerHTML =
    "<h1>Guard</h1><br><p>Increases your defense by 30%<br><br>Lasts 2 rounds<br></p><button onclick='knightS2Buff(" + origin.id + ")'>Use</button>";
}

function knightS2Buff(origin)
{
    let alreadyApplied = addStatusFx(origin, "knightS2Buff", 2);

    let def = parseFloat(origin.getAttribute("def"));
    let defIncrease;
    if (!alreadyApplied)
    {
        defIncrease = def * 0.3
        def += defIncrease;

    }
    else
    {
        defIncrease = parseFloat(origin.getAttribute("knightS2Buff"));

        def -= defIncrease;

        defIncrease = def * 0.3;

        def += defIncrease;
    }

    origin.setAttribute("def", def);

    origin.setAttribute("knightS2Buff", defIncrease);


    usedTurn(origin);
    hideGuiBot();
    showEffect(origin, "Buff", "green").then(() => 
    {
        nextDuel(origin);
    });

/*     let element = document.getElementById(origin.id);
    let def = element.getAttribute("def");

    if (remove)
    {
        def *= (100/130);
        element.setAttribute("def", def);
    }
    else
    {
        let hasDuration = false;
        if (element.hasAttribute("duration"))
        {
            let durations = element.getAttribute("duration").split(" ");

            durations.forEach(function (skill)
            {
                if (skill == "s2")
                {
                    hasDuration = true;
                }
            })
        }
        if (hasDuration)
        {
            knightS2Duration(origin, "reset");
        }
        else
        {
            def *= 1.3;
            element.setAttribute("def", def);
            knightS2Duration(origin, "start");
        }
        usedTurn(element);
        deSelectUnit();
        nextDuel();
    } */
}

function removeknightS2Buff(origin)
{
    removeStatusFx(origin, "knightS2Buff");

    let def = origin.getAttribute("def");
    let defIncrease = origin.getAttribute("knightS2Buff");

    def -= defIncrease;

    origin.setAttribute("def", def);
    origin.removeAttribute("knightS2Buff");
}

/* function knightS2Duration(unit, type)
{
    unit = document.getElementById(unit.id);
    let duration;
    switch (type)
    {
        case "start":
            if (unit.hasAttribute("duration"))
            {
                let durations = unit.getAttribute("duration").split(" ");
                let durationInfo = "";
                durations.forEach(function (duration)
                {
                    if (duration == "s2")
                    {
                        s2duration(unit, "reset");
                        return;
                    }
                    durationInfo += duration + " ";
                });
                durationInfo += "s2"
                unit.setAttribute("duration", durationInfo);
            }
            else
            {
                unit.setAttribute("duration", "s2");
            }
            unit.setAttribute("s2Duration", "2");
            break;

        case "reset":
            duration = parseInt(unit.getAttribute("s2Duration"));

            if (duration < 2)
            {
                duration = 2;
                unit.setAttribute("s2Duration", "2");
            }
            break;

        case "down":
            duration = parseInt(unit.getAttribute("s2Duration"));
            duration--;
            if (duration < 1)
            {
                knightS2(unit, true);
            }
            break;
    }
} */

function knightS3(origin)
{
    disableTargeting(true);
    document.getElementsByClassName("skillInfo")[0].innerHTML =
    "<h1>Empower</h1><br><p>Increases defense of party by 10%<br>Reduces your max energy by 10%<br><br>Stacks up to 2 times<br></p><button onclick='knightS3Buff(" + origin.id + ")'>Use</button>";
}

function knightS3Buff(origin)
{
    let hasUsed = 0;

    if (origin.hasAttribute("s3Used"))
    {
        hasUsed = parseInt(origin.getAttribute("s3Used"));
        
    }
    if (hasUsed < 2)
    {
        
        let units = document.querySelectorAll(".pUnits");

        units.forEach(function (unit)
        {
            showEffect(unit, "Buff", "green");
            let def = parseFloat(unit.getAttribute("def"));
            //TODO: make scalable
            if (hasUsed == 1)
            {
                def = def * (100 / 110);
                def *= 1.2;
            }
            else
            {
                def *= 1.1;
            }
            unit.setAttribute("def", def);
            replaceAttributes(document.getElementById(unit.id), unit)
        });
        let maxEnergy = parseInt(origin.getAttribute("maxEnergy"));
        if (hasUsed == 1)
        {
            maxEnergy *= (100 / 90);
            maxEnergy *= 0.8;
        }
        else
        {
            maxEnergy *= 0.9;
        }
        origin.setAttribute("maxEnergy", maxEnergy)
        
        hasUsed++;
        
        origin.setAttribute("s3Used", hasUsed);
        usedTurn(origin);
        deSelectUnit();
        hideGuiBot();
        //failsafe
        setTimeout(() =>
        {
            nextDuel(origin);
        },
        3000
        );  
    }
    else
    {
        //TODO: inform user
    }
}


function knightS4(origin)
{
    document.getElementsByClassName("skillInfo")[0].innerHTML =
    "<h1>Heavy Attack</h1><br><p>Attacks an enemy unit dealing 100%-200% of your attack as damage<br><br>Cost: 50 energy</p>";
    if (hasEnoughtEnergy(origin, 50))
    {
        enableTargeting(true, "knightS4Damage", origin.id);
    }
    else
    {
        document.getElementsByClassName("skillInfo")[0].innerHTML += "<p><b>Not Enough Energy</b></p>"
    }
}


//TODO: implement armour pierce or not?
function knightS4Damage(target, origin)
{
    let energy = document.getElementById(origin.id).getAttribute("energy");

    let energyCost = 50;

    if (energy >= energyCost)
    { 
        let atk = document.getElementById(origin.id).getAttribute("atk");
        
        let dmgMultiplyer = Math.floor(Math.random() * 101) + 101;;

        let dmg = Math.floor((atk * dmgMultiplyer) / 100);
        energy -= energyCost;

        document.getElementById(origin.id).setAttribute("energy", energy);

        updateUnitEnergy(origin);

        usedTurn(origin);
        hideGuiBot();

        playAttackAnimation(origin, "knight").then(() =>
        {
            finalAttackCalc(target, dmg).then(()=>
            {
                nextDuel(origin);
            });
        });

    }
    else
    {
        //TODO: inform user of insuficient energy
    }
}

function knightS5(origin)
{
    document.getElementsByClassName("skillInfo")[0].innerHTML =
    "<h1>Guardian</h1><br><p>You protect an ally from enemy attacks<br>Only 1 ally can be protected at a time<br><br>Lasts 2 rounds</p>";
    enableTargeting(false, "knightS5Guardian", origin.id);
}

function knightS5Guardian(target, origin)
{
    target.setAttribute("protected", origin.getAttribute("class").spit(" ")[1]);
    addStatusFx(target, "knightS5Guardian", 2);

    disableTargeting(false);
    usedTurn(origin);
    hideGuiBot();
    showEffect(target, "Protected", "green").then(() =>
    {
        nextDuel(origin);
    })
}

function removeknightS5Guardian(unit)
{
    removeStatusFx(unit, "knightS5Guardian");
    unit.removeAttribute("protected");
}

function knightS6(origin)
{
    document.getElementsByClassName("skillInfo")[0].innerHTML =
    "<h1>Power Shift</h1><br><p>You transfer 50% of your attack to an ally<br>Only affects 1 ally at a time<br><br>Lasts 2 rounds<br>Cooldown: 2 rounds</p>";
    
    if (!hasCooldown(origin, "S6"))
    {
        enableTargeting(false, "knightS6Buff", origin.id);
    }
    else
    {
        document.getElementsByClassName("skillInfo")[0].innerHTML += "<p><b>Currently on Cooldown</b></p>"
    }
}

function knightS6Buff(target, origin)
{
    
    
    target.setAttribute("powershift", origin.getAttribute("class").split(" ")[1]);

    let targetAtk = parseFloat(target.getAttribute("atk"));
    let originAtk = parseFloat(origin.getAttribute("atk"));

    originAtk /= 2;

    targetAtk += originAtk;

    target.setAttribute("atktransfer", originAtk);

    target.setAttribute("atk", targetAtk);

    setCooldown(origin, "S6", 2);
    addStatusFx(target, "knightS6Buff", 2);
    usedTurn(origin);
    hideGuiBot();
    showEffect(target, "Buff", "green").then(() =>
    {
        nextDuel(origin);
    });
    
}

function removeknightS6Buff(unit)
{
    let origin = unit.getAttribute("powershift");

    unit.removeAttribute("powershift");

    let atkTransfer = parseFloat(unit.getAttribute("atktransfer"));

    let unitAtk = parseFloat(unit.getAttribute("atk"));

    unitAtk -= atkTransfer;

    unit.setAttribute("atk", unitAtk);

    unit.removeAttribute("atktransfer");

    origin = document.getElementsByClassName(origin)[0];

    let originAtk = origin.getAttribute("atk");

    originAtk += atkTransfer;

    origin.setAttribute("atk", originAtk);

    removeStatusFx(unit, "knightS6Buff");
}