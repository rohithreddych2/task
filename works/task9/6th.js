function calculate(){
let score = (document.getElementById("mark").value);
let result ="";
if(score >= 80){
result = "A";
}
else if(score >= 60 && score <= 79){
result ="B";
}
else if(score >= 40 && score <= 59){
result = "C"
}
else {
result = "F"
}
document.getElementById("result").innerHTML=result;
}
