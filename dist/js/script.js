$(document).ready(function(){

    // слайдер
    $('.feedback__carousel').slick({
        prevArrow: '<button type="button" class="slick-prev"> < </button>',
        nextArrow: '<button type="button" class="slick-next"> > </button>'
    });

    //    Плавный скрол по ссылкам
    $("a[href^='#']").click(function() {
        const _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
  });

        // таймер
  let time = 1800;
  const countDownEl = document.querySelector('.delivery__timer');
  setInterval(updateCountDown, 1000);
  function updateCountDown() {
    let minutes = Math.floor(time / 60),
        seconds = time % 60;
        minutes = minutes < 10 ? "0" + minutes: minutes;
        seconds = seconds < 10 ? "0" + seconds: seconds;
        countDownEl.innerHTML = `${minutes} : ${seconds}`;
        time--;
        
  }

