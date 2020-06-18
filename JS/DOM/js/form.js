function getData()
{
    let name = document.querySelector("input[type = 'text']").value;
    let email = document.querySelector("input[type = 'email']").value;
    let tel = document.querySelector("input[type = 'tel']").value;
    let message = document.querySelector("input[type = 'textarea']").value;

    let users = [];
    let Id = 1;
    const data =
    {
        ID: Id++,
        Name: name,
        Email: email,
        Tel: tel,
        Message: message
    };

    users.push(data);
    printUsers(users);
}

function printUsers(data)
{
    console.log(data);
    let table = document.querySelector("table");
    console.log(table.children);
    

    while(table.children.length > 0)
    {
        table.children.lastElementChild.remove();
    }

    for (let i = 0; i < data.length; i++) 
    {
        console.log(data[i]);
        let tr = document.createElement("tr");
        for (let item = 0 in data[i])
        {
             console.log(item);
             let td = document.createElement("td");
             td.innerText = data[i][item];
             console.log(td);
             tr.append(td);
        }
        table.appendChild
    }
}

document.querySelector("input[type='button']").onclick = getData;