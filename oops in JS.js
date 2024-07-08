class Student{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
}
class child extends Student //inheritance example
const obj1 = new Student("Nila",22)
console.log(obj1.name);
const obj2 = new Student("Kavya",20);
console.log(onj2.name);
const obj3 = new Student("Avitha",21);
console.log(obj3.name);


//arrow function
const arr = [1,2,3,4,5];
arr.map((value,index,arr)=>{console.log(value)});

//find method
const arr = [1,2,3,4,5];
let above4 = arr.find((value)=>{value>4});
console.log(above4);

//filter method  -it is same as find but print only the true values.find stops with single iteration
const arr = [1,2,3,4,5];
let above4 = arr.filter((value)=>{value>4});
console.log(above4);

//reduce method
const arr = [1,2,3,4,5];
let ans = arr.reduce((acc,cur)=>acc+cur,10);
console.log(ans);

//every method
const arr = [1,2,3,4,5];
let ans = arr.every(val=>val<6);
console.log(ans);

//for each and map is same 
