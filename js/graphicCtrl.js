window.app.page("graphicdesignpage", function() // registering the controller
  {
    // initialize view variables in localscope
    // this is "page ready" code - happens once per app life time.

    // var $firstName = $(this).find('[name="firstName"]');
    // var $lastName = $(this).find('[name="lastName"]');

    // var contactId; // current id of presented contact 

    // $(this).on("click","button.save", function(
    //   // save contact (contactId) using current $firstName $lastName values
    // ));

	/* ---------------------------------------------- /*
		 * Full height module
		/* ---------------------------------------------- */

	
 var filtersGD = $('#filters.gd'),
			worksgridGD = $('#works-grid.gd');

 				worksgridGD.isotope({
  					// options...
  					layoutMode: 'masonry',
					itemSelector: '.work-item.gd',
					transitionDuration: '0.3s'
				});

		$(window).on('resize', function() {
			worksgridGD.imagesLoaded(function() {
				worksgridGD.isotope('reloadItems');
				worksgridGD.isotope();
			});
		});


	var modulesGD = $('.module-hero, .module, .module-sm, .module-xs, .sidebar');

		var moduleHeroGD = $('.module-hero.gd'),
			mobileTest;



function ajaxLoadDefault() {
			$.ajax({
				type: 'GET',
				dataType: 'json',
				url: 'assets/data/graphicdesign.json',
				success: function(data) {
					//var workGrid = document.getElementsByClassName("works-grid")[0];
				var items = data;
				var template = '{{#articles}}<article class="work-item gd {{type}}"> ' +
				'<div class="work-wrapper"><div class="work-thumbnail">'+
				'	<img src="{{src}}" alt=""></div>'+
				'<div class="work-caption">'+
				'<h3 class="work-title font-alt">{{type}}</h3>'+
				'</div></div></article>{{/articles}}'

				var html = Mustache.to_html(template, items);
				$('#works-grid.gd').html(html);

				$(window).resize();
				},

				error: function (jqXHR, textStatus, errorThrown) {

					setTimeout(function() {
						$loadButtongd.removeClass('ss-loading');
						$loadButtongd.text(errorText);
					}, 300);

				}
			});
		};

ajaxLoadDefault();
	


/* ---------------------------------------------- /*
		 * Scroll Animation
		/* ---------------------------------------------- */

		$('.anim-scroll.gd').on('click', function(e) {
			var target = this.hash;
			var $target = $(target);
			$('html, body').stop().animate({
				'scrollTop': $target.offset().top
			}, 900, 'swing');
			e.preventDefault();
		});


    // presenter of the view - load data and show: 
    // this function is "page activated" code - it gets called each time the page gets presented 
    return function() {

      $(document).ready(function() {

		/* ---------------------------------------------- /*
		 * Mobile detect
		/* ---------------------------------------------- */

		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			mobileTest = true;
		} else {
			mobileTest = false;
		}


		modulesGD.each(function() {
			if ($(this).attr('data-background')) {
				$(this).css('background-image', 'url(' + $(this).attr('data-background') + ')');
			}
		});

   

		/* ---------------------------------------------- /*
		 * Parallax
		/* ---------------------------------------------- */

		if (mobileTest === true) {
			modulesGD.css({'background-attachment': 'scroll'});
		}


      // contactId = params; // setting current contactId 
      // var contact = contacts[contactId];
      // // show values 
      // $firstName.val(contact.firstName);
      // $lastName.val(contact.lastName);
      // ...
      window.scrollTo(0,0);
		$('.page-loader').show();
      
		$('.page-loader').delay(350).fadeOut('slow');


    })
	   }
	
  });
   
  