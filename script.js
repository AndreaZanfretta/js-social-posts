/* utility */
function formatDate(date){
    date = date.split("-");
    let newDate = date[2] + "-" + date[1] + "-" + date[0];
    return newDate;
}

function nullUserImage(name){
    name = name.split(" ");
    console.log (name)
    let newName = [];
    for(let i = 0; i< name.length; i++){
        newName += name[i].charAt(0);  
    }
    console.log(newName)
        return newName;
}
/* main */
let container = document.getElementById("container");
let postDiv = document.createElement("div");
let likedPost = [];
generaPost();
/* creazione evento mi piace */
let like = document.querySelectorAll(".like-button");
for(let i = 0; i < like.length; i++){
    like[i].addEventListener("click", function(){
        const check = this.classList.contains("like-button--liked")
        console.log(check)
        this.classList.add("like-button--liked");

        let c =posts[i].likes;
        if(!check){
            posts[i].likes++;
            if(!likedPost.includes(posts[i].id)){
                likedPost.push(posts[i].id)
            }
        }else{
            posts[i].likes--;
            this.classList.remove("like-button--liked");
        }
        let counter = posts[i].likes;
        let counterLike = document.querySelectorAll(".js-likes-counter");
        counterLike[i].innerHTML = counter;
        console.log(likedPost)
    });
    
}




/*funzione genera post */
function generaPost(){

    posts.forEach((post)=>{
        container.innerHTML += `
            <div class="post">
                <div class="post__header">
                    <div class="post-meta">                    
                        <div class="post-meta__icon">
                            ${post.author.image ? `<img class="profile-pic" src="${post.author.image}" alt="">` : `<div class="profile-pic-default"><span>${nullUserImage(post.author.name)}</span></div>`}           
                        </div>
                        <div class="post-meta__data">
                            <div class="post-meta__author">${post.author.name}</div>
                            <div class="post-meta__time">${formatDate(post.created)}</div>
                        </div>                    
                    </div>
                </div>
                <div class="post__text">${post.content}</div>
                <div class="post__image">
                    <img src="${post.media}" alt="">
                </div>
                <div class="post__footer">
                    <div class="likes js-likes">
                        <div class="likes__cta">
                            <a class="like-button  js-like-button" data-postid="${post.id}">
                                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                <span class="like-button__label">Mi Piace</span>
                            </a>
                        </div>
                        <div class="likes__counter">
                            Piace a <b id="like-counter-${post.id}" class="js-likes-counter">${post.likes}</b> persone
                        </div>
                    </div> 
                </div>            
            </div>

        `;
        console.log(post.author.image)
    })

}