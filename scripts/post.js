function like_clicked() {
    document.getElementById('like-summary-id').innerHTML = "1 person likes this!";

    var text = document.getElementById('like-button').innerHTML;
    if( text.endsWith("e") ) {
        document.getElementById('like-button').innerHTML += "d";
    }
}



function comment() {
    var commentText = document.getElementById('comment-area-id').value;
    console.log(commentText);
    if( commentText !=null && commentText.trim().length != 0 ) {
        document.getElementById('comments-display-area').innerHTML += "<div class='comment-class'>"+commentText+"</div>";
        document.getElementById('comment-area-id').value = "";
    }
}