(function($){

	$(document).ready(function() {
	$('.page-loader').show();
	
	$(window).on("page.hidden",function(te, pe){
		if(pe=="photographypage"){
	console.log("yes its photo page");
		$(window).off("resize.pg");	
	}
	else if(pe=="homepage")
	{
console.log("yes its home page");
		$(window).off("resize.home");	

	}
		console.log("current page hidden " + pe)
	});

})
})(jQuery);