document.body.onclick = function(event)
{
    console.log(event);
    document.querySelector("h1").innerText = "u clicked on"
    + event.target.nodeName;
}

document.body.addEventListener("click", function(event)
{
    this.querySelector(".first").style.left = event.clientX + "px";
    this.querySelector(".first").style.top = event.clientY + "px";
});

document.querySelector(".second").addEventListener("mousemove", function(event)
{
    this.style.backgroundColor = `rgb(${event.clientX},${event.pageX}, ${event.pageY})`;
});

document.body.addEventListener("mousedown", function(event)
{
    let bg = "";
    switch (event.whitch) 
    {
        case 1:
            bg = "yellow";
            break;
        case 2:
            bg = "green";
            break;
        case 3:
            bg = "purple";
            break;
    }
    this.style.backgroundColor = bg;
});

document.querySelector("h1").oncontextmenu, function(){return false;};
document.body.onkeydown = function(e)
{
    let text = "";
    if(e.altKey)
    {
        text += "Alt + ";
    }
    if(e.ctrlKey)
    {
        text += "Ctrl + ";
    }
    if(e.shiftKey)
    {
        text += "Shift + ";
    }
    text += " " + e.key;
    document.getElementsByTagName("h1")[0].innerText = text;
    //.preventDefault();
}

document.querySelectorAll("input").forEach((x) => x.onfocus = function (){this.classList.add("focused");});
document.querySelectorAll("input").forEach((x) => x.onblur = function (){this.classList.remove("focused");});
