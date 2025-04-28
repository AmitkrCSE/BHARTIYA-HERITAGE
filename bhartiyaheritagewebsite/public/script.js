document.addEventListener('DOMContentLoaded', () => {
  const sidebarNavigationE1 = document.getElementById("sidebar-container-navigation-id");
  const sidebaropenNavigationE1 = document.getElementById("open-nav-sidebar");
  const sidebarCloseNavigationE1 = document.getElementById("sidebar-navigation-close");

  if (sidebarNavigationE1 && sidebaropenNavigationE1 && sidebarCloseNavigationE1) {
      sidebaropenNavigationE1.addEventListener("click", () => {
          sidebarNavigationE1.classList.toggle("sidebar-show");
      });

      sidebarCloseNavigationE1.addEventListener("click", () => {
          sidebarNavigationE1.classList.toggle("sidebar-show");
      });
  } else {
      console.error("One or more sidebar elements not found!");
      // Optionally, you could try to find the elements again after a short delay
      // setTimeout(() => { /* Try finding elements again */ }, 100);
    }
});









 let currentSlide = [0, 0, 0, 0];
    let intervals = []; // Store interval IDs for each slider

    function moveSlide(step, sliderIndex) {
        const sliders = document.querySelectorAll('.slider');
        if (!sliders[sliderIndex]) return;

        const slides = sliders[sliderIndex].children;
        const totalSlides = slides.length;

        currentSlide[sliderIndex] += step;

        if (currentSlide[sliderIndex] < 0) {
            currentSlide[sliderIndex] = totalSlides - 1;
        } else if (currentSlide[sliderIndex] >= totalSlides) {
            currentSlide[sliderIndex] = 0;
        }

        sliders[sliderIndex].style.transform = `translateX(-${currentSlide[sliderIndex] * 100}%)`;
    }

    document.addEventListener('DOMContentLoaded', function() {
        const sliders = document.querySelectorAll('.slider');
        sliders.forEach((slider, index) => {
            intervals[index] = setInterval(() => { // Store the interval ID
                moveSlide(1, index);
            }, 2000);
        });

        // Add event listeners to the buttons
        const buttons = document.querySelectorAll('.image-btn-container button');
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                const sliderIndex = parseInt(this.dataset.sliderIndex);
                const step = this.classList.contains('prev') ? -1 : 1;

                // Stop autoplay for this slider while navigating manually
                clearInterval(intervals[sliderIndex]);
                moveSlide(step, sliderIndex);

                // Restart autoplay after a delay (e.g., 5 seconds)
                intervals[sliderIndex] = setInterval(() => {
                    moveSlide(1, sliderIndex);
                }, 2000);
            });
        });
    });







    function toggleChat() {
        var chatContainer = document.getElementById("chat-container");
        var chatIcon = document.getElementById("chat-icon");

        if (chatContainer.style.display === "none") {
            chatContainer.style.display = "block";
            chatIcon.style.display = "none"; // Hide the icon when chat is open
        } else {
            chatContainer.style.display = "none";
            chatIcon.style.display = "block"; // Show the icon when chat is closed
        }
    }



      








      

      var TxtType = function (el, toRotate, period) {
          this.toRotate = toRotate;
          this.el = el;
          this.loopNum = 0;
          this.period = parseInt(period, 10) || 2000;
          this.txt = '';
          this.tick();
          this.isDeleting = false;
      };
      
      TxtType.prototype.tick = function () {
          var i = this.loopNum % this.toRotate.length;
          var fullTxt = this.toRotate[i];
      
          if (this.isDeleting) {
              this.txt = fullTxt.substring(0, this.txt.length - 1);
          } else {
              this.txt = fullTxt.substring(0, this.txt.length + 1);
          }
      
          this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';
      
          var that = this;
          var delta = 200 - Math.random() * 100;
      
          if (this.isDeleting) {
              delta /= 2;
          }
      
          if (!this.isDeleting && this.txt === fullTxt) {
              delta = this.period;
              this.isDeleting = true;
          } else if (this.isDeleting && this.txt === '') {
              this.isDeleting = false;
              this.loopNum++;
              delta = 500;
          }
      
          setTimeout(function () {
              that.tick();
          }, delta);
      };
      
      window.onload = function () {
          var elements = document.getElementsByClassName('typewrite');
          for (var i = 0; i < elements.length; i++) {
              var toRotate = elements[i].getAttribute('data-type');
              var period = elements[i].getAttribute('data-period');
              if (toRotate) {
                  new TxtType(elements[i], JSON.parse(toRotate), period);
              }
          }
          // INJECT CSS
          var css = document.createElement("style");
          css.type = "text/css";
          css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
          document.body.appendChild(css);
      };
      
      $(document).ready(function(){
      $(".toggle-btn").click(function(){
      $(".nav").toggleClass("nav-active");
      $(".toggle-btn i").toggleClass("nav-active");
      });
      });






      document.addEventListener("DOMContentLoaded", function () {
        let visitorCount = Math.floor(Math.random() * 10000) + 1;  // Generate random count
        document.getElementById("visitor-count").innerText = visitorCount.toLocaleString();
    });


    