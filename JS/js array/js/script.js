let a = 12.3445;

console.log(a.toFixed(2));
console.log(Math.floor(a));
console.log(Math.ceil(a));
console.log(Math.trunc(a));
console.log(Math.round(a));
console.log(typeof +a.toString(2));
//setInterval(()=>console.log(Math.trunc(Math.random() * 10), 1000));

// let str = "bebs rebwn reben, 'afb rwasdb' \\ \n sfsv, svs";
// console.log(str);
// console.log(str.length);

// let str2 = "serbrb" + a + "arbb";
// let str3 = str.concat(" ", str2);
// console.log(str3);
// console.log(str3.toLocaleLowerCase());

// let result = str3.split(",");
// console.log(result);

// let symbols = str.split("");
// console.log(symbols);

// console.log(str.indexOf("b" , 2));
// console.log(str.substr(7,15));
// console.log(str.search("b"));
// console.log(str.slice(7,15));

// let array = [1,12,2,34,15,6,"str", [23.56], 34.6, {a:"aaa" , b: 123}];

//array.length = 4;
// console.log(array.length);
// console.log(array);
// let ss =array[6];
// console.log(typeof ss);

// for(let i=0; i<array.length; i++)
// {
//     console.log(array[i]);
// }

// for(let item of array)
// {
//     console.log(item);
// }

array.forEach(element => 
{
    console.log(element);    
});

let newArr = array.map((a)=>a *10);
console.log(newArr);

function nameFunction(item)
{
    return item * 10;
}

newArr.push(123);
newArr.pop();
newArr.shift();
newArr.unshift(1000);

//newArr.splice(6,9);
console.log(newArr.splice(6,2));
console.log(newArr.splice(newArr.lenght-1, 10, 435,435354,45613423));
console.log(newArr);

newArr = newArr.sort();
console.log(newArr);

newArr = newArr.sort((a,b)=> a - b);
console.log(newArr); 

console.log(newArr.find((a)=> a > 1000));

function random(min,max)
{
    return min + Math.trunc(Math.random() * (max - min + 1));
}

console.log(random(-10, 10));