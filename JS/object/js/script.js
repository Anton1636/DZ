let div = document.querySelector(".div-style");
console.log(div.classList);

div.classList.add("shadow");
div.classList.remove("display");

let btn = document.querySelector("button");

btn.onclick = function(){
    div.classList.toggle("display");
}

btn.addEventListener("click", addImg);

function addImg()
{
    div.querySelector("img").setAttribute("src","../img/mountain.jpg");
    let attr = div.querySelector("img").getAttribute("alt");
    div.querySelector("img").removeAttribute("class");
    div.querySelector("img").classList.add("one");
    if(div.querySelector("img").classList.contains("one"))
    {
        div.querySelector("img").classList.add("two");
    }
    console.log(attr);
}

div.querySelector("img").addEventListener("mouseover", function()
{
    this.style.opacity = 0.5;
    this.style.transform = "scale(1.1)";
})

div.querySelector("img").addEventListener("mouseout", function()
{
    this.style.opacity = 0.5;
    this.style.transform = "scale(1)";
})