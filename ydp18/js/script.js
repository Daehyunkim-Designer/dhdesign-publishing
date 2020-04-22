/*global $,*/



$(function () {
    "use strict";
    

    /* 탭메뉴 */
    $('ul.tab li').click(function () {
        var activeTab = $(this).attr('data-tab');
        
        $('ul.tab li').removeClass('current');
        $('.tabcontent').removeClass('current');
        
        $(this).addClass('current'); // 부모 li
        $('#' + activeTab).addClass('current'); // 자식 div
		
		$(this).children('a').addClass('bg');
		$(this).siblings('li').children('a').removeClass('bg');
        
	});
    
    /* 탭메뉴 모바일 */
    
    $('ul.m_tab li').click(function () {
        var activeTab = $(this).attr('data-tab');
        
        $('ul.m_tab li').removeClass('current');
        $('.tabcont').removeClass('current');
        
        $(this).addClass('current');
        $('#' + activeTab).addClass('current');
        //$('#' + activeTab).children('ul').addClass('current');
        
	});
    
    
    /* 메인배너 */
    $('.flexslider').flexslider({
        animation: "slide",
        rtl: true,
        controlNav: false,
        prevText: '',
        nextText: ''
    });
    
    
    /* 모바일메뉴 */
    $(".m_btn").click(function(){
        $("#m_menu,.page_cover").addClass("open"); 
      
    });
    
    $(".close").click(function(){
      $("#m_menu,.page_cover").removeClass("open");
      
    });
    
	/* 모바일 sub메뉴 슬라이드 */
	$(".m_gnb > li").on("click", function(){
		$(this).children("ul").slideToggle();
		//$(this).children("ul").slideDown(200);
        //$(this).children("ul").slideDown("fast");
		$(this).css("background-color", "#06a802");
		
		$(this).siblings("li").css("background-color", "darkgrey");
		$(this).siblings("li").children("ul").slideUp();
	});
    
    /* 메뉴 슬라이드 */
    
   /* $(".left_menu > li").on("click", function(){
        //$(this).children("ul").slideToggle();
        $(this).children("ul").slideDown(200);
        $(this).children("ul").slideDown("fast");
        $(this).css("background-color", "#02399f");
        $(this).children("a").css("color","white");
        
        $(this).siblings("li").css("background-color", "white");
        $(this).siblings("li").children("a").css("color","black");
        $(this).siblings("li").children("ul").slideUp();
    });
	*/
	
	$(".left_menu > li").on("click", function(){
        //$(this).children("ul").slideToggle();
        $(this).children("ul").slideDown(200);
        $(this).children("ul").slideDown("fast");
        $(this).css("background-color", "#02399f");
        $(this).children("a").css("color","white");
        
        $(this).siblings("li").css("background-color", "white");
        $(this).siblings("li").children("a").css("color","black");
        $(this).siblings("li").children("ul").slideUp();
    });
	
	

	 $('.visual').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: true,
	  fade: true,
	  asNavFor: '.visual_nav',
	  responsive: [
		  {
				breakpoint: 641,
				settings: {
					
				}
		  }
	  ]
	});
	$('.visual_nav').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  asNavFor: '.visual',
	  centerMode: true,
	  focusOnSelect: true,
	  responsive: [
		  {
				breakpoint: 641,
				settings: {
					slidesToShow: 3,
		        }
		  }
	  ]
	});
	

	
	//slick-center
		
	/*
	$(".slick-center").siblings("div").children("img").css("opacity","0.5");
	$(".slick-center").children("img").css("opacity","1");
	
	// 'visual'의 버튼을 클릭했을때 
	$(".visual > button").on("click", function(){
		
        $(this).parent(".visual").siblings(".visual_nav").children("div").children("div").children(".slick-center").siblings("div").children("img").css("opacity","0.5");
		
		$(this).parent(".visual").siblings(".visual_nav").children("div").children("div").children(".slick-center").children("img").css("opacity","1");
    });
	
	// 'visual_nav'의 슬라이드를 클릭했을때
	$(".visual_nav > div > div > .slick-slide").on("click", function(){
		
        $(this).siblings("div").children("img").css("opacity","0.5");
		
		$(this).children("img").css("opacity","1");
    });
	 
	 */
	
	
});

