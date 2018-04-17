 $(document).ready( function() {
    
        // When site loaded, load the Popupbox First
       
    
        $('#modalClose').click( function() {            
            $('#modal').fadeOut("slow");
            $("#container").css("opacity", "1");
        });
        
        $('#submit').click( function() {
           $('#modal').slideDown("slow");
            $("#container").css("opacity", "0.3");  
        });

		$('.modalContainer > button').click(function(){
			 $('#modal').fadeOut("slow");
			  $("#container").css("opacity", "1");
		})
            
    });