const btn = document.querySelector(".done");
const email = document.getElementById("email");
const inputs = document.querySelectorAll(".inputs")
const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );

btn.addEventListener('click',()=>{
  inputs.forEach(items=>{
      const inputValue = items.children[0].value;
      const current = items.cur
      if(inputValue=="")
      {
        items.children[1].classList.add("error");
        items.children[2].classList.add("error");
        items.children[0].classList.add("errorOutline");
        setTimeout(()=>{
          items.children[1].classList.remove("error");
        items.children[2].classList.remove("error");
        items.children[0].classList.remove("errorOutline");
        },1500)
      }
      else{
        console.log("not empty")
  
       
        if(emailRegex.test(email.value)){
            console.log('done')
        }
        else{
    
            email.nextElementSibling.classList.add("error");
            email.nextElementSibling.nextElementSibling.classList.add("error");
       email.placeholder = "example12@mail.com"
       
       reset()
      }
      
}


  })  
})
function reset(){
    setTimeout(()=>{
        email.nextElementSibling.classList.remove("error");
        email.nextElementSibling.nextElementSibling.classList.remove("error")
    },1500)

}