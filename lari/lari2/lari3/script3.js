xgallery_images = [
  {
    url: "https://previews.dropbox.com/p/thumb/ACRi0Lp9949QgPW741qJNCQsQ4Fld-WsM1LW6sNXbHUiFLQT60gKWpoG_ufoOrmFBOv9W8XE1UyLCRLFEkOt4xbHIyiEpm2GGoBiU9dKkqheWAd59CtgByyivEzGvM9YZKZbhGkk3lTlOxn9TcSj-Lsp1RkUa649c1-v2Es9l2BXbj1l2SvAeTiRzhk--mowYQP0FXdxr20O7qRqpONgeStxt5CNh5YXC5QE3-d2eSqbZlaYjkxo85gI0Av8uFxNb92g3fti2LTRam5Zkk12Xl_W6zrBvLa9KLuhkM1NmTtm0hEdY9RUAJcywlOaaJ8tUixdAMngk0WzPjdJVzdwUbE9/p.jpeg",
    prompt: "Linda, Sorridente",
    date: "09.05.2024",
    tags: "Pessoas",
  },{
    url: "https://boletimdopaddock.com.br/wp-content/uploads/2024/01/Charles-Leclerc-Ferrari-F1.webp",
    prompt: "...",
    date: "00.00.0000",
    tags: "Abstrato"
  },{
    url: "https://www.artmajeur.com/medias/standard/t/o/tony-rubino/artwork/16690414_snoopcool.jpg",
    prompt: "...",
    date: "00.00.0000",
    tags: "Abstrato"
  },{
    url: "https://bhasico.com.br/wp-content/uploads/2020/10/snoopy-710x399.png",
    prompt: "...",
    date: "00.00.0000",
    tags: "Abstrato"
  },{
    url: "https://naspistas.com/wp-content/uploads/2023/10/charles-leclerc-ferrari.jpg",
    prompt: "...",
    date: "00.00.0000",
    tags: "Abstrato"
  },{
    url: "https://qgdopop.com.br/wp-content/uploads/2023/11/Taylor-Swift-life-101123-tout-b99b188465254ec0a8eb50fa653b51dc.jpg",
    prompt: "...",
    date: "00.00.0000",
    tags: "Abstrato"
  },{
    url: "https://uploads.maisgoias.com.br/2024/04/278f749f-taylor-swift-the-eras-tour-movie-premiere-101223-2-f67fae288db543988e271196614c082b.jpg",
    prompt: "...",
    date: "00.00.0000",
    tags: "Abstrato"
  },{
    url: "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2021/06/22647_121C56F8469C120B.jpg?w=1220&h=674&crop=1",
    prompt: "...",
    date: "00.00.0000",
    tags: "Abstrato"
  },{
    url: "https://media.contentapi.ea.com/content/dam/ea/f1/f1-23/common/articles/patch-note-v109/pj-f123-bel-w01-rus-unmarked.jpg.adapt.crop191x100.628p.jpg",
    prompt: "...",
    date: "00.00.0000",
    tags: "Abstrato"
  }
];


$(document).ready(function(){
  // SHUFFLE THE GALLERY
  shuffle(xgallery_images);

  // LOAD IMAGES INTO GALLERY
  xgallery_images.forEach(function(xg_image, i){
    $(".xg-container").append(createXGImage(xg_image, i));
  });

  // HOVER GALLERY IMAGE
  $(".xg-img-wrap").mouseenter(function(){
    var el = $(this);
    var to = setTimeout(function(){
      el.find(".xg-img-info").addClass("xg-img-info-open");
    }, 100);
    el.mouseleave(function(){
      clearInterval(to);
      el.find(".xg-img-info").removeClass("xg-img-info-open");
    });
  });


  // FILTER BUTTON CLICK
  $(".xg-btn-tag").on("click", function(){
    if($(this).hasClass("xg-btn-active")){
      return;
    }
    var tagFilter = $(this).data("tag");
    $(".xg-btn-tag").removeClass("xg-btn-active");
    $(this).addClass("xg-btn-active");

    $(".xg-loader").fadeIn(100);

    if(tagFilter == "all"){
      $(".xg-img-wrap").fadeIn(100);
    }else{
      $(".xg-img-wrap").fadeIn(100);
      $(".xg-img-wrap").each(function(i, el){
        if(!$(el).data("tags").includes(tagFilter))
          $(el).fadeOut(100);
      });
    }
    $(".xg-loader").delay(500).fadeOut(300);
  });



  // OPEN IMAGE PREVIEW
  $(".xg-img-wrap").on("click", function(){
    var id = $(this).data("index");

    $("body").addClass("scroll-fixed");

    $(".xg-img-preview").fadeIn(700);
    $(".xg-img-preview").html(createXGImagePreview(xgallery_images[id]));
  });


  // ZOOM IN IMAGE PREVIEW
  $(document).on("click", ".xgp-img", function(){
    $(".xgp-close").toggleClass("x-cloak");
    $(this).closest(".xgp-img-inner").siblings(".xgp-details").fadeToggle(700);
    $(this).closest(".xgp-img-inner").toggleClass("xgp-zoomed-inner");
    $(this).toggleClass("xgp-zoomed");
    $(".xgp-wrap").toggleClass("xg-overflow");
  });


  // CLOSE PREVIEW - ESCAPE
  $(document).keyup(function(e) {
    if (e.key === "Escape") {
      $("body").removeClass("scroll-fixed");

      $(".xg-img-preview").fadeOut(500);
    }
  });



  // CLOSE PREVIEW - CLICK
  $(document).on("click", ".xgp-close", function(e) {
    $("body").removeClass("scroll-fixed");

    $(".xg-img-preview").fadeOut(500);
  });
});



function createXGImagePreview(xgi){
  var xg_img =
      '<div class="xgp-wrap">\
<div class="xgp-close"></div>\
<div class="xgp-img-inner">\
<img draggable="false" class="xgp-img" src="'+xgi.url+'">\
</div>\
<div class="xgp-details">\
<div class="xgp-prompt">'+xgi.prompt+'</div>\
<div class="xgp-date">'+xgi.date+'</div>\
<div class="xgp-tags">\
<div class="xgp-tag">'+xgi.tags+'</div>\
</div>\
</div>';

  return xg_img;
}

function createXGImage(xgi, i){
  var xg_img =
      '<div class="xg-img-wrap" data-tags="'+xgi.tags+'" data-index="'+i+'">\
<div class="xg-img-info">\
<div class="xg-img-info-inner">\
<div class="xg-img-prompt">'+xgi.prompt+'</div>\
<div class="xg-img-date">'+xgi.date+'</div>\
</div>\
</div>\
<img draggable="false" class="xg-img" src="'+xgi.url+'">\
</div>';

  return xg_img;
}


function shuffle(arr) {
  let index = arr.length,  randomIndex;
  while (index != 0) {
    randomIndex = Math.floor(Math.random() * index);
    index--;

    [arr[index], arr[randomIndex]] = [
      arr[randomIndex], arr[index]];
  }

  return arr;
}



window.addEventListener('scroll', function() {
    let scroll = document.querySelector('.scrollTop')
      scroll.classList.toggle('active', window.scrollY > 450)
})


function voltarAoTopo() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }