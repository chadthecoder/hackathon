window.onload=function()
{
    let me = new Player("silver", 10, 10, 0, 0, "I am a player");
    let ghost = new Enemy("white", 15, 15, 0, 0, "I am a enemy"); 

    function keyPush(evt)
    {
        switch(evt.keyCode)
        {
            case keycodes.LEFT_ARROW:
                me.setXv(-1); me.setYv(0);
                console.log(this.xv);
                break;
            case keycodes.UP_ARROW:
                me.setXv(0); me.setYv(-1);
                break;
            case keycodes.RIGHT_ARROW:
                me.setXv(1); me.setYv(0);
                break;
            case keycodes.DOWN_ARROW:
                me.setXv(0); me.setYv(1);
                break;
            case keycodes.SPACE:
                var bull = new Bullet(me, "black", 1, 0);
                bull.shoot();
                setInterval(bull.reloadBullet, 1000/15);
                console.log("new bullet");

        }
    }

    gs=tc=20;
    
    ghost.getXpos();
    me.setXpos(4);
    //setVars();
    canv = document.getElementById("game");
    ctx = canv.getContext("2d");
    document.addEventListener("keydown", keyPush);
    setInterval(game, 1000/15, me, ghost);
    
}

function game(me, ghost)
{
    reloadBackground();
    me.move();
    me.reload();
    ghost.move();
    ghost.reload();
}

function reloadBackground()
{
    ctx.fillStyle="green";
    ctx.fillRect(0, 0, canv.width, canv.height);
}
function outOfBounds()
{
    console.log("Out of Bounds!");
}