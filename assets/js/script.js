$(function(){

  $("a").click(function(event){
    if (this.hash !== "") {
      event.preventDefault();

      var gato =  this.hash;

      $("html,body").animate({
        scrollTop: $(gato).offset().top
//ojo con las putas comas
      }, 800, function(){
        window.location.hash = gato;
      });
    }

  });

  //funcion nº2
  $('[data-toggle="popover"]').popover();



});
