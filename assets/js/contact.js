(function($){

	$(document).ready(function() {


 var sendData  = {
        "access_token": "e206b80gqwuistiewnky9eyf"
    };

 var sendButton = $('#sendBtn');

 function onSuccess() {
        // remove this to avoid redirect
        console.log("sucess");
		$("input#name").val("");
		$("input#email").val("");
		$("textarea#message").val("");
		$("input#number").val("");
        sendButton.prop('disabled',false);
        sendButton.val('Submit');

		alert("Email Successfully sent.");
		// window.location = window.location.pathname + "?message=Email+Successfully+Sent%21&isError=0";
    }

    function onError(error) {
        // remove this to avoid redirect
        console.log("failed" + error);
        sendButton.prop('disabled',false);
        sendButton.val('Submit');
		
		alert("something went wrong while sending the email. Please try again later, or reach us by Phone.")
        
		// window.location = window.location.pathname + "?message=Email+could+not+be+sent.&isError=1";
    }

function send() {
	//validate input
	if((!$('#contact-form')[0].checkValidity())){
		Alert("Please fill all inputs with valid data");
		return false;
	}	
	console.log(sendButton);
        sendButton.val('Sending…');
        sendButton.prop('disabled',true);

		var submit = $('#contact-form submit');	
		
		 		var cname   = $("input#name").val();
		 		var cemail  = $("input#email").val();
				var cmessage = $("textarea#message").val();
				var cnumber = $("input#number").val();

		 	 sendData.subject = "contact from: " + cname + " " +cemail + " ("+  cnumber + ")";
      	 	 sendData.text = cmessage;

					submit.empty();
					submit.append('<i class="fa fa-cog fa-spin"></i> Wait...');

        $.post('https://postmail.invotes.com/send',
            sendData,
            onSuccess
        ).fail(onError);

        return false;
    }

	 sendButton.on('click', send);

	  var $form = $('#contact-form');
    $form.submit(function( event ) {
        event.preventDefault();
    });

		/* ---------------------------------------------- /*
		 * Contact form ajax
		/* ---------------------------------------------- */

		// $('#contact-form').find('input,textarea').jqBootstrapValidation({
		// 	preventSubmit: true,
		// 	submitError: function($form, event, errors) {
		// 		// additional error messages or events
		// 	},
		// 	submitSuccess: function($form, event) {
		// 		event.preventDefault();

		// 		var submit          = $('#contact-form submit');
		// 		var ajaxResponse    = $('#contact-response');

		// 		var name            = $("input#name").val();
		// 		var email           = $("input#email").val();
		// 		var message         = $("textarea#message").val();

		// 		$.ajax({
		// 			type: 'POST',
		// 			url: 'assets/php/contact.php',
		// 			dataType: 'jsonp',
		// 			data: {
		// 				name: name,
		// 				email: email,
		// 				message: message,
		// 			},
		// 			cache: false,
		// 			beforeSend: function(result) {
		// 				submit.empty();
		// 				submit.append('<i class="fa fa-cog fa-spin"></i> Wait...');
		// 			},
		// 			success: function(result) {
		// 				if(result.sendstatus == 1) {
		// 					ajaxResponse.html(result.message);
		// 					$form.fadeOut(500);
		// 				} else {
		// 					ajaxResponse.html(result.message);
		// 				}
		// 			}
		// 		});
		// 	}
		// });

	});

})(jQuery);