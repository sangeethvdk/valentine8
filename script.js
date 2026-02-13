let musicPlayed = false;
let currentImageIndex = 0;

const images = [
"img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg",
"img6.jpg","img7.jpg","img8.jpg","img9.jpg","img10.jpg"
];

const captions = [
"College Bunk kotti Ninnu PickUp Chesukovadam❤️",
"Infosys lo Faculty mudhe Photoshoot🤭",
"Class Lo Photoshoot✨",
"Mana 1st Bike Ride Day🤍",
"Mana Last Working Day In Diploma😒",
"Substation Ki Malli Podhama🫣",
"Travalled 400+ Kms to See You🌸",
"Hyderabad Lo Mana 1st Outing🥰",
"TankBund With Rain & You🫶",
"My Moon Day🖤"
];

function goToPage(num){
document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
document.getElementById("page"+num).classList.add("active");

if(num===2 && !musicPlayed){
let music=document.getElementById("bgMusic");
music.volume=0;
music.play();

let fade=setInterval(()=>{
if(music.volume<1) music.volume+=0.05;
else clearInterval(fade);
},200);

musicPlayed=true;
}

if(num===3){
setTimeout(()=>{
document.getElementById("finalReveal").classList.add("show");
},10000);
}
}

function playVideo(){
document.getElementById("loveVideo").play();
}

function pauseVideo(){
document.getElementById("loveVideo").pause();
}

function openImage(index){
currentImageIndex=index;
document.getElementById("imageModal").style.display="block";
document.getElementById("modalImage").src=images[index];
document.getElementById("modalCaption").innerText=captions[index];
}

function changeImage(direction){
currentImageIndex+=direction;

if(currentImageIndex<0)
currentImageIndex=images.length-1;

if(currentImageIndex>=images.length)
currentImageIndex=0;

document.getElementById("modalImage").src=images[currentImageIndex];
document.getElementById("modalCaption").innerText=captions[currentImageIndex];
}

function closeImage(){
document.getElementById("imageModal").style.display="none";
}

const startDate=new Date("2022-09-13");

setInterval(()=>{
const now=new Date();
const diff=now-startDate;

const days=Math.floor(diff/(1000*60*60*24));
const hours=Math.floor((diff/(1000*60*60))%24);
const minutes=Math.floor((diff/(1000*60))%60);

document.getElementById("loveCounter").innerText=
days+" Days "+hours+" Hours "+minutes+" Minutes ❤️";

},1000);
