function hideSlide( slide ) {
	TweenMax.to(slide, 2, { top:0, x:"100%", opacity:1});	
}

function closeButton( slide ) {
	var cB = slide.find('.close-button');
	cB.click(
			function () {
				hideSlide( slide );
			}
		);
}
function showSlide( button ) {
	var slide = $("[data-slide=" + button.attr("data-button") + "]");
	TweenMax.fromTo(slide, 1, { top:0, opacity: 1}, { top:0, x:"-100%", opacity:1});	

	closeButton( slide );
}
$(document).ready(
	function () {
		/* 	

		Set hr bars [data-separators] to 100% height
	 	This needs to be done through javascript because 
	 	since absolute positioned elements are out of the 
	 	document's flow, they can not take the height of its parent.

	 	*/
	 	$("[data-separator]").css("height", $(window).innerHeight());
	 	$("[data-button]").click( 
	 		function () {
	 			showSlide( $(this) ); 
	 		});


	}); 