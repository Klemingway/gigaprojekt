function background(){
    var color = document.getElementById("backgroundcolor").value;
    console.log("działa");
    var a = document.getElementById('iframe').contentWindow.document.getElementById('header1').value
    document.getElementById("iframe").innerHTML = "<iframe='szablon1.html' target='search_iframe'></iframe>"
    document.getElementById("bgcolor").style.backgroundcolor = "red";
    //document.getElementById("header1").style.backgroundColor = "red";
    //document.getElementById("header1").value = "bruh";
    console.log(a);
}
function bruh(){
    var iframe = document.getElementsByTagName('iframe')[0];
    iframe.contentWindow.document.body.style.backgroundColor = 'white';
}
