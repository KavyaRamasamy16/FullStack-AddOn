function add(num){
    console.log(num);
    add(++num);
}
add(1);  //it is the recursive function which loops without any loops included in code and exits when stack storage overflow
function add(num){
    console.log(num);
    if(num<10){
        add(++num);
    }
}
add(1);