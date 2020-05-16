"use strict"
{
const images = ["img/img1.jpg", "img/img2.jpg", "img/img3.jpg", "img/img4.jpg"];
// 画像の配列作成

let i = 0;

const changeImage = (num) => {
    if(i + num >= 0 && i + num < images.length){
        i += num;
        document.getElementById("main_image").src = images[i]
    }
};

const timer = setInterval(() => {
    changeImage(1);
    console.log(i);
    if(i >= images.length-1){
        i = 0;
    } ;
}, 10000);


}