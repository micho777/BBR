(function($){

	$(document).ready(function() {
	$('.page-loader').show();
	
	$(window).on("page.hidden",function(te, pe){
		if(pe=="photographypage"){
		$(window).off("resize.pg");	
	}
	else if(pe=="homepage")
	{
		$(window).off("resize.home");	

	}
});

$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
});



})
})(jQuery);