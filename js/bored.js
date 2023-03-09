//function to contain all codes
function container() {
//strings;
let a = "a5222", b = "Crust";
//int;
let x = 7, y = 8, z = 9 ,num = 5 + 5;

const USD = 1.82, euro = 2.09;


  return { a, b, num, y, z, x, USD, euro };
}

const values = container();
const web = document.getElementById('activity');


function Dollar_converter() {
 let answer = values.USD * 10;
  web.innerHTML = answer;
}

if (true) {

// calculation();
// switch_case();
  Dollar_converter();
}
