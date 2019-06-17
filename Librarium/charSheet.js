var charBase =
{
  name: "Lucifer",
  hgt: 1.8,
  str: 3,
  det: 3,
  per: 3,
  int: 3,
  brd: 10,
}
  var nam = charBase.name;
  var hgt = charBase.hgt;
  var bas = (10 + 4 * charBase.str) * Math.pow(charBase.hgt,2);
  var wgt = 1 * charBase.brd + bas;
  var max = .4 * bas * charBase.str + bas;
  var cap = max - wgt;
  var spr = 10 - Math.abs(charBase.str - 3);
  var spd = spr - spr * ((wgt - bas) / (max - bas));;
  var std = .4 * hgt;
  var mvt = spd * std;

charStat =
{
  nam: nam,
  hgt: hgt,
  bas: bas,
  wgt: wgt,
  max: max,
  cap: cap,
  spr: spr,
  spd: spd,
  std: std,
  mvt: mvt,
}