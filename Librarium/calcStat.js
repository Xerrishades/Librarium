function CalcStat(bas, wgt, max, cap, spr, spd, std, mvt)
}
  this.bas = (10 + 4 * str) * Math.pow(hgt,2);
  this.wgt = 1 * brd + bas;
  this.max = .4 * bas * str + bas;
  this.cap = max - wgt;
  this.spr = 10 - Math.abs(str - 3)
  this.spd = spr - spr * (wgt / max);
  this.std = .4 * hgt;
  this.mvt = spd * std;
}