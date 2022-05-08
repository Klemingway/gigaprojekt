// RECEIVER
window.addEventListener("storage", ev => {
    document.getElementById( ev.key ).innerHTML = ev.newValue;
});

// SENDER
[...document.querySelectorAll("[data-sender]")].forEach( el =>
    el.addEventListener("input", ev => localStorage[el.dataset.sender] = el.value )
);

function zapzmiany(){
    var font = document.getElementById("font").value;
    console.log(font);
    document.getElementById("guziki").style.fontFamily = font;
}
function styl1(){
    document.getElementById("output").innerHTML = '<!DOCTYPE html>'+"&#13;&#10;"+
    '<html lang="pl">'+"&#13;&#10;"+
    '<head>'+"&#13;&#10;"+
        '<meta charset="UTF-8">'+"&#13;&#10;"+
        '<title>Szablon1</title>'+"&#13;&#10;"+
        '<style type="text/css">'+"&#13;&#10;"+
        '#header1s1{'+"&#13;&#10;"+
            'border: 3px solid black;'+"&#13;&#10;"+
           ' height: 100px;'+"&#13;&#10;"+
       ' }'+"&#13;&#10;"+
        '#main{'+"&#13;&#10;"+
         '   border: 3px solid rgb(111, 0, 255);'+"&#13;&#10;"+
       ' }'+"&#13;&#10;"+
      '  #aside1s1{'+"&#13;&#10;"+
           ' border: 3px solid rgb(250, 15, 15);'+"&#13;&#10;"+
           ' width: 30%;'+"&#13;&#10;"+
           ' height: 800px;'+"&#13;&#10;"+
      '  }'+"&#13;&#10;"+
        '#section1s1{'+"&#13;&#10;"+
           ' width: 69%;'+"&#13;&#10;"+
           ' height: 801px;'+"&#13;&#10;"+
           ' border: 3px solid black;'+"&#13;&#10;"+
           ' float: right;'+"&#13;&#10;"+
       ' }'+"&#13;&#10;"+
       ' #footer1s1{'+"&#13;&#10;"+
           ' height: 50px;'+"&#13;&#10;"+
           ' border: 3px solid black;'+"&#13;&#10;"+
       ' }'+"&#13;&#10;"+
        '</style>'+"&#13;&#10;"+
   ' </head>'+"&#13;&#10;"+
    '<body>'+"&#13;&#10;"+
       ' <header id="header1s1">'+"&#13;&#10;"+
            
    
        '</header>'+"&#13;&#10;"+
    
        '<br>'+"&#13;&#10;"+
        
        '<div id="main">'+"&#13;&#10;"+
           ' <section id="section1s1">'+"&#13;&#10;"+
               'to jest sekcja nr 1'+"&#13;&#10;"+
               '<script src="../js.js"></script>'+"&#13;&#10;"+
           ' </section>'+"&#13;&#10;"+
            '<aside id="aside1s1">'+"&#13;&#10;"+
                'to jest aside nr 1'+"&#13;&#10;"+
           ' </aside>'+"&#13;&#10;"+
            
        '</div>'+"&#13;&#10;"+
    
        '<br>'+"&#13;&#10;"+
    
        '<footer id="footer1s1">'+"&#13;&#10;"+
            'to jest footer'+"&#13;&#10;"+
      '  </footer>'+"&#13;&#10;"+
    '</body>'+"&#13;&#10;"+
    '</html>'
}
function tak(){
    document.getElementById("wynik").innerHTML=document.getElementById("output").value
}