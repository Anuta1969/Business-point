//modal 



$('[data-modal=enter]').on('click', function() {
 $('.overlay').fadeIn('slow');

});

$('.modal__close').on('click', function() {
  $('.overlay, #enter').fadeOut('slow');
 
 });

//slider

$(document).ready(function(){
 $('.post__slider1').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  arrows: false,
  adaptiveHeigh: true,
  fade: true,
  
  asNavFor: '.post__slider2',
 

});



$('.post__slider2').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.post__slider1',
  // dots: true,
  centerMode: false,
  arrows: false,
  infinite: true,
  focusOnSelect: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
      }
    }
  ]
});

});

//slider 
$(document).ready(function(){

  $('.feed__wrapper').slick({
  
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
    // centerMode: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="icon/prev.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icon/next.svg"></button>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });
  
  });
  
 





let message = {
  loading: 'Загрузка...',
  success: 'Спасибо! Скоро мы с вами свяжемся!',
  failure: 'Что-то пошло не так...'
};

let form = document.querySelector('.form'),
  input = form.getElementsByTagName('input'),
  statusMessage = document.createElement('div');

  statusMessage.classList.add('status');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  form.appendChild(statusMessage);

  let request = new XMLHttpRequest();
  request.open('POST', 'server.php');
  // request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');


  request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  let formData = new FormData(form);


  let obj ={};
  formData.forEach(function(value, key) {

      obj[key] = value;

  });
  let json = JSON.stringify(obj);

  //request.send(formData);

  request.send(json);
  
  request.addEventListener('readystatechange', function() {

      if (request.readyState < 4) {

              statusMessage.innerHTML = message.loading;
      }   else if (request.readyState === 4 && request.status == 200) {

          statusMessage.innerHTML = message.sucess;

      }   else {
          statusMessage.innerHTML = message.failure;

      }


  });

  for (let i = 0; i < input.length; i++) {

      input[i].value = '';

  }
});















