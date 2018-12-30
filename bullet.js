class Bullet
{
    constructor(_person, _color, _xv, _yv)
    {
      this.person = _person;
      this.color = _color;
      this.xpos = this.person.getXpos() + 1;
      this.ypos = this.person.getYpos();
      this.xv = _xv;
      this.yv = _yv;
    }

    shoot()
    {
        ctx.fillStyle="black";
        ctx.fillRect(this.xpos*gs, this.ypos*gs, gs-2, gs-2);
    }

    reloadBullet()
    {
        ctx.fillStyle="black";
        this.xpos += 1;
        ctx.fillRect(this.xpos*gs, this.ypos*gs, gs-2, gs-2);
        console.log(this.xpos);
    }
}