// ============================
// تبديل تسجيل الدخول وإنشاء حساب
// ============================

function showRegister(){

    document.getElementById("loginForm").style.display = "none";

    document.getElementById("registerForm").style.display = "block";

}


function showLogin(){

    document.getElementById("registerForm").style.display = "none";

    document.getElementById("loginForm").style.display = "block";

}


// ============================
// تسجيل الدخول
// ============================

let login = document.getElementById("loginForm");

if(login){

login.addEventListener("submit", function(e){

    e.preventDefault();

    alert("تم تسجيل الدخول بنجاح 🌿");

    window.location.href="home.html";

});

}



// ============================
// إنشاء حساب
// ============================

let register = document.getElementById("registerForm");


if(register){

register.addEventListener("submit", function(e){

    e.preventDefault();


    let password =
    document.querySelector("#registerForm input:nth-of-type(4)").value;


    let confirm =
    document.querySelector("#registerForm input:nth-of-type(5)").value;



    if(password !== confirm){

        alert("كلمة المرور غير متطابقة ❌");

    }

    else{

        alert("تم إنشاء الحساب بنجاح ✅");

        showLogin();

    }


});

}



// ============================
// رسالة عند إرسال التواصل
// ============================

let contactForm = document.querySelector(".content form");


if(contactForm){

contactForm.addEventListener("submit",function(e){

    e.preventDefault();

    alert("تم إرسال رسالتك بنجاح 🌱");

});

}



// ============================
// حركة ظهور العناصر
// ============================

window.onload=function(){

    document.body.style.opacity="1";

};