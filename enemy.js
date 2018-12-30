class Enemy extends People {
    constructor(_color, _xpos, _ypos, _xv, _yv, _test) {
      super(_color, _xpos, _ypos, _xv, _yv);
      this.test = _test;
      console.log(this.test);
    }
  }