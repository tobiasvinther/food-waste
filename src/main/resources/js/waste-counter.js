let kilo = 0;
setInterval( function(){
    document.getElementById("kilo").innerHTML = (parseInt(kilo = kilo + 23));
}, 1000);