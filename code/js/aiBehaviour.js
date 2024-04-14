function aiPlayUnit()
{
    selectRandomEnemy();
}

function selectRandomEnemy()
{
    let eUnits = document.getElementsByClassName("eUnits").length;

    let slot = getRndInteger(1, eUnits);

    let origin = document.getElementsByClassName("eUnit" + slot)[0];

    if (origin.getAttribute("hasTurn") == "true")
    {
        useRandomSkill(origin);
    }
    else
    {
        selectRandomEnemy();
    }
    
}

function useRandomSkill(origin)
{
    let tauntedUnits = document.querySelectorAll(".pUnits[taunt]");
    let target;
    if (tauntedUnits.length > 0)
    {
        target = tauntedUnits[0];
    }
    else
    {
        let playerUnits = document.getElementsByClassName("pUnits").length;

        let targetSlot = Math.floor((Math.random() * playerUnits) + 1);

        target = document.getElementsByClassName("pUnit" + targetSlot)[0];

        if (target.hasAttribute("protected"))
        {
            target = document.getElementsByClassName(target.getAttribute("protected"))[0];
        }
    }

    let skills = origin.getAttribute("skills").split(" ");

    let skill = getRndInteger(1, skills.length - 1);

    let type = origin.getAttribute("type");

    let func = window[type + "S" + skill];

    func(target, origin);
}