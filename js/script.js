function buttonClicked() {
    alert('Page Loaded, JS Alert');
}
function buttonToChangeTextClicked() {
    document.getElementsById('first-column').innerHTML = "JavaScript text"
}

$(function(){
    var pages = ['index','about','form']
    var pathname = window.location.pathname;

    $('.nav-link').each(function(i){
        if(pathname.includes(pages[i])){
            $(this).addClass('active');
            $(this).attr('aria-current','page');
        }else if(this.className.includes('active')){
            $(this).removeClass('active');
        }

    });
});