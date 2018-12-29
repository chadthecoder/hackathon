window.onload=function()
{
    canv = document.getElementById("hack");
    ctx = canv.getContext("2d");
    document.addEventListener("keydown", keyPush);
    setInterval(game, 1000/15);
    setVars();
}
function setVars()
{
var me = new Player(10, 10, 0, 0, "I am a player");
px=py=10;
gs=tc=20;
pxv=pyv=0;
ex=ey=15;
exv=eyv=0;
score = 0;
console.log(score);
}
function game()
{
    reloadBackground();
    movingPlayer();
    reloadPlayer();
    movingEnemy();
    reloadEnemy();
}

function keyPush(evt)
{
    switch(evt.keyCode)
    {
        case 37:
            pxv=-1; pyv=0;
            break;
        case 38:
            pxv=0; pyv=-1;
            break;
        case 39:
            pxv=1; pyv=0;
            break;
        case 40:
            pxv=0; pyv=1;
            break;
 
    }
}