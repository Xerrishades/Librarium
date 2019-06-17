function getStat()
{
	var nam = document.getElementById("name").value;
	var hgt = document.getElementById("height").value;
	var str = document.getElementById("strength").value;
	var per = document.getElementById("perception").value;
	var int = document.getElementById("intuition").value;
	var brd = document.getElementById("burden").value;

	document.getElementById("stats").innerHTML = nam + " , your stats are:<br>"
	+ "<br>Height: " + hgt
	+ "<br>Base: " + bas.toFixed(2)
	+ "<br>Max Weight: " + max.toFixed(2)
	+ "<br>Max Carry: " + (max - bas).toFixed(2)
	+ "<br>Weight: " + wgt.toFixed(2)
	+ "<br>Capacity: " + cap.toFixed(2)
	+ "<br>Speed: " + spd.toFixed(2)
	+ "<br>Stride: " + std.toFixed(2)
	+ "<br>Movement: " + mvt.toFixed(2);
}