$(document).ready(function(){
	$('.collapse').hide();
	
	$('.link1').click(function(){
		
		let val = $('#aboutMe').css('display');
		if(val == 'none')
		{
			$('#aboutMe').show(500);
			$('#projects').hide(500);
			$('#exp').hide(500);
		}
		else{
			$('#aboutMe').hide(500);
		}
	})
	
	$('.link2').click(function(){
		
		let val = $('#projects').css('display');
		if(val == 'none')
		{
			$('#projects').show(500);
			$('#aboutMe').hide(500);
			$('#exp').hide(500);
		}
		else{
			$('#projects').hide(500);
		}
	})
	
	$('.link3').click(function(){
		
		let val = $('#exp').css('display');
		if(val == 'none')
		{
			$('#exp').show(500);
			$('#aboutMe').hide(500);
			$('#projects').hide(500);
		}
		else{
			$('#exp').hide(500);
		}
	})
})