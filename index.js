function showTime(){
    var date = new Date();
    // console.log(date)
    var hour = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
 am_pm = "AM"
if(hour>12){
    hour -= 12;
    am_pm = "PM"
}
if(hour==12){
    hour = 00;
    am_pm = "AM"
}

    document.getElementById("hours").innerHTML = hour;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    document.getElementById("am-pm").innerHTML = am_pm;

    setTimeout(showTime,1000);
}
showTime();
