class Player extends People {
    constructor(xpos, ypos, xv, yv, test) {
      super();
      this.xpos = xpos;
      this.ypos = ypos;
      this.xv = xv;
      this.yv = yv;
      this.test = test;
      console.log(test);
    }
    keyPush(evt)
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
}

function reloadPlayer()
{
    ctx.fillStyle="silver";
    ctx.fillRect(px*gs, py*gs, gs-2, gs-2);
}
function movingPlayer()
{
    px += pxv;
    py += pyv;
    if(px < 0)
    {
        //px = tc-1;
        outOfBounds();
    }
    if(px > tc - 1)
    {
        //px = 0;
        outOfBounds();
    }
    if(py < 0)
    {
        //py = tc-1;
        outOfBounds();
    }
    if(py > tc - 1)
    {
       //py = 0;
       outOfBounds();
    }
}