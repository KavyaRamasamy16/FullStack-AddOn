let a =10;
let b = 0;

if(b==0){
    throw new Error("Divided by 0 is not possible ")
}
 console.log(a/b); 


 //without declaring variables example a=10
 try{
    console.log(a);
 } catch(error){
    console.log(error);
 }

//error handling
try{
   console.log(a);
} catch(error){
   console.log(error);
} finally{
   console.log("always")
}
 
console.log(a);
console.log("after the error");
