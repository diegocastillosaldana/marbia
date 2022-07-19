$(document).ready(function(){
    // MyApp = {
    //     select: {
    //         init: function () {
    //             console.log("entro");
    //             var select = document.getElementById('categoryPortfolio');
    //             var categoria2 = "";
    //             var categoriaServices = localStorage.getItem("ItemServices");
    //             var selection = document.getElementById("categoryPortfolio");
    //             // const options = selection.options[selection.selectedOptions].value;
    //             console.log(categoriaServices); 
    //             // console.log(options);        
    //             select.addEventListener('change', function () {
    //                 var selectedOption = this.options[select.selectedIndex];
    //                 var cateSelect = selectedOption.text.trimStart().trimEnd();
    //                 categoria2 = cateSelect
    //                 $("#cargarMasModulo").attr("style", "display:flex;");
    //                 $(`.item-category`).not(`[data-categoria="${categoria2}"]`).hide();
    //                 $(`.item-category.modulo-mas[data-categoria="${categoria2}"]`).slice(0, 6).show();
    //             });
    //             $("#cargarMasModulo").click(function () {                
    //                 console.log(categoria2);
    //                 $(`.modulo-mas[data-categoria="${categoria2}"]:hidden`).slice(0, 6).slideDown(0);
    //                 if ($(`.modulo-mas[data-categoria="${categoria2}"]:hidden`).length == 0) {
    //                     $("#cargarMasModulo").attr("style", "display:none;");
    //                 }
    //             });
    //         }
    //     }
    // }   


    // if ($('.category form').length > 0) {
    //     MyApp.select.init();
    // }

    $('#name').mask('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', {'translation': {
        A: {pattern: /[A-Z a-z áéúíóñÑÁÉÍÓÚ]/}
      }
    });
    $('#number').mask('YYYYYYYYYY', {'translation': {
        Y: {pattern: /[0-9]/}
      }
    });
     //////////////////////////////// 
     $('.e-promo-slider').slick({
        slidesToShow: 1,
        arrows: true,
        dots: true,
        infinite: false,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 668,
                settings: {
                    slidesToShow: 2,
                    arrows: true,
                    dots: true
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    arrows: true,
                    dots: true
                }
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow:3,
                    arrows: true,
                    dots: true
                }
            }
        ]
    });
    //////////////////////////////// 
    $('.e-photo-slider').slick({
        slidesToShow: 1,
        arrows: false,
        dots: true,
        infinite: false,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 668,
                settings: {
                    slidesToShow: 1,
                    arrows: true,
                    dots: true
                }
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow:1,
                    arrows: true,
                    dots: true
                }
            }
        ]
    });
    // navegacion animada 
    $('a').on('click',function() {
        $(".menu-mobile").animate({width: "0px"});
        $(".menu").hide();
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
            && location.hostname == this.hostname) {
   
                var $target = $(this.hash);
   
                $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
   
                if ($target.length) {
   
                    var targetOffset = $target.offset().top;
   
                    $('html,body').animate({scrollTop: targetOffset}, 1000);
   
                    return false;
   
               }
   
          }
   
     });

     // animaciones de elementos con scroll
     $(window).on("scroll", function(evt) {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > 300) {
          $('.section_who_we_are .container_items .container_left img').animate({'opacity':'1'},800);
        }
        // if(scrollTop > 1300){
        //     $('.contact-us .container_contacts .container_email .container_elements #icon_email').animate({'opacity':'1'},1000);
        //     $('.contact-us .container_contacts .container_phone .container_elements #icon_phone').animate({'opacity':'1'},1000);
        // }
      });
     
      // event close modal about us
      $('.close_about').on('click', function(){
          $('.modal-about-us').hide();
      });

      // evant open modal about us 
      $('#btn-lear-more-whoweare').on('click', function(){
        $('.modal-about-us').show();
      });
      // evento para cerrar modal 
      $('#close_modal_one').on('click',function(){
        $('.modal-services').css({visibility:'hidden'});
      });

      $('#close_modal_two').on('click',function(){
        $('.modal-services-two').css({visibility:'hidden'});
      });

      $('#close_modal_three').on('click',function(){
        $('.modal-services-three').css({visibility:'hidden'});
      });

      $('#close_modal_four').on('click',function(){
        $('.modal-services-four').css({visibility:'hidden'});
      });

      $('#close_modal_five').on('click',function(){
        $('.modal-services-five').css({visibility:'hidden'});
      });



      // apertura de modal por servicio 
      $('.btn-services').on('click',function(){
          var modal = $(this).attr('data-modal');
          console.log(modal)
         $('.modal-services'+modal).css({visibility: 'visible'});
      });
      
      $("#btn_menu_mobile").click(function(){
        $(".menu-mobile").animate({width: "72%"});
        $(".menu").show();
      });

      $("#close_menu").click(function(){
        $(".menu-mobile").animate({width: "0px"});
        $(".menu").hide();
      });
      
      // funcion de efecto para menu 
      $('ul > li a').on('click', function(){
           $('ul > li a').attr('visited','0');
           $(this).attr('visited','1');
            let id = $(this).attr('href');
            let href = id.replace('#','-');
            $('.border').css({
                'height':'0px',
                'top':'37px'
            });
            $('#border'+href).animate({
                height:'2px',
                top:'35px'
              });
      });


      // funcion para cambiar icono de menu mobile
      $('#btn_menu_mobile').on('mouseover',function(){
          $('#btn_menu_mobile').attr('src','images/icon_menu_mobile_white.svg');
      });

       // funcion para cambiar icono de menu mobile
      $('#btn_menu_mobile').on('mouseout',function(){
        $('#btn_menu_mobile').attr('src','images/icon_menu_mobile_black.svg');
    });

    $('.input-control').on('focus',function(){
        let id = $(this).attr('id');
        $('#required_'+id).animate({
            top:'3px',
            opacity:'0'
        })
        if($(this).val() == ''){
            $('#icon_'+id).css({'color':'#000'})
            $(this).css({'border':'1px solid #000'})
        }
    });

    $('.input-control').on('blur',function(){
        let id = $(this).attr('id');
        let valor = $(this).val() 
        if(valor == ''){
            $('#icon_'+id).css({'color':'#F63A3A'})
            $(this).css({'border':'1px solid #F63A3A'})
            $('#required_'+id).animate({
                top:'19px',
                opacity:'1'
            })
        }else{
            $('#icon_'+id).css({'color':'#000'})
            $(this).css({'border':'1px solid #000'})
            $('#required_'+id).animate({
                top:'3px',
                opacity:'0'
            })
        }
    });

    // funcion para validar formulario 
    const validateFormulario = () => {
        let validado = 0
        $("#form-contact-email").find(':input').each(function() {
            let elemento = this
            if(elemento.value == ''){
                $('#icon_'+elemento.id+'').css({'color':'#F63A3A'});
                $('#'+elemento.id+'').css({'border':'1px solid #F63A3A'});
                $('#required_'+elemento.id).animate({
                    top:'19px',
                    opacity:'1'
                })
                validado++
            }
        });
        return validado
    }

    let terminos = "0";
    $('#check1').on('change',function(){
        if(terminos == '0'){
            terminos = $(this).val();
        }else{
            terminos = "0";
        }
    });

     // funcion para envio de datos a email
    $('#form-contact-email').on('submit',function(e){
      var data = $('#form-contact-email').serialize();
      var title = document.getElementById('title_msj');
      e.preventDefault();
     const formValidate = validateFormulario();
     if(formValidate == 0 && terminos == "1"){
        $('#form-contact-email').hide();
        $('#gif_loader').show();
            $.ajax({
                type:'post',
                url:'../enviar-correo.php',
                timeout: 0,
                async: true,
                crossDomain: true,
                crossOrigin: true,
                data:data,
                success : function(response){
                    console.log(response);
                    $('#name').val('');
                    $('#number').val('');
                    $('#email').val('');
                    $('#gif_loader').hide();
                    $('#title_msj').show();
                    setInterval(function(){ 
                        $('#title_msj').hide();
                        $('#form-contact-email').show();
                    }, 4000);
                },
                error : function(){
                    console.log('ha ocurrido un error!!!');
                }
        })
     }else{
         if(terminos == '0'){
             $('#alert_terms').show();
            $('#flecha').show();
            setInterval(function(){ 
                $('#alert_terms').hide();
                $('#flecha').hide();
            }, 4000);
         }
        
     }
       
    });
});