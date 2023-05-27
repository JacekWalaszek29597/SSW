

function powitanie() {

var osoba = prompt("Wprowadź swoje imie");

if (osoba != null) {

document.getElementById("demo").innerHTML = "Czesc " + osoba + "! Jak sie dzisiaj czujesz?";

}

}