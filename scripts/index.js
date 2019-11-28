
/* create post modal html code as java script */

var create_post_modal = 
"<form id='post-modal-content' class='modal-content' action=''> \
    <div class='modal-container'> \
        <div class='modal-title'>Pen Your Post</div> \
        <span onclick=\"modal_dialog('id-modal-create-post', 'none')\" class='close' ><i class='fa fa-times modal-close' aria-hidden='true'></i></span> \
        <hr class='hr-class'> \
        <label for='title'>Title</label> \
        <input type='text' placeholder='Enter title of your post' name='title' required> \
        <label for='contents'>Contents</label> \
        <textarea rows='10' cols='50' placeholder='Enter the contents of your post' name='contents' required></textarea> \
        <div class='create-btn-div'> \
            <button id='id_create_btn' type='submit' class='class-create-btn'>Create</button> \
        </div> \
    </div> \
</form>"

/* insert all the create post modal (availale only on index.html) dynamically through js */
function insert_post_modal() {
    document.getElementById('id-modal-create-post').innerHTML = create_post_modal;
}

