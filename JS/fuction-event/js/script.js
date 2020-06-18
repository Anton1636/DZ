let colors = ["red", "green", "royalblue", "orange", "purple"];
let i= 0;

function changeBg()
{
    if(i == colors.lenght)
    {
        i == 0;
    }
    //document.getElementById("rectangle").style.backgroundColor = colors[i++];
    //let elements = document.getElementsByClassName("rect");
    //let elements = document.getElementsByTagName("div");
    //elements[0].style.backgroundColor = [i++];
    //console.log(elements);

    document.querySelector(".rect").style.backgroundColor = colors[i++];
}

console.log(document.querySelectorAll(".rect"));

let person = {
    
     fullname: function() {
         let txt = " ";
         for(let item of arguments)
         {
             txt += item + " ";
         }
        return txt + this.name + " " + this.surName;
    }
};

let ivan =
{
    name = "Ivan",
    surName = "Ivanov",
    SetAge(age)
    {
        if(typeof(age) == "number")
        {
            this.age = age;
        }
    },
}

let stepan = {
    name = "Stepan",
    surName = "Stepanyk",
    SetAge(age)
    {
        if(typeof(age) == "number")
        {
            this.age = age;
        }
    },
    passw: "1111",
    get password()
    {
        return this.passw;
    },
    set password()
    {
        this.passw = password;
    }
    // fullname: function() {
    //     return this.name + " " + this.surName;
    // }
};

stepan.password = "aaaa";
console.log(stepan.password);

let arr = Object.values(stepan);
console.log(arr);

// person.age = 20;
// person.SetAge(13);
// person.gender = "male";

console.log(person.fullname.call(ivan, 34, 45, "hello"));
console.log(person.fullname.apply(stepan, [344, 45, "hello"] ));

console.log(Math.min.apply(null,[3,1,4]));

let other = stepan;
other.name = "Katya";
console.log(stepan);

(function ()
{
    console.log(new Date());
})();

function User(name,age)
{
    this.name = name;
    this.age = age;

    this.Show = function()
    {
        console.log(name + " " + age);
    }
}

let user1 = new User("Olia",20);
user1.Show();

let str = JSON.stringify(stepan);
console.log(str);

document.querySelector("input[type-'button']").addEventListener("click", checkData);
document.querySelector("input[type-'button']").addEventListener("click", changeBg);


function checkData()
{
   let name = document.querySelector("input").value;
   let password = document.querySelector("form:nth-child(3)").value;
   console.log(name + " " + password);
}

function changeBg()
{
    document.body.style.backgroundColor = "orange";
}

//delete person.age;

// console.log(person);
// document.querySelector(".rect").innerHTML = person.name + " " + person["surName"];

// for(let item in person)
// {
//     console.log(item + ":" + person[item]);
// }