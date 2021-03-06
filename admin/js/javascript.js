/* global $, document  */

// waits until all the page has loaded and then runs do_setup
$(document).ready(do_setup);


function do_setup() {
    console.log('running setup!');
    // AJAX: sends a request to user_select.php
    // when php responds it runs user_select
    // (or blows up and runs failed!)
    $.post('user_select.php').done(user_select).fail(failed);
}

function failed() {
    console.log('something failed.... oh nooooo..');
}
