$(function(){
    console.log('main.js loaded');

    $('li', '.page.chat-list').on('click', function (){
        $('.page.chat-detail').addClass('active');
    });

    $('.fa-chevron-left').on('click', function() {
        $('.page.chat-detail').removeClass('active');
    });

    $('.fa-paperclip').on('click', function() {
        $('.inputBar').toggleClass('active');
        $('.attachmentBar').toggleClass('active');
    });

});
