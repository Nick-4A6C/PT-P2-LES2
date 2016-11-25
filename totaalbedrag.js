function berekenAantal(){
    var bedrag = document.getElementById("bedrag").value;
    var aantal = document.getElementById("aantal").value;
    var totaalBedrag = aantal * bedrag;
    document.getElementById("totaalBedrag").innerHTML = "Het totale bedrag is: " + totaalBedrag.toFixed(2);
}