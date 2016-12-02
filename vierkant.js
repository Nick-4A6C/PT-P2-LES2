function pixelTotaal(){
    var hoogte = document.getElementById('input1').value;
    var breedte = document.getElementById('input2').value;
    var kleur = document.getElementById('input3').value;
    document.getElementById('block').style.height = hoogte + "px";
    document.getElementById('block').style.width = breedte + "px";
    document.getElementById('block').style.backgroundColor = kleur;
}