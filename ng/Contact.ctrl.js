angular.module('app').controller('ContactCtrl',function($scope){
	
	checkEmpty();
	
	$("#contact-message").click(function() {
		checkEmpty();
	});
	
	$('#contact-message').keypress(function() {
		checkEmpty();
	});
	
	$('#contact-message').on("keyup", function() {
		checkEmpty();
	});
	
	$("#send-btn").click(function() {
		$("#contact-name").val("");
		$("#contact-contact").val("");
		$("#contact-message").val("");
	});
	
	function checkEmpty() {
		if ($('#contact-message').val().length === 0) {
			$('#send-btn').prop('disabled', true);
		}
		else {
			$('#send-btn').prop('disabled', false);
		}
	}
	
});