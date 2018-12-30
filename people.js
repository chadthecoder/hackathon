class People {
    constructor(_color, _xpos, _ypos, _xv, _yv)
    {
      this.testy = 4;
      this.color = _color;
      this.xpos = _xpos;
      this.ypos = _ypos;
      this.xv = _xv;
      this.yv = _yv;
      console.log("test", this.xv);
    }

    getXpos()
    {
        return this.xpos;
    }
    getYpos()
    {
        return this.ypos;
    }
    getXv()
    {
        return this.xv;
    }
    getYv()
    {
        return this.yv;
    }

    setXpos(xpos)
    {
        this.xpos = xpos;
    }
    setYpos(ypos)
    {
        this.ypos = ypos;
    }
    setXv(xv)
    {
        this.xv = xv;
    }
    setYv(yv)
    {
        this.yv = yv;
    }

    move()
    {
        //console.log(this.xv);
        this.xpos += this.xv;
        this.ypos += this.yv;
        //console.log("movingplayer");
        //console.log(this.xpos);
        if(this.xpos < 0)
        {
            //px = tc-1;
            //outOfBounds();
        }
        if(this.xpos > tc - 1)
        {
            //px = 0;
            //outOfBounds();
        }
        if(this.ypos < 0)
        {
            //py = tc-1;
            //outOfBounds();
        }
        if(this.ypos > tc - 1)
        {
           //py = 0;
           //outOfBounds();
        }
    }

    reload()
    {
        ctx.fillStyle=this.color;
        //console.log("reloadplayer");
        ctx.fillRect(this.xpos*gs, this.ypos*gs, gs-2, gs-2);
    }

}