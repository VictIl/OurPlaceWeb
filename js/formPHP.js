function slides(){

    let left=document.getElementById("left");
    left.addEventListener("click",goLeft);
    let right=document.getElementById("right");
    right.addEventListener("click",goRight);

    let slideIndex = 1;
    showSlides(slideIndex);

    function goRight() {
        showSlides(slideIndex += 1);
    }
    function goLeft() {
        showSlides(slideIndex -= 1);
    }
    function showSlides(n) {

        let slides = document.getElementsByClassName("item");

        if (n > slides.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides.length
        }
        for (let i of slides) {
            i.style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
    }

};
function one(){
    let n1=document.getElementById("notify1").checked;
    if(n1==true){
        let app3=document.getElementById("appear2");
        app3.style.display="none";

    };
};
function two(){
    let n2=document.getElementById("notify2").checked;
    if(n2==true){
        let app2=document.getElementById("appear2");
        app2.style.display="block";
    };
   
};

function check(){
    var check=document.getElementById("check").checked;
    if(check){
        let app=document.getElementById("appear");
        app.style.display="block";

        let n1=document.getElementById("notify1");
        n1.addEventListener("click",one);
       let n2=document.getElementById("notify2");
        n2.addEventListener("click",two);

    }else{
        let app=document.getElementById("appear");
        app.style.display="none";
    }

 };

function checyuk(){
    var check=document.getElementById("check").checked;
    if(check){
        let app=document.getElementById("appear");
        app.style.display="block";

        /*let n1=document.getElementById("notify1");
        n1.addEventListener("click",one);
        let n2=document.getElementById("notify2");
        n2.addEventListener("click",two);*/
        
    }else{
        let app=document.getElementById("appear");
        app.style.display="none";
    }

 };



 function load(){
   let cb=document.getElementById("check");
   check();
    cb.addEventListener("click", check);
		/*let n1=document.getElementById("notify1");
        n1.addEventListener("click",one);
		
		let n2=document.getElementById("notify2");
        n2.addEventListener("click",two);
		
		let cb=document.getElementById("check");
		cb.addEventListener("click", check);
		

*/


		let n3=document.getElementById("notify2").checked;
		if(n3==true){
        let app2=document.getElementById("appear2");
        app2.style.display="block";}

		slides();
    

};
document.addEventListener("DOMContentLoaded",load);
