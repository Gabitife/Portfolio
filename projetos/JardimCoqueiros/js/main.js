(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Fixed Navbar
    $(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-dark shadow');
            } else {
                $('.fixed-top').removeClass('bg-dark shadow');
            }
        } else {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-dark shadow').css('top', -45);
            } else {
                $('.fixed-top').removeClass('bg-dark shadow').css('top', 0);
            }
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Causes progress
    $('.causes-progress').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });

    
})(jQuery);


// asd imagens

// const container = document.querySelector(".container2");
// const controls = container.querySelectorAll(".control");
// const gallery = container.querySelector(".gallery");
// const items = gallery.querySelectorAll(".item2");
// const maxItems = items.length;
// let currentItem = 0;

// let isMouseDown = false;
// let startX = 0;
// let scrollLeft = 0;

// controls.forEach((control) => {
//   control.addEventListener("mousedown", (e) => {
//     isMouseDown = true;
//     startX = e.pageX - gallery.offsetLeft;
//     scrollLeft = gallery.scrollLeft;
//   });

//   control.addEventListener("mousemove", (e) => {
//     if (!isMouseDown) return;
//     e.preventDefault();
//     const x = e.pageX - gallery.offsetLeft;
//     const walk = (x - startX) * 3; // Ajuste a sensibilidade do movimento aqui
//     gallery.scrollLeft = scrollLeft - walk;
//   });

//   control.addEventListener("mouseup", () => {
//     isMouseDown = false;
//   });

//   control.addEventListener("mouseleave", () => {
//     isMouseDown = false;
//   });
// });

// controls.forEach((control) => {
//   control.addEventListener("click", (e) => {
//     const isLeft = e.target.classList.contains("arrow-left");

//     if (isLeft) {
//       currentItem -= 1;
//     } else {
//       currentItem += 1;
//     }

//     if (currentItem >= maxItems) {
//       currentItem = 0;
//     }

//     if (currentItem < 0) {
//       currentItem = maxItems - 1;
//     }

//     items.forEach((item) => item.classList.remove("current2-item"));
//     items[currentItem].classList.add("current2-item");

//     items[currentItem].scrollIntoView({
//         behavior: "smooth",
//         inline: "center",});
//   });
// });

// const container = document.querySelector(".container2");
// const controls = container.querySelectorAll(".control");
// const gallery = container.querySelector(".gallery");
// const items = gallery.querySelectorAll(".item2");
// const maxItems = items.length;
// let currentItem = 0;
// let intervalId;

// let isMouseDown = false;
// let startX = 0;
// let scrollLeft = 0;

// controls.forEach((control) => {
//   control.addEventListener("mousedown", (e) => {
//     isMouseDown = true;
//     startX = e.pageX - gallery.offsetLeft;
//     scrollLeft = gallery.scrollLeft;
//   });

//   control.addEventListener("mousemove", (e) => {
//     if (!isMouseDown) return;
//     e.preventDefault();
//     const x = e.pageX - gallery.offsetLeft;
//     const walk = (x - startX) * 3; // Ajuste a sensibilidade do movimento aqui
//     gallery.scrollLeft = scrollLeft - walk;
//   });

//   control.addEventListener("mouseup", () => {
//     isMouseDown = false;
//   });

//   control.addEventListener("mouseleave", () => {
//     isMouseDown = false;
//   });
// });

// function startAutoScroll() {
//   intervalId = setInterval(() => {
//     currentItem = (currentItem + 1) % maxItems;
//     items.forEach((item) => item.classList.remove("current2-item"));
//     items[currentItem].classList.add("current2-item");
//     items[currentItem].scrollIntoView({
//       inline: "center"
//     });
//   }, 1000);
// }

// function stopAutoScroll() {
//   clearInterval(intervalId);
// }

// startAutoScroll();

// container.addEventListener("mouseenter", stopAutoScroll);
// container.addEventListener("mouseleave", startAutoScroll);
