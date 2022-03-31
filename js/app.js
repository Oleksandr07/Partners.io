$(document).ready(function(){AOS.init({duration:1000,offset:80,once:true});/* - - - - - - - - - - - - - -       init inputmask       - - - - - - - - - - - - - - - */// $( '[type="tel"]' ).inputmask( '+38 (999) 999 99 99' );
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
/* - - - - - - - - - - - - - -       scroll to       - - - - - - - - - - - - - - - */$(document).on('click','.js-scroll-to',function(e){if(window.location.pathname==='/'){e.preventDefault()}// else {
// 	window.location.href = window.location.origin;
// }
var link=$(this).attr('href');if($(link).length){var posTop=$(link).offset().top-parseInt($(link).css('padding-top'))-$('.header').innerHeight();$('html, body').animate({'scrollTop':posTop+'px'},500)}});/* - - - - - - - - - - - - - -       rebuild header       - - - - - - - - - - - - - - - */function rebuildHeader(){var $lang=$('.lang').detach(),$button=$('.header-button').detach();if(window.matchMedia('(max-width: 1199px)').matches){$('.header-modal').append($lang);$('.header-modal').append($button)}else{$('.header-right').prepend($button);$('.header-right').prepend($lang)}}rebuildHeader();$(window).on('resize',function(){rebuildHeader()});/* - - - - - - - - - - - - - -       fixed header       - - - - - - - - - - - - - - - */function fixedHeader(){var top=$(window).scrollTop();if(top>0){$('.header').addClass('fixed')}else{$('.header').removeClass('fixed')}}fixedHeader();$(window).on('scroll',function(){fixedHeader()});setTimeout(function(){$('.header').css('transform','none')},1000);/* - - - - - - - - - - - - - -       menu toggle       - - - - - - - - - - - - - - - */$(document).on('click','.menu-toggle',function(){var $this=$(this);if(!$this.hasClass('active')){$this.addClass('active');$('.header-modal').addClass('show')}else{$this.removeClass('active');$('.header-modal').removeClass('show')}});/* - - - - - - - - - - - - - -       submenu toggle       - - - - - - - - - - - - - - - */$(document).on('click','.top-menu .icon, .top-menu li span:not(.icon)',function(){if(window.matchMedia('(max-width: 1199px)').matches){var $parent=$(this).closest('li');if(!$parent.hasClass('show')){$parent.addClass('show');$parent.find('ul').slideDown(300)}else{$parent.removeClass('show');$parent.find('ul').slideUp(300)}}});$(window).on('resize',function(){if(window.matchMedia('(min-width: 1200px)').matches){$('.top-menu li').removeClass('show');$('.top-menu ul').css('display','')}});/* - - - - - - - - - - - - - -       lang toggle       - - - - - - - - - - - - - - - */$(document).on('click','.lang-title',function(){if(window.matchMedia('(max-width: 1199px)').matches){var $parent=$(this).closest('.lang');if(!$parent.hasClass('show')){$parent.addClass('show')}else{$parent.removeClass('show')}$(document).click(function(e){if($(e.target).closest('.lang').length){return}$('.lang').removeClass('show')})}});$(window).on('resize',function(){if(window.matchMedia('(min-width: 1200px)').matches){$('.lang').removeClass('show')}});/* - - - - - - - - - - - - - -       rebuild partners       - - - - - - - - - - - - - - - */function rebuildPartners(){$('.partners-box').each(function(){var $this=$(this),$parent=$this.closest('.partners-group'),$partnersBox=$this.detach();if(window.matchMedia('(max-width: 767px)').matches){$parent.find('.partners-tabs__box[data-tab="'+$this.attr('data-tab')+'"]').after($partnersBox)}else{$parent.find('.partners-content').append($partnersBox)}var $partnersInfo=$this.find('.partners-box__info').detach();if(window.matchMedia('(max-width: 991px)').matches){$this.find('.partners-box__desc').after($partnersInfo)}else{$this.find('.partners-box__head').prepend($partnersInfo)}})}if($('.partners-box').length){rebuildPartners();$(window).on('resize',function(){rebuildPartners()})}/* - - - - - - - - - - - - - -       set position progress step       - - - - - - - - - - - - - - - */function setPositionProgressStep(){$('.partners-box__progress').each(function(){var $progress=$(this),count=$progress.find('.partners-box__progress-step').length;$progress.find('.partners-box__progress-step').each(function(){var $progressStep=$(this),index=$progressStep.index();if(count%2){if(index<Math.floor(count/2)){$progressStep.addClass('step-left')}else if(index>Math.floor(count/2)){$progressStep.addClass('step-right')}else{$progressStep.addClass('step-center')}}else{if(index<count/2){$progressStep.addClass('step-left')}else if(index>count/2){$progressStep.addClass('step-right')}}})})}if($('.partners-box__progress').length){setPositionProgressStep()}/* - - - - - - - - - - - - - -       set parents progress       - - - - - - - - - - - - - - - */function setParentsProgress(){$('.partners-box__progress-tip').each(function(){var $this=$(this),$parent=$this.closest('.partners-box__progress'),step=$this.attr('data-step'),$currentStep=$parent.find('.partners-box__progress-step[data-step="'+step+'"]'),$currentPoint=$currentStep.find('.partners-box__progress-point'),index=$currentStep.index();if($parent.innerWidth()>0){var posLeft=$currentStep.position().left+$currentStep.innerWidth()/2,displacement=($currentStep.innerWidth()-35)/2;if($currentStep.hasClass('step-left')){posLeft=posLeft-displacement}if($currentStep.hasClass('step-right')){posLeft=posLeft+displacement}setTimeout(function(){$this.css('left',posLeft+'px');$parent.find('.partners-box__progress-step').removeClass('active current');$parent.find('.partners-box__progress-step').each(function(){if($(this).index()<index){$(this).addClass('active')}if($(this).index()===index){$(this).addClass('current')}})},100)}else{$('.partners-box__progress-step').removeClass('active current');$this.css('left',35/2+'px')}})}if($('.partners-box__progress').length){if(window.matchMedia('(max-width: 767px)').matches){setTimeout(setParentsProgress,400)}else{setParentsProgress()}$(window).on('resize',function(){if(window.matchMedia('(max-width: 767px)').matches){setTimeout(setParentsProgress,100)}else{setParentsProgress()}})}$(document).on('click','.partners-box__progress-point',function(){var $this=$(this),$progresStep=$this.closest('.partners-box__progress-step'),$progresBar=$this.closest('.partners-box__progress'),$progresTip=$progresBar.find('.partners-box__progress-tip');$progresTip.text($progresStep.attr('data-percent')).attr('data-step',$progresStep.attr('data-step'));setParentsProgress(100)});/* - - - - - - - - - - - - - -       parents tabs       - - - - - - - - - - - - - - - */$(document).on('click','.partners-tabs__box',function(){var $this=$(this),$parent=$this.closest('.partners-tabs');if(!$this.hasClass('active')){$parent.find('.partners-tabs__box').removeClass('active');$this.addClass('active');$('.partners-box').removeClass('show');$('.partners-box[data-tab="'+$this.attr('data-tab')+'"]').addClass('show');if(window.matchMedia('(max-width: 767px)').matches){$('.partners-box').slideUp(300);$('.partners-box[data-tab="'+$this.attr('data-tab')+'"]').slideDown(300);setTimeout(setParentsProgress,400)}else{setParentsProgress()}}});function shopPartnersMobile(){$('.partners-box').each(function(){var $this=$(this);if(window.matchMedia('(max-width: 767px)').matches){if($this.hasClass('show')&&$this.css('display')==='none'){$this.slideDown(300)}}})}if($('.partners-box').length){shopPartnersMobile();$(window).on('resize',function(){shopPartnersMobile()})}$(window).on('resize',function(){if(window.matchMedia('(min-width: 768px)').matches){$('.partners-box').css('display','')}});/* - - - - - - - - - - - - - -       init advantages slider       - - - - - - - - - - - - - - - */var sliderAdvantage=$('.js-advantages-slider').slick({infinite:false,arrows:false,dots:false,speed:500,slidesToShow:3,slidesToScroll:1,swipeToSlide:true,responsive:[{breakpoint:1200,settings:{slidesToShow:2}},{breakpoint:680,settings:{slidesToShow:1}}]});// sliderAdvantage.on( 'wheel', function( e ) {
// 	e.preventDefault();
// 	if ( e.originalEvent.deltaY < 0 ) {
// 		$( this ).slick( 'slickPrev' );
// 	} else {
// 		$( this ).slick( 'slickNext' );
// 	}
// });
var scrollAdvantageCount=null;var scrollAdvantage=null;sliderAdvantage.on('wheel',function(e){e.preventDefault();// start timeout
clearTimeout(scrollAdvantage);scrollAdvantage=setTimeout(function(){scrollAdvantageCount=0},200);if(scrollAdvantageCount){return 0}scrollAdvantageCount=1;// end timeout
if(e.originalEvent.deltaY<0){setTimeout(function(){sliderAdvantage.slick('slickPrev')},250)}else{setTimeout(function(){sliderAdvantage.slick('slickNext')},250)}});/* - - - - - - - - - - - - - -       rebuild reviews       - - - - - - - - - - - - - - - */function rebuildReviews(){var $reviewsArrows=$('.reviews-arrows').detach();if(window.matchMedia('(min-width: 768px)').matches){$('.reviews-content').append($reviewsArrows)}else{$('.reviews-inner').append($reviewsArrows)}}if($('.reviews-content').length){rebuildReviews();$(window).on('resize',function(){rebuildReviews()})}/* - - - - - - - - - - - - - -       init reviews slider       - - - - - - - - - - - - - - - */$('.js-reviews-slider').slick({infinite:false,arrows:true,dots:true,fade:true,speed:0,slidesToShow:1,slidesToScroll:1,swipeToSlide:true,appendArrows:$('.reviews-arrows')});/* - - - - - - - - - - - - - -       faq tabs       - - - - - - - - - - - - - - - */$(document).on('click','.faq-tabs li',function(){var $this=$(this),$parent=$(this).closest('.faq-tabs');if(!$this.hasClass('active')){$parent.find('li').removeClass('active');$this.addClass('active');$('.faq-list').removeClass('show');$('.faq-list[data-tab="'+$this.attr('data-tab')+'"]').addClass('show')}});/* - - - - - - - - - - - - - -       faq toggle       - - - - - - - - - - - - - - - */$('.faq-list__box').each(function(){if($(this).hasClass('active')){$(this).find('.faq-list__box-body').slideDown(300)}});$(document).on('click','.js-faq',function(){var $this=$(this),$parent=$this.closest('.faq-list__box');if(!$parent.hasClass('active')){$('.faq-list__box').removeClass('active');$parent.addClass('active');$('.faq-list__box-body').slideUp(300);$parent.find('.faq-list__box-body').slideDown(300)}else{$parent.removeClass('active');$parent.find('.faq-list__box-body').slideUp(300)}});/* - - - - - - - - - - - - - -       about toggle       - - - - - - - - - - - - - - - */var aboutHeight=void 0;function setAboutHeight(){if(window.matchMedia('(max-width: 991px)').matches){aboutHeight=0}else{aboutHeight=142}return aboutHeight}$('.about-tabs__box').each(function(){var $this=$(this),$text=$this.find('.about-tabs__box-text'),currentHeight=$text.innerHeight();$text.attr('data-height',currentHeight);$text.height(0);setAboutHeight();if($this.hasClass('active')){if(currentHeight<aboutHeight){$this.find('.about-tabs__box-text').height(aboutHeight)}else{$this.find('.about-tabs__box-text').height(currentHeight)}}});$(document).on('click','.js-about-tabs',function(){var $this=$(this),$parent=$this.closest('.about-tabs__box'),currentHeight=parseFloat($parent.find('.about-tabs__box-text').attr('data-height'));setAboutHeight();if(!$parent.hasClass('active')){$('.about-tabs__box').removeClass('active');$parent.addClass('active');$('.about-tabs__box-text').height(0);if(currentHeight<aboutHeight){$parent.find('.about-tabs__box-text').height(aboutHeight)}else{$parent.find('.about-tabs__box-text').height(currentHeight)}}else{$parent.removeClass('active');$parent.find('.about-tabs__box-text').height(0)}});if($('.about-tabs__box.active').length){$(window).on('resize',function(){if(window.matchMedia('(max-width: 991px)').matches){$('.about-tabs__box.active .about-tabs__box-text').css('height','')}})}/* - - - - - - - - - - - - - -       init trust slider       - - - - - - - - - - - - - - - */var sliderTrust=$('.js-trust-slider').slick({infinite:true,arrows:false,dots:false,speed:0,slidesToShow:1,slidesToScroll:1,swipeToSlide:false,swipe:false}).on('beforeChange',function(event,slick,currentSlide,nextSlide){var count=slick.slideCount;if(currentSlide===count-1&&nextSlide===0){setTimeout(function(){slick.$slider.find('.slick-slide[data-slick-index="'+count+'"]').addClass('slick-current')},10)}if(currentSlide===0&&nextSlide===count-1){setTimeout(function(){slick.$slider.find('.slick-slide[data-slick-index="-1"]').addClass('slick-current')},10)}});var scrollTrustCount=null;var scrollTrust=null;sliderTrust.on('wheel',function(e){e.preventDefault();// start timeout
clearTimeout(scrollTrust);scrollTrust=setTimeout(function(){scrollTrustCount=0},300);if(scrollTrustCount){return 0}scrollTrustCount=1;// end timeout
if(e.originalEvent.deltaY<0){$('.trust-box').animate({'opacity':0},250);setTimeout(function(){sliderTrust.slick('slickPrev')},250);$('.trust-box').animate({'opacity':1},250)}else{$('.trust-box').animate({'opacity':0},250);setTimeout(function(){sliderTrust.slick('slickNext')},250);$('.trust-box').animate({'opacity':1},250)}});var sliderTrustElement=document.querySelectorAll('.js-trust-slider');sliderTrustElement.forEach(function(slider){slider.addEventListener('touchstart',handleTouchStartTrust,false);slider.addEventListener('touchmove',handleTouchMoveTrust,false)});var xDown=null;var yDown=null;function handleTouchStartTrust(evt){xDown=evt.touches[0].clientX;yDown=evt.touches[0].clientY}function handleTouchMoveTrust(evt){if(!xDown||!yDown){return}var xUp=evt.touches[0].clientX;var yUp=evt.touches[0].clientY;var xDiff=xDown-xUp;var yDiff=yDown-yUp;if(Math.abs(xDiff)>Math.abs(yDiff)){/*most significant*/if(xDiff>0){/* left swipe */$('.trust-box').animate({'opacity':0},250);setTimeout(function(){sliderTrust.slick('slickNext')},250);$('.trust-box').animate({'opacity':1},250)}else{/* right swipe */$('.trust-box').animate({'opacity':0},250);setTimeout(function(){sliderTrust.slick('slickPrev')},250);$('.trust-box').animate({'opacity':1},250)}}/* reset values */xDown=null;yDown=null}/* - - - - - - - - - - - - - -       rebuild revenue       - - - - - - - - - - - - - - - */function rebuildRevenue(){var $button=$('.revenue-box__button').detach();if(window.matchMedia('(max-width: 991px)').matches){$('.revenue-box').append($button)}else{$('.revenue-box__head').append($button)}}rebuildRevenue();$(window).on('resize',function(){rebuildRevenue()});/* - - - - - - - - - - - - - -       article share toggle       - - - - - - - - - - - - - - - */$(document).on('click','.js-article-share',function(){var $parent=$(this).closest('.article-share__list');$parent.toggleClass('show')});$(document).click(function(e){if($(e.target).closest('.article-share__list').length){return}$('.article-share__list').removeClass('show')})});
//# sourceMappingURL=app.js.map
