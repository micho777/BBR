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

		function ajaxLoadDefault() {
			$.ajax({
				type: 'GET',
				dataType: 'json',
				url: 'assets/data/portrait.json',
				success: function(data) {
					var workGrid = document.getElementsByClassName("works-grid")[0];
var items = data;
console.log(items);
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
console.log("images loaded successfully");
			
		}
		ajaxLoadDefault();
		
console.log("page ready");
	
console.log("finish page loaded");
	
    // presenter of the view - load data and show: 
    // this function is "page activated" code - it gets called each time the page gets presented 
    return function(params) {
console.log("page activation code");
		
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
var worksgridHome = $('#works-grid.home');
	
		var moduleHero = $('.module-hero.home'),
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
			worksgridHome.imagesLoaded(function() {
				console.log("images loaded");
				console.log(worksgridHome);
				worksgridHome.isotope({
					layoutMode: 'masonry',
					itemSelector: '.work-item',
					transitionDuration: '0.3s'
				});

			});
		}).resize();

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

		/* ---------------------------------------------- /*
		 * Setting background of modules
		/* ---------------------------------------------- */

		var modulesHome = $('.module-hero, .module, .module-sm, .module-xs, .sidebar');

		modulesHome.each(function() {
			if ($(this).attr('data-background')) {
				$(this).css('background-image', 'url(' + $(this).attr('data-background') + ')');
			}
		});

		/* ---------------------------------------------- /*
		 * Parallax
		/* ---------------------------------------------- */

		if (mobileTest === true) {
			modulesHome.css({'background-attachment': 'scroll'});
		}

		$('.anim-scrollhome').on('click', function(e) {
			var target = this.hash;
			var $target = $(target);
			$('html, body').stop().animate({
				'scrollTop': $target.offset().top
			}, 900, 'swing');
			e.preventDefault();
		});

		/* ---------------------------------------------- /*
		 * Portfolio
		/* ---------------------------------------------- */

		var filtersHome   = $('#filters.home'),
			sliderContainer = $('#sliderContainerHome');

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
			console.log(selector);
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
			console.log(curenDataAtt);
window.app("photographypage", curenDataAtt)

		});
	
 }); 
 
			
    }
	
  });