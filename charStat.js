//The class used for character stat parameters.

function Character(nam, hgt, str, brd, bas, wgt, max, cap, spr, spd, std, mvt)
{
  this.nam = nam;
  this.hgt = hgt;
  this.str = str;
  this.brd = brd;
  this.bas = (10 + 4 * str) * Math.pow(hgt,2);
  this.wgt = 1 * this.brd + this.bas;
  this.max = .4 * this.bas * str + this.bas;
  this.cap = this.max - this.wgt;
  this.spr = 10 - Math.abs(str - 3);
  this.spd = this.spr - this.spr * (this.wgt - this.bas) / (this.max - this.bas);
  this.std = .4 * hgt;
  this.mvt = this.spd * this.std;
}

//An example character.

var dremos = new Character("Dremos", 1.8, 3, 0,);