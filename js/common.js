$(document).ready(function() {


//прилипающие меню
var $menu = $(".header");
$(window).scroll(function(){
	if ( $(this).scrollTop() > 0 && $menu.hasClass("default") ){
		$menu.removeClass("default").addClass("fixed");
	} else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
		$menu.removeClass("fixed").addClass("default");
	}

});

if ( $(this).scrollTop() > 0 && $menu.hasClass("default") ){
	$menu.removeClass("default").addClass("fixed");
} else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
	$menu.removeClass("fixed").addClass("default");
}

	//плавный скролл
	$(".navigat li a").mPageScroll2id();


	//кнопка sandwich
	$(".btn_nav").click(function() {
		$(".sandwich").toggleClass("active");
		if ($(".menu").is(":hidden")) {
			$(".menu").slideDown(200);
		} else {
			$(".menu").slideUp(200);
		}
		
	});

	{
		if ($(window).width() < 992) { 
			$(".menu li:not(.menu__haschild) a").click(function() {
		$(".menu").slideUp(200);
		$(".sandwich").removeClass("active");
	});

	$(".menu .menu__haschild a").click(function() {
		$(this).siblings(".menu-dropdown").slideToggle(200);
	});
		}
	}

	

	//слайдер

	$('.slider-main').slick({
		arrows: true,
		dots: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><svg width="23" height="43" viewBox="0 0 23 43" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 1.54346L3 21.5L21 41.4565" stroke="white" stroke-width="3" stroke-dasharray="3 3"/></svg><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><svg width="23" height="43" viewBox="0 0 23 43" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 41.4565L20 21.5L2 1.5435" stroke="white" stroke-width="3" stroke-dasharray="3 3"/></svg><div/>',
		responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				arrows: false,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				arrows: false,
			}
		}
		]
	});

	$('.slider-clients').slick({
		arrows: true,
		dots: false,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><svg width="23" height="43" viewBox="0 0 23 43" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 1.54346L3 21.5L21 41.4565" stroke="white" stroke-width="3" stroke-dasharray="3 3"/></svg><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><svg width="23" height="43" viewBox="0 0 23 43" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 41.4565L20 21.5L2 1.5435" stroke="white" stroke-width="3" stroke-dasharray="3 3"/></svg><div/>',
		responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				dots: true,
				arrows: false,
			}
		}
		]
	});

	$('.row_advantages').slick({
		arrows: false,
		dots: true,
		infinite: true,
		slidesToShow: 1,
		adaptiveHeight: true,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><svg width="23" height="42" viewBox="0 0 23 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22 41L2 21.5L22 1" stroke="white" stroke-width="2"/></svg><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><svg width="23" height="42" viewBox="0 0 23 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 41L21 21.5L1 1" stroke="white" stroke-width="2"/></svg><div/>',
		mobileFirst: true,
		responsive: [
		{
			breakpoint: 768,
			settings: 'unslick'
		}
		]
	});

	{
		if ($(window).width() < 480) { 
			$(".footer__title").click(function() {
				$(this).toggleClass("active");
				$(this).next(".footer__content").slideToggle(200);
			});
		}
	}

	$('.tabs li a').click(function(event) {
		event.preventDefault();
		$(this).parent().parent().find("li").removeClass('active');
		$(this).parent().addClass('active');
		$(this).parent().parent().siblings(".tab-container").find(".tab-pane").fadeOut(0);
		var selectTab = $(this).attr("href");
		$(selectTab).fadeIn(200);

		$(".tab-container").find('.slider-main').slick("refresh");
	});

	$(".input-phone").mask("+7 (999) 999-99-99");


	 // стайлер для select
	 $('select').styler();

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();


	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$(".btn_top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	objectFitImages();


});


/*polifyl*/
/*! npm.im/object-fit-images 3.2.4 */
var objectFitImages=function(){"use strict";function t(t,e){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"'%3E%3C/svg%3E"}function e(t){if(t.srcset&&!p&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}function i(t){for(var e,i=getComputedStyle(t).fontFamily,r={};null!==(e=u.exec(i));)r[e[1]]=e[2];return r}function r(e,i,r){var n=t(i||1,r||0);b.call(e,"src")!==n&&h.call(e,"src",n)}function n(t,e){t.naturalWidth?e(t):setTimeout(n,100,t,e)}function c(t){var c=i(t),o=t[l];if(c["object-fit"]=c["object-fit"]||"fill",!o.img){if("fill"===c["object-fit"])return;if(!o.skipTest&&f&&!c["object-position"])return}if(!o.img){o.img=new Image(t.width,t.height),o.img.srcset=b.call(t,"data-ofi-srcset")||t.srcset,o.img.src=b.call(t,"data-ofi-src")||t.src,h.call(t,"data-ofi-src",t.src),t.srcset&&h.call(t,"data-ofi-srcset",t.srcset),r(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{s(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}e(o.img),t.style.backgroundImage='url("'+(o.img.currentSrc||o.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=c["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(c["object-fit"])?n(o.img,function(){o.img.naturalWidth>t.width||o.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=c["object-fit"].replace("none","auto").replace("fill","100% 100%"),n(o.img,function(e){r(t,e.naturalWidth,e.naturalHeight)})}function s(t){var e={get:function(e){return t[l].img[e?e:"src"]},set:function(e,i){return t[l].img[i?i:"src"]=e,h.call(t,"data-ofi-"+i,e),c(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}function o(){function t(t,e){return t[l]&&t[l].img&&("src"===e||"srcset"===e)?t[l].img:t}d||(HTMLImageElement.prototype.getAttribute=function(e){return b.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return h.call(t(this,e),e,String(i))})}function a(t,e){var i=!y&&!t;if(e=e||{},t=t||"img",d&&!e.skipTest||!m)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][l]=t[r][l]||{skipTest:e.skipTest},c(t[r]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&a(t.target,{skipTest:e.skipTest})},!0),y=!0,t="img"),e.watchMQ&&window.addEventListener("resize",a.bind(null,t,{skipTest:e.skipTest}))}var l="fregante:object-fit-images",u=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,g="undefined"==typeof Image?{style:{"object-position":1}}:new Image,f="object-fit"in g.style,d="object-position"in g.style,m="background-size"in g.style,p="string"==typeof g.currentSrc,b=g.getAttribute,h=g.setAttribute,y=!1;return a.supportsObjectFit=f,a.supportsObjectPosition=d,o(),a}();

