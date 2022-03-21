// const fixedHeader = document.querySelector( '.header' );
// const fixedMenuMobile = document.querySelector( '.header-modal' );
// const scrollbarArr = document.querySelectorAll( '.scroll' );
// scrollbarArr.forEach(item => {
// 	let scrollbarWrapper,
// 		scrollbarMenu;
// 	if ( item.classList.contains( 'wrapper' ) ) {
// 		scrollbarWrapper = Scrollbar.init( item, {
// 			damping: 0.1,
// 			syncCallbacks: true,
// 			plugins: {
// 				disableScroll: {
// 					direction: 'x'
// 				}
// 			}
// 		});
// 	} else {
// 		Scrollbar.init( item, {
// 			damping: 0.1,
// 			syncCallbacks: true
// 		});
// 	}
//
// 	scrollbarWrapper.track.xAxis.element.remove();
// 	scrollbarWrapper.addListener( function( status ) {
// 		const offset = status.offset;
// 		fixedHeader.style.top = offset.y + 'px';
//
// 		if ( parseInt( fixedHeader.style.top ) > 0 ) {
// 			fixedHeader.classList.add( 'fixed' );
// 		} else {
// 			fixedHeader.classList.remove( 'fixed' );
// 		}
//
// 		if ( window.matchMedia( '(max-width: 1199px)' ).matches ) {
// 			fixedMenuMobile.style.top = offset.y + 'px';
// 		} else {
// 			fixedMenuMobile.style.top = '';
// 		}
// 	});
// });
$(document).ready(function(){AOS.init({duration:1000});/* - - - - - - - - - - - - - -       init inputmask       - - - - - - - - - - - - - - - */// $( '[type="tel"]' ).inputmask( '+38 (999) 999 99 99' );
/* - - - - - - - - - - - - - -       init select2       - - - - - - - - - - - - - - - */// $( '.js-select' ).select2({
// 	language: 'en',
// 	width: '100%',
// 	minimumResultsForSearch: -1,
// });
/* - - - - - - - - - - - - - -       init css animate       - - - - - - - - - - - - - - - */function isScrolledIntoView(elem){var top=$(window).scrollTop();var viewBottom=top+$(window).innerHeight();var elemTop=$(elem).offset().top;var elemBottom=elemTop+$(elem).innerHeight();return elemBottom<=viewBottom&&elemTop>=top}// $( window ).on( 'load scroll', function() {
// 	$( '[data-animate]' ).each( function() {
// 		if ( isScrolledIntoView( this ) ) {
// 			// $( this ).addClass( 'animate__' + $( this ).attr( 'data-animate' ) );
// 			$( this ).css( 'animation-name', $( this ).attr( 'data-animate' ) );
// 		}
// 	});
// });
/* - - - - - - - - - - - - - -       menu toggle       - - - - - - - - - - - - - - - */function rebuildHeader(){var $lang=$('.lang').detach(),$button=$('.header-button').detach();if(window.matchMedia('(max-width: 1199px)').matches){$('.header-modal').append($lang);$('.header-modal').append($button)}else{$('.header-right').prepend($button);$('.header-right').prepend($lang)}}rebuildHeader();$(window).on('resize',function(){rebuildHeader()});/* - - - - - - - - - - - - - -       fixed header       - - - - - - - - - - - - - - - */function fixedHeader(){var top=$(window).scrollTop();if(top>0){$('.header').addClass('fixed')}else{$('.header').removeClass('fixed')}}fixedHeader();$(window).on('scroll',function(){fixedHeader()});/* - - - - - - - - - - - - - -       menu toggle       - - - - - - - - - - - - - - - */$(document).on('click','.menu-toggle',function(){var $this=$(this);if(!$this.hasClass('active')){$this.addClass('active');$('.header-modal').addClass('show')}else{$this.removeClass('active');$('.header-modal').removeClass('show')}});/* - - - - - - - - - - - - - -       submenu toggle       - - - - - - - - - - - - - - - */$(document).on('click','.top-menu .icon',function(){if(window.matchMedia('(max-width: 1199px)').matches){var $parent=$(this).closest('li');if(!$parent.hasClass('show')){$parent.addClass('show');$parent.find('ul').slideDown(300)}else{$parent.removeClass('show');$parent.find('ul').slideUp(300)}}});$(window).on('resize',function(){if(window.matchMedia('(min-width: 1200px)').matches){$('.top-menu li').removeClass('show');$('.top-menu ul').css('display','')}});/* - - - - - - - - - - - - - -       lang toggle       - - - - - - - - - - - - - - - */$(document).on('click','.lang-title',function(){if(window.matchMedia('(max-width: 1199px)').matches){var $parent=$(this).closest('.lang');if(!$parent.hasClass('show')){$parent.addClass('show')}else{$parent.removeClass('show')}$(document).click(function(e){if($(e.target).closest('.lang').length){return}$('.lang').removeClass('show')})}});$(window).on('resize',function(){if(window.matchMedia('(min-width: 1200px)').matches){$('.lang').removeClass('show')}});/* - - - - - - - - - - - - - -       rebuild partners       - - - - - - - - - - - - - - - */function rebuildPartners(){$('.partners-box').each(function(){var $this=$(this),$parent=$this.closest('.partners-group'),$partnersBox=$this.detach();if(window.matchMedia('(max-width: 767px)').matches){$parent.find('.partners-tabs__box[data-tab="'+$this.attr('data-tab')+'"]').after($partnersBox)}else{$parent.find('.partners-content').append($partnersBox)}var $partnersInfo=$this.find('.partners-box__info').detach();if(window.matchMedia('(max-width: 991px)').matches){$this.find('.partners-box__desc').after($partnersInfo)}else{$this.find('.partners-box__head').prepend($partnersInfo)}})}if($('.partners-box').length){rebuildPartners();$(window).on('resize',function(){rebuildPartners()})}/* - - - - - - - - - - - - - -       set parents progress       - - - - - - - - - - - - - - - */function setParentsProgress(){$('.partners-box__progress-tip').each(function(){var $this=$(this),$parent=$this.closest('.partners-box__progress'),step=$this.attr('data-step'),$currentStep=$parent.find('.partners-box__progress-step[data-step="'+step+'"]'),posLeft=$currentStep.position().left+$currentStep.innerWidth()/2;$this.css('left',posLeft+'px')})}setParentsProgress();$(window).on('resize',function(){setParentsProgress()});/* - - - - - - - - - - - - - -       parents tabs       - - - - - - - - - - - - - - - */$(document).on('click','.partners-tabs__box',function(){var $this=$(this),$parent=$this.closest('.partners-tabs');if(!$this.hasClass('active')){$parent.find('.partners-tabs__box').removeClass('active');$this.addClass('active');$('.partners-box').removeClass('show');$('.partners-box[data-tab="'+$this.attr('data-tab')+'"]').addClass('show');if(window.matchMedia('(max-width: 767px)').matches){$('.partners-box').slideUp(300);$('.partners-box[data-tab="'+$this.attr('data-tab')+'"]').slideDown(300)}setParentsProgress()}});function shopPartnersMobile(){$('.partners-box').each(function(){var $this=$(this);if(window.matchMedia('(max-width: 767px)').matches){if($this.hasClass('show')&&$this.css('display')==='none'){$this.slideDown(300)}}})}if($('.partners-box').length){shopPartnersMobile();$(window).on('resize',function(){shopPartnersMobile()})}$(window).on('resize',function(){if(window.matchMedia('(min-width: 768px)').matches){$('.partners-box').css('display','')}});/* - - - - - - - - - - - - - -       init advantages slider       - - - - - - - - - - - - - - - */var sliderAdvantage=$('.js-advantages-slider').slick({infinite:false,arrows:false,dots:false,slidesToShow:3,slidesToScroll:1,swipeToSlide:true,responsive:[{breakpoint:1200,settings:{slidesToShow:2}},{breakpoint:768,settings:{slidesToShow:1}}]});sliderAdvantage.on('wheel',function(e){e.preventDefault();if(e.originalEvent.deltaY<0){$(this).slick('slickPrev')}else{$(this).slick('slickNext')}});/* - - - - - - - - - - - - - -       rebuild reviews       - - - - - - - - - - - - - - - */function rebuildReviews(){var $reviewsArrows=$('.reviews-arrows').detach();if(window.matchMedia('(min-width: 768px)').matches){$('.reviews-content').append($reviewsArrows)}else{$('.reviews-inner').append($reviewsArrows)}}if($('.reviews-content').length){rebuildReviews();$(window).on('resize',function(){rebuildReviews()})}/* - - - - - - - - - - - - - -       init reviews slider       - - - - - - - - - - - - - - - */$('.js-reviews-slider').slick({infinite:false,arrows:true,dots:true,fade:true,speed:0,slidesToShow:1,slidesToScroll:1,swipeToSlide:true,appendArrows:$('.reviews-arrows')});/* - - - - - - - - - - - - - -       faq tabs       - - - - - - - - - - - - - - - */$(document).on('click','.faq-tabs li',function(){var $this=$(this),$parent=$(this).closest('.faq-tabs');if(!$this.hasClass('active')){$parent.find('li').removeClass('active');$this.addClass('active');$('.faq-list').removeClass('show');$('.faq-list[data-tab="'+$this.attr('data-tab')+'"]').addClass('show')}});/* - - - - - - - - - - - - - -       faq toggle       - - - - - - - - - - - - - - - */$('.faq-list__box').each(function(){if($(this).hasClass('active')){$(this).find('.faq-list__box-body').slideDown(300)}});$(document).on('click','.js-faq',function(){var $this=$(this),$parent=$this.closest('.faq-list__box');if(!$parent.hasClass('active')){$('.faq-list__box').removeClass('active');$parent.addClass('active');$('.faq-list__box-body').slideUp(300);$parent.find('.faq-list__box-body').slideDown(300)}else{$parent.removeClass('active');$parent.find('.faq-list__box-body').slideUp(300)}})});
//# sourceMappingURL=app.js.map
