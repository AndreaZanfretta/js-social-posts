/* main */
let container = document.getElementById("container");
let postDiv = document.createElement("div");
let likedPost = [];
generaPost();
/* creazione evento mi piace */
let like = document.querySelectorAll(".like-button");
for(let i = 0; i < like.length; i++){
    like[i].addEventListener("click", function(){
        this.classList.add("like-button--liked");
        posts[i].likes++;
        let counter = posts[i].likes;
        console.log(counter)
        let counterLike = document.querySelectorAll(".js-likes-counter");
        counterLike[i].innerHTML = counter;
        if(!likedPost.includes(posts[i].id)){
            likedPost.push(posts[i].id)
        }
        console.log(likedPost)
    });
    
}



/* funzione mi piace */
/* function getLikes(i){
    this.classList.add("like-button--liked");
    console.log(this)
} */

/*funzione genera post */
function generaPost(){

    posts.forEach((post)=>{
        container.innerHTML += `
        
            <div class="post">
                <div class="post__header">
                    <div class="post-meta">                    
                        <div class="post-meta__icon">
                            <img class="profile-pic" src="${post.author.image}" alt="${post.author.name}">                    
                        </div>
                        <div class="post-meta__data">
                            <div class="post-meta__author">${post.author.name}</div>
                            <div class="post-meta__time">${post.created}</div>
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
                            Piace a <b id="like-counter-1" class="js-likes-counter">${post.likes}</b> persone
                        </div>
                    </div> 
                </div>            
            </div>

        `;
    })

}