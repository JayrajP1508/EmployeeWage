//checking 
const present = 1;

let isPresent = Math.floor(Math.random()*10)%2;

if(isPresent == present){
    console.log("Employee is Present");
    return;
}
else{
    console.log("Employee is not Present");
}