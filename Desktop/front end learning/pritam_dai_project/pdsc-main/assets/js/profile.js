const blogs = [
    {
        id: 1,
        title: "my first blog ",
        tag: "vanillajs",
        img:"../assets/images/courses-05.jpg",
        authorName: "Chholok Dong Rai",
        authorImg: "../assets/images/author-03.png",
        desc: "sdf ljsd sd jljds fjd ljfdsk jfkdsj  dsjflasdjfdsjf  sdjfls j  sadjfdksj fkjf  sdjfl kj",
        votes: "25",
        comments: "7"
    },
    {
        id: 2,
        title: "my second blog ",
        tag: "react",
        img:"../assets/images/courses-01.jpg",
        authorName: "Chholok Dong Rai",
        authorImg: "../assets/images/author-02.png",
        desc: "sdf ljsd sd jljds fjd ljfdsk jfkdsj  dsjflasdjfdsjf  sdjfls j  sadjfdksj fkjf  sdjfl kj",
        votes: "25",
        comments: "7"
    },
    
    {
        id: 3,
        title: "my third blog ",
        tag: "nodejs",
        img:"../assets/images/courses-02.jpg",
        authorName: "Chholok Dong Rai",
        authorImg: "../assets/images/author-01.png",
        desc: "sdf ljsd sd jljds fjd ljfdsk jfkdsj  dsjflasdjfdsjf  sdjfls j  sadjfdksj fkjf  sdjfl kj",
        votes: "25",
        comments: "7"
 
    },
    
    {
        id: 4,
        title: "my fourth blog ",
        tag: "express",
        img:"../assets/images/courses-03.jpg",
        authorName: "Chholok Dong Rai",
        authorImg: "../assets/images/author-05.png",
        desc: "sdf ljsd sd jljds fjd ljfdsk jfkdsj  dsjflasdjfdsjf  sdjfls j  sadjfdksj fkjf  sdjfl kj",
        votes: "25",
        comments: "7"

    },
    
    {
        id: 5,
        title: "my fifth blog ",
        tag: "django",
        img:"../assets/images/courses-01.jpg",
        authorName: "Chholok Dong Rai",
        authorImg: "../assets/images/author-04.png",
        desc: "sdf ljsd sd jljds fjd ljfdsk jfkdsj  dsjflasdjfdsjf  sdjfls j  sadjfdksj fkjf  sdjfl kj",
        votes: "25",
        comments: "7"

    },
    {
        id: 6,
        title: "my sixth blog ",
        tag: "react",
        img:"../assets/images/courses-02.jpg",
        authorName: "Chholok Dong Rai",
        authorImg: "../assets/images/author-03.png",
        desc: "sdf ljsd sd jljds fjd ljfdsk jfkdsj  dsjflasdjfdsjf  sdjfls j  sadjfdksj fkjf  sdjfl kj",
        votes: "25",
        comments: "7"

    }
    ,    {
        id: 7,
        title: "this is the latest blog ",
        tag: "express",
        img:"../assets/images/courses-03.jpg",
        authorName: "Chholok Dong Rai",
        authorImg: "../assets/images/author-05.png",
        desc: "sdf ljsd sd jljds fjd ljfdsk jfkdsj  dsjflasdjfdsjf  sdjfls j  sadjfdksj fkjf  sdjfl kj",
        votes: "25",
        comments: "7"

    }    ,    {
        id: 7,
        title: "this is the new blog ",
        tag: "express",
        img:"../assets/images/courses-03.jpg",
        authorName: "Chholok Dong Rai",
        authorImg: "../assets/images/author-05.png",
        desc: "sdf ljsd sd jljds fjd ljfdsk jfkdsj  dsjflasdjfdsjf  sdjfls j  sadjfdksj fkjf  sdjfl kj",
        votes: "25",
        comments: "7"

    }
    
];

const mainBlog =document.querySelector(".blog-items")
const pageBtns = document.querySelectorAll(".page_no")

// calling the functions
pageBtns.forEach(items=>{
        items.addEventListener('click',(item)=>{
            let currentPage =  item.currentTarget.dataset.no;
            let newBlogs = pagination(currentPage)
           displayBlogs(newBlogs)
      
        })
       
      
    })
   
    let latestBlogs = blogs.reverse();

function pagination(currentPage){
  
    let startFrom = currentPage*5 -5;
    let endsOn = startFrom + 5;
    
    let trimmedBlog = latestBlogs.slice(startFrom,endsOn);
    console.log(trimmedBlog)
     return trimmedBlog;    
    }
    
    
window.addEventListener('DOMContentLoaded',()=>{
    
    
    let currentBlog = pagination(1)
    displayBlogs(currentBlog);
    

displayTags()
})
// to dynamically creating blogs
function displayBlogs(blogItems){
    let displayBlog = blogItems.map(function (item){
        return `<article class="blog-item" style="background-image: linear-gradient(180deg, rgba(39, 74, 139,0) 0%, rgba(21,32,54,0.6) 100%),
        url(${item.img})">
        <div class="overlay">
        <div class="blogTags">
        <button type="button" class="filter-tags" data-id=${item.tag}>
        ${item.tag} 
        </button> 
    </div>
        <div class="blog-details">
   <p class="blog-title">${item.title}</p>
   <div class="author">
       <div class="author-img" style=" background-image:
       url(${item.authorImg});">

       </div>
       <div class="author-name">
           ${item.authorName}
       </div>
   </div>
   <div class="votes_coms">
       <div class="votes">

    <i class="fas fa-star"></i>

    Votes :
    <div class="votes-no">
        ${item.votes}
       </div>
</div>
<div class="comments">
<i class="fas fa-comments"></i>

Comments:
<div class="comments-no">
    ${item.comments}
</div>
</div>
</div>
</article>`
    });
    displayBlog = displayBlog.join("");
    mainBlog.innerHTML =displayBlog;
} 

// for dynamically creating tags
const tagsBlogs = document.querySelector(".nav-search-tags-all")
function displayTags(){
    const tags = blogs.reduce(
        function (values,items){
            if(!values.includes(items.tag)){
                values.push(items.tag)
            }
            return values
        },["all"]
    )

const tagBtns = tags.map((eachTag)=>{
    return `<button class="nav-tags" data-tagid=${eachTag}>
    ${eachTag}
</button>`
}).join("")
const blogTags = document.querySelector(".blogTags");
tagsBlogs.innerHTML = tagBtns;
const filterBtns = tagsBlogs.querySelectorAll(".nav-tags");


filterBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
  
    const category = e.currentTarget.dataset.tagid;

    const tagEach = blogs.filter(function (item) {
      console.log(item.tag);
      if (item.tag === category) {
        return item;
      }
    });
    if (category === "all") {
        let newAll = pagination(1);

      displayBlogs(newAll);
    } else {
      displayBlogs(tagEach);
    }
  });
});

}




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