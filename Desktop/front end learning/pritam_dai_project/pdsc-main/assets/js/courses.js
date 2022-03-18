const qna = document.querySelectorAll(".qna");
qna.forEach(items=>{
  const answer = items.querySelector(".answers");
  items.addEventListener('click',(e)=>{

qna.forEach(item=>{   
if(item !== items)
{
  item.children[0].children[1].classList.remove("rotate") 
  item.children[0].classList.remove("style");
  item.children[1].classList.remove("show");
  }
})
  items.children[0].children[1].classList.toggle("rotate");
  items.children[1].classList.toggle("show")
  items.children[0].classList.toggle("style")
  console.log(items.children[0])
  })
})