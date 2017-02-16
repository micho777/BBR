window.app.page("contactpage", function() // registering the controller
  {
    // initialize view variables in localscope
    // this is "page ready" code - happens once per app life time.

    // var $firstName = $(this).find('[name="firstName"]');
    // var $lastName = $(this).find('[name="lastName"]');

    // var contactId; // current id of presented contact 

    // $(this).on("click","button.save", function(
    //   // save contact (contactId) using current $firstName $lastName values
    // ));

    // presenter of the view - load data and show: 
    // this function is "page activated" code - it gets called each time the page gets presented 
    return function(params) {
	$(document).ready(function() {
      	var moduleHeroContact = $('.module-hero.contact'),
			mobileTest;

		/* ---------------------------------------------- /*
		 * Mobile detect
		/* ---------------------------------------------- */

		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			mobileTest = true;
		} else {
			mobileTest = false;
		}

	var modulesContact = $('.module-hero, .module, .module-sm, .module-xs, .sidebar');

		modulesContact.each(function() {
			if ($(this).attr('data-background')) {
				$(this).css('background-image', 'url(' + $(this).attr('data-background') + ')');
			}
		});

		/* ---------------------------------------------- /*
		 * Parallax
		/* ---------------------------------------------- */

		if (mobileTest === true) {
			modulesContact.css({'background-attachment': 'scroll'});
		}

		/* ---------------------------------------------- /*
		 * Full height module
		/* ---------------------------------------------- */

		$(window).on('resize', function() {
			if (moduleHeroContact.length > 0) {
				if (moduleHeroContact.hasClass('js-fullheight')) {
					moduleHeroContact.height($(window).height());
				} else {
					moduleHeroContact.height($(window).height() * 0.65);
				}
			}
		}).resize();



/* ---------------------------------------------- /*
		 * Scroll Animation
		/* ---------------------------------------------- */

		$('.anim-scroll.contact').on('click', function(e) {
			var target = this.hash;
			var $target = $(target);
			$('html, body').stop().animate({
				'scrollTop': $target.offset().top
			}, 900, 'swing');
			e.preventDefault();
		});



  });



      // contactId = params; // setting current contactId 
      // var contact = contacts[contactId];
      // // show values 
      // $firstName.val(contact.firstName);
      // $lastName.val(contact.lastName);
      // ...
      window.scrollTo(0,0);
		$('.page-loader.contact').show();
		$('.page-loader.contact').delay(350).fadeOut('slow');



    }
  }); 