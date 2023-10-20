// document.addEventListener("DOMContentLoaded", function () {
//     const hamburger = document.getElementById("menu-icon");
//     const menu = document.getElementById("menu");
    

// });

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll("nav-link").forEach(n => n.addEventListener("click",() =>{
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))


// contact side


// const input = document.querySelector('input[name="subEmail"]');

// const subForm = document.querySelector('#subscribeForm');
// const subThankYou = document.querySelector('.subThankYou');
// const subTitle = document.querySelector('.subTitle');

// let isSubValid = false ;


// const reseatSubscriptionInput = (elm) => {
//     elm.classList.remove('subInvalid');
//     elm.nextElementSibling.classList.add('hidden');
//     elm.nextElementSibling.classList.remove('invalidBtn');
// }


// const validateSubscription = () => {
//     isSubValid = true ;
//     reseatSubscriptionInput(input);

//     if (!input.value) {

//         input.classList.add('subInvalid');
//         input.classList.remove('valid');
//         input.nextElementSibling.classList.remove('hidden');
//         input.nextElementSibling.classList.add('invalidBtn');

//         isSubValid = false ;
//     }
// }


// subForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     validateSubscription();

//     if (isSubValid == true) {
//         subForm.remove();
//         subTitle.classList.add('hidden');
//         subThankYou.classList.remove('hidden');
//     }
// })


// const validSubscription = (elm) => {
//     elm.nextElementSibling.classList.add('hidden');
//     elm.nextElementSibling.classList.remove('invalidBtn');

//     elm.classList.remove('subInvalid');
//     elm.classList.add('valid');
// }


// input.addEventListener('input', () => {
//     validateSubscription();
//     validSubscription(input);
// })

function submitFunction (){
    open("contact.html");
    
}