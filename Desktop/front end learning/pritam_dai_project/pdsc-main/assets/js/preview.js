
// search menu 
const cross = document.querySelector(".fa-times");
const searchBtn =document.querySelector(".fa-search")
cross.addEventListener('click',()=>{
    event.target.parentElement.parentElement.classList.toggle("searching")
})
searchBtn.addEventListener('click',()=>{

    cross.parentElement.parentElement.classList.toggle("searching")
})

const log_in = document.getElementById("log_in");
log_in.addEventListener('click',(item)=>{
event.target.parentElement.parentElement.classList.toggle("logged_in");
event.target.parentElement.parentElement.nextElementSibling.classList.toggle("logged_in")
})

const log_out = document.querySelector(".log_out")
log_out.addEventListener('click',(item)=>{
    event.target.parentElement.parentElement.classList.toggle("logged_in");
    event.target.parentElement.parentElement.previousElementSibling.classList.toggle("logged_in")
    })