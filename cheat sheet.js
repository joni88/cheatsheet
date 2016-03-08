//Variables
/* variables  in  javaskript  can  be  any data type
like  bellow*/
var book = "Idiot";
var age = 24, 
// Debugging 
//Alerts are  pop-ups  windows  that  show  a  text
// we  can  do  it  on  a  script  or  in  console
alert("Be carefull when you  click!");
//Console is  a  tools  built  in  a  browser
//to  run  javasript  code.We  can  print  our code by
console.log("result");
/* writing  to  HTMl  elemnt  means  that  we  can  change  
the  content  of  a  HTML  element*/
function change(){
   document.getElementById('el').innerHTML = "Hello"; }

<div onclick="change()" id="el">CHANGE ME</div>
/*  in  the  above  example  we  changed  the ".innerHTML"
of  the  element from 'Change  me' to 'hello'*/
// Data Types
4,66,//number 
"NYCDA"//string
true,false//boolen
no  value //undefined
//arrays
/* they  hold  a  variety  of  data
can  be  stored  in  variables
can  store  other  arrays*/
var mammals = ["lion","cat","elephant","dog"] ;
var birds = ["eagle","parrot"];
var animals = [mammals, birds];

console.log(animals[1][0]);

//Objects
/* the same  as  arrays  but  we  can  define  the  keys*/

var student ={
	   firstName: "Fatjon",
	   lastName: "Kerxhaliu",
	   age: 27,
	   interests: ["programming", "management",]
	};
	console.log(student.interests[1]);

	//testing
//we  can  check  if  the  statement  is  true  or  false
5 === 5 
true
100 > 101 
false




var x  = 10

if (x > 6) {
	console.log("your  number  is  greater  then 6");
} else {
	console.log("your  number  is  less then  6");
}

//Loops

x = 7
while( x < 14){
	console.log("my  number  is" + x)
     x++;
}
