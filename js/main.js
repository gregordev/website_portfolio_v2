
/*
  SMOOTH SCROLLING
*/
$(function() {
  $('a[href*=\\#]:not([href=\\#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-100
        }, 100);
        return false;
      }
    }
  });
});

/*
  TYPED JS
*/


var typed = new Typed(".typed", {
  strings: ["Mam na imię Grzegorz","Mam na imię Grzegorz", "Na co dzień studiuję", "Mieszkam w Krakowie", "  Tworzę strony internetowe"],
  typeSpeed: 50,
  backSpeed: 35,
  contentType: 'text',
  smartBackspace: true
});

var typed = new Typed(".typed-2", {
  strings: ["Tworzę strony internetowe"],
  typeSpeed: 50,
  backSpeed: 35,
  contentType: 'text',
  smartBackspace: true
});

/*
  NAV HANDLER FOR MOBILE
*/

const links = document.querySelectorAll('.nav-links');
const nav = document.querySelector('.navbar');
const mainHeader = document.querySelector('.main-header');
const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.getElementById('main-nav');
const navToggleLabel = document.querySelector('.nav-toggle-label');


function navHandler() {
  let query = window.matchMedia("(max-width: 800px)");

  if (query.matches) {
    if (navToggle.checked) {
    
      console.log('true');
      nav.style.maxHeight = '0px';
      navToggle.checked = false;
      mainNav.style.opacity = '0';
      mainNav.style.visibility = 'hidden';
    } else if (navToggle.checked === false) {
      console.log('false');
      nav.style.maxHeight = '100vh';
      navToggle.checked = true;
      mainNav.style.opacity = '1';
      mainNav.style.visibility = 'visible';
    }
  }


}

links.forEach(function(x) {
  x.addEventListener('click', navHandler);
});

/*
  NAV SCROLLSPY FOR DESCTOP [JQUERY]
*/

const navLinks = $('nav ul li a'),
navH = $('#main-nav').height(),
section = $('section'),
documentEl = $(document);



documentEl.on('scroll', function() {
let currentScrollPos = documentEl.scrollTop();
              
section.each(function() {
  let self = $(this);
  
    if ( self.offset().top < (currentScrollPos + navH + 130) && (currentScrollPos + navH + 130) < (self.offset().top + self.outerHeight()) ) {
      let targetClass = '.' + self.attr('class') + '-marker';
      navLinks.removeClass('active');
      $(targetClass).addClass('active');
      }
  });
              
});

  /*
    Contact form prevent reloading & validation
  */

 $(document).ready(function () {

  const form = document.querySelector('#contact-form');
  const inputs = form.querySelectorAll('input[required], textarea[required]');

//wyłączamy domyślną walidację
form.setAttribute('novalidate', true);

const displayFieldError = function(elem) {
  const fieldRow = elem.closest('.form-row');
  const fieldError = fieldRow.querySelector('.field-error');
  //jeżeli komunikat z błędem pod polem nie istnieje...
  if (fieldError === null) {
      //pobieramy z pola tekst błędu
      //i tworzymy pole
      const errorText = elem.dataset.error;
      const divError = document.createElement('div');
      divError.classList.add('field-error');
      divError.innerText = errorText;
      fieldRow.appendChild(divError);
  }
};

const hideFieldError = function(elem) {
  const fieldRow = elem.closest('.form-row');
  const fieldError = fieldRow.querySelector('.field-error');
  //jeżeli pobrane pole istnieje - usuń je
  if (fieldError !== null) {
      fieldError.remove();
  }
};



[...inputs].forEach(elem => {
  elem.addEventListener('input', function() {
      if (!this.checkValidity()) {
          this.classList.add('error');
      } else {
          this.classList.remove('error');
          hideFieldError(this);
      }
  });
});

const checkFieldsErrors = function(elements) {
  //ustawiamy zmienną na true. Następnie robimy pętlę po wszystkich polach
  //jeżeli któreś z pól jest błędne, przełączamy zmienną na false.
  let fieldsAreValid = true;

  [...elements].forEach(elem => {
      if (elem.checkValidity()) {
          hideFieldError(elem);
          elem.classList.remove('error');
      } else {
          displayFieldError(elem);
          elem.classList.add('error');
          fieldsAreValid = false;
      }
  });

  return fieldsAreValid;
};




  $('#contact-form').on('submit', function(e) {
    e.preventDefault();
    
    var name = $.trim($('#name').val());
    var message = $.trim($('#message').val());
    var email = $.trim($('#email').val());
    var phone = $.trim($('#phone').val()); 



    if (checkFieldsErrors(inputs)) {
      $.ajax({  
        url:"mailer.php",  
        method:"POST",  
        data:{name:name, message:message, email:email, phone:phone},  
        success:function(data){  
             $("form").trigger("reset");    
        }  
      }); 
    } else {
      
    }

});

$('.owl-carousel').owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 2000,
  nav: true,
  autoplayHoverPause: true,
  navText : ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>']
});



const inputName = document.getElementById('name');
const inputMail = document.getElementById('email');
const inputPhone = document.getElementById('phone');
const label1 = document.getElementById('label-1');
const label2 = document.getElementById('label-2');
const label3 = document.getElementById('label-3');

// Animated Form
inputName.addEventListener('blur', function() {

  if (inputName.value.length !== 0) {
    label1.classList.add('focusJS--1');
    console.log('wywolanie');
  } else {
    label1.classList.remove('focusJS--1');
  }
});

inputMail.addEventListener('blur', function() {

  if (inputMail.value.length !== 0) {
    label2.classList.add('focusJS--2');
    console.log('wywolanie');
  } else {
    label2.classList.remove('focusJS--2');
  }
});

inputPhone.addEventListener('blur', function() {

  if (inputPhone.value.length !== 0) {
    label3.classList.add('focusJS--3');
    console.log('wywolanie');
  } else {
    label3.classList.remove('focusJS--3');
  }
});




  /*
    Loading active class for navigation
  */  
  navLinks.removeClass('active');
  const sectionHeading = document.querySelector('.heading-marker');
  const sectionAbout = document.querySelector('.about-marker');
  const sectionProjects = document.querySelector('.projects-marker');
  let currentPos = $(document).scrollTop();
  console.log(currentPos);
  
  console.log(sectionAbout);
  if (currentPos >= 0 && currentPos <= 498) {
    
    $(sectionHeading).addClass('active');
  } else if (currentPos > 1400 && currentPos < 2500 ) {
    $(sectionProjects).addClass('active');
  } else if (currentPos > 499 && currentPos < 1399) {
    
    $(sectionAbout).addClass('active');
  } else {

  }

  /*
    SEND MAIL 
  */

});



/*
  NAV DESKTOP BOX SHADOW
*/



$(window).scroll(function() {
  var scrollPosY = window.pageYOffset | document.body.scrollTop;
  if(scrollPosY > 65) {
    mainHeader.className = ('main-header boxshadow');
  } else if(scrollPosY <= 65) {
    mainHeader.className =  ('main-header');
  }
});

/*
  FORM FOCUS LABEL HANDLING
*/