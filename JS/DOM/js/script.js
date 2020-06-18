window.onload = Init;

function Init()
{
   setTimeout(()=>{document.querySelector(".spinner").setAttribute("load", "on");}, 1000);
   setTimeout(()=>{document.querySelector(".spinner").removeAttribute("load");}, 6000);
   setTimeout(()=>{document.querySelector(".spinner").parentElement.className = " "}, 6000);

//    setInterval(function() 
//     {
//        let info = document.querySelector("info");
//        info.hidden = !info.hidden;
//     },1000);
}