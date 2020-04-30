$(document).ready(function () {

    // Active nav-link highlighted
    $('a.nav-link').click(function () {
        $('a.nav-link').removeClass('active');
        $(this).addClass('active');
    })


})