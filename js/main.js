
const burger = document.querySelector('.burger'); 
console.log(burger); 
burger.addEventListener('click', () => {
    burger.classList.toggle('burger--active'); 
})