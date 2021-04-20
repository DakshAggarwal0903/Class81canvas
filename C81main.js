canvas = document.getElementById("myCanvas");
v = canvas.getContext("2d");
c = "blue";
v.beginPath();
v.strokeStyle = c;
v.lineWidth = 2;
v.arc(200,200,50,0,2*Math.PI);
v.stroke();
canvas.addEventListener("mousedown",mouse);
function mouse(x){
    c = document.getElementById("qwe").value
    console.log("Color is: ",c)
 b = x.clientX - canvas.offsetLeft
 m = x.clientY - canvas.offsetTop;
 console.log("X axis is: ", b)
 console.log("Y axis is: ",m);
 circle(b,m);
}
function circle(b,m){
    v.beginPath();
v.strokeStyle = c;
v.lineWidth = 2;
v.arc(b,m,50,0,2*Math.PI);
v.stroke();
}
function oof(){
v.clearRect(0,0,canvas.width,canvas.height)
}