function swtch(){

    first=document.getElementById('round1');
    first.addEventListener("click",firstf);
    first.addEventListener("dblclick", goBack);
    second=document.getElementById('round2');              //nort exactly second click,fix
    second.addEventListener("click",secondf);
    second.addEventListener("dblclick", goBack);
    third=document.getElementById('round3');
    third.addEventListener("click",thirdf);
    third.addEventListener("dblclick", goBack);

    let slide=document.querySelector(".change");
    let pic=document.getElementById("pic");
    let text=document.getElementById("text");
    let text2=document.getElementById("text2");
    let smalltext=document.getElementById("smalltext");

   
    function goBack(){
        smalltext.style.marginTop="2vw";
        first.style.background="none";
        second.style.background="none";
        text2.style.color="rgba(83, 50, 77, 0.922)";
        third.style.background="none";   
        slide.style.background="rgb(141, 115, 136)";
        pic.src="img/i0.jpg";
        let b=text.innerHTML;
        text.innerHTML= text.innerHTML.replace(b,"Welcome");
        let a=text2.innerHTML;
        text2.innerHTML= text2.innerHTML.replace(a,"to our family");
        text2.style.background="none";
        let c=smalltext.innerHTML;
        smalltext.innerHTML= smalltext.innerHTML.replace(c,"We would love to plan your next all inclusive stay, romantic or family getaway!");
    };

    function firstf(){
        first.style.background="rgb(214, 210, 210)";
        second.style.background="none";
        third.style.background="none";   
        text2.style.color="rgb(241, 19, 156)";
        slide.style.background="rgb(94, 175, 155)";
        pic.src="img/i1.jpg";
        let b=text.innerHTML;
        text.innerHTML= text.innerHTML.replace(b,"Let's create");
        let a=text2.innerHTML;
        text2.innerHTML= text2.innerHTML.replace(a,"new memories together");
        text2.style.background="none";
        let c=smalltext.innerHTML;
        smalltext.innerHTML= smalltext.innerHTML.replace(c,"We want to make your next experience the best one yet by understanding your vision");
        smalltext.style.color="white";
        smalltext.style.textAlign="end";
        smalltext.style.marginTop="3vw";
    }
    function secondf(){
        smalltext.style.marginTop="2vw";
        second.style.background="rgb(214, 210, 210)";
        first.style.background="none";
        third.style.background="none";  
        slide.style.background="rgb(189, 98, 75)";
        pic.src="img/i2.jpg";
        text2.style.color="white";
        let b=text.innerHTML;
        text.innerHTML= text.innerHTML.replace(b,"We're happy");
        let a=text2.innerHTML;
        text2.innerHTML= text2.innerHTML.replace(a,"to guide you");
        text2.style.background="none";
        let c=smalltext.innerHTML;
        smalltext.innerHTML= smalltext.innerHTML.replace(c,"We specialize in group land and cruise travel, so leave all the logistics to us, just get ready to enjoy a next level vacation.");
    }
    function thirdf(){
        smalltext.style.marginTop="2vw";
        third.style.background="rgb(214, 210, 210)";
        second.style.background="none";
        text2.style.color="white";
        first.style.background="none";  
        slide.style.background="rgb(64, 23, 80)";
        pic.src="img/i3.jpg";
        let b=text.innerHTML;
        text.innerHTML= text.innerHTML.replace(b,"For years");
        let a=text2.innerHTML;
        text2.innerHTML= text2.innerHTML.replace(a,"we've been improving");
        text2.style.background="none";
        let c=smalltext.innerHTML;
        smalltext.innerHTML= smalltext.innerHTML.replace(c,"Now, you can easily juggle employee trip plans with a tool that has everything you need — all in OurPlace.");
        smalltext.style.color="white";
        smalltext.style.textAlign="end";
    }
}


function fixd(){
    let obj=document.getElementById('help');
    let oimg=document.getElementById('helpi');
    let cap=document.getElementById('cap');
    function stp(){
        obj.style.display="none";
    }
    obj.addEventListener("click",stp);

    let stop=document.getElementById('cancel');
    stop.addEventListener("click",stp);

    let fp1=document.getElementById('fp1');
    fp1.addEventListener("click",lk1);

    let fp2=document.getElementById('fp2');
    fp2.addEventListener("click",lk2);

    let fp3=document.getElementById('fp3');
    fp3.addEventListener("click",lk3);

    let fp4=document.getElementById('fp4');
    fp4.addEventListener("click",lk4);

    let fp5=document.getElementById('fp5');
    fp5.addEventListener("click",lk5);

    function lk1(){
        obj.style.display="block";
        oimg.src=fp1.src;
        let a=cap.innerHTML;
        cap.innerHTML= cap.innerHTML.replace(a,"discover new possibilities");
    };

    function lk2(){
        obj.style.display="block";
        oimg.src=fp2.src;
        let a=cap.innerHTML;
        cap.innerHTML= cap.innerHTML.replace(a,"explore new places");
    };
    function lk3(){
        obj.style.display="block";
        oimg.src=fp3.src;
        let a=cap.innerHTML;
        cap.innerHTML= cap.innerHTML.replace(a,"make your dreams come to life");
    };
     function lk4(){
        obj.style.display="block";
        oimg.src=fp4.src;
        let a=cap.innerHTML;
        cap.innerHTML= cap.innerHTML.replace(a,"join our international family");
    };
     function lk5(){
        obj.style.display="block";
        oimg.src=fp5.src;
        let a=cap.innerHTML;
        cap.innerHTML= cap.innerHTML.replace(a,"travel with ourplace");
    };

  
};


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
    swtch();
    fixd();
    buttontop();
};


document.addEventListener("DOMContentLoaded",load);