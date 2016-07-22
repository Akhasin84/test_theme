$( document ).ready(function() {

	///heart click
	// put display:none in css
	var like__counter = 0;
	$('.galery').on('dblclick', function(e){
		e.preventDefault();
		like__counter++
		$('#like').children('.show_info').children('.info_number').text(like__counter);
		$('#like').children('.show_info').children('.info_number').show();
	});

	// amount block counter
	$('.plus').on('click', function(e){
		e.preventDefault();
		var cart__counter = $('.amount').children('span').text();
		cart__counter++
		$('.amount').children('span').text(cart__counter);
	});
	$('.minus').on('click', function(e){
		e.preventDefault();
		var cart__counter = $('.amount').children('span').text();
		cart__counter--
		$('.amount').children('span').text(cart__counter);
	});

	//custom color select
	$('.color_select').on('change', function(){
		if ($(this).val() == 'grey'){
			$('.color_ball').css({'background': '#585d61'});
		} if ($(this).val() == 'blue') {
			$('.color_ball').css({'background': '#000c97'});
		} if ($(this).val() == 'red') {
			$('.color_ball').css({'background': '#9e0000'});
		}
	});

	///shoping cart add click
	// put display:none in css
	$('#add_cart').on('click', function(){
		var cart__counter = $('.amount').children('span').text();
		$('#shop').children('.show_info').children('.info_number').text(cart__counter);
		$('#shop').children('.show_info').children('.info_number').show();
	});	

	///galery swithcher
	$('.galery__select__pic').on('click', function(e){
		e.preventDefault();
		var ident = $(this).data('show');
		var showImage = $('.galery').children('#'+ident);
		showImage.css({'display':'block'});
		showImage.siblings('.item_big_pic').css({'display':'none'});
	})

	//TABS
	$('.label_for').on('click', function(e){
		e.preventDefault();
		var ident_tab = $(this).data('label');
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
		var showTab = $('.tabs__block__bloks').children('#'+ident_tab)
		showTab.addClass('active');
		showTab.siblings().removeClass('active');
	});


	//SLIDER
	$('.right_arrow').on('click', function(e){
		e.preventDefault();
		var slider__width = $('.inner__slider__wrapper').width();
		var stop_point = $('.slider__content').width();
		var qant = $('.slider_inline').length;
		if (slider__width < (stop_point*qant)){
			$('.inner__slider__wrapper').animate({'margin-left': (slider__width*-1)+'px'});
		};	
	});
	$('.left_arrow').on('click', function(e){
		e.preventDefault();
		var slider__width = $('.slider__content').width();
		var reverse = $('.inner__slider__wrapper').css('margin-left');
		if ((parseInt(reverse)) < 0){
			$('.inner__slider__wrapper').animate({'margin-left': ((parseInt(reverse))+slider__width)+'px'});
		};
	});



});


















