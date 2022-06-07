
var item1 = "var variable - Global";

if(true)
{
    var item1 = "var variable - Local";
    document.write(item1);
}
document.write(', ' + item1+ '<br>');


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