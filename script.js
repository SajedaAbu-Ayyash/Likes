function incLike(elementId) {
    like = document.getElementById(elementId);
    console.log(like);
    var likeCount = parseInt(like.innerText);
    like.innerText = likeCount + 1; 
}

// function increaseLike(elementId){
//     like = document.querySelector(elementId);
//     var likeCount = parseInt(like.innerText);
//     like.innerText = likeCount + 1;
// }









