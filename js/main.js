$(document).ready(function(){
    $(".owl-carousel").owlCarousel(
        {
            items: 4,
            margin: 20,
            dots: false,
            nav: true,
            loop: true,
            autoplay: true,
            autoplayTimeout: 2500,
            items: 4,
            navText: ["<img src='images/home/right.svg'/>", "<img src='images/home/left.svg'/>"],
            responsive: {
                0: {
                    items: 1.
                },
                520: {
                    items: 2.
                },
                800: {
                    items: 3,
                },
                1100: {
                    items: 4,
                }
            }
        }
    );
  });

  window.addEventListener("scroll", function () {
    shrink();
  });
  
  let navbar = document.getElementById("navbar");
  
  function shrink() {
    if (scrollY > 100) {
      navbar.classList.add("navbar-shrink");
    } else {
          navbar.classList.remove("navbar-shrink");
      }
  }


 

// or



// or

const loading = document.getElementById("loading");

const loadingDuration = 2000; // 2s

setTimeout(() => {
  loading.classList.add('loading-none');
}, loadingDuration);






window.addEventListener("scroll", function () {
  toggleBacktop();
});

let backtop = document.getElementById("backtop");

function toggleBacktop() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backtop.classList.add('backtop-show')
  } else {
    backtop.classList.remove('backtop-show')
  }
}
  