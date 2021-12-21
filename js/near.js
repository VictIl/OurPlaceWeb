
function onpe(){
    let pic=document.getElementById('g');
    pic.src="img/main1.jpg";

};

function twop(){
    let pic2=document.getElementById('g');
    pic2.src="img/main2.jpg";

};

function thrpee(){
    let pic3=document.getElementById('g');
    pic3.src="img/slide4.jpg";

};

function onppe(){
    let pic4=document.getElementById('g');
    pic4.src="img/main.jpg";

};

function load(){

let one=document.getElementById('one');
one.addEventListener("mouseover",onpe);
one.addEventListener("mouseout",onppe);

let two=document.getElementById('two');
two.addEventListener("mouseover",twop);
two.addEventListener("mouseout",onppe);

let three=document.getElementById('three');
three.addEventListener("mouseover",thrpee);
three.addEventListener("mouseout",onppe);

};

document.addEventListener("DOMContentLoaded",load);

