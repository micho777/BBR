window.app.page("photographypage", function() // registering the controller
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

	
 var filtersPG = $('#filters.pg'),
			worksgridPG = $('#works-grid.pg');

 				worksgridPG.isotope({
  					// options...
  					layoutMode: 'masonry',
					itemSelector: '.work-item.pg',
					transitionDuration: '0.3s'
				});

		$(window).on('resize', function() {
			worksgridPG.imagesLoaded(function() {
				worksgridPG.isotope('reloadItems');
				worksgridPG.isotope();
			});
		});


	var modulesPG = $('.module-hero, .module, .module-sm, .module-xs, .sidebar');

		var moduleHeroPG = $('.module-hero.pg'),
			mobileTest;


	  function checkFilter(params){
if(params=='moreclicked')
		{

		var filtersHome  = $('#filters.home');
			var curenDataAtt = $('.current', filtersHome).attr('data-filter');

			//if more is clicked than filter the current view with it
			$('.current', filtersPG).removeClass('current');
			$(curenDataAtt+'PG').addClass('current');
			$(curenDataAtt+'PG').click();
		}
		else{
			$('.filters.pg .current').click();
		}
$(window).resize();

	};

function ajaxLoadDefault() {
			$.ajax({
				type: 'GET',
				dataType: 'json',
				url: 'assets/data/portrait.json',
				success: function(data) {
					//var workGrid = document.getElementsByClassName("works-grid")[0];
				var items = data;
				var template = '{{#articles}}<article class="work-item pg {{type}}"> ' +
				'<div class="work-wrapper"><div class="work-thumbnail">'+
				'	<img src="{{src}}" alt=""></div>'+
				'<div class="work-caption">'+
				'<h3 class="work-title font-alt">{{type}}</h3>'+
				'</div></div></article>{{/articles}}'

				var html = Mustache.to_html(template, items);
				$('#works-grid.pg').html(html);
				$(window).resize();
				},

				error: function (jqXHR, textStatus, errorThrown) {

					setTimeout(function() {
						$loadButtonpg.removeClass('ss-loading');
						$loadButtonpg.text(errorText);
					}, 300);

				}
			});
		};

ajaxLoadDefault();
	

	
		$('a', filtersPG).on('click', function() {
			var selector = $(this).attr('data-filter');
			$('.current', filtersPG).removeClass('current');
			$(this).addClass('current');
			worksgridPG.isotope({
				filter: selector
			});
			return false;
		});



/* ---------------------------------------------- /*
		 * Scroll Animation
		/* ---------------------------------------------- */

		$('.anim-scroll.pg').on('click', function(e) {
			var target = this.hash;
			var $target = $(target);
			$('html, body').stop().animate({
				'scrollTop': $target.offset().top
			}, 900, 'swing');
			e.preventDefault();
		});

		/* ---------------------------------------------- /*
		 * Ajax options
		/* ---------------------------------------------- */

		var pageNumber = 0,
			workNumberToload = 5;

		var doneText    = 'Done',
			loadText    = 'More',
			loadingText = 'Loading...',
			errorText   = 'Error! Check the console for more information.';

		/* ---------------------------------------------- /*
		 * Ajax portfolio
		/* ---------------------------------------------- */

		$('#show-more.pg').on('click', function() {
			$(this).text(loadingText);

			setTimeout(function() {
				ajaxLoad(workNumberToload, pageNumber);
			}, 300);

			pageNumber++;

			return false;
		});


		function ajaxLoad(workNumberToload, pageNumber) {
			var $loadButtonpg = $('#show-more.pg');
			var dataString = 'numPosts=' + workNumberToload + '&pageNumber=' + pageNumber;

			$.ajax({
				type: 'GET',
				dataType: 'json',
				url: 'assets/data/morepic.json',
				success: function(data) {
						var moreItems = data;
				
				var template = '{{#articles}}<article class="work-item pg work-itempg {{type}}"> ' +
				'<div class="work-wrapper"><div class="work-thumbnail">'+
				'	<img src="{{src}}" alt=""></div>'+
				'<div class="work-caption">'+
				'<h3 class="work-title font-alt">{{type}}</h3>'+
				'</div></div></article>{{/articles}}'
			
				var moreHtml = Mustache.to_html(template, moreItems);
		var $moreHtml = $(moreHtml);

					// var selectorFilter = $('.current', filtersPG).attr('data-filter');
					
					var findClass=".work-itempg";
				// if(selectorFilter != "*"){
				// findClass += selectorFilter;
				// }
					// var $data = $(data);
					// var start_index = (pageNumber - 1) * workNumberToload;
					// var end_index = + start_index + workNumberToload;
					var $jmoreHtml= $("<div class='morewarapper'> </div>");
					 $jmoreHtml.append($moreHtml);


					if ($jmoreHtml.find(findClass)) {
						var work =$jmoreHtml.find(findClass);
						
						
						worksgridPG.append(work).isotope('appended', work).resize();

						setTimeout(function() {
							$loadButtonpg.text(loadText);
						}, 300);
					} 
					
						setTimeout(function() {
							$loadButtonpg.text(doneText);
						}, 300);

						setTimeout(function () {
							$('#show-more.pg').animate({
								opacity: 0,
							}).css('display', 'none');
						}, 1500);
					
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

    // presenter of the view - load data and show: 
    // this function is "page activated" code - it gets called each time the page gets presented 
    return function(params) {

      $(document).ready(function() {

		checkFilter(params);
      

		/* ---------------------------------------------- /*
		 * Mobile detect
		/* ---------------------------------------------- */

		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			mobileTest = true;
		} else {
			mobileTest = false;
		}


		modulesPG.each(function() {
			if ($(this).attr('data-background')) {
				$(this).css('background-image', 'url(' + $(this).attr('data-background') + ')');
			}
		});

   
		/* ---------------------------------------------- /*
		 * Parallax
		/* ---------------------------------------------- */

		if (mobileTest === true) {
			modulesPG.css({'background-attachment': 'scroll'});
		}


      // contactId = params; // setting current contactId 
      // var contact = contacts[contactId];
      // // show values 
      // $firstName.val(contact.firstName);
      // $lastName.val(contact.lastName);
      // ...
      window.scrollTo(0,0);
		$('.page-loader').show();
      
		$('.page-loader').delay(2000).fadeOut('slow');


    })
	   }
	
  });
   
  