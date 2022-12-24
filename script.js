var hr = 0;
var min = 0;
var sec = 0;
var count = 0;
var timer = false;
 
var start = document.getElementById("start");
var stop = document.getElementById("stop");
var reset = document.getElementById("reset");

start.addEventListener("click",startFunction)
function startFunction(){
    timer = true;
    stopwatch()
    
}
 
stop.addEventListener("click",stopFunction)
function stopFunction(){
    timer = false;
}

reset.addEventListener("click",resetFunction)
function resetFunction() {
    timer = false;
    count = 0
    sec = 0
    min = 0
    hr = 0;
    document.getElementById("hr").innerHTML= hr;
    document.getElementById("min").innerHTML= min;
    document.getElementById("sec").innerHTML= sec;
    document.getElementById("count").innerHTML= count;
}
function stopwatch(){
     if (timer == true) {
        count = count + 1
        document.getElementById("count").innerHTML = count
        setTimeout("stopwatch()",10);
     };

    if (count == 100) {
        sec = sec + 1;
        document.getElementById("sec").innerHTML = sec
    };
    if(count == 100){
        count = 0
    };

    if(sec == 60){
        min = min + 1;
        document.getElementById("min").innerHTML = min;
    };
    if(sec==60){
        sec = 0;
    };
    if (min==60) {
        min = min + 1;
        document.getElementById(("hr")).innerHTML = min;
        
    }
    if (min = 60) {
        min = 0;
    }
}