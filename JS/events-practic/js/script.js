let check = document.querySelector('[type="checkbox]');
let button = document.querySelector("button");
check.addEventListener("click", function()
{
    if(this.check)
    {
        button.disabled = false;
    }
    else
    {
        button.disabled = true;
    }
});

document.querySelector(".button").addEventListener("click", function(event)
{
    let div = document.querySelector("div");
    console.log(div);
    div.querySelectorAll('iput[type="text"]').forEach((x)=> function()
        {
            console.log(this);
            if(this.value == "")
            {
                this.classList.add("valid");
            }
        }
    ))
})