let navbar = document.querySelector(".navbar__inner .navbar-ul")

document.querySelector("#bars").onclick = () =>{
    navbar.classList.add("active")
}
document.querySelector("#times").onclick = () =>{
    navbar.classList.remove("active")
};

let register = document.querySelector(".account-form .register-btn"),
    login = document.querySelector(".account-form .login-btn")

register.onclick = () =>{
    register.classList.add("active");
    login.classList.remove("active");
    document.querySelector(".account-form .login-form").classList.remove("active");
    document.querySelector(".account-form .register-form").classList.add("active");
}

login.onclick = () =>{
    register.classList.remove("active");
    login.classList.add("active");
    document.querySelector(".account-form .login-form").classList.add("active");
    document.querySelector(".account-form .register-form").classList.remove("active");
}

let accountForm = document.querySelector(".account-form")

document.querySelector("#accont").onclick = () =>{
    accountForm.classList.add("active")
}
document.querySelector("#account-close").onclick = () =>{
    accountForm.classList.remove("active")
};
let swiper = new Swiper(".banner-home-slider", {
    pagination: {
      el: ".swiper-pagination",
      clickable:true
    },
    loop:true,
    grabCursor: true,
});

let swiper2 = new Swiper(".courses__block", {
    loop:true,
    grabCursor: true,
    spaceBetween: 20,
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
      },
});

