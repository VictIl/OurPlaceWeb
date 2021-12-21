document.addEventListener("DOMContentLoaded",load);

function buttontop(){
    topb = document.getElementById("top");  
    function scrollFunction() {
    
        if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
          topb.style.display = "block";
        } else {
          topb.style.display = "none";
        }
    }
    window.onscroll = function() {scrollFunction()};
   
    function topFunction() {
        document.body.scrollTop = 0; 
        document.documentElement.scrollTop = 0;
      };
    topb.addEventListener("click",topFunction);
};

function load(){
    //arrow switches
    let left=document.getElementById("left");
    left.addEventListener("click",goLeft);
    let right=document.getElementById("right");
    right.addEventListener("click",goRight);
    //bar switches
   
    let switches=document.getElementById("bar").children;
    let firstr=switches.item(0);                                  
    firstr.addEventListener("click",first);
    let secondr=switches.item(1);
    secondr.addEventListener("click",second);
    let thirdr=switches.item(2);
    thirdr.addEventListener("click",third);
    let fourthr=switches.item(3);
    fourthr.addEventListener("click",fourth);

    let slideIndex = 1;
    showSlides(slideIndex);
    function goRight() {
        showSlides(slideIndex += 1);
    }
    function goLeft() {
        showSlides(slideIndex -= 1);  
    }
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }
    function first(){
        showSlides(slideIndex=1);
    }
    function second(){
        showSlides(slideIndex=2);
    }
    function third(){
        showSlides(slideIndex=3);
    }
    function fourth(){
        showSlides(slideIndex=4);
    } 
    
    function showSlides(n) {
       
        let slides = document.getElementsByClassName("item");
        let switches=document.getElementById("bar").children;
        if (n > slides.length) {
            slideIndex = 1;
        };
        if (n < 1) {
            slideIndex = slides.length;
        };
        for (let i of slides) {
            i.style.display = "none";
        };
        
        slides[slideIndex - 1].style.display = "block";    
    
        for (let i of switches) {
            i.style.background = "none";
        };
        switches[slideIndex - 1].style.background = "#fff";
    };

        
    buttontop();
    
};
