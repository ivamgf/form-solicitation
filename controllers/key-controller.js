// Function Key-Press

function key() {
    $(document).keypress(function(e) {
        if(e.which == 13) $('#next7').click();
    });
}