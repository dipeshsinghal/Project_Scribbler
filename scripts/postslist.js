var node_id = null;

function confirm_modal(show, delete_node_id) {
    if( show ) {
        document.getElementById('id04').style.display='block';
    } else {
        document.getElementById('id04').style.display='none';
    }   

    node_id = delete_node_id;
}

function delete_post() {
    document.getElementById(node_id).remove();
}

