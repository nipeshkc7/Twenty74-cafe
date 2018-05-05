
jQuery(document).ready(function($) {
"use strict";

    //Contact
    $('.contactForm').submit(function(){
        var email=$('#email').val();
        var name= $('#name').val();
        var message=$('#message').val();
        var phone=$('#phone').val();

        var str=$("form").serialize();
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(regex.test(email) && name.length>4 && message.length>5){
            //alert('valid email id');
            alert("sending");
             $.ajax({
                type: "POST",
                url: "contactform/contactform.php",
                data: str,
                success: function(msg){
                   // alert(msg);
                    if(msg == 'OK') {
                        $("#sendmessage").addClass("show");         
                        $("#errormessage").removeClass("show"); 
                    }
                    else {
                        $("#sendmessage").removeClass("show");
                        $("#errormessage").addClass("show");
                        $('#errormessage').html(msg);
                    }
                    
                }
            });     
        }else{
            alert('invalid form data');
        }		
       
            
        return false;
    });

});