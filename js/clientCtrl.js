window.app.page("clientspage", function() // registering the controller
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
      	var moduleHeroClient = $('.module-hero.client'),
			mobileTest;

		/* ---------------------------------------------- /*
		 * Mobile detect
		/* ---------------------------------------------- */

		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			mobileTest = true;
		} else {
			mobileTest = false;
		}

	var modulesClient = $('.module-hero, .module, .module-sm, .module-xs, .sidebar');

		modulesClient.each(function() {
			if ($(this).attr('data-background')) {
				$(this).css('background-image', 'url(' + $(this).attr('data-background') + ')');
			}
		});

    var filtersClient = $('#filters.client'),
			worksgridClient = $('#works-grid.client');

		$('a', filtersClient).on('click', function() {
			var selector = $(this).attr('data-filter');
			$('.current', filtersClient).removeClass('current');
			$(this).addClass('current');
			worksgridClient.isotope({
				filter: selector
			});
			return false;
		});

		$(window).on('resize', function() {
			worksgridClient.imagesLoaded(function() {
				worksgridClient.isotope({
					layoutMode: 'masonry',
					itemSelector: '.work-item',
					transitionDuration: '0.3s',
				});
			});
		}).resize();

		/* ---------------------------------------------- /*
		 * Parallax
		/* ---------------------------------------------- */

		if (mobileTest === true) {
			modulesClient.css({'background-attachment': 'scroll'});
		}





/* ---------------------------------------------- /*
		 * Scroll Animation
		/* ---------------------------------------------- */

		$('.anim-scroll.client').on('click', function(e) {
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
		$('.page-loader').show();
      
		$('.page-loader').delay(2000).fadeOut('slow');


    }
  }); 