var count = 0;

function like_clicked() {
    count++;
    document.getElementById('like-summary-id').innerHTML = String(count) + " person likes this!";

    var text = document.getElementById('like-button').innerHTML;
    if( text.endsWith("e") ) {
        document.getElementById('like-button').innerHTML += "d";
    }
}



function comment() {
    var commentText = document.getElementById('comment-area-id').value;
    if( commentText !=null && commentText.trim().length != 0 ) {
        document.getElementById('comments-display-area').innerHTML += "<div class='comment-class'>"+commentText+"</div>";
        document.getElementById('comment-area-id').value = "";
    }
}

function edit() {
    var title = document.getElementById('post-title-id');
    var content = document.getElementById('post-content-id');

    title.contentEditable = true;
    content.contentEditable = true;
    title.style.border = "2px solid pink";
    content.style.border = "3px solid pink";

    document.getElementById('edit-button-id').style.display = 'none';
    document.getElementById('save-button-id').style.display = 'block';
}

function save() {
    var title = document.getElementById('post-title-id');
    var content = document.getElementById('post-content-id');

    title.contentEditable = false;
    content.contentEditable = false;
    title.style.border = 'none';
    content.style.border = 'none';

    document.getElementById('edit-button-id').style.display = 'block';
    document.getElementById('save-button-id').style.display = 'none';
}