// ### Navigation ###

const burger = document.querySelector('.nav-burger')

const nav = document.querySelector('.nav-menu')

const allLiens = document.querySelectorAll('.nav-menu li a')

burger.addEventListener('click', () =>{
    burger.classList.toggle('active');
    nav.classList.toggle('active');
})

allLiens.forEach(item =>{
    item.addEventListener('click',() =>{
        burger.classList.remove('active');
        nav.classList.remove('active');
    })
}
)