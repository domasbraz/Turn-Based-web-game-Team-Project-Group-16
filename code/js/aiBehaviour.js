function randomEnemy1()
{
    let eUnits = document.getElementsByClassName("eUnits").length;

    let slot = Math.floor((Math.random() * eUnits) + 1);

    let origin = document.getElementById("enemy1" + slot);

    basicAttack(origin);
}

function basicAttack(origin)
{
    let playerUnits = document.getElementsByClassName("pUnits").length;

    let targetSlot = Math.floor((Math.random() * playerUnits) + 1);

    let target = document.getElementsByClassName("pUnit" + targetSlot)[0];

    enemy1S1(target, origin);
}