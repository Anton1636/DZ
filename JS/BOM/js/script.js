//window.alert("Hello");

document.querySelector("input[type ='button']").onclick =()=>
{
    let redirect = document.querySelector("input").value;
    console.log(redirect.split("http"));
    if(redirect.split("http").length == null)
    {
        redirect = "http://" + redirect;
    }
    window.open(redirect);
   // location.href = redirect;
}

document.querySelectorAll("input[name='check']").onclick = (e)=>
{
    let p = document.querySelector("p");
    let block = document.querySelector(".block");
    
    let clientLeft = block.clientLeft;
    let clientTop = block.clientTop;
    let span = document.createElement("span");
    span.innerText = `ClientLeft: ${clientLeft}; ClientTop: ${clientTop};`;
    p.append(span);
    
    let clientWidth = block.clientWidth;
    let clientHeight = block.clientHeight;
    span = document.createElement("span");
    span.innerText = `</br><b>ClientWidth: ${clientWidth}; ClientHeight: </ b>${clientHeight};`;
    p.append(span);

    let offsetWidht = block.offsetWidht;
    let offsetHeight = block.offsetHeight;
    span = document.createElement("span");
    span.innerText = `</br><b>OffsettWidth: ${offsetWidht}; OffsetHeight: </b>${offsetHeight};`;
    p.append(span);

    let scrollWidht = block.scrollWidht;
    let scrollHeight = block.scrollHeight;
    span = document.createElement("span");
    span.innerText = `</br><b>ScrolltWidth: ${scrollWidht}; ScrollHeight: </b>${scrollHeight};`;
    p.append(span);

    let scrollLeft = block.scrollLeft;
    let scrollTop = block.scrollTop;
    span.innerText = `</br><u>${block.ofsetParent.nodeName}</u>`
    let span = document.createElement("span");
    span.innerText = `</br><b>ClientLeft: ${scrollLeft}; ClientTop: </b>${scrollTop};`;
    p.append(span);
};


window.onscroll = ()=>
{
    let header = document.querySelector("header");
    let heightHeader = header.offsetHeight;
    console.log(heightHeader);

    if(window.pageYOffset > heightHeader)
    {
        header.nextElementSibling.classList.add("fixed");
    }
    else
    {
        header.nextElementSibling.classList.remove("fixed");
    }
}

let upBtn = document.querySelector(".buttonUp").addEventListener("click",UP());

function UP
{
    window.scrollTo(0,0);
}