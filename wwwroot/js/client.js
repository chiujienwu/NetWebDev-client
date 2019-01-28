$(function(){
    $('.code').on('click', function(e) {
        e.preventDefault();
        $('#toast').toast({ autohide: false }).toast('show');
    });
});
