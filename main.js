var mouseEvent = "empty"; 
var last_position_of_x, last_position_of_y; 
canvas = document.getElementById('myCanvas'); 
ctx = canvas.getContext("2d");
color = "black"; 
width_of_line = 1;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    console.log("mouseDown");
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e){
    console.log("mouseleave");
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e){
    console.log("mouseUP");
    mouseEvent = "mouseUP";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){
    console.log("mousemove");

    current_position_of_mouse_x = e.clientX - canvas.offsetLeft
    current_position_of_mouse_y = e.clientY - canvas.offsetTop

    if(mouseEvent == "mouseDown"){
        console.log("Current position of x and y coordinates = ");
        console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        
        
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, 25, 0, 2*Math.PI);
        ctx.stroke();
        
    }
    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}