$(document).ready(function(){
    $(".owl-carousel").owlCarousel(
        {
            items: 4,
            margin: 20,
            dots: false,
            nav: true,
            // autoplay: true,
            items: 4,
            navText: ["<img src='images/home/right.svg'/>", "<img src='images/home/left.svg'/>"],
            responsive: {
                0: {
                    items: 1.
                },
                300: {
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



  const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})
  