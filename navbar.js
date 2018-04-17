$(document).ready(function(){
	$('.dropdown').hide();
	$('.mian > li > a').css('border-right','solid');
	$('.dropdown > a').css('border-right','0px');
	
	
	$('#drop').click(function(){
	
		let var1 = $('.dropdown').css('display');
		if(var1 == 'none')
		{
			$('.dropdown').show(500);
		}
		else{
			$('.dropdown').hide(500);
		}
		return false;
	})
	
	if($(window).width()<=800)
	{
		$('.navButton').css('width','40px');
		$('.navButton').click(function(){
			
		if($('.main').css('display')== 'none')
		{
			$('.main').show(300);
			
			$('li').css('display','block');
			$('.inputType').css({'display':'block',
								'height':'50px',
								'margin':'0px'});
			$('.inputType > input').css({'display':'block',
								
								'margin':'0px'});
			$('#submit').css({'display':'block',
								
								'margin':'0px'});
			
			
			$('ul').css({'flex-direction':'column','height':'auto'});
			$('li').css('height','60px');
			
			
			$('li > a').css('border-right','0px solid');
			$('input').css({'width':'100%','border-radius':'5%','height':'40px'});
			$('#submit').css({'width':'80px','border-radius':'5%','height':'40px'});
		}
		else{
			$('.main').hide(300);
		}
		});
	}
	//else
	//{
		$(window).resize(function(){location.reload();});
		$('ul').css('flex-direction','row');
	//}
});