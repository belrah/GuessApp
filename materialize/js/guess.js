var thirdString = function() {
    var str = document.getElementById("getThirdLetter").value;
    var val = str.charAt(2);
    document.getElementById("value").innerHTML = `Here is the Third String "${val}"`;

}