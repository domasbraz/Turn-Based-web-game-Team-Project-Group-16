function aiPlayUnit()
{
    randomEnemy1();
}

function randomEnemy1()
{
    let eUnits = document.getElementsByClassName("eUnits").length;

    let slot = Math.floor((Math.random() * eUnits) + 1);

    let origin = document.getElementById("enemy1" + slot);

    if (origin.getAttribute("hasTurn") == "true")
    {
        basicAttack(origin);
    }
    else
    {
        randomEnemy1();
    }
    
}

//TODO: implement proper skills
function basicAttack(origin)
{
    let playerUnits = document.getElementsByClassName("pUnits").length;

    let targetSlot = Math.floor((Math.random() * playerUnits) + 1);

    let target = document.getElementsByClassName("pUnit" + targetSlot)[0];

    if (target.hasAttribute("protected"))
    {
        target = document.getElementsByClassName(target.getAttribute("protected"))[0];
    }

    enemy1S1(target, origin);
}