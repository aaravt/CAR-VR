var canvas =  document.getElementById("canavic")
ctx=canvas.getContext("2d")
car1_x=10
car1_y=10
car2_x=10
car2_y=100


car1_width=120;
    car1_height=70;
    car1_image="f1blue.png";
    
   
    car2_width=120;
    car2_height=70;
    car2_image="f1red.jpg";
    
    background_image="track.jpeg"
    
   function add() {
    background_imgTag=new Image();
    background_imgTag.onload=uploadbackground;
    background_imgTag.src=background_image;
    
    car1_imgTag=new Image();
    car1_imgTag.onload=uploadcar1;
    car1_imgTag.src=car1_image;

    car2_imgTag=new Image();
    car2_imgTag.onload=uploadcar2;
    car2_imgTag.src=car2_image;

    
}

function uploadbackground() {
    ctx.drawImage(background_imgTag,0,0,canvas.width, canvas.height);
    
}

function uploadcar1() {
    ctx.drawImage(car1_imgTag,car1_x,car1_y,car1_width,car1_height);
    
}

function uploadcar2() {
    ctx.drawImage(car2_imgTag,car2_x,car2_y,car2_width,car2_height);
    
}


window.addEventListener("keydown" , kd)
function kd(e) {
    keynumber=e.keyCode
    console.log(keynumber)
    if (keynumber==37) {
        console.log("left is pressed")
        car1_left()
    }
    if (keynumber==38) {
        console.log("up is pressed")
        car1_up()
    }
    if (keynumber==39) {
        console.log("right is pressed")
        car1_right()
    }
    if (keynumber==40) {
        console.log("down is pressed")
        car1_down()
    }
    if (keynumber==65) {
        console.log("left is pressed")
        car2_left()
    }
    if (keynumber==87) {
        console.log("up is pressed")
        car2_up()
    }
    if (keynumber==68) {
        console.log("right is pressed")
        car2_right()
    }
    if (keynumber==83) {
        console.log("down is pressed")
        car2_down()
    }
}
function car1_down() {
    if(car1_y<=500){
        car1_y=car1_y+10
        uploadbackground()
        uploadcar1()
        uploadcar2()
    }
    
}
function car1_right() {
    if (car1_x<=700) {
        car1_x=car1_x+10
        uploadbackground()
        uploadcar1()
        uploadcar2()
    }
}
function car1_up() {
    if (car1_y>=0) {
        car1_y=car1_y-10
        uploadbackground()
        uploadcar1()
        uploadcar2()
    }
}
function car1_left() {
    if (car1_x>=0) {
        car1_x=car1_x-10
        uploadbackground()
        uploadcar1()
        uploadcar2()
    }
}
function car2_down() {
    if (car2_y<=500) {
        car2_y=car2_y+10
        uploadbackground()
        uploadcar1()
        uploadcar2()
    }
}
function car2_right() {
    if (car2_x<=700) {
        car2_x=car2_x+10
        uploadbackground()
        uploadcar1()
        uploadcar2()
    }
}
function car2_up() {
    if (car2_y>=0) {
        car2_y=car2_y-10
        uploadbackground()
        uploadcar1()
        uploadcar2()
    }
}
function car2_left() {
    if (car2_x>=0) {
        car2_x=car2_x-10
        uploadbackground()
        uploadcar1()
        uploadcar2()
    }
}