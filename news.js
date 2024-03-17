const menu = document.querySelector('.menu');
const closeIcon = document.querySelector('.closeIcon');
const openIcon = document.querySelector('.openIcon');
let sidebar = document.querySelector('.sidebar');
let imageUrl = "https://media.istockphoto.com/id/1345912457/tr/foto%C4%9Fraf/financial-stock-market-graph-selective-focus.jpg?s=612x612&w=0&k=20&c=sCkQmJhtXl7b7-1PJrbCOUtP_XvNdLeQ6Z10jviREUk=";
let loremIp = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem, magnam!";

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
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
});


const apiKey = 'ee5ba0f6991947d9a47360cc517ea861';
const apiUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=' + apiKey;


fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data);

        let image = document.querySelectorAll('.image img');
        image.forEach((images, index) => {
            if (data.articles[index].urlToImage == null || data.articles[index].urlToImage == " ") {
                images.setAttribute("src", imageUrl);
            }
            else {
                images.setAttribute("src", data.articles[index].urlToImage);

            }
        });
        let title = document.querySelectorAll("h3 a");
        title.forEach((tit, index) => {
            tit.innerText = data.articles[index].title;
            tit.setAttribute("href", data.articles[index].url);
        })


        let content = document.querySelectorAll('.slide-content');
        content.forEach((cont, index) => {
            if (data.articles[index].content === null || data.articles[index].content == " ") {
                cont.innerHTML = loremIp;
            }
            else {
                cont.innerText = `${data.articles[index].content}`;
            }

        });

    });

function maxChar(txt, max) {
    if (txt.length > max) {
        return txt = txt.substring(0, max) + "...";
    }
    return txt;
}

const apiKey2 = 'ee5ba0f6991947d9a47360cc517ea861';
const apiUrl2 = 'https://newsapi.org/v2/everything?q=apple&from=2024-03-11&to=2024-03-11&sortBy=popularity&apiKey=' + apiKey2;

fetch(apiUrl2)
    .then(res => res.json())
    .then(result => {
        console.log(result);

        let imageLeft = document.querySelectorAll('.grid-cont img');
        imageLeft.forEach((leftImage, index) => {
            if (result.articles[index].urlToImage == null || result.articles[index].urlToImage == " ") {
                leftImage.setAttribute("src", imageUrl);
            }
            else {
                leftImage.setAttribute("src", result.articles[index].urlToImage);
            }
        });

        let titleLeft = document.querySelectorAll('.leftTitle a');
        titleLeft.forEach((leftTit, index) => {
            leftTit.innerText = result.articles[index].title;
            leftTit.setAttribute("href", result.articles[index].url);
        });


        let leftDesc = document.querySelectorAll('.grid-cont .leftContent');
        leftDesc.forEach((descLeft, index) => {
            descLeft.innerText = maxChar(result.articles[index].description, 130);

        });

    });


fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=ee5ba0f6991947d9a47360cc517ea861')
    .then(res => res.json())
    .then(result2 => {
        console.log(result2);

        let imageRight = document.querySelectorAll('.grid-cont-right img');
        imageRight.forEach((rightImage, index) => {
            if (result2.articles[index].urlToImage == null || result2.articles[index].urlToImage == " ") {
                rightImage.setAttribute("src", imageUrl);
            }
            else {
                rightImage.setAttribute("src", result2.articles[index].urlToImage);
            }
        });

        let rightTitle = document.querySelectorAll('.leftTitleRight a');
        rightTitle.forEach((descRight, index) => {
            descRight.innerText = maxChar(result2.articles[index].title, 90);
            descRight.setAttribute("href", result2.articles[index].url);
        });
    });


closeIcon.addEventListener('click', closeMenu);
openIcon.addEventListener('click', openMenu);