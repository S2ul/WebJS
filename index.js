const LOGIN_ID = "cat";
const LOGIN_PW = "1234";

var i;
var p;
var loginBox;

var id;
var pw;
var timeTextTag;

function login(){
    id=i.value;
    pw=p.value;
    if(id == LOGIN_ID && pw == LOGIN_PW){
        // alert("로그인 성공");
        procLogin();
    } else {
        alert("로그인 실패")
    }
}

function procLogin(){
    loginBox.innerHTML = "<p>" + id + "회원님 반갑습니다.</p>";
}

window.onload = function(){
    i=document.getElementById("i");
    p=document.getElementById("p");
    loginBox=document.getElementById("login_box");
    
    updateTime();
    
    setInterval(updateTime, 1);
}

function updateTime() {
    var tTime = new Date();

    var year = tTime.getFullYear();
    var month = tTime.getMonth() + 1;
    var date = tTime.getDate();

    var dayStr = "";
    var day = tTime.getDay();

    if ( day == 0 ) {
        dayStr = "일요일";
    } else if ( day == 1 ) {
        dayStr = "월요일";
    } else if ( day == 2 ) {
        dayStr = "화요일";
    } else if ( day == 3 ) {
        dayStr = "수요일";
    } else if ( day == 4 ) {
        dayStr = "목요일";
    } else if ( day == 5 ) {
        dayStr = "금요일";
    } else if ( day == 6 ) {
        dayStr = "토요일";
    }

    var dateText = document.getElementById("tDate");
    var hoursStr = "";
    var hours = tTime.getHours();
    var minutes = tTime.getMinutes();
    var seconds = tTime.getSeconds();
    var milSeconds = tTime.getMilliseconds();

    var timeText = document.getElementById("ttTime");

    if ( hours >= 12 ) {
        hoursStr = "오후 ";

        if ( hours != 12 ) {
            hours = hours - 12;
        }
    } else {
        hoursStr = "오전 ";
    }
    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    milSeconds = (milSeconds < 10 ? "00" : "") + milSeconds;
    milSeconds = (milSeconds >= 10 && milSeconds < 100 ? "0" : "") + milSeconds;

    dateText.textContent = year + "년 " + month + "월 " + date + "일 " + dayStr;

    var formattedTime = hoursStr + hours + "시 " + minutes + "분 " + seconds + "초 " + milSeconds;
    timeText.textContent = formattedTime;
}
