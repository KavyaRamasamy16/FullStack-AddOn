// Document object model
//document.title = "Kgcas";
//console.log(0);
//let elem = document.getElementById("head")
//console.log(elem);

//inner.html
//let elem = document.getElementById("head")
//let content = elem.innerHTML
//console.log(content);

//to change the content of the tag in html using script
//let elem = document.getElementById("head")
//elem.innerHTML = "Welcome";
//console.log()

//using tags in inner.html
//let elem = document.getElementById("head")
//elem.innerText = "<h1>Welcome</h2>";


//inner.Text
//let elem = document.getElementById("head")
//elem.innerText = "Welcome";

//using function 
//function contManupulate(){
    //let elem = document.getElementById("head");
    //elem.innerHTML = "<h1>Welcome</h1>";
//}
//setTimeout(contManupulate,5000);

function darkmode(){
    document.body.style.backgroundColor = "pink";
    document.body.style.color = "white";
    //document.getElementById("button").innerText ="Light Mode";
    //or this method to change button
    let button = document.getElementById("button")
    button.innerHTML = '<i class="fa-regular fa-sun"></i>'
    button.innerHTML += "Lightmode";
}
function Lightmode(){
    document.body.style.backgroundColor = "purple";
    document.body.style.color = "black";
    let button = document.getElementById("button")
    button.innerHTML = '<i class="fa-solid fa-moon"></i>'
    button.innerHTML += "darkmode";
}
function modechange(){
    let btext = document.getElementById("button").innerText
    if(btext=="darkmode"){
        darkmode();
    } else if (btext=="Lightmode"){
        Lightmode();
    }
}