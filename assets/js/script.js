$(function(){
  $("a").click(function(event){
    //método hash evalua el atributo href
    //alert(this.hash);

  //operador de comparación !== distinto que
    if (this.hash !== "") {
      //función para que no se jecute el evento por defecto que es al hacer click
      event.preventDefault();
      // vamos a entregar el hash que se está evaluando de la etiqueta <a>
      var gato=this.hash;

      //selector html y body y método animate
      $("html,body").animate({
        //método scrollTop y offset
        scrollTop: $(gato).offset().top
        //el número 800 se refiere a los milisegundos con que el scroll se demorará en entrar al área
      }, 800, function(){
        window.location.hash=gato;


      }); //cierre método scroolTop

    }//Cierre del if

  }); //Cieere función event

//Método popovers
$('[data-toggle="popover"]').popover();

}); //cierre de la función de jquery
