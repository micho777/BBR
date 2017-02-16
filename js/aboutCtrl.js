window.app.page("aboutmepage", function() // registering the controller
  {
    // initialize view variables in localscope
    // this is "page ready" code - happens once per app life time.
      console.log("about me one time");

    // var $firstName = $(this).find('[name="firstName"]');
    // var $lastName = $(this).find('[name="lastName"]');

    // var contactId; // current id of presented contact 

    // $(this).on("click","button.save", function(
    //   // save contact (contactId) using current $firstName $lastName values
    // ));


    // presenter of the view - load data and show: 
    // this function is "page activated" code - it gets called each time the page gets presented 
    return function(params) {
      // contactId = params; // setting current contactId 
      // var contact = contacts[contactId];
      // // show values 
      // $firstName.val(contact.firstName);
      // $lastName.val(contact.lastName);
      // ...
      console.log("about me each time");
            window.scrollTo(0,0);

		$('.page-loader.about').show();
      
		$('.page-loader.about').delay(350).fadeOut('slow');


$(document).ready(function() {

		var moduleHeroAbout = $('.module-hero.about'),
			mobileTest;

		/* ---------------------------------------------- /*
		 * Mobile detect
		/* ---------------------------------------------- */

		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			mobileTest = true;
		} else {
			mobileTest = false;
		}

		/* ---------------------------------------------- /*
		 * Full height module
		/* ---------------------------------------------- */

	 $(window).on('resize', function() {
			if (moduleHeroAbout.length > 0) {
				if (moduleHeroAbout.hasClass('js-fullheight')) {
					moduleHeroAbout.height($(window).height());
				} else {
					moduleHeroAbout.height($(window).height() * 0.70);
				}
			}
		}).resize();

	

		/* ---------------------------------------------- /*
		 * Setting background of modules
		/* ---------------------------------------------- */

		var modulesAbout = $('.module-hero, .module, .module-sm, .module-xs, .sidebar');

		modulesAbout.each(function() {
			if ($(this).attr('data-background')) {
				$(this).css('background-image', 'url(' + $(this).attr('data-background') + ')');
			}
		});

		/* ---------------------------------------------- /*
		 * Parallax
		/* ---------------------------------------------- */

		if (mobileTest === true) {
			modulesAbout.css({'background-attachment': 'scroll'});
		}

	
		
		/* ---------------------------------------------- /*
		 * Team hover
		/* ---------------------------------------------- */

		var team_itemAbout = $('.team-item.about');

		team_itemAbout.mouseenter(function(){
			$(this).addClass('js-hovered');
			team_itemAbout.filter(':not(.js-hovered)').addClass('js-fade');
		});

		team_itemAbout.mouseleave(function(){
			$(this).removeClass('js-hovered');
			team_itemAbout.removeClass('js-fade');
		});

		/* ---------------------------------------------- /*
		 * Owl sliders
		/* ---------------------------------------------- */

	

		$('.slider-reviews.about').owlCarousel({
			stopOnHover:     !0,
			singleItem:      !0,
			autoHeight:      !0,
			slideSpeed:      400,
			navigation:      !0,
			pagination:      !1,
			paginationSpeed: 1000,
			goToFirstSpeed:  2000,
			autoPlay:        3000,
			navigationText: [
				'<img src="assets/images/arrow-l.png" alt="arrow">',
				'<img src="assets/images/arrow-r.png" alt="arrow">'
			],
		});

		$('.slider-clients.about').owlCarousel({
			stopOnHover:     !0,
			singleItem:      !1,
			autoHeight:      !0,
			navigation:      !1,
			pagination:      !1,
			slideSpeed:      400,
			paginationSpeed: 1000,
			goToFirstSpeed:  2000,
			autoPlay:        3000,
			navigationText: [
				'<i class="fa fa-angle-left"></i>',
				'<i class="fa fa-angle-right"></i>'
			],
		});


	});

    }
  }); 