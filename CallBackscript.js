/*function display(result){
    //document.write  -writes in plain in document
    console.log(result);
}
function calculation(num1,num2,callback){
    let total = num1+num2;
    callback(total);
}
calculation(10,20,display)*/
/*function display(result){
    console.log(result);
}

function calculation(num1, num2, operation, callback){
    let result;
    switch(operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                throw new Error('Division by zero');
            }
            result = num1 / num2;
            break;
        case 'modulo':
            result = num1 % num2;
            break;
        default:
            throw new Error('Unsupported operation');
    }
    callback(result);
}

// Example usage:
try {
    calculation(10, 20, 'add', display);         // 30
    calculation(10, 5, 'subtract', display);     // 5
    calculation(10, 4, 'multiply', display);     // 40
    calculation(20, 4, 'divide', display);       // 5
    calculation(20, 3, 'modulo', display);       // 2
} catch (error) {
    console.error(error.message);
}*/
function add(num1,num2){
    let result = num1+num2;
    console.log(result);
}
function sub(num1,num2){
    let result = num1-num2;
    console.log(result);
}
function mul(num1,num2){
    let result = num1*num2;
    console.log(result);
}
function div(num1,num2){
    let result = num1/num2;
    console.log(result);
}
function mod(num1,num2){
    let result = num1%num2;
    console.log(result);
}
function calculation(num1,num2,callback){
    callback(num1,num2);
}
calculation(10,20,add);
calculation(10,20,sub);
calculation(10,20,mul);
calculation(10,20,div);
calculation(10,20,mod);
    


