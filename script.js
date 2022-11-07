var index = 0;
function colorChange(){
    var colors =["red","green","blue","gray","purple"];
    document.getElementsByTagName("body")[0].style.background = colors[index++];
    if(index > colors.length-1)
    index = 0;

}
function colorHexaChange()
{
    var hexNumber = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
    var hexCode = '';
    for(i=0; i<6; i++){
    var randomIndex = Math.floor(Math.random() * hexNumber.length);
    hexCode += hexNumber[randomIndex]
    document.getElementsByTagName("body")[0].style.background = "#"+ hexCode;
}
document.getElementById("hex").innerHTML = "#" + hexCode;
}
