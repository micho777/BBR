window.app.page("homepage", function() // registering the controller
  {
  // initialize view variables in localscope
    // this is "page ready" code - happens once per app life time.

    // var $firstName = $(this).find('[name="firstName"]');
    // var $lastName = $(this).find('[name="lastName"]');

    // var contactId; // current id of presented contact 

    // $(this).on("click","button.save", function(
    //   // save contact (contactId) using current $firstName $lastName values
    // ));



var filtersHome = $('#filters.home'),
			sliderContainer = $('#sliderContainerHome');

				var modulesHome = $('.module-hero, .module, .module-sm, .module-xs, .sidebar');

	  var moduleHero = $('.module-hero.home'),
			mobileTest;

  
var worksgridHome = $('#works-grid.home');


	/* ---------------------------------------------- /*
		 * Portfolio
		/* ---------------------------------------------- */

		$('.anim-scrollhome').on('click', function(e) {
			var target = this.hash;
			var $target = $(target);
			$('html, body').stop().animate({
				'scrollTop': $target.offset().top
			}, 900, 'swing');
			e.preventDefault();
		});

//for the more button within the slider
		$('a', filtersHome).on('click', function() {
			var selector = $(this).attr('data-filter');
			$('.current', filtersHome).removeClass('current');
			$(this).addClass('current');
			worksgridHome.isotope({
				filter: selector
			});
			return false;
		});


	$('a', sliderContainer).on('click', function() {
			var selector = $(this).attr('data-filter');
			$('.current', filtersHome).removeClass('current');
			$(selector+'Home').addClass('current');
			worksgridHome.isotope({
				filter: selector
			});
			return false;
		});
		


		/* ---------------------------------------------- /*
		 * Scroll Animation
		/* ---------------------------------------------- */
		$('#moreHomeClicked').on('click',function(){
window.app("photographypage", curenDataAtt)

		});

	
			
		worksgridHome.isotope({
					layoutMode: 'masonry',
					itemSelector: '.work-item.home',
					transitionDuration: '0.3s'
				});

		$(window).on('resize', function() {
			worksgridHome.imagesLoaded(function() {
				
				worksgridHome.isotope('reloadItems');
				worksgridHome.isotope();
				$('.filters.home .current').click();

			});
		});

		function ajaxLoadDefault() {
			$.ajax({
				type: 'GET',
				dataType: 'json',
				url: 'assets/data/portrait.json',
				success: function(data) {
					// var workGrid = document.getElementsByClassName("works-grid")[0];
				var items = data;
				var template = '{{#articles}}<article class="work-item home {{type}}"> ' +
				'<div class="work-wrapper"><div class="work-thumbnail">'+
				'	<img src="{{src}}" alt=""></div>'+
				'<div class="work-caption">'+
				'<h3 class="work-title font-alt">{{type}}</h3>'+
				'</div></div></article>{{/articles}}'

				var html = Mustache.to_html(template, items);
				$('#works-grid.home').html(html);

				$(window).resize();
				},

				error: function (jqXHR, textStatus, errorThrown) {
					console.log(jqXHR + " :: " + textStatus + " :: " + errorThrown);

					setTimeout(function() {
						$loadButtonpg.removeClass('ss-loading');
						$loadButtonpg.text(errorText);
					}, 300);

				}
			});
			
		};
		ajaxLoadDefault();

	
		/* ---------------------------------------------- /*
		 * Setting background of modules
		/* ---------------------------------------------- */


		modulesHome.each(function() {
			if ($(this).attr('data-background')) {
				$(this).css('background-image', 'url(' + $(this).attr('data-background') + ')');
			}
		});


/* ---------------------------------------------- /*
		 * Intro slider setup
		/* ---------------------------------------------- */

		$('#slides').superslides({
			play: 10000,
			animation: 'fade',
			animation_speed: 800,
			pagination: true,
			inherit_width_from:".module-hero.home"
		});
		
    // presenter of the view - load data and show: 
    // this function is "page activated" code - it gets called each time the page gets presented 
    return function(params) {
		
      // contactId = params; // setting current contactId 
      // var contact = contacts[contactId];
      // // show values 
      // $firstName.val(contact.firstName);
      // $lastName.val(contact.lastName);
      // ...
      window.scrollTo(0,0);
		$('.page-loader').show();
      
		$('.page-loader').delay(350).fadeOut('slow');


//from Custom

$(document).ready(function() {
	
		$(window).resize();
	
$('#slides').superslides('start')
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

		// 	$(window).on('resize', function() {
		// 	worksgridHome.imagesLoaded(function() {
		// 		worksgridHome.isotope({
		// 			layoutMode: 'masonry',
		// 			itemSelector: '.work-item',
		// 			transitionDuration: '0.3s'
		// 		});

		// 	});
		// }).resize();

	

		/* ---------------------------------------------- /*
		 * Parallax
		/* ---------------------------------------------- */

		if (mobileTest === true) {
			modulesHome.css({'background-attachment': 'scroll'});
		}
 }); 
 
			
    }
	
  });