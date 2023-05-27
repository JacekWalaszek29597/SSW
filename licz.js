function dziel() {

var a = prompt("Podaj liczbe a");
var b = prompt("Podaj liczbe b");
var wynik;
if (b ==0) {

document.getElementById("dzielenie").innerHTML = "Nie dzielimy przez zero";

}
else{ wynik = a/b;
document.getElementById("dzielenie").innerHTML = wynik ;
	
	
}

}