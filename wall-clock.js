setInterval(setClock, 1000)
const hourhand = document.querySelector('[data-hour-hand]');
const minuthand = document.querySelector('[data-minute-hand]');
const secondhand = document.querySelector('[data-second-hand]');

function setClock(){
    const currentDate = new Date;
    const secondratio = currentDate.getSeconds() / 60
    const minutesratio = ( secondratio + currentDate.getMinutes()) / 60
    const hourratio = ( minutesratio + currentDate.getHours()) / 12
    setRotation(secondhand, secondratio)
    setRotation(minuthand, minutesratio)
    setRotation(hourhand, hourratio)
}


function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()



// backgroung color change
const hexnumber = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const colorbtn = document.querySelector('.btn');
const bodybg = document.querySelector('body');
const code = document.querySelector('.hex');

// const colors = ['yellow','red','blue','green','orange', '#3b5998'];

colorbtn.addEventListener('click', changecolor);

function changecolor(){
    // bodybg.style.backgroundColor = colors[4];
    let hexcol = '#';
    // let all = Math.floor(Math.random()*colors.length)
    // bodybg.style.backgroundColor = colors[all];

    for(let i=0;i<6;i++){
        let all = Math.floor(Math.random()*hexnumber.length);
        hexcol += hexnumber[all];
    }
    bodybg.style.backgroundColor = hexcol;
    code.innerHTML = hexcol;

}



// countDown script

// const month = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December"
// ];

// const week = [
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thrusday",
//     "Friday",
//     "Saturday",
//     "Sunday"
// ];


const eventdate = new Date("Jul 25,2020, 22:02:00").getTime();

var x = setInterval(function(){
  // current time
  var newtime = new Date().getTime();

  // Remaining time
  var remain = eventdate - newtime;

  var sec = Math.floor(remain/(1000));
  var min = Math.floor(remain/(1000*60));
  var day = Math.floor(remain/(1000*60*60*24));
  var hr = Math.floor(remain/(1000*60*60));

  hr %= 24;
  sec %= 60;
  min %= 60;

  hr = (hr<10)?"0"+hr:hr;
  min = (min<10)?"0"+min:min;
  sec = (sec<10)?"0"+sec:sec;

  if(day==0&&hr=="00"&&min=="00"&&sec=="00"){
    clearInterval(x);
  }

  document.getElementById("day").textContent=day;
  document.getElementById("hours").textContent=hr;
  document.getElementById("minuts").textContent=min;
  document.getElementById("second").textContent=sec;
})





// Digital clock

function Digitalclock(){
  var time = new Date();
  var h = time.getHours();
  var m = time.getMinutes();
  var s = time.getSeconds();
  var session = "AM"

  if(h==0){
    h=12;
  }
  if(h>10){
    h = h ;
    session = "PM"
  }

  h = (h < 10)? "0" + h : h;
  m = (m < 10)? "0" + m : m;
  s = (s < 10)? "0" + s : s;

  var newtime = h + ":" + m + ":" + s + " " + session;

  document.getElementById("myclock").textContent=newtime;
  document.getElementById("myclock").innerHTML=newtime;

  setTimeout(Digitalclock, 1000);

}
Digitalclock();

// setInterval(Digitalclock, 1000);
