function mixColors() {
    var color1 = document.getElementById("color1").value;
    var color2 = document.getElementById("color2").value;

    var r1 = parseInt(color1.substring(0,2),16);
    var g1 = parseInt(color1.substring(2,4),16);
    var b1 = parseInt(color1.substring(4,6),16);

    var r2 = parseInt(color2.substring(0,2),16);
    var g2 = parseInt(color2.substring(2,4),16);
    var b2 = parseInt(color2.substring(4,6),16);

    var r = Math.floor((r1 + r2) / 2);
    var g = Math.floor((g1 + g2) / 2);
    var b = Math.floor((b1 + b2) / 2);

    var mixedColor = "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    document.getElementById("mixed-color").style.backgroundColor = mixedColor;
    document.getElementById("color-code").textContent = mixedColor;

  var firstColor = "#" + componentToHex(r1) + componentToHex(g1) + componentToHex(b1);
  document.getElementById("first-color").style.backgroundColor = firstColor;
    document.getElementById("first-color-code").textContent = firstColor;
  var secondColor = "#" + componentToHex(r2) + componentToHex(g2) + componentToHex(b2);
  document.getElementById("second-color").style.backgroundColor = secondColor;
    document.getElementById("second-color-code").textContent = secondColor;
}

function componentToHex(c) {
var hex = c.toString(16);
return hex.length == 1 ? "0" + hex : hex;
}

function resetColors() {
  document.getElementById("color1").value = '';
  document.getElementById("color2").value = '';
  document.getElementById("mixed-color").style.backgroundColor = '';
  document.getElementById("color-code").textContent = '';

  document.getElementById("first-color").style.backgroundColor = '';
  document.getElementById("first-color-code").textContent = '';
  document.getElementById("second-color").style.backgroundColor = '';
  document.getElementById("second-color-code").textContent = '';
}
