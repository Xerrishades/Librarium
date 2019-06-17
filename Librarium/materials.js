function Material(hrd, dns, shr, nrm, flm, cnd, mlt, brt)
{
  this.hrd = hrd;
  this.dns = dns;
  this.shr = shr;
  this.nrm = nrm;
  this.flm = flm;
  this.cnd = cnd;
  this.melt = mlt;
  this.brt = brt;
}

var air = new Material(0, 0, 0, 0, 1, 1, 0, 0);
var wat = new Material(.1, 1, 0, 0, 0, 1, 100, 0);
var col = new Material(.2, 1.27, 200, 100, 0, 1, 32, 0);
var fls = new Material(.5, .95, "NaN", "NaN", 0, 1, 62, 0);
var fib = new Material(2.5, 750, 1900, "NaN", 1, 0, "NaN", "NaN");
var prc = new Material(3.5, "NaN", "NaN", "NaN", 0, 1, "NaN", "NaN");
var nfr = new Material(5, "NaN", "NaN", "NaN", 0, 1, "NaN", "NaN");
var min = new Material(6, 1400, "NaN", "NaN", 0, 0, "NaN", "NaN");
var fer = new Material(8, "NaN", "NaN", "NaN", 0, 1, "NaN", "NaN");
var ext = new Material(10, "NaN", "NaN", "NaN", 0, 0, "NaN", "NaN",);