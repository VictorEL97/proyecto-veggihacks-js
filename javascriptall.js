/*
constante que recoge el valor de una función, añade un evento de click al "burguer" creado
 para que al clicarlo se añada la clase nav-active y al cerrarlo se elimine
esto lo hago para hacer la transición que muestra y esconde el menú responsive.
Además añade una pequeña animación a la aparición de los li del menú en cuestión
*/

const navSlider = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    var reset = true;

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        if(reset == true){
            showall();
            reset = false;
        }
        else{
            hideall();
            reset = true;
        }
    })
}

//funcion que muestra todos los li
function showall(){
    show1();
    show2();
    show3();
    show4();
}

//funciones que muestran los li con una transición
function show1(){
    document.getElementById('first').style.opacity = 1;
    document.getElementById('first').style.transition = "1s ease-in";
    
}
function show2(){
    document.getElementById('second').style.opacity = 1;
    document.getElementById('second').style.transition = "1.25s ease-in";
}
function show3(){
    document.getElementById('third').style.opacity = 1;
    document.getElementById('third').style.transition = "1.5s ease-in";
}
function show4(){
    document.getElementById('fourth').style.opacity = 1;
    document.getElementById('fourth').style.transition = "1.75s ease-in";
}

//funcion que esconde todos los li con transición
function hideall(){
    document.getElementById('first').style.opacity = 0;
    document.getElementById('first').style.transition = "opacity 0.5s ease-in";
    document.getElementById('second').style.opacity = 0;
    document.getElementById('second').style.transition = "opacity 0.5s ease-in";
    document.getElementById('third').style.opacity = 0;
    document.getElementById('third').style.transition = "opacity 0.5s ease-in";
    document.getElementById('fourth').style.opacity = 0;
    document.getElementById('fourth').style.transition = "opacity 0.5s ease-in";



}

navSlider();

//Función para devolver la opacidad al li una vez el reponsive no es de móvil
function myFunction(x) {
    if (x.matches) { 

    }
     else {
        document.getElementById('first').style.opacity = 1;
        document.getElementById('second').style.opacity = 1;
        document.getElementById('third').style.opacity = 1;
        document.getElementById('fourth').style.opacity = 1;
    }
  }
  
  var x = window.matchMedia("(max-width: 760px)")
  myFunction(x) 
  x.addListener(myFunction)

//-------------------------------------------------------------------------------------------------------------------
  //botón para subir arriba al hacer scroll
mybutton = document.getElementById("myBtn");

//Muestra el botón al hacer scroll
window.onscroll = function() {scrollFunction()};

/*function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}*/
function mostrarsubir(){
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > 20) {
        mybutton.style.display = "block";

      } else {
        mybutton.style.display = "none";
      }
      prevScrollpos = currentScrollPos;
  }
}
mostrarsubir();



//Subir arriba al clicar
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var nightcheck = false;
//prueba modo noche
function modonoche(){
  document.addEventListener('keydown', function(event) {
      if (event.ctrlKey && event.key === 'b') {
        if(nightcheck == false){
        document.getElementsByTagName('body')[0].style.backgroundColor = '#393239';
        document.getElementsByTagName('body')[0].style.color = 'white';
        document.getElementsByTagName('a')[0].style.color = 'black';
        document.getElementsByTagName('a')[1].style.color = 'black';
       // document.getElementsByTagName('a')[2].style.color = 'black';
        document.getElementsByTagName('a')[3].style.color = 'black';
        if(document.getElementById('mainbody')){
          document.getElementById('mainbody').style.backgroundColor = '#393239';
          document.getElementById('mainbody').style.backgroundImage = 'none';
        }
        if(document.getElementById('verduras')){
          document.getElementById('p1').style.color = 'white';
          document.getElementById('p2').style.color = 'white';
          document.getElementById('p3').style.color = 'white';
          document.getElementById('p4').style.color = 'white';
          document.getElementById('p5').style.color = 'white';
          document.getElementsByTagName('h1')[0].style.color = 'white';
          document.getElementsByTagName('section')[0].style.backgroundColor = '#393239';
        }
        if(document.getElementById('prueba')){
          var recetas = document.getElementsByClassName('receta');
          for(var i = 0; i < recetas.length; i++){
           recetas[i].style.backgroundColor = '#393239';
          }
         
        }
        if(document.getElementById('yoda')){
          document.getElementById('form1').style.backgroundColor = '#393239';
          document.getElementById('contador').style.color = 'black';
          document.getElementsByTagName('p')[0].style.color = 'black';
          document.getElementsByTagName('p')[1].style.color = 'black';
          document.getElementsByTagName('p')[2].style.color = 'black';
        }
        nightcheck = true;
      }
      else{
        document.getElementsByTagName('body')[0].style.backgroundColor = 'white';
        document.getElementsByTagName('body')[0].style.color = 'black';
        document.getElementsByTagName('a')[0].style.color = 'white';
        document.getElementsByTagName('a')[1].style.color = 'white';
        document.getElementsByTagName('a')[2].style.color = 'white';
        document.getElementsByTagName('a')[3].style.color = 'white';
        if(document.getElementById('mainbody')){
          document.getElementById('mainbody').style.backgroundColor = 'lightgrey';
          document.getElementById('mainbody').style.backgroundImage = 'lightgrey';
        }
        if(document.getElementById('verduras')){
          document.getElementById('p1').style.color = 'black';
          document.getElementById('p2').style.color = 'black';
          document.getElementById('p3').style.color = 'black';
          document.getElementById('p4').style.color = 'black';
          document.getElementById('p5').style.color = 'black';
          document.getElementsByTagName('h1')[0].style.color = 'black';
          document.getElementsByTagName('section')[0].style.backgroundColor = 'seashell';
      }
      if(document.getElementById('prueba')){
        var recetas = document.getElementsByClassName('receta');
        for(var i = 0; i < recetas.length; i++){
         recetas[i].style.backgroundColor = 'seashell';
        }
      }
      if(document.getElementById('yoda')){
        document.getElementById('form1').style.backgroundColor = 'seashell';
       
      }
        nightcheck = false;
  }
}
});
}

modonoche();


