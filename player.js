class Player extends People
{
    constructor(_color, _xpos, _ypos, _xv, _yv, _test)
    {
      super(_color, _xpos, _ypos, _xv, _yv);
      this.test = _test;
      console.log(this.test);
    }

    /*keyPush(evt)
    {
        switch(evt.keyCode)
        {
            case 37:
                this.testy = 5;
                this.xv = -1; this.yv = 0;
                console.log(this.xv);
                break;
            case 38:
                this.xv = 0; this.yv = -1;
                break;
            case 39:
                this.xv = 1; this.yv = 0;
                break;
            case 40:
                this.xv = 0; this.yv = 1;
                break;
        }
    }*/
}