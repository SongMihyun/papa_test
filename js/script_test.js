/* <!-- Initialize Swiper --> */
var swiper = new Swiper('.sec1_swiper', {
    slidesPerView: 1,
    spaceBetween: 100,
    loop: true,
    autoplay:true,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    navigation: {
    nextEl: ".btn_next",
    prevEl: ".btn_prev",
    
    },
});

var swiper = new Swiper('.sec4_swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay:true,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    navigation: {
    nextEl: ".btn_next",
    prevEl: ".btn_prev",
    
    },
});

var swiper = new Swiper('.sec8_swiper', {
    slidesPerView: 8,
    spaceBetween: 10,
    loop: true,
    autoplay:true,
    
    navigation: {
    nextEl: ".btn_next",
    prevEl: ".btn_prev",
    
    },
});

var swiper = new Swiper('.m_ytb_swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    
    
    navigation: {
    nextEl: ".btn_next",
    prevEl: ".btn_prev",
    
    },
});

// 스크롤 위치에따른 이벤트 지정

let header_height=$('.header').height();
$(window).scroll(function(){
    var h=$(document).scrollTop(); //현재 스크롤 위치
    if(h>header_height){
        $('.topBtn').removeClass('blind');
    }else{
        $('.topBtn').addClass('blind');
        
    }

});



//호리존탈 / 버티칼(swiper-v/mySwiper2)스와이퍼
var swiper = new Swiper(".allSwiper", {
    spaceBetween: 50,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
 /*  var swiper2 = new Swiper(".mySwiper2", {
    direction: "vertical",
    spaceBetween: 50,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
 */


