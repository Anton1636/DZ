document.body.style.background = "pink";
document.body.margin = 0;

document.body.innerHTML += "<h1 class='center'>Hello</h1>";

first.style.backgroundColor = "red";
first.style.width = "100px";

document.getElementById("first").style.borderRadius = "50%";

let country = prompt("Enter coutnry");
let classSecond = document.querySelector(".second");
switch(country)
{
    case "UA":
        // classSecond.innerHTML = "<div class='country'></div>";
        // let countryInner = classSecond.querySelector(".country");

        // countryInner.innerHTML += "<h1>Ukraine</h1>";
        // countryInner.innerHTML += "<p><span>Capitel:</span>Kyiv</p>";
        document.getElementById("ua").style.display = "block";
        break;
        
        case "PL":
        document.getElementById("pl").style.display = "block";
        // classSecond.innerHTML += "<h1>Poland</h1>";
        // classSecond.innerHTML += "<p><span>Capitel:</span>Warsaw</p>";

        break;
}