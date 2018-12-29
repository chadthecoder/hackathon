class Enemy extends People {
    constructor(xpos, ypos, xv, yv, test) {
      this.xpos = xpos;
      this.ypos = ypos;
      this.xv = xv;
      this.yv = yv;
      this.test = test;
      console.log(test);
    }
  }

function reloadEnemy()
{
    ctx.fillStyle="white";
    ctx.fillRect(ex*gs, ey*gs, gs-2, gs-2);
}
function movingEnemy()
{
    ex += exv;
    ey += eyv;
    if(px < 0)
    {
        //px = tc-1;
        outOfBounds();
    }
    if(ex > tc - 1)
    {
        //px = 0;
        outOfBounds();
    }
    if(ey < 0)
    {
        //py = tc-1;
        outOfBounds();
    }
    if(ey > tc - 1)
    {
       //py = 0;
       outOfBounds();
    }
}