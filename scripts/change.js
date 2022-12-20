var i=0;
var image=document.getElementById("image");
// Добавьте свои картинки в массив через запятую
var imgs=new Array('media/light-on-30.png','media/light-off-30.png');
function imgsrc() {
    i++;i%=imgs.length;
    image.src = imgs[i];
}