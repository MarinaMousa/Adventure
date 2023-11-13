var $els = $('.menu a, .menu header');
var count = $els.length;
var grouplength = Math.ceil(count/3);
var groupNumber = 0;
var i = 1;
$('.menu').css('--count',count+'');
$els.each(function(j){
    if ( i > grouplength ) {
        groupNumber++;
        i=1;
    }
    $(this).attr('data-group',groupNumber);
    i++;
}); 

$('.menu footer button').on('click',function(e){
    e.preventDefault();
    $els.each(function(j){
        $(this).css('--top',$(this)[0].getBoundingClientRect().top + ($(this).attr('data-group') * -15) - 20);
        $(this).css('--delay-in',j*.1+'s');
        $(this).css('--delay-out',(count-j)*.1+'s');
    });
    $('.menu').toggleClass('closed');
    e.stopPropagation();
});

// setTimeout(function(){
//     $('.menu footer button').click();
//     setTimeout(function(){
//         $('.menu footer button').click();
//     }, (count * 100) + 500 );
// }, 1000);





let text = document.getElementById('text');
    let bird1 = document.getElementById('bird1');
    let bird2 = document.getElementById('bird2');
    let btn = document.getElementById('btn');
    let rocks = document.getElementById('rocks');
    let forest = document.getElementById('forest');
    let water = document.getElementById('water');
    
    window.addEventListener('scroll', function() {
        let value = window.scrollY;
        
        text.style.top = 40 + value * -.1 + '%';
        bird2.style.top = value * -1.5 + 'px';
        bird2.style.left = value * 2 + 'px';
        bird1.style.top = value * -1.5 + 'px';
        bird1.style.left = value * -5 + 'px';
        btn.style.marginTop = value * 1.5 + 'px';
        rocks.style.top = value * -.12 + 'px';
        forest.style.top = value * .25 + 'px';
    })


    var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        loop: true,
        autoplay: {
            delay: 1000,
        },
        coverflowEffect: {
          rotate: 43,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
      });






      var swiper = new Swiper(".slide-content", {
        slidesPerView: 3,
        spaceBetween: 25,
        loop: true,
        centerSlide: 'true',
        fade: 'true',
        grabCursor: 'true',
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            520: {
                slidesPerView: 2,
            },
            950: {
                slidesPerView: 3,
            },
    
        },
    });


      var swiper2 = new Swiper(".swi", {
        effect: "cards",
        grabCursor: true,
      });