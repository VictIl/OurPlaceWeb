function myFunction(items) {
    var bigImg = document.getElementById("bigImg");
    var imgText = document.getElementById("imgtext");
    bigImg.src = items.src;
    imgText.innerHTML = items.alt;
    bigImg.parentElement.style.display = "block";
}



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
   buttontop();
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
    
    
}
document.addEventListener("DOMContentLoaded",load);
