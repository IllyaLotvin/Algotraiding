$(document).ready(function () {
    var modal = $('.modal'),
        modalBtn = $('[data-toggle=modal]'),
        closeModal = $('.modal__close'),
        modalDialog = $('.modal__dialog');
    const switchModal = () => {
        modal.toggleClass('modal--visible');
    };
    modalBtn.on('click', function(){
        modal.toggleClass('modal--visible');
    });
    closeModal.on('click', function(){
        modal.toggleClass('modal--visible');
    });
    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape") {
          switchModal();
        }       
    })
    modal.on('click', (e) => {
        if (!modalDialog.is(e.target) && modalDialog.has(e.target).length === 0) {
        switchModal();
        }
    })
    
    var mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    })

    var next = $('.swiper-button-next');
    var prev = $('.swiper-button-prev');

    var swiper = new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          },
        },
        navigation: {
            nextEl: '.swiper-button-nextt',
            prevEl: '.swiper-button-prevv',
        }
      });

    $('.sform__form').validate({
        errorElement: "div",
        errorClass: "invalid",
        rules: {
            userName: {          
               required: true,
               minlength: 2,
               maxlength: 25
            },
            userPhone: "required",
            userEmail: {
               required: true,
               email: true
            },
            // policyCheckbox: { 
            //     required: true,
            // }
        },
    
        messages: {
            userName: {
                required: "Имя обязательно",
                minlength: "Имя должно быть не меньше 2 символов",
                maxlength: "Имя должно быть не больше 25 символов"
            },
            userPhone: "Телефон обязателен",
            userEmail: {
                required: "Обязательно укажите Email",
                email: "Введите в формате: name@domein.com "
            }
        },

        // submitHendler: function(form) {
        //     $.ajax({
        //         type: "POST",
        //         url: "page.php",
        //         data: $(form).serialize(),
        //         success: function (response) {
        //             console.log("Ajax" + response);
        //             alert('Проверяйте почту)');
        //             $(form)[0].reset();
        //             modal.toggleClass('modal--visible');
        //         },
        //         // error: function (response) {
        //         //     console.error('Ошибка запроса: ' + response);
        //         //     ym('64368412', 'reachGoal', 'form'); return true;
        //         // }
        //     });
        // }
    });

    $('.question__form').validate({
        errorElement: "div",
        errorClass: "invalidd",
        rules: {
            userName: {          
               required: true,
               minlength: 2,
               maxlength: 25
            },
            userPhone: "required",
            userEmail: {
               required: true,
               email: true
            },
            // policyCheckbox: { 
            //     required: true,
            // }
        },
    
        messages: {
            userName: {
                required: "Имя обязательно",
                minlength: "Имя должно быть не меньше 2 символов",
                maxlength: "Имя должно быть не больше 25 символов"
            },
            userPhone: "Телефон обязателен",
            userEmail: {
                required: "Обязательно укажите Email",
                email: "Введите в формате: name@domein.com "
            }
        },

        // submitHendler: function(form) {
        //     $.ajax({
        //         type: "POST",
        //         url: "page.php",
        //         data: $(form).serialize(),
        //         success: function (response) {
        //             console.log("Ajax" + response);
        //             alert('Проверяйте почту)');
        //             $(form)[0].reset();
        //             modal.toggleClass('modal--visible');
        //         },
        //         // error: function (response) {
        //         //     console.error('Ошибка запроса: ' + response);
        //         //     ym('64368412', 'reachGoal', 'form'); return true;
        //         // }
        //     });
        // }
    });

    $('.modal__form').validate({
        errorElement: "div",
        errorClass: "invaliddd",
        rules: {
            userName: {          
               required: true,
               minlength: 2,
               maxlength: 25
            },
            userPhone: "required",
            userEmail: {
               required: true,
               email: true
            },
            // policyCheckbox: { 
            //     required: true,
            // }
        },
    
        messages: {
            userName: {
                required: "Имя обязательно",
                minlength: "Имя должно быть не меньше 2 символов",
                maxlength: "Имя должно быть не больше 25 символов"
            },
            userPhone: "Телефон обязателен",
            userEmail: {
                required: "Обязательно укажите Email",
                email: "Введите в формате: name@domein.com "
            }
        },

        // submitHendler: function(form) {
        //     $.ajax({
        //         type: "POST",
        //         url: "page.php",
        //         data: $(form).serialize(),
        //         success: function (response) {
        //             console.log("Ajax" + response);
        //             alert('Проверяйте почту)');
        //             $(form)[0].reset();
        //             modal.toggleClass('modal--visible');
        //         },
        //         // error: function (response) {
        //         //     console.error('Ошибка запроса: ' + response);
        //         //     ym('64368412', 'reachGoal', 'form'); return true;
        //         // }
        //     });
        // }
    });

    $(function(){
        $("a[href^='#']").click(function(){
                var _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
                return false;
        });
    });

    $('[type=tel]').mask("+38(000) 00-00-0-00");

    var player;
    $('.video__play').on('click', function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '387',
          width: ' 945',
          videoId: 'mDLiAs5k1oI',
          events: {
            'onReady': videoPlay,
          }
        });
    })
    function videoPlay(event) {
        event.target.playVideo();
    }
    var player2;
    $('.video__play').on('click', function onYouTubeIframeAPIReady() {
        player2 = new YT.Player('player2', {
          height: '387',
          width: '100%',
          videoId: 'mDLiAs5k1oI',
          events: {
            'onReady': videoPlay,
          }
        });
    })
    function videoPlay(event) {
        event.target.playVideo();
    }
});