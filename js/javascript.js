//import{st,display} from './md.js'
//Rest Operator

function sum(...args){
    let r=0;
    for(let i=0;i<args.length;i++){
        r=r+args[i];

    }
    console.log(r);
}
sum(1,2,3,4,5,6 );

//Spread Operator

let a =[1,2,3,4,5];
let b = [5,67,3,...a];
console.log(b);



// JSON stringify

const obj = {
    name:"ganesh",
    id : 1
};

 const objstring = JSON.stringify(obj);
  console.log(objstring);


  // JSON parse

  const objp = JSON.parse(objstring);
   console.log(objp);


// Example with array

const sa=["ganesh","sham","Praveen","Rahil"];

const ss=JSON.stringify(sa);

console.log(ss);
  

const sd=JSON.parse(ss);
console.log(sd);


//example

const sdp =`{
    "name":"ganesh",
    "id":21
}`;


const sdpo = JSON.parse(sdp, function(key, value){
       if(typeof value=="string"){
        return value.toUpperCase();
       }
       else{
        return value;
       }
});
console.log(sdpo);


 
// console.log(st);
// display();


// Array Destructuring 

let sy = ["ganesh",2,4];
console.log(sy[0]);
console.log(sy[1]);

let ds=["software trainee engineer" , 23000,12];
let[post,salary,id]=ds;
console.log(post);


//Example 2

function bk(){
    return ["ganesh",30000];
}
let[name1,salary1] = bk();
console.log(name1);


//Object Destructuring

let btk = {
    name:"sanjay",
    salarysd:20000
};
let{name:name2,salay2:salarysd }=btk;
console.log(name2);



/// Map

const numbers = [1, 2, 3, 4];
const doubled = numbers.map(item => item * 2);
console.log(doubled);
    //[2, 4, 6, 8]


//Filter

const numbers1 = [1, 2, 3, 4];
const evens = numbers1.filter(item => item % 2 === 0);
console.log(evens); 
   //[2, 4]

//Reduce

const numbers2 = [1, 2, 3, 4];
const sum2 = numbers2.reduce(function (result, item) {
  return result + item;
}, 0);
console.log(sum2);
  //10

