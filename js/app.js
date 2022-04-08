$(document).ready(function(){AOS.init({duration:1000,offset:80,once:true});gsap.registerPlugin(ScrollTrigger);setTimeout(function(){ScrollTrigger.refresh()},500);/* - - - - - - - - - - - - - -       init inputmask       - - - - - - - - - - - - - - - */// $( '[type="tel"]' ).inputmask( '+38 (999) 999 99 99' );
/* - - - - - - - - - - - - - -       init css animate       - - - - - - - - - - - - - - - */// function isScrolledIntoView( elem ) {
// 	const top = $( window ).scrollTop();
// 	const viewBottom = top + $( window ).innerHeight();
// 	const elemTop = $( elem ).offset().top;
// 	const elemBottom = elemTop + $( elem ).innerHeight();
// 	return elemBottom <= viewBottom && elemTop >= top;
// }
// $( window ).on( 'load scroll', function() {
// 	$( '[data-animate]' ).each( function() {
// 		if ( isScrolledIntoView( this ) ) {
// 			// $( this ).addClass( 'animate__' + $( this ).attr( 'data-animate' ) );
// 			$( this ).css( 'animation-name', $( this ).attr( 'data-animate' ) );
// 		}
// 	});
// });
/* - - - - - - - - - - - - - -       scroll to       - - - - - - - - - - - - - - - */if(window.location.hash!==''){var count=1;if(window.matchMedia('(max-width: 767px)').matches){count=2}for(var i=0;i<count;i++){setTimeout(function(){var addTop=0;if(parseInt($(window.location.hash).css('padding-top'))===0){addTop=$('.header').innerHeight()}else{if(window.matchMedia('(max-width: 767px)').matches){addTop=$('.header').innerHeight()/2}}var posTop=$(window.location.hash).offset().top-addTop;$('html, body').animate({'scrollTop':posTop+'px'},200)},i*400+100)}}$(document).on('click','.js-scroll-to',function(e){if(window.location.pathname==='/'){e.preventDefault()}// else {
// 	window.location.href = window.location.origin;
// }
var link=$(this).attr('href');if(link.charAt(0)==='/'){link=link.slice(1,link.length)}if($(link).length){var addTop=0;if(parseInt($(link).css('padding-top'))===0){addTop=$('.header').innerHeight()}else{if(window.matchMedia('(max-width: 767px)').matches){addTop=$('.header').innerHeight()/2}}var posTop=$(link).offset().top-addTop;$('html, body').animate({'scrollTop':posTop+'px'},100);if(window.matchMedia('(max-width: 1199px)').matches){$('.menu-toggle').removeClass('active');$('.header-modal').removeClass('show')}}});/* - - - - - - - - - - - - - -       rebuild header       - - - - - - - - - - - - - - - */function rebuildHeader(){var $button=$('.header-button').detach();var $lang=$('.lang').detach();if(window.matchMedia('(max-width: 1199px)').matches){$('.header-modal').append($lang);$('.header-modal').append($button)}else{$('.header-right').prepend($button);$('.header-right').prepend($lang)}}rebuildHeader();$(window).on('resize',function(){rebuildHeader()});/* - - - - - - - - - - - - - -       fixed header       - - - - - - - - - - - - - - - */function fixedHeader(){var top=$(window).scrollTop();if(top>0){$('.header').addClass('fixed')}else{$('.header').removeClass('fixed')}}fixedHeader();$(window).on('scroll',function(){fixedHeader()});setTimeout(function(){$('.header').css('transform','none')},1000);/* - - - - - - - - - - - - - -       menu toggle       - - - - - - - - - - - - - - - */$(document).on('click','.menu-toggle',function(){var $this=$(this);if(!$this.hasClass('active')){$this.addClass('active');$('.header-modal').addClass('show')}else{$this.removeClass('active');$('.header-modal').removeClass('show')}});/* - - - - - - - - - - - - - -       submenu toggle       - - - - - - - - - - - - - - - */$(document).on('click','.top-menu .icon, .top-menu li span:not(.icon)',function(){if(window.matchMedia('(max-width: 1199px)').matches){var $parent=$(this).closest('li');if(!$parent.hasClass('show')){$parent.addClass('show');$parent.find('ul').slideDown(300)}else{$parent.removeClass('show');$parent.find('ul').slideUp(300)}}});$(window).on('resize',function(){if(window.matchMedia('(min-width: 1200px)').matches){$('.top-menu li').removeClass('show');$('.top-menu ul').css('display','')}});/* - - - - - - - - - - - - - -       lang toggle       - - - - - - - - - - - - - - - */$(document).on('click','.lang-title',function(){if(window.matchMedia('(max-width: 1199px)').matches){var $parent=$(this).closest('.lang');if(!$parent.hasClass('show')){$parent.addClass('show')}else{$parent.removeClass('show')}$(document).click(function(e){if($(e.target).closest('.lang').length){return}$('.lang').removeClass('show')})}});$(window).on('resize',function(){if(window.matchMedia('(min-width: 1200px)').matches){$('.lang').removeClass('show')}});/* - - - - - - - - - - - - - -       modal show       - - - - - - - - - - - - - - - */$(document).on('click','.js-modal',function(e){e.preventDefault();$('.header-modal').removeClass('show');$('.menu-toggle').removeClass('active');$('.modal').removeClass('show');var $this=$(this),$modal=$($this.attr('href'));if($modal.length){$modal.addClass('show')}});$(document).on('click','.modal-close',function(){$('.modal').removeClass('show')});/* - - - - - - - - - - - - - -       account toggle       - - - - - - - - - - - - - - - */// $( document ).on( 'click', '.js-account', function( e ) {
// 	e.preventDefault();
// 	if ( window.matchMedia( '(max-width: 1199px)' ).matches ) {
// 		const $parent = $( this ).closest( '.header-account' );
// 		$parent.toggleClass( 'show' );
// 	}
// });
/* - - - - - - - - - - - - - -       first card sign up toggle       - - - - - - - - - - - - - - - */$(document).on('click','.js-first-card-modal',function(e){e.preventDefault();if(window.matchMedia('(max-width: 1199px)').matches){var $parent=$(this).closest('.first-card__box-button');$parent.toggleClass('show')}});$(window).on('resize',function(){if(window.matchMedia('(min-width: 1200px)').matches){$('.first-card__box-button').toggleClass('show')}});$(document).click(function(e){if($(e.target).closest('.first-card__box-button').length){return}$('.first-card__box-button').removeClass('show')});/* - - - - - - - - - - - - - -       rebuild partners       - - - - - - - - - - - - - - - */function rebuildPartners(){$('.partners-box').each(function(){var $this=$(this),$parent=$this.closest('.partners-group'),$partnersBox=$this.detach();if(window.matchMedia('(max-width: 767px)').matches){$parent.find('.partners-tabs__box[data-tab="'+$this.attr('data-tab')+'"]').after($partnersBox)}else{$parent.find('.partners-content').append($partnersBox)}var $partnersInfo=$this.find('.partners-box__info').detach();if(window.matchMedia('(max-width: 991px)').matches){$this.find('.partners-box__desc').after($partnersInfo)}else{$this.find('.partners-box__head').prepend($partnersInfo)}})}if($('.partners-box').length){rebuildPartners();$(window).on('resize',function(){rebuildPartners()})}/* - - - - - - - - - - - - - -       set position progress step       - - - - - - - - - - - - - - - */function setPositionProgressStep(){$('.partners-box__progress').each(function(){var $progress=$(this),count=$progress.find('.partners-box__progress-step').length;$progress.find('.partners-box__progress-step').each(function(){var $progressStep=$(this),index=$progressStep.index();if(count%2){if(index<Math.floor(count/2)){$progressStep.addClass('step-left')}else if(index>Math.floor(count/2)){$progressStep.addClass('step-right')}else{$progressStep.addClass('step-center')}}else{if(index<count/2){$progressStep.addClass('step-left')}else if(index>count/2){$progressStep.addClass('step-right')}}})})}if($('.partners-box__progress').length){setPositionProgressStep()}/* - - - - - - - - - - - - - -       set parents progress       - - - - - - - - - - - - - - - */function setParentsProgress(){$('.partners-box__progress-tip').each(function(){var $this=$(this),$parent=$this.closest('.partners-box__progress'),step=$this.attr('data-step'),$currentStep=$parent.find('.partners-box__progress-step[data-step="'+step+'"]'),$currentPoint=$currentStep.find('.partners-box__progress-point'),index=$currentStep.index();if($parent.innerWidth()>0){var posLeft=$currentStep.position().left+$currentStep.innerWidth()/2,displacement=($currentStep.innerWidth()-35)/2;if($currentStep.hasClass('step-left')){posLeft=posLeft-displacement}if($currentStep.hasClass('step-right')){posLeft=posLeft+displacement}setTimeout(function(){$this.css('left',posLeft+'px');$parent.find('.partners-box__progress-step').removeClass('active current');$parent.find('.partners-box__progress-step').each(function(){if($(this).index()<index){$(this).addClass('active')}if($(this).index()===index){$(this).addClass('current')}})},100)}else{$('.partners-box__progress-step').removeClass('active current');$this.css('left',35/2+'px')}})}if($('.partners-box__progress').length){if(window.matchMedia('(max-width: 767px)').matches){setTimeout(setParentsProgress,400)}else{setParentsProgress()}$(window).on('resize',function(){if(window.matchMedia('(max-width: 767px)').matches){setTimeout(setParentsProgress,100)}else{setParentsProgress()}})}$(document).on('click','.partners-box__progress-point',function(){var $this=$(this),$progresStep=$this.closest('.partners-box__progress-step'),$progresBar=$this.closest('.partners-box__progress'),$progresTip=$progresBar.find('.partners-box__progress-tip');$progresTip.attr('data-step',$progresStep.attr('data-step'));setParentsProgress(100);setTimeout(function(){$progresTip.text($progresStep.attr('data-percent'))},300)});/* - - - - - - - - - - - - - -       parents tabs       - - - - - - - - - - - - - - - */$(document).on('click','.partners-tabs__box',function(){var $this=$(this),$parent=$this.closest('.partners-tabs');if(!$this.hasClass('active')){$parent.find('.partners-tabs__box').removeClass('active');$this.addClass('active');$('.partners-box').removeClass('show');$('.partners-box[data-tab="'+$this.attr('data-tab')+'"]').addClass('show');$('.partners-box__title, .partners-box__text').css({'opacity':'','transform':''});setTimeout(function(){$('.partners-box[data-tab="'+$this.attr('data-tab')+'"]').find('.partners-box__title').css({'opacity':1,'transform':'translateY(0)'})},100);setTimeout(function(){$('.partners-box[data-tab="'+$this.attr('data-tab')+'"]').find('.partners-box__text').css({'opacity':0.7,'transform':'translateY(0)'})},200);if(window.matchMedia('(max-width: 767px)').matches){$('.partners-box').slideUp(500);$('.partners-box[data-tab="'+$this.attr('data-tab')+'"]').slideDown(500);setTimeout(setParentsProgress,600);setTimeout(function(){ScrollTrigger.refresh()},500)}else{setParentsProgress()}}});function shopPartnersMobile(){if(window.matchMedia('(max-width: 767px)').matches){$('.partners-box').each(function(){var $this=$(this);if($this.hasClass('show')&&$this.css('display')==='none'){$this.slideDown(300);setTimeout(function(){ScrollTrigger.refresh()},300)}})}}if($('.partners-box').length){setTimeout(function(){$('.partners-box.show .partners-box__title').css({'opacity':1,'transform':'translateY(0)'})},100);setTimeout(function(){$('.partners-box.show .partners-box__text').css({'opacity':0.7,'transform':'translateY(0)'})},200);shopPartnersMobile();$(window).on('resize',function(){shopPartnersMobile()})}$(window).on('resize',function(){if(window.matchMedia('(min-width: 768px)').matches){$('.partners-box').css('display','')}});/* - - - - - - - - - - - - - -       init advantages slider       - - - - - - - - - - - - - - - */// const sliderAdvantage = $( '.js-advantages-slider' ).slick({
// 	infinite: false,
// 	arrows: false,
// 	dots: false,
// 	cssEase: 'linear',
// 	speed: 500,
// 	slidesToShow: 3,
// 	slidesToScroll: 1,
// 	swipeToSlide: true,
// 	responsive: [
// 		{
// 			breakpoint: 1200,
// 			settings: {
// 				slidesToShow: 2
// 			}
// 		},
// 		{
// 			breakpoint: 680,
// 			settings: {
// 				slidesToShow: 1
// 			}
// 		}
// 	]
// });
// function mouseWheelHandler( e ) {
// 	const $advantage = document.querySelector( '.advantages-slider' );
// 	const windowCenter = window.scrollY + window.innerHeight / 2;
// 	const advantageCenter = $advantage.getBoundingClientRect().top + window.scrollY + $advantage.offsetHeight / 2;
// 	// console.log(sliderAdvantage[0].slick)
// 	console.log( 'windowCenter', windowCenter );
// 	console.log( 'advantageCenter', advantageCenter );
// 	if ( advantageCenter > windowCenter - 100 && advantageCenter < windowCenter + 100 ) {
// 		const slideCount = sliderAdvantage[ 0 ].slick.slideCount;
// 		const currentSlide = sliderAdvantage[ 0 ].slick.currentSlide;
// 		if ( e.deltaY < 0 ) {
// 			console.log( 'up' );
// 		} else {
// 			console.log( 'down' );
// 			if ( currentSlide < slideCount - 1 ) {
// 				e.preventDefault();
// 				return false;
// 			}
// 		}
// 	}
// }
// window.addEventListener( 'wheel', mouseWheelHandler, { passive: false });
// window.addEventListener( 'DOMMouseScroll', mouseWheelHandler, false );
var sliderAdvantage=$('.js-advantages-slider');var advantageCountSlide=0,advantageShowSlide=0;sliderAdvantage.on('refreshed.owl.carousel',function(e){advantageCountSlide=e.item.count;advantageShowSlide=e.page.size});sliderAdvantage.owlCarousel({loop:false,nav:false,dots:false,mouseDrag:false,touchDrag:false,items:1,slideBy:1,margin:0,responsive:{680:{items:2},1200:{items:3}}});function fixedAdvantages(){var height=$('.advantages-box').length*$('.advantages-slider').innerHeight();ScrollTrigger.create({trigger:'.advantages',start:'top 130px',end:'top+='+height+'px 130px',ease:'power0.easeNone',scrub:true,pin:true,invalidateOnRefresh:true,onUpdate:function onUpdate(_ref){var progress=_ref.progress,direction=_ref.direction,isActive=_ref.isActive;// const slideCount = sliderAdvantage[ 0 ].slick.slideCount;
// const currentSlide = sliderAdvantage[ 0 ].slick.currentSlide;
// const slidesToShow = sliderAdvantage[ 0 ].slick.options.slidesToShow;
// // sliderAdvantage.slick( 'slickGoTo', percentage );
// const step = slideCount - slidesToShow;
// const percentage = parseInt( parseInt( ( progress * 10 ).toFixed( 0 ) ) / advantageShowSlide );
var percentage=Math.floor(progress*(advantageCountSlide-advantageShowSlide));sliderAdvantage.trigger('to.owl.carousel',[percentage,500,true])}})}if($('.advantages').length){fixedAdvantages()}// let scrollAdvantageCount = null;
// let scrollAdvantage = null;
// const $advantages = document.querySelector( '.advantages' );
// if ( $( '.advantages' ).length ) {
// 	$advantages.addEventListener( 'wheel', function( e ) {
// 		e.preventDefault();
// 		// start timeout
// 		clearTimeout( scrollAdvantage );
// 		scrollAdvantage = setTimeout( function() {
// 			scrollAdvantageCount = 0;
// 		}, 200 );
// 		if ( scrollAdvantageCount ) {
// 			return 0;
// 		}
// 		scrollAdvantageCount = 1;
// 		// end timeout
// 		const slideCount = sliderAdvantage[ 0 ].slick.slideCount;
// 		const currentSlide = sliderAdvantage[ 0 ].slick.currentSlide;
// 		const slidesToShow = sliderAdvantage[ 0 ].slick.options.slidesToShow;
// 		if ( e.deltaY < 0 ) {
// 			setTimeout( function() {
// 				sliderAdvantage.slick( 'slickPrev' );
// 			}, 250 );
// 		} else {
// 			console.log(currentSlide)
// 			console.log(slideCount - slidesToShow)
// 			if ( currentSlide === slideCount - slidesToShow ) {
// 				console.log( 'last' )
// 			}
// 			setTimeout( function() {
// 				sliderAdvantage.slick( 'slickNext' );
// 			}, 250 );
// 		}
// 		return false;
// 	}, false );
// }
/* - - - - - - - - - - - - - -       rebuild reviews       - - - - - - - - - - - - - - - */function rebuildReviews(){var $reviewsArrows=$('.reviews-arrows').detach();if(window.matchMedia('(min-width: 768px)').matches){$('.reviews-content').append($reviewsArrows)}else{$('.reviews-inner').append($reviewsArrows)}}if($('.reviews-content').length){rebuildReviews();$(window).on('resize',function(){rebuildReviews()})}/* - - - - - - - - - - - - - -       init reviews slider       - - - - - - - - - - - - - - - */var $sliderReviews=$('.js-reviews-slider');if($sliderReviews.length){var $sliderReviewsCounter=void 0;var updateSliderReviewsCounter=function updateSliderReviewsCounter(slick){var currentIndex=arguments.length>1&&arguments[1]!==undefined?arguments[1]:1;var currentSlide=slick.slickCurrentSlide()+1,slideCount=slick.slideCount;if(currentSlide<10){currentSlide='0'+currentSlide}if(slideCount<10){slideCount='0'+slideCount}$sliderReviewsCounter.html('<b>'+currentSlide+'</b> / '+slideCount)};$sliderReviews.on('init',function(event,slick){$sliderReviews.append('<div class="reviews-counter" />');$sliderReviewsCounter=$sliderReviews.find('.reviews-counter');updateSliderReviewsCounter(slick)});$sliderReviews.on('afterChange',function(event,slick,currentSlide){updateSliderReviewsCounter(slick,currentSlide)})}$sliderReviews.slick({infinite:false,arrows:true,dots:false,fade:true,speed:0,slidesToShow:1,slidesToScroll:1,swipeToSlide:true,appendArrows:$('.reviews-arrows')});/* - - - - - - - - - - - - - -       faq tabs       - - - - - - - - - - - - - - - */$(document).on('click','.faq-tabs li',function(){var $this=$(this),$parent=$(this).closest('.faq-tabs');if(!$this.hasClass('active')){$parent.find('li').removeClass('active');$this.addClass('active');$('.faq-list').removeClass('show');$('.faq-list[data-tab="'+$this.attr('data-tab')+'"]').addClass('show')}});/* - - - - - - - - - - - - - -       faq toggle       - - - - - - - - - - - - - - - */$('.faq-list__box').each(function(){if($(this).hasClass('active')){$(this).find('.faq-list__box-body').slideDown(300)}});$(document).on('click','.js-faq',function(){var $this=$(this),$parent=$this.closest('.faq-list__box');if(!$parent.hasClass('active')){$('.faq-list__box').removeClass('active');$parent.addClass('active');$('.faq-list__box-body').slideUp(300);$parent.find('.faq-list__box-body').slideDown(300)}else{$parent.removeClass('active');$parent.find('.faq-list__box-body').slideUp(300)}});/* - - - - - - - - - - - - - -       about toggle       - - - - - - - - - - - - - - - */var aboutHeight=void 0;function setAboutHeight(){if(window.matchMedia('(max-width: 991px)').matches){aboutHeight=0}else{aboutHeight=142}return aboutHeight}$('.about-tabs__box').each(function(){var $this=$(this),$text=$this.find('.about-tabs__box-text'),currentHeight=$text.innerHeight();$text.attr('data-height',currentHeight);$text.height(0);setAboutHeight();if($this.hasClass('active')){if(currentHeight<aboutHeight){$this.find('.about-tabs__box-text').height(aboutHeight)}else{$this.find('.about-tabs__box-text').height(currentHeight)}}});$(document).on('click','.js-about-tabs',function(){var $this=$(this),$parent=$this.closest('.about-tabs__box'),currentHeight=parseFloat($parent.find('.about-tabs__box-text').attr('data-height'));setAboutHeight();if(!$parent.hasClass('active')){$('.about-tabs__box').removeClass('active');$parent.addClass('active');$('.about-tabs__box-text').height(0);if(currentHeight<aboutHeight){$parent.find('.about-tabs__box-text').height(aboutHeight)}else{$parent.find('.about-tabs__box-text').height(currentHeight)}}else{$parent.removeClass('active');$parent.find('.about-tabs__box-text').height(0)}setTimeout(function(){ScrollTrigger.refresh()},500)});if($('.about-tabs__box.active').length){$(window).on('resize',function(){if(window.matchMedia('(max-width: 991px)').matches){$('.about-tabs__box.active .about-tabs__box-text').css('height','')}})}/* - - - - - - - - - - - - - -       init trust slider       - - - - - - - - - - - - - - - */// const sliderTrust = $( '.js-trust-slider' ).slick({
// 	infinite: true,
// 	arrows: false,
// 	dots: false,
// 	speed: 0,
// 	slidesToShow: 1,
// 	slidesToScroll: 1,
// 	swipeToSlide: false,
// 	swipe: false
// }).on( 'beforeChange', function( event, slick, currentSlide, nextSlide ) {
// 	const count = slick.slideCount;
// 	if ( currentSlide === count - 1 && nextSlide === 0 ) {
// 		setTimeout( function() {
// 			slick.$slider.find( '.slick-slide[data-slick-index="' + count + '"]' ).addClass( 'slick-current' );
// 		}, 10 );
// 	}
// 	if ( currentSlide === 0 && nextSlide === count - 1 ) {
// 		setTimeout( function() {
// 			slick.$slider.find( '.slick-slide[data-slick-index="-1"]' ).addClass( 'slick-current' );
// 		}, 10 );
// 	}
// });
// let scrollTrustCount = null;
// let scrollTrust = null;
// sliderTrust.on( 'wheel', function( e ) {
// 	e.preventDefault();
// 	// start timeout
// 	clearTimeout( scrollTrust );
// 	scrollTrust = setTimeout( function() {
// 		scrollTrustCount = 0;
// 	}, 300 );
// 	if ( scrollTrustCount ) {
// 		return 0;
// 	}
// 	scrollTrustCount = 1;
// 	// end timeout
// 	if ( e.originalEvent.deltaY < 0 ) {
// 		$( '.trust-box' ).animate({ 'opacity': 0 }, 250 );
// 		setTimeout( function() {
// 			sliderTrust.slick( 'slickPrev' );
// 		}, 250 );
// 		$( '.trust-box' ).animate({ 'opacity': 1 }, 250 );
// 	} else {
// 		$( '.trust-box' ).animate({ 'opacity': 0 }, 250 );
// 		setTimeout( function() {
// 			sliderTrust.slick( 'slickNext' );
// 		}, 250 );
// 		$( '.trust-box' ).animate({ 'opacity': 1 }, 250 );
// 	}
// });
//
// let sliderTrustElement = document.querySelectorAll( '.js-trust-slider' );
// sliderTrustElement.forEach( slider => {
// 	slider.addEventListener( 'touchstart', handleTouchStartTrust, false );
// 	slider.addEventListener( 'touchmove', handleTouchMoveTrust, false );
// });
// let xDown = null;
// let yDown = null;
// function handleTouchStartTrust( evt ) {
// 	xDown = evt.touches[ 0 ].clientX;
// 	yDown = evt.touches[ 0 ].clientY;
// }
// function handleTouchMoveTrust( evt ) {
// 	if ( !xDown || !yDown ) {
// 		return;
// 	}
// 	const xUp = evt.touches[ 0 ].clientX;
// 	const yUp = evt.touches[ 0 ].clientY;
// 	const xDiff = xDown - xUp;
// 	const yDiff = yDown - yUp;
// 	if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
// 		if ( xDiff > 0 ) {
// 			/* left swipe */
// 			$( '.trust-box' ).animate({ 'opacity': 0 }, 250 );
// 			setTimeout( function() {
// 				sliderTrust.slick( 'slickNext' );
// 			}, 250 );
// 			$( '.trust-box' ).animate({ 'opacity': 1 }, 250 );
// 		} else {
// 			/* right swipe */
// 			$( '.trust-box' ).animate({ 'opacity': 0 }, 250 );
// 			setTimeout( function() {
// 				sliderTrust.slick( 'slickPrev' );
// 			}, 250 );
// 			$( '.trust-box' ).animate({ 'opacity': 1 }, 250 );
// 		}
// 	}
// 	/* reset values */
// 	xDown = null;
// 	yDown = null;
// }
var sliderTrust=$('.js-trust-slider');var trustCountSlide=0,trustShowSlide=0;sliderTrust.on('refreshed.owl.carousel',function(e){trustCountSlide=e.item.count;trustShowSlide=e.page.size;console.log(trustCountSlide);console.log(trustShowSlide)});sliderTrust.owlCarousel({loop:true,nav:false,dots:false,mouseDrag:false,touchDrag:false,items:1,slideBy:1,smartSpeed:0,margin:0});function fixedTrust(){var height=trustCountSlide*$('.trust-slider').innerHeight();ScrollTrigger.create({trigger:'.trust',start:'top 130px',end:'top+='+height+'px 130px',ease:'power0.easeNone',scrub:true,pin:true,invalidateOnRefresh:true,onUpdate:function onUpdate(_ref2){var progress=_ref2.progress,direction=_ref2.direction,isActive=_ref2.isActive;var percentage=Math.floor(progress*(trustCountSlide-trustShowSlide));sliderTrust.trigger('to.owl.carousel',[percentage,500,true])}})}if($('.trust').length){fixedTrust()}/* - - - - - - - - - - - - - -       rebuild revenue       - - - - - - - - - - - - - - - */function rebuildRevenue(){var $button=$('.revenue-box__button').detach();if(window.matchMedia('(max-width: 991px)').matches){$('.revenue-box').append($button)}else{$('.revenue-box__head').append($button)}}rebuildRevenue();$(window).on('resize',function(){rebuildRevenue()});/* - - - - - - - - - - - - - -       article share toggle       - - - - - - - - - - - - - - - */$(document).on('click','.js-article-share',function(){var $parent=$(this).closest('.article-share__list');$parent.toggleClass('show')});$(document).click(function(e){if($(e.target).closest('.article-share__list').length){return}$('.article-share__list').removeClass('show')})});
//# sourceMappingURL=app.js.map
