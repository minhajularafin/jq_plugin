$(document).ready(function(){
$('#prev').click(function() {
$('.box').animate({'left':'-=50'},'slow');
$('.box').css({"backgroundColor":'blue'});
});
$('#next').click(function() {
$('.box').animate({'left':'+=50'},'slow');
$('.box').css({"backgroundColor":'red'});
});
// counterUp :1
$('.counter').counterUp({
delay: 10,
time: 1000
});
// counterUp :3
$('.timer').countimer({
autoStart : false
});
// counterUp :4

var $number       = $('.number')
,$start_input = $('.start_value')
,$end_input   = $('.end_value')
,$button_up   = $('.up')
,$button_down = $('.down')
;
function get_start_value()
{
return parseFloat($start_input.val());
}
function get_end_value()
{
return parseFloat($end_input.val());
}
function remove_classes()
{
$number.removeClass('start_value end_value');
}
function add_end_class()
{
remove_classes();
$number.addClass('end_value');
}
function add_start_class()
{
remove_classes();
$number.addClass('start_value');
}
function up()
{
var options = {
start_value: get_start_value()
,end_value: get_end_value()
,duration: 5000
,before: remove_classes
,after: add_end_class
};
$number.easy_number_animate(options);
}
function down()
{
var options = {
start_value: get_end_value()
,end_value: get_start_value()
,duration: 3000
,before: remove_classes
,after: add_start_class
};
$number.easy_number_animate(options);
}
$button_up.click(up);
$button_down.click(down);
// counterUp :5
$('.svg-test').svgTimer();

});//jq end.



// js start:
// counterUp :2
window.addEventListener('load', function () {
// console.log("Windows loading");
//Getting dashboard  ( Checking if we are in dashboard or not)
var dashboard = document.getElementById("page_name");
//Start button
var start_button = document.getElementById("start_button");
//Stop button
var stop_button = document.getElementById("timer_submit");
//timer
var hour = document.getElementById("hour");
var mint = document.getElementById("min");
var secd = document.getElementById("sec");
// console.log(timer.innerHTML);
if (dashboard != null && localStorage.getItem('start_button') == null) {
// console.log("in Dashboard and start button not clicked");
//Declaring variable
var hr = 0;
var min = 0;
var sec = 0;
} else if ((dashboard != null && localStorage.getItem('start_button') != null)) {
$("#start_button").prop("disabled", true);
$("#start_button").removeClass("btn-outline-success");
$("#start_button").addClass("btn-light");
start_button.innerHTML = "Running";
}
if (start_button) {
start_button.addEventListener('click', function () {
// console.log('start button working');
localStorage.setItem('start_button', 'clicked');
$("#start_button").prop("disabled", true);
$("#start_button").removeClass("btn-outline-success");
$("#start_button").addClass("btn-light");
start_button.innerHTML = "Running";
var total_time = document.getElementById("total_time");
if (total_time) {
total_time.innerHTML = "Counting...";
}
timerCycle();
})
}
if (stop_button) {
stop_button.addEventListener('click', function () {
// saveData(hr, min, sec);                          To get data after stop button active this fuction
localStorage.clear();
hour.innerHTML = '00';
mint.innerHTML = '00';
secd.innerHTML = '00';
var total_time = document.getElementById("total_time");
if (total_time) {
total_time.innerHTML = hr + ':' + min + ':' + sec;
}
//Stopping the cycle
clearTimeout(cycle);
hr = 0;
min = 0;
sec = 0;
$("#start_button").prop("disabled", false);
$("#start_button").addClass("btn-success");
$("#start_button").removeClass("btn-light");
start_button.innerHTML = "Start";
})
}
//continue timer on other pages
if (dashboard == null && localStorage.getItem('start_button') != null) {
sec = localStorage.getItem('sec');
min = localStorage.getItem('min');
hr = localStorage.getItem('hr');
timerCycle();
//continue timer on coming back Dashboard
} else if (dashboard != null && localStorage.getItem('start_button') != null) {
sec = localStorage.getItem('sec');
min = localStorage.getItem('min');
hr = localStorage.getItem('hr');
timerCycle();
}
function timerCycle() {
sec = parseInt(sec);
min = parseInt(min);
hr = parseInt(hr);
sec = sec + 1;
if (sec == 60) {
min = min + 1;
sec = 0;
}
if (min == 60) {
hr = hr + 1;
min = 0;
sec = 0;
}
if (sec < 10 || sec == 0) {
sec = '0' + sec;
}
if (min < 10 || min == 0) {
min = '0' + min;
}
if (hr < 10 || hr == 0) {
hr = '0' + hr;
}
localStorage.setItem('hr', hr);
localStorage.setItem('min', min);
localStorage.setItem('sec', sec);
// console.log(timer);
// console.log(timer.innerHTML);
hour.innerHTML = hr;
mint.innerHTML = min;
secd.innerHTML = sec;
// if (dashboard == null && localStorage.getItem('start_button') != null) {
//     var side_timer = document.getElementById('time_title');
//     if (side_timer) {
//         handling other counter changeing URL        [Put Where you want to show your counter after URL change]
//         hour.innerHTML = hr;
//         min.innerHTML = min;
//         sec.innerHTML = sec;
//     }
// } else {
// }
cycle = setTimeout(timerCycle, 1000);
}
//AJax funtion to save the data
// function saveData(hr, min, sec) {
//     $.ajax({
//         headers: {
//             'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
//         },
//         type: 'POST',
//         url: '/timer',
//         data: {
//             'hr': hr,
//             'min': min,
//             'sec': sec,
//         },
//         success: function (data) {
//             document.getElementById("time_msg").innerHTML = data.msg;
//             $("#time_msg").slideDown(1000);
//             $("#time_msg").delay(3000).slideUp(1000);
//         },
//         error: function (data, textStatus, errorThrown) {
//             console.log("Error:");
//             console.log(data);
//         },
//     });
// }
})
// counterUp :