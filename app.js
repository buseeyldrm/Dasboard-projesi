const menu = document.querySelector('.menu');
const closeIcon = document.querySelector('.closeIcon');
const openIcon = document.querySelector('.openIcon');
const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');
const button3 = document.querySelector('.button3');
const acordion1 = document.querySelector('.acordion1');
const acordion2 = document.querySelector('.acordion2');
const acordion3 = document.querySelector('.acordion3');
const box = document.querySelectorAll('.box');


function closeMenu() {
    openIcon.style.display = "block";
    closeIcon.style.display = "none";
    menu.style.left = "-1000px";
    console.log('kapandı');
}

function openMenu() {
    menu.style.left = "60px";
    console.log("açıldı");
    openIcon.style.display = "none";
    closeIcon.style.display = "inline-block";
}


function buttonClick1() {
    button1.style.color = "white";
    button1.style.backgroundColor = "#1387fc";
    button1.style.borderColor = "white";
    button2.style.borderColor = "black";
    button3.style.borderColor = "black";
    button2.style.color = "black";
    button2.style.backgroundColor = "white";
    button3.style.color = "black";
    button3.style.backgroundColor = "white";
    acordion2.style.display = "none";
    acordion3.style.display = "none";
    acordion1.style.display = "block";


}
function buttonClick2() {
    button2.style.color = "white";
    button2.style.backgroundColor = "#1387fc";
    button2.style.borderColor = "white";
    button1.style.borderColor = "black";
    button3.style.borderColor = "black";
    button1.style.color = "black";
    button1.style.backgroundColor = "white";
    button3.style.color = "black";
    button3.style.backgroundColor = "white";
    acordion2.style.display = "block";
    acordion1.style.display = "none";
    acordion3.style.display = "none";
}

function buttonClick3() {
    button3.style.color = "white";
    button3.style.backgroundColor = "#1387fc";
    button3.style.borderColor = "white";
    button1.style.borderColor = "black";
    button2.style.borderColor = "black";
    button1.style.color = "black";
    button1.style.backgroundColor = "white";
    button2.style.color = "black";
    button2.style.backgroundColor = "white";
    acordion1.style.display = "none";
    acordion3.style.display = "block";
    acordion2.style.display = "none";
}

box.forEach(item => {
    const header = item.querySelector('.header');
    const information = item.querySelector('.information');
    header.addEventListener('click', () => {
        for (var i = 0; i < box.length; i++) {
            if (box[i] != item) {
                box[i].classList.remove('active');

            }
            else {
                item.classList.toggle("active");
            }
        }
    });
});


const chartData = {
    labels: ["Product 1", "Product 2"],
    data: [35, 65],
};
const chart = document.querySelector('.chart');

new Chart(chart, {
    type: "doughnut",
    data: {
        labels: chartData.labels,
        datasets: [{
            data: chartData.data,
            backgroundColor: ["#165BAA", "#A155B9"],
            borderWidth:"0",
            

        },]
    },
});


const chartBarData = {
    labels: ["Product 1", "Product 2"],
    data: [35, 65],

};

const chartB = document.querySelector('.chartB');
new Chart(chartB, {
    type: "bar",
    data: {
        labels: chartBarData.labels,
        datasets: [{
            data: chartBarData.data,
            label: "Product List",
            backgroundColor: ["#165BAA", "#A155B9"],

        },]
    },
});

closeIcon.addEventListener('click', closeMenu);
openIcon.addEventListener('click', openMenu);
button1.addEventListener('click', buttonClick1);
button2.addEventListener('click', buttonClick2);
button3.addEventListener('click', buttonClick3);

const num=document.querySelectorAll('.num');

let interval=5000;
num.forEach(number=>{
    let startVal=0;
    let endVal=parseInt(number.getAttribute("data-val"));

    let duration=Math.floor(interval / endVal);
    let counter=setInterval(function(){
        startVal+=1;
        number.textContent=startVal;
        if(startVal==endVal){
            clearInterval(counter);
        }
    },duration)
})