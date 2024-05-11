// const hamburguer = document.querySelector(".hamburguer");
// const navMenu = document.querySelector(".nav-menu");

// hamburguer.addEventListener("click", () => {
//     hamburguer.classList.toggle('active');
//     navMenu.classList.toggle('active');
// })




const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");
const navItems = document.querySelectorAll(".nav-menu li");

hamburguer.addEventListener("click", () => {
  hamburguer.classList.toggle('active');
  navMenu.classList.toggle('active');
});

navItems.forEach(item => {
  item.addEventListener("click", () => {
    hamburguer.classList.remove('active');
    navMenu.classList.remove('active');
  });
});




  
  // Dark / light mode
  
  const btn = document.getElementById("modeToggle");
  const btn2 = document.getElementById("modeToggle2");
  const themeIcons = document.querySelectorAll(".icon");
  const themeIcons2 = document.querySelectorAll(".icon2");
  const currentTheme = localStorage.getItem("theme");
  
  if (currentTheme === "dark") {
    setDarkMode();
  }
  
  btn.addEventListener("click", function () {
    setTheme();
  });
  
  btn2.addEventListener("click", function () {
    setTheme();
  });
  
  function setTheme() {
    let currentTheme = document.body.getAttribute("theme");
  
    if (currentTheme === "dark") {
      setLightMode();
    } else {
      setDarkMode();
    }
  }
  
  function setDarkMode() {
    document.body.setAttribute("theme", "dark");
    localStorage.setItem("theme", "dark");
  
    themeIcons.forEach((icon) => {
      icon.src = icon.getAttribute("src-dark");
    });
    themeIcons2.forEach((icon2) => {
      icon2.src = icon2.getAttribute("src-dark");
    });
  }
  
  function setLightMode() {
    document.body.removeAttribute("theme");
    localStorage.setItem("theme", "light");
  
    themeIcons.forEach((icon) => {
      icon.src = icon.getAttribute("src-light");
    });
    themeIcons2.forEach((icon2) => {
      icon2.src = icon2.getAttribute("src-light");
    });
  }
  
   /* servicos imagem carroseu */
  
  var $cont = document.querySelector('.cont');
  var $elsArr = [].slice.call(document.querySelectorAll('.el'));
  var $closeBtnsArr = [].slice.call(document.querySelectorAll('.el__close-btn'));
  
  setTimeout(function() {
    $cont.classList.remove('s--inactive');
  }, 200);
  
  $elsArr.forEach(function($el) {
    $el.addEventListener('click', function() {
      if (this.classList.contains('s--active')) return;
      $cont.classList.add('s--el-active');
      this.classList.add('s--active');
    });
  });
  
  $closeBtnsArr.forEach(function($btn) {
    $btn.addEventListener('click', function(e) {
      e.stopPropagation();
      $cont.classList.remove('s--el-active');
      document.querySelector('.el.s--active').classList.remove('s--active');
    });
  });