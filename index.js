var store;
function add(){
    var a,b,c;
    a=Number(document.getElementById("first").value);
    b=Number(document.getElementById("second").value);
    c= a + b;
    store=c;
    document.getElementById("answer").value= c;
    //answer is written in html file
    }