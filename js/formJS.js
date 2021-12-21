function apply(){
    // un
    let un=document.getElementById("un");
    if(un.value==""||un.value==null){
        document.getElementById("unError").innerHTML="Field is empty";
        return false;
    }else{document.getElementById("unError").innerHTML="";};

    let r = un.value;
    let g=/^[\d]{3}$/;
    if(!r.match(g)){  document.getElementById("unError").innerHTML="Incorrect grammar";
        return false;};

    // location

    let loc=document.getElementById("loc");
    if(loc.value==""){
        document.getElementById("locError").innerHTML="Field is empty";
        return false;
    }else{document.getElementById("locError").innerHTML="";};

    let p = loc.value;
    let o=/^[A-Z]?[A-Za-z-]+[a-z]+$/;
    if(!p.match(o)){ document.getElementById("locError").innerHTML="Incorrect grammar";
    return false;};

    // time

    let time=document.getElementById("time");
    if(time.value==""){
        document.getElementById("timeError").innerHTML="Field is empty";
        return false;
    }else{document.getElementById("timeError").innerHTML="";};

    let f = time.value;
    let x=/^[0-9]{1,3}$/;
    if(!f.match(x)){document.getElementById("timeError").innerHTML="Incorrect grammar";
    return false;};

    // email

    let email=document.getElementById("email");
    if(email.value==""){
        document.getElementById("emailError").innerHTML="Field is empty";
        return false;
    }else{document.getElementById("emailError").innerHTML="";};

    let f2 = email.value;
    let x2=/^[a-z0-9]{1}[a-z0-9-\.]+@[a-z0-9-]+\.[a-z]{2,4}$/;
    /*let x2=/^[\w]{1}[\w-\.]+@[\w-]+\.[a-z]{2,4}$/;*/
    if(!f2.match(x2)){document.getElementById("emailError").innerHTML="Incorrect grammar";
        return false;
    };

    if(p.match(o) && r.match(g) && f.match(x) && f2.match(x2) ){
        return true;
    };

};
function one(){
    let n1=document.getElementById("notify1").checked;
    if(n1==true){
        let app3=document.getElementById("appear2");
        app3.style.display="none";

    };
}
function two(){
    let n2=document.getElementById("notify2").checked;
    if(n2==true){
        let app2=document.getElementById("appear2");
        app2.style.display="block";
    };

}
function why(){
    let last=document.getElementById("check").checked;
    if(last){
        let n2=document.getElementById("notify2");
        n2.required=true;
        if(n2.checked==true){
            let phone=document.getElementById("ph");
            if(phone.value==""){
                document.getElementById("phError").innerHTML="Field is empty";
                return false;
            }else{document.getElementById("phError").innerHTML="";};

            let fd = phone.value;
            let rt=/^[\d \+]{1,1}[\d\(\)\-]{6,11}\d$/;
            if(!fd.match(rt)){document.getElementById("phError").innerHTML="Incorrect grammar";
            return false;};
        }
    };
    return true;
};
function pick(event){
    if(!why()){
        event.preventDefault();
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
function pass(event){
    if(!apply()){
        event.preventDefault();
    };
};
function skip(){
    let ignore=document.getElementById("ignore");
    ignore.required=false;
    document.getElementById("myForm").action = "index.php";
}
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

}
function load(){
    let skp = document.getElementById("button");
    skp.addEventListener("click", skip);
    let cb=document.getElementById("check");
    cb.addEventListener("click", check);
    let but = document.getElementById("button1");
    but.addEventListener("click", pick);
    but.addEventListener("click", pass);
    slides();

};
document.addEventListener("DOMContentLoaded",load);


