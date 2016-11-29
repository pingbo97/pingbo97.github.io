$(document).ready(function(){
	
	
	$("#action").click(function(){
		$("#modal-container").show();
	});

	$("#otheraction").click(function(){
		$("#modal-container").show();
	});
	
	
	$(".submit").click(function(){
		$("#modal-container").hide();
	});
	
	$(".cancel").click(function(){
		$("#modal-container").hide();
	});
	

	$("#modal-overlay").click(function(){
		$("#modal-container").hide();
	});
});