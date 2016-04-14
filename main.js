$(document).ready(function(){
	$(".lightbox").click(function(){
		overlayLink = $(this).attr("href");
		window.startOverlay(overlayLink);
		return false;
	});
});

function startOverlay(overlayLink){
	$("body").append('<div class="overlay"></div><div class="container"></div>').css({"overflow-y":"hidden"});
	$(".overlay").animate({"opacity":"1"}, 200, "linear");
	$(".container").html('<img src="'+overlayLink+'" alt="" />');
	$(".container img").load(function(){
		var imgWidth = $(".container img").width();
		var imgHeight = $(".container img").height();
		$(".container").css({
			"top": "50%",
			"left": "50%",
			"width": imgWidth,
			"height": imgHeight,
			"margin-top": -(imgHeight/2),
			"margin-left": -(imgWidth/2)
		}).animate({"opacity":"1"}, 200, "linear");

		$(".container").on('click', function(){
			$(".container, .overlay").animate({"opacity":"0"}, 200, "linear", function(){
				$(".container, .overlay").remove();	
			});
		});
	});
}