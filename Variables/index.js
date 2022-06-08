
// var bir blokla sınırlı değil.
var item1 = "var variable - Global";

if(true)
{
    var item1 = "var variable - Local";
    document.write(item1);
}
document.write(', ' + item1+ '<br>');
document.write('(var bir blokla sınırlı değil. let ve const tam ters.) <br><br>')


// Şimdi let ile:
let item2 = "let variable - Global";

if(true)
{
    let item2 = "let variable - Local";
    document.write(item2);
}
document.write(', ' + item2+ '<br>');


// Şimdi const ile:
const item3 = "const variable - Global";

if(true)
{
    const item3 = "const variable - Local";
    document.write(item3);
}
document.write(', ' + item3+ '<br>');

// *********************************************************

var name1 = "Sam";
name1 = "Alex";
var name1 = "Alex";
console.log(name1, 'Var');


let name2 = "Sam";
name2 = "Alex";
//let name2 = "Alex"; // HATA
console.log(name2, 'Let');


const name3 = "Sam";
//name3 = "Alex"; // HATA
console.log(name3, 'Const');

// ********************************************************* Typeof

var oneObj = {};
var oneArr = [1,2,'name'];
// ikisini typeof object'tir.
console.log(oneObj, typeof oneObj);
console.log(oneArr, typeof oneArr);

// ********************************************************* Length

console.log(oneArr.length); // 3
var aName = "Alex Ferguson";
console.log(aName.length);  // 13

// ********************************************************* Eval

console.log(eval("10 * 4"));    // 40

function Deneme(){
    console.log("running function deneme()");
}
var result = "Deneme()";
console.log(eval(result));  // running function deneme()

// ********************************************************* Slice
var sliceDeneme = "this is a string literal";
console.log(sliceDeneme.slice(10));     // string literal
console.log(sliceDeneme.slice(12,17));  //ring

// ********************************************************* Substr

console.log("bu bir metin dir.".substr(11));    // n dir.
// second argument is the number of characters forward
console.log("bu bir metin dir.".substr(10,3));    // in
console.log("bu bir metin dir.".substr(-4));    // dir.

// ********************************************************* Repeat

console.log("Hello".repeat(2)); //HelloHello

// ********************************************************* ToString / String

var aNumber = 2;
console.log(aNumber.toString(), 
            typeof aNumber.toString()); // 2 string

console.log(String(aNumber), 
            typeof String(aNumber));    // 2 string

// ********************************************************* Number

console.log(Number(true), 
            Number(false), 
            Number(new Date()));    // 1 0 1654710913140

// *********************************************************