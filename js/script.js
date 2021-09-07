// JavaScript Document
 $(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });
	$(function(){
	 	$(window).on("scroll", function(){
	 		if ($(window).scrollTop() > 50 ) {
	 			$("#menu").addClass("hidden");
	 		}else{
	 			$("#menu").removeClass("hidden");
	 		}
	 	});
	 });



 $(function(){
 	$(window).on("scroll", function(){
 		if ($(window).scrollTop() > 500) {
 			$("#menu").removeClass("hidden")
 			$(".bg-inverse").addClass("bg-purple-degrade");
 		}else{
 			$(".bg-inverse").removeClass("bg-purple-degrade");
 		}
 	});
 });






