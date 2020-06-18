document.bgColor = "green";

console.log(12+4);

a = 12;
a = "Hello";
console.log(a);

var v =122n;
console.log(typeof(v));
console.log(typeof 34.67);

let n =123.45;
let b;
let c = "hello";
let str = 'other str';
let str2 = `new str ${n}`;
let d = null;

console.log(typeof b);
console.log(typeof d);
console.log(typeof c);
console.log(typeof str);
console.log(typeof str2 + '=>', str2);
console.log(7 + "7");
console.log(7 / "2");
console.log(c /str);
console.log(null == NaN);
console.log(1 / 0);

// b = 4e-9; 
// console.log(b);
// const exit = false;
// console.log(exit + 4);

// var numer = 100;
// {
//     numer = -90;
//     console.log(numer);
// }
// console.log(numer);

// let nmber2 = 200;
// {
//     let nmber2 = 400;
//     console.log(nmber2);
// }
// console.log(nmber2);

// // for(var i =0; i<5; i++)
// // {

// // }
// // console.log(i);

// // console.log("Hello");

// let nam =prompt("Enter nan:");
// let name = prompt("Enter name:");
// document.write("<h2>Hello,"+ name +"</h2>");
// console.log(nam + 4);

// if(name > nam)
// {
//     document.writeln(name + '>' + nam);
// }
// else if(name < nam)
// {
//     document.writeln(name + '<' + nam);
// }
// else
// {
//     document.writeln(name + '==' + nam);
// }

// if("34" == 34)
// {
//     console.log(true);
// }
// else
// {
//     console.log(false);
//     nam++;
// }
// console.log(nam);
// result = nam ** nam;
// console.log(result);

// let answer = confirm("Soon 16th june");
// if(answer == true)
// {
//     document.writeln("<h1>End all.</h1>");
// }
// else
// {
//     document.writeln("<h1>Oh-oh-oh</h1>");
// }

// let day = prompt("Enter day (1..7)");
// switch(day)
// {
//     case 1:console.log("Sunday");
//     break;
//     default:
//         console.log("Others.... M.T.W.T.F.S");
// }

for(let i = 10; i>0; i--)
{
    console.log(i);
    if(i == 5)
    {
        break;
    }
}

let i =5;

while (i > 2)
{
    console.log(i * 100);    
}
do
{
    console.log("Hello");
}while (i!=2);