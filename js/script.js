// ================================
// تسجيل الدخول
// ================================

const loginForm = document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener("submit",function(e){

e.preventDefault();

alert("تم تسجيل الدخول بنجاح 🌿");

window.location.href="home.html";

});

}


// ================================
// إنشاء حساب
// ================================

const registerForm = document.getElementById("registerForm");

if(registerForm){

registerForm.addEventListener("submit",function(e){

e.preventDefault();

const password=document.getElementById("password").value;

const confirm=document.getElementById("confirmPassword").value;

if(password!==confirm){

alert("كلمة المرور غير متطابقة");

return;

}

alert("تم إنشاء الحساب بنجاح");

window.location.href="index.html";

});

}


// ================================
// تواصل معنا
// ================================

const contactForm=document.getElementById("contactForm");

if(contactForm){

contactForm.addEventListener("submit",function(e){

e.preventDefault();

alert("تم إرسال رسالتك بنجاح 🌱");

contactForm.reset();

});

}


// ================================
// تسجيل الخروج
// ================================

function logout(){

if(confirm("هل تريد تسجيل الخروج؟")){

window.location.href="index.html";

}

}
