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

const colorbtn = document.querySelector('.btn');
const bodybg = document.querySelector('body');

const colors = ['yellow','red','blue','green','orange', '#3b5998'];

colorbtn.addEventListener('click', changecolor);

function changecolor(){
    // bodybg.style.backgroundColor = colors[4];
    let all = Math.floor(Math.random()*colors.length)
    bodybg.style.backgroundColor = colors[all];
}