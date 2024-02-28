// MCQ


// Q1
var x=10;
function foo(){
    console.log(x);
   var x=20 
}
foo()


// Q2
var x=1;
function outer(){
    var y=2
    function inner(){
        var z=3
        console.log(x+y+z+x);
    }
    inner()
};
outer()


// Q3

console.log("Hello");
setTimeout(() => {
    console.log("there?");
}, 0);
console.log("are you");

// 4

const user={
    name:"Rahul",
    greet(){
        return `Hello, ${this.name}`
    },
    farwell:()=>{
        return `Goodbye, ${this.name}`
    }
}