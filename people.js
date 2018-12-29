class People {
    constructor(xpos, ypos, xv, yv) {
      this.xpos = xpos;
      this.ypos = ypos;
      this.xv = xv;
      this.yv = yv;
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
  }