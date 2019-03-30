(function($, undefined){
    $(function(){

		//fixed menu
		 var headerH = $("#daHeader").height(),
		        navH = $("#daNav").innerHeight();

		    $(document).on("scroll", function() {

		        var documentScroll = $(this).scrollTop();

		        if(documentScroll > headerH) {
		            $("#daNav").addClass("da-fixed");

		            $("#daHeader").css({
		                "paddingTop": navH
		            });
		        } else {
		            $("#daNav").removeClass("da-fixed");
		            $("#daHeader").removeAttr("style");
		        }

		});

		//slick
		$('.slick-sliders').slick({
	      dots: false,
	      arrows: true,
		  infinite: true,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  fade: true,
		  autoplay: true,
		  autoplaySpeed: 10000,
		  nextArrow: '<button class="da-next" aria-hidden="true"><img src="images/brands-left.png"></button>',
          prevArrow: '<button class="da-prev" aria-hidden="true"><img src="images/brands-right.png"></button>',
		  
		});

		//slick-reviews
		$('.slick-reviews').slick({
	      dots: true,
	      arrows: false,
		  infinite: true,
		  slidesToShow: 2,
		  slidesToScroll: 1,
		  autoplay: true,
		  autoplaySpeed: 10000,
			  responsive: [
			    
			    {
			      breakpoint: 992,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1,
			        infinite: true,
			      }
			    },
			     {
			      breakpoint: 768,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1,
			        infinite: true,
			      }
			    },

			  ]
		  
		});

		// anchors
		 $(".idLink a").on("click", function(event) {

		        event.preventDefault();

		        var currentBlock = $(this).attr("href"),
		            currentBlockOffset = $(currentBlock).offset().top;

		        $("html, body").animate({
		            scrollTop: currentBlockOffset - 65
		        }, 500);

		});

		// menu
		$('.da-menu__icon').on('click', function() {
	      $(this).closest('.da-menu__wrap')
	        .toggleClass('menu_state_open');
	    });

		// modalCall
		$('.link-call').click( function(event){
			event.preventDefault();
			$('.overlay').fadeIn(200,
			 	function(){
					$('#modalCall')
						.css('display', 'block')
						.animate({opacity: 1, top: '50%'}, 400);
			});
		});

		// modalBid
		$('.link-bid').click( function(event){
			event.preventDefault();
			$('.overlay').fadeIn(200,
			 	function(){
					$('#modalBid')
						.css('display', 'block')
						.animate({opacity: 1, top: '50%'}, 400);
			});
		});

		// modalEvent
		$('.link-event').click( function(event){
			event.preventDefault();
			$('.overlay').fadeIn(200,
			 	function(){
					$('#modalEvent')
						.css('display', 'block')
						.animate({opacity: 1, top: '50%'}, 400);
			});
		});
		
		// modalCalendar
		$('.link-calendar').click( function(event){
			event.preventDefault();
			$('.overlay').fadeIn(200,
			 	function(){
					$('#modalCalendar')
						.css('display', 'block')
						.animate({opacity: 1, top: '50%'}, 400);
			});
		});

		$('.modal-close, .overlay').click( function(){
			$('#modalCall, #modalBid, #thanks, #modalCalendar, #modalEvent').animate({opacity: 0, top: '40%'}, 400,
					function(){
						$(this).css('display', 'none');
						$('.overlay').fadeOut(200);
					}
			);
		});


    	//mail
	    $("#form, #formCall, #formBid, #formEvent").submit(function() {
	    $.ajax({
	      type: "POST",
	      url: "mail.php",
	      data: $(this).serialize()
	    }).done(function() {
	      $(this).find("input").val("");

	      $('#modalCall, #modalBid, #modalEvent').css('display', 'none');
	      $('#thanks')
				.css('display', 'block')
				.animate({opacity: 1, top: '50%'}, 400);

	      $("#form, #formCall, #formBid, #formEvent").trigger("reset");

	    });
	    return false;
	    });

	    //maskedinput 
	    $(".maskedinput").mask("+7(999) 999-9999");

		// button-top
	    $(window).scroll(function() {

	        if($(this).scrollTop() != 0) {
	        $('#buttonTop').fadeIn();
	        } else {
	        $('#buttonTop').fadeOut();
	        }
	        });
	        $('#buttonTop').click(function() {
	        $('body,html').animate({scrollTop:0},800);
	    });
		
		
    });
})(jQuery);
