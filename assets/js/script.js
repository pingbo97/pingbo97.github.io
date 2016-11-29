$(document).ready(function(){
	
	
	$("#link").click(function(){
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