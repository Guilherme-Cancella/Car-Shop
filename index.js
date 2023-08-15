let MenuBtn = document.querySelector("#MenuBtn");
let Navbar = document.querySelector(".navbar");

MenuBtn.onclick = () => {
  MenuBtn.classList.toggle("fa-times");
  Navbar.classList.toggle("active");
};

window.onscroll = () => {
  MenuBtn.classList.remove("fa-times");
  Navbar.classList.remove("active");
  ThemeToggle.classList.remove("active");
};

//login form

document.querySelector("#LoginBtn").onclick = () => {
  document.querySelector(".loginFormContainer").classList.toggle("active");
};
document.querySelector("#CloseLoginForm").onclick = () => {
  document.querySelector(".loginFormContainer").classList.remove("active");
};
//homeParallexEffect
// Home Parallex
document.querySelector(".home").onmousemove = (e) => {
  document.querySelectorAll(".homeParallexEffect").forEach((el) => {
    let Speed = parseFloat(el.getAttribute("data-speed"));
    let X = (window.innerWidth - e.pageX * Speed) / 100;
    let Y = (window.innerHeight - e.pageY * Speed) / 100;

    el.style.transform = `translateX(${X}px) translateY(${Y}px)`;
  });
};

document.querySelector(".home").onmouseleave = (e) => {
  document.querySelectorAll(".homeParallexEffect").forEach((el) => {
    el.style.transform = "translateX(0px) translateY(0px);";
  });
};

var swiper = new Swiper(".VehiclesSlider", {
  grabCursor: true,
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

/*featured section car*/

var swiper = new Swiper(".FeatureSlider", {
  grabCursor: true,
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

//Swiper Js For review Slider

var swiper = new Swiper(".ReviewSlider", {
  grabCursor: true,
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

//Theme Toggle
// Seletor para o botão de alternância do tema
let ToggleBtn = document.querySelector(".ToggleBtn");

// Seletor para o componente de alternância de tema
let ThemeToggle = document.querySelector(".themeToggle");

// Adicionar um manipulador de evento ao botão de alternância
ToggleBtn.onclick = () => {
  ThemeToggle.classList.toggle("active");
};

// Selecionar todos os botões de tema
let themeButtons = document.querySelectorAll(".themeToggle .themeBtn");

// Adicionar manipuladores de evento para os botões de tema
themeButtons.forEach((btn) => {
  btn.onclick = () => {
    let color = btn.style.backgroundColor;
    document.documentElement.style.setProperty("--main", color);
  };
});
