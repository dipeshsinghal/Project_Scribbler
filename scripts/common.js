/* header html code as java script */

var header = 
"<div class='col-xs-6 header-logo-col'> \
    <div class='row'> \
        <h1 class='header-text' >ScriBBler</h1> \
    </div> \
    <div class='row'> \
        <div class='header-subtext'>Explore, Imagine, Create</div> \
    </div> \
</div> \
<div class='col-xs-6 header-button-col'> \
    <button type='button' class='btn btn-primary button-class header-button' onclick=\"modal_dialog('id-modal-signup','block')\">Sign Up</button> \
    <button type='button' class='btn btn-primary button-class header-button' onclick=\"modal_dialog('id-modal-signin','block')\">Sign In</button> \
</div>"

/* signup modal html code as java script */

var signup_modal = 
"<form id='signup-modal-content' class='modal-content' action=''> \
    <div class='modal-container'> \
        <div class='modal-title'>Get Started</div> \
        <span onclick=\"modal_dialog('id-modal-signup','none')\" class='close' ><i class='fa fa-times modal-close' aria-hidden='true'></i></span> \
        <hr class='hr-class'> \
        <label for='name'>Name</label> \
        <input id='name' type='text' placeholder='Enter your name' name='name' required > \
        <label for='username'>Username</label> \
        <input type='text' placeholder='Enter your username' name='username' required> \
        <label for='password'>Password</label> \
        <input type='password' placeholder='Enter your password' name='password' required> \
        <label for='password-repeat'>Confirm Password</label> \
        <input type='password' placeholder='Re-enter your password' name='password-repeat' required> \
        <div class='clearfix'> \
            <button id='id_signup_btn' type='submit' class='class-signin-btn'>Sign Up</button> \
        </div> \
    </div> \
</form>" 

/* signin modal html code as java script */

var signin_modal = 
"<form id='signin-modal-content' class='modal-content' action=''> \
    <div class='modal-container'> \
        <div class='modal-title'>Welcome Back!</div> \
        <span onclick=\"modal_dialog('id-modal-signin','none')\" class='close' ><i class='fa fa-times modal-close' aria-hidden='true'></i></span> \
        <hr class='hr-class'> \
        <label for='username'>Username</label> \
        <input type='text' placeholder='Enter your username' name='username' required> \
        <label for='password'>Password</label> \
        <input type='password' placeholder='Enter your password' name='password' required> \
        <div class='clearfix'> \
            <button id='id_signin_btn' type='submit' class='class-signin-btn'>Sign In</button> \
        </div> \
        <div class='modal-suffix-msg'> \
            <b> \
                Not a member? \
                <span id='signup-hyper-link' onclick=\"modal_dialog('id-modal-signin','none');modal_dialog('id-modal-signup','block')\"> \
                    Sign Up \
                </span> \
            </b> \
        </div> \
    </div> \
</form>"

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
        <textarea rows='10' cols='50' placeholder='Enter the contents of your post' name='contents' required> \
        </textarea> \
        <div class='create-btn-div'> \
            <button id='id_create_btn' type='submit' class='class-create-btn'>Create</button> \
        </div> \
    </div> \
</form>"

/* call this function on load of each page to insert common node like header and modals at run time */

function insert_common_object(){
    insert_header();
    insert_modal();
}

/* insert header dynamically through js */
function insert_header() {
    document.getElementById('id-header-space').innerHTML = header;
}

/* insert all the modal dynamically through js */
function insert_modal() {
    document.getElementById('id-modal-signup').innerHTML = signup_modal;
    document.getElementById('id-modal-signin').innerHTML = signin_modal;
    document.getElementById('id-modal-create-post').innerHTML = create_post_modal;
}

/* function to show/hide modal using its id */
function modal_dialog(id, display) {
    document.getElementById(id).style.display= display;  
 }