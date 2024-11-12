// var x=10;
// console.log(x)
// x="Goutham"
// console.log(x)
// x=15.454
// console.log(x);
// var y =15;
// var z=x+y;
// console.log(z);
// var name= "goutham and i am a student";
// console.log(name.length);
// var x=11;
// if (x>=10) {
//     console.log("inside if block");
//     if (x==11) {
//         console.log("inside if inside if");
        
//     }
// }else if (x==3){
//         console.log("INSIDE if ELSE BLOCK");
// }
// else{
//     console.log("else block");
    
// }

// for (var x = 0; x<=10; x++) {
//     console.log(x); 
    
    
// }
// var x=prompt("enter a number from 1-4");
// console.log(typeof x);
// a=parseInt(x)
// string is immutable and also parseInt doesnt make change in x but to
// console.log(typeof a);
// switch (x) {
//     case 1:
//         console.log("1st case is executed");
        
//         break;
//     case 2:
//         console.log("second case is executed");
//         break;
//     case 3:
//         console.log("third case is executed");
//         break;
//     default:
//         console.log("enter a value from 1-3");
//         break;
// }
// var name = "goutham";
// console.log(name.length);
// console.log(name[6]);
// // strings are immutable

// var arr = [100, 200, 548, 846, 5487,1472];
// arr[6]=43;
// arr[0]=150;
//  arr[8]=32;  //see the output that seventh space is empty
//  arr.pop();
//  arr.shift(); // removes the first element
//  arr.push(46);
//  arr.push(8);
// arr.unshift(46); // adds one elemnt in front
// console.log(arr);
// pop() , push() , shift(), unshift()
// // array is mutable
// var car = {
//     name: "alto",
//     yearOfmanufacturing: 2019,
//     airbags: false,
//     brandName: "Maruti Suzuki",

// };
// car.noOfSeats = 4; //adding new elements in car
// delete car.airbags;
// delete car.noOfSeats;
// car.brandName="Tata";
// console.log(car.brandName);
// // console.log(car);   
// var x=15;
// var y=20;
// function add(a,b){
//     var z=a+y;
//     console.log(z);
// }

// // add(x,y);


 
// var btn = document.getElementById("btn");
// btn.addEventListener("focus", () => {
//         heading.style.color = "red";
// });


// }
// function add(){      //mandatory two arguments and this is called higher order functions
//     return function ret(){
//     console.log("returned");
// };
    
// }
// var x=add();
// x();

// setTimeout(function ()
//  {  console.log("set timeout running");
// },3000);
// down below are the es6 concepts
// var x= ()=>{
//     console.log("arrow function");
    
// }
// x();
// Template Literal 
// var firstname ="goutham";
// var lastname ="krishna";
// console.log(firstname + lastname);
// var name = `my name is ${firstname} ${lastname} and my age is ${20+5}` ;    //focus on the string space in between the console thing wont give that with addition
// console.log(name);

//destructuring
// u can unpack the Array
// var arr =[100,200,300,400,500,600];
// var[first,second]=arr;
// console.log(second,first);
// console.log(arr);
// // this wont change the original arr
// var arr =[100,200,300,400,500,600];
// var total=0;
// for (var item of arr) {
// total=total+item
// }
// console.log(total);
// {} this is called a block and "b" is only available to whatever written inside this block 
// but cannot re-declare like var ,cant use 2 times in same block
// let a=10;
// console.log(a);
// {
//     let b=40;
//     console.log(b);
//     let a=50;
//     console.log(a);
// }
// console.log(a);
// console.log(b);
// const a=45;
// console.log(a);
// {
//     const b=45;
//     console.log(b);
//     //same like let but 
    
// }
// var c=20;
// let b=50;
// c=56;
// b=47;
// a=30; // cant be possible because its constant with const

// hoisting very very important
// can access
// console.log(a);
// var a; //try with 'let'. it works diffrent with var let .
//  // not error but undefined. undefined is a datatype in js
// a=100;

// console.log(a);
// var a;
// a=100;
// {
//     console.log(a);
//     let a =140; // but can do in case of var
// }
// const a =100;   //this is correct
// const a; // this is wrong . const initialiazation must be done at declartion
//now hoisting with functions
// add(10, 15);
// function add(x, y){
//     console.log(x+y);
    
// }// this is only in js. access a variable even before u dekkcalre the function
// But not with a= function add(x,y).  a();
// let name ="goutham";
// for(const alphabet of name){
//     console.log(alphabet);
    
// }
// console.log(name.includes("gou"));
// case sensitive
//  let arr =[50,40,30,30]
// arr.forEach((element) =>{
// console.log(element);
// });
//arr.concat(arr2)
// arr.sort()
// arr.revrse()k
// arr.map()
// let arr2=arr.map((item)=>{
//     return item*2;
// });
// console.log(arr2);
