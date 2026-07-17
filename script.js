// تسجيل الدخول

let loginForm = document.getElementById("loginForm");

if(loginForm){

loginForm.addEventListener("submit",function(e){

e.preventDefault();


let user=document.getElementById("username").value;
let pass=document.getElementById("password").value;


if(user && pass){

alert("تم تسجيل الدخول بنجاح 🌱");

window.location="home.html";

}

else{

alert("أدخل البيانات المطلوبة");

}


});

}



// إنشاء حساب


let registerForm=document.getElementById("registerForm");


if(registerForm){


registerForm.addEventListener("submit",function(e){

e.preventDefault();


let pass=document.getElementById("pass").value;
let confirm=document.getElementById("confirm").value;


if(pass !== confirm){

alert("كلمة المرور غير متطابقة");

}

else{

alert("تم إنشاء الحساب بنجاح 🌱");

window.location="index.html";

}


});


}




// البحث عن الطقس (بيانات تجريبية)


function getWeather(){


let city=document.getElementById("city").value;


if(city==""){

alert("اكتب اسم المدينة");

return;

}


document.getElementById("cityName").innerHTML=city;


let temp=Math.floor(Math.random()*10)+30;

document.getElementById("temperature").innerHTML=temp;


let hum=Math.floor(Math.random()*40)+30;

document.getElementById("humidity").innerHTML=hum;


}