// console.log("hello node js");

// var integer1 = 5;
// var integer2 = 10;

// console.log(integer1 + "+" + integer2);

// var name = "Dragana";
// var pass = "0000";
// var nameUpdated = name.toLowerCase();

// if(nameUpdated == "dragana"){
// 	console.log("Hello " + name);
// }
// else{
// 	console.log("unsucessfull")
// }

// switch(name){
// 	case "Dragana":
// 	console.log("Hello " + name);
// 	break;
// 	case "DRAGANA"
// 	console.log("Hello " + name);
// 	break;
// 	default:
// 	console.log("unsucessfull")
// }


// if(name == "Dragana" ){
// 	console.log("hello " + name);
// }
// else{
// 	console.log("unsucessfull");
// }

// var firstName = "Dragana";
// var lastName = "Mitkova";
// var fullName = firstName.concat(lastName);
// console.log(fullName);
// var boolean = true;
// console.log(boolean);


// var integer = [3, 4, 5, 6, 7, 8, 9, 10, 12];

// integer[100] = 50;
// console.log(integer);

// for(let i=0; i < integer.length; i++){
// 	console.log(integer[i] +":");

// 	if(integer[i] % 3 == 0){
// 		console.log("buzz")
// 	}
// 	if(integer[i] % 4 == 0){
// 		console.log("fizz")
// 	}
// }

// var brojac = 0;
// for(let i = 10; i > brojac; i--){
// 	console.log(i);
// }
// while(brojac <10){
// 	brojac++;
// 	console.log(brojac);
	
// }

// do {
// 	brojac++;
// 	console.log(brojac);
// }
// while(brojac < 10)

var names =['iva', 'ana', 'marija'];
var pass =['a', 'bb', 'ccc']
var myName = 'ana';
var myPass ='bbb'
for(let i= 0; i<names.length; i++){

	if(names[i] == myName && pass[i] == myPass){
		console.log("logged in");
	else {
		console.log("error")
	}
	}
}