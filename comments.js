document.getElementById("commentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let comment = document.getElementById("commentText").value;
    let commentList = document.getElementById("comments");

    if (comment.trim() !== "") {
        let newComment = document.createElement("p");
        newComment.textContent = comment;
        commentList.appendChild(newComment);
    }
});
