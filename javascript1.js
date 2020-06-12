//estos booleanos los usaba cuando la función posicionarverduras() hacia el proceso de agrandar y reducir el div
//al dividir esto en 2 funciones diferentes no los uso

var yesno1 = true;
var yesno2 = true;
var yesno3 = true;
var yesno4 = true;
var yesno5 = true;


//todas las funciones de posicionarx se encargan mediante un evento de clic de mover cada una de las opciones al centro de la pantalla 
//con una transición y la devuelven a su posición original. (menos posicionarverduras() que es en la que he probado la division en 2 funciones)
function posicionarverduras(){
    
    var verduras = document.getElementById('verduras');
    var p1 = document.getElementById('p1');
    var input = document.getElementsByTagName('input');
    var label = document.getElementsByTagName('label');
    var i;
    var input1 = document.getElementsByClassName('input1');
    var input2 = document.getElementsByClassName('input2');
    var input3 = document.getElementsByClassName('input3');
    var input4 = document.getElementsByClassName('input4');
    var label1 = document.getElementsByClassName('label1');
    var label2 = document.getElementsByClassName('label2');
    var label3 = document.getElementsByClassName('label3');
    var label4 = document.getElementsByClassName('label4');
    var salir = document.getElementsByClassName('return');
    verduras.addEventListener('click', () => {
        if(yesno1 == true){
            verduras.style.width = '800px';
            verduras.style.height = '400px';
            verduras.style.marginLeft = '20%';
            verduras.style.marginTop = '100px';
            verduras.style.transition = 'width 0.5s ease-in, height 0.5s ease-in, margin-left 0.5s ease-in, margin-top 0.5s ease-in';
            yesno1 = false;

            //esconder divs
            tuberculos.style.opacity = '0';
            tuberculos.style.pointerEvents = 'none';
            frutas.style.opacity = '0';
            frutas.style.pointerEvents = 'none';
            postres.style.opacity = '0';
            postres.style.pointerEvents = 'none';
            otros.style.opacity = '0';
            otros.style.pointerEvents = 'none';
            // esconder inputs y labels
            patata.style.opacity = '0';
            patata2.style.opacity = '0';
            zanahoria.style.opacity = '0';
            zanahoria2.style.opacity = '0';
            remolacha.style.opacity = '0';
            remolacha2.style.opacity = '0';
            apio.style.opacity = '0';
            apio2.style.opacity = '0';
            manzana.style.opacity = '0';
            manzana2.style.opacity = '0';
            platano.style.opacity = '0';
            platano2.style.opacity = '0';
            fresa.style.opacity = '0';
            fresa2.style.opacity = '0';
            coco.style.opacity = '0';
            coco2.style.opacity = '0';
            chocolate.style.opacity = '0';
            chocolate2.style.opacity = '0';
            nata.style.opacity = '0';
            nata2.style.opacity = '0';
            helado.style.opacity = '0';
            helado2.style.opacity = '0';
            vainilla.style.opacity = '0';
            vainilla2.style.opacity = '0';
            seitan.style.opacity = '0';
            seitan2.style.opacity = '0';
            tofu.style.opacity = '0';
            tofu2.style.opacity = '0';
            tahini.style.opacity = '0';
            tahini2.style.opacity = '0';
            algas.style.opacity = '0';
            algas2.style.opacity = '0';
            
            

            //estilo de los checkbox, p...
            
            p1.style.color = 'chartreuse';
            p1.style.fontSize = '40px';
            for(i = 0; i < input.length; i++){
                input[i].style.display = 'flex';
            }
            for(i = 0; i < label.length; i++){
                label[i].style.display = 'flex';
            }

            //posicionamiento de los inputs y labels
            input1[0].style.marginLeft = '30%';
            input1[0].style.marginTop = '200px';
            input2[0].style.marginLeft = '55%';
            input2[0].style.marginTop = '200px';
            input3[0].style.marginLeft = '30%';
            input3[0].style.marginTop = '310px';
            input4[0].style.marginLeft = '55%';
            input4[0].style.marginTop = '310px';

            label1[0].style.marginLeft = '35%';
            label1[0].style.marginTop = '195px';
            label2[0].style.marginLeft = '60%';
            label2[0].style.marginTop = '195px';
            label3[0].style.marginLeft = '35%';
            label3[0].style.marginTop = '305px';
            label4[0].style.marginLeft = '60%';
            label4[0].style.marginTop = '305px';


        }
        else{
            verduras.style.width = '10%';
            verduras.style.height = '50px';
            verduras.style.marginLeft = '10px';
            verduras.style.marginTop = '10px';
            yesno1 = true;

            //mostrar divs
            tuberculos.style.opacity = '1';
            tuberculos.style.pointerEvents = 'auto';
            frutas.style.opacity = '1';
            frutas.style.pointerEvents = 'auto';
            postres.style.opacity = '1';
            postres.style.pointerEvents = 'auto';
            otros.style.opacity = '1';
            otros.style.pointerEvents = 'auto';

            //mostrar inputs y labels
            patata.style.opacity = '1';
            patata2.style.opacity = '1';
            zanahoria.style.opacity = '1';
            zanahoria2.style.opacity = '1';
            remolacha.style.opacity = '1';
            remolacha2.style.opacity = '1';
            apio.style.opacity = '1';
            apio2.style.opacity = '1';
            manzana.style.opacity = '1';
            manzana2.style.opacity = '1';
            platano.style.opacity = '1';
            platano2.style.opacity = '1';
            fresa.style.opacity = '1';
            fresa2.style.opacity = '1';
            coco.style.opacity = '1';
            coco2.style.opacity = '1';
            chocolate.style.opacity = '1';
            chocolate2.style.opacity = '1';
            nata.style.opacity = '1';
            nata2.style.opacity = '1';
            helado.style.opacity = '1';
            helado2.style.opacity = '1';
            vainilla.style.opacity = '1';
            vainilla2.style.opacity = '1';
            seitan.style.opacity = '1';
            seitan2.style.opacity = '1';
            tofu.style.opacity = '1';
            tofu2.style.opacity = '1';
            tahini.style.opacity = '1';
            tahini2.style.opacity = '1';
            algas.style.opacity = '1';
            algas2.style.opacity = '1';
            //estilo checkbox etc

            p1.style.color = 'black';
            p1.style.fontSize = '20px';

            for(i = 0; i < input.length; i++){
                input[i].style.display = 'none';
            }
            for(i = 0; i < label.length; i++){
                label[i].style.display = 'none';
            }
            //posicionamiento de los inputs y labels
            input1[0].style.marginLeft = '0.5%';
            input1[0].style.marginTop = '10px';
            input2[0].style.marginLeft = '0.5%';
            input2[0].style.marginTop = '10px';
            input3[0].style.marginLeft = '0.5%';
            input3[0].style.marginTop = '10px';
            input4[0].style.marginLeft = '0.5%';
            input4[0].style.marginTop = '10px';

            label1[0].style.marginLeft = '0.5%';
            label1[0].style.marginTop = '10px';
            label2[0].style.marginLeft = '0.5%';
            label2[0].style.marginTop = '10px';
            label3[0].style.marginLeft = '0.5%';
            label3[0].style.marginTop = '10px';
            label4[0].style.marginLeft = '0.5%';
            label4[0].style.marginTop = '10px';




        }
          

    })
}




function posicionartuberculos(){
    var tuberculos = document.getElementById('tuberculos');
    var input = document.getElementsByTagName('input');
    var label = document.getElementsByTagName('label');
    var i;
    var input1 = document.getElementsByClassName('input1');
    var input2 = document.getElementsByClassName('input2');
    var input3 = document.getElementsByClassName('input3');
    var input4 = document.getElementsByClassName('input4');
    var label1 = document.getElementsByClassName('label1');
    var label2 = document.getElementsByClassName('label2');
    var label3 = document.getElementsByClassName('label3');
    var label4 = document.getElementsByClassName('label4');
    var salir = document.getElementsByClassName('return');
    tuberculos.addEventListener('click', () => {
        if(yesno2 == true){
            tuberculos.style.width = '50%';
            tuberculos.style.height = '300px';
            tuberculos.style.marginLeft = '25%';
            tuberculos.style.marginTop = '100px';
            tuberculos.style.transition = 'width 0.5s ease-in, height 0.5s ease-in, margin-left 0.5s ease-in, margin-top 0.5s ease-in';
            yesno2 = false;
            
            verduras.style.opacity = '0';
            verduras.style.pointerEvents = 'none';
            frutas.style.opacity = '0';
            frutas.style.pointerEvents = 'none';
            postres.style.opacity = '0';
            postres.style.pointerEvents = 'none';
            otros.style.opacity = '0';
            otros.style.pointerEvents = 'none';

            

            //estilo de los checkbox, p...
            
            p2.style.color = 'chartreuse';
            p2.style.fontSize = '40px';
            for(i = 0; i < input.length; i++){
                input[i].style.display = 'flex';
            }
            for(i = 0; i < label.length; i++){
                label[i].style.display = 'flex';
            }

             //posicionamiento de los inputs y labels
             input1[1].style.marginLeft = '30%';
             input1[1].style.marginTop = '200px';
             input2[1].style.marginLeft = '55%';
             input2[1].style.marginTop = '200px';
             input3[1].style.marginLeft = '30%';
             input3[1].style.marginTop = '310px';
             input4[1].style.marginLeft = '55%';
             input4[1].style.marginTop = '310px';
 
             label1[1].style.marginLeft = '35%';
             label1[1].style.marginTop = '195px';
             label2[1].style.marginLeft = '60%';
             label2[1].style.marginTop = '195px';
             label3[1].style.marginLeft = '35%';
             label3[1].style.marginTop = '305px';
             label4[1].style.marginLeft = '60%';
             label4[1].style.marginTop = '305px';

             // esconder inputs y labels
            calabacin.style.opacity = '0';
            calabacin2.style.opacity = '0';
            pimiento.style.opacity = '0';
            pimiento2.style.opacity = '0';
            brocoli.style.opacity = '0';
            brocoli2.style.opacity = '0';
            acelgas.style.opacity = '0';
            acelgas2.style.opacity = '0';
            manzana.style.opacity = '0';
            manzana2.style.opacity = '0';
            platano.style.opacity = '0';
            platano2.style.opacity = '0';
            fresa.style.opacity = '0';
            fresa2.style.opacity = '0';
            coco.style.opacity = '0';
            coco2.style.opacity = '0';
            chocolate.style.opacity = '0';
            chocolate2.style.opacity = '0';
            nata.style.opacity = '0';
            nata2.style.opacity = '0';
            helado.style.opacity = '0';
            helado2.style.opacity = '0';
            vainilla.style.opacity = '0';
            vainilla2.style.opacity = '0';
            seitan.style.opacity = '0';
            seitan2.style.opacity = '0';
            tofu.style.opacity = '0';
            tofu2.style.opacity = '0';
            tahini.style.opacity = '0';
            tahini2.style.opacity = '0';
            algas.style.opacity = '0';
            algas2.style.opacity = '0';
 

        }
        else{
            tuberculos.style.width = '10%';
            tuberculos.style.height = '50px';
            tuberculos.style.marginLeft = '10px';
            tuberculos.style.marginTop = '120px';
            yesno2 = true;
            
            verduras.style.opacity = '1';
            verduras.style.pointerEvents = 'auto';
            frutas.style.opacity = '1';
            frutas.style.pointerEvents = 'auto';
            postres.style.opacity = '1';
            postres.style.pointerEvents = 'auto';
            otros.style.opacity = '1';
            otros.style.pointerEvents = 'auto';

            //mostrar inputs y labels
            calabacin.style.opacity = '1';
            calabacin2.style.opacity = '1';
            pimiento.style.opacity = '1';
            pimiento2.style.opacity = '1';
            brocoli.style.opacity = '1';
            brocoli2.style.opacity = '1';
            acelgas.style.opacity = '1';
            acelgas2.style.opacity = '1';
            manzana.style.opacity = '1';
            manzana2.style.opacity = '1';
            platano.style.opacity = '1';
            platano2.style.opacity = '1';
            fresa.style.opacity = '1';
            fresa2.style.opacity = '1';
            coco.style.opacity = '1';
            coco2.style.opacity = '1';
            chocolate.style.opacity = '1';
            chocolate2.style.opacity = '1';
            nata.style.opacity = '1';
            nata2.style.opacity = '1';
            helado.style.opacity = '1';
            helado2.style.opacity = '1';
            vainilla.style.opacity = '1';
            vainilla2.style.opacity = '1';
            seitan.style.opacity = '1';
            seitan2.style.opacity = '1';
            tofu.style.opacity = '1';
            tofu2.style.opacity = '1';
            tahini.style.opacity = '1';
            tahini2.style.opacity = '1';
            algas.style.opacity = '1';
            algas2.style.opacity = '1';

            //estilo de los checkbox, p...
            
            p2.style.color = 'black';
            p2.style.fontSize = '20px';
            for(i = 0; i < input.length; i++){
                input[i].style.display = 'none';
            }
            for(i = 0; i < label.length; i++){
                label[i].style.display = 'none';
            }

            //posicionamiento de los inputs y labels
            input1[1].style.marginLeft = '0.5%';
            input1[1].style.marginTop = '10px';
            input2[1].style.marginLeft = '0.5%';
            input2[1].style.marginTop = '10px';
            input3[1].style.marginLeft = '0.5%';
            input3[1].style.marginTop = '10px';
            input4[1].style.marginLeft = '0.5%';
            input4[1].style.marginTop = '10px';

            label1[1].style.marginLeft = '0.5%';
            label1[1].style.marginTop = '10px';
            label2[1].style.marginLeft = '0.5%';
            label2[1].style.marginTop = '10px';
            label3[1].style.marginLeft = '0.5%';
            label3[1].style.marginTop = '10px';
            label4[1].style.marginLeft = '0.5%';
            label4[1].style.marginTop = '10px';
 

            

        }
          

    })
}



function posicionarfrutas(){
    var frutas = document.getElementById('frutas');
    var input = document.getElementsByTagName('input');
    var label = document.getElementsByTagName('label');
    var i;
    var input1 = document.getElementsByClassName('input1');
    var input2 = document.getElementsByClassName('input2');
    var input3 = document.getElementsByClassName('input3');
    var input4 = document.getElementsByClassName('input4');
    var label1 = document.getElementsByClassName('label1');
    var label2 = document.getElementsByClassName('label2');
    var label3 = document.getElementsByClassName('label3');
    var label4 = document.getElementsByClassName('label4');
    var salir = document.getElementsByClassName('return');
    frutas.addEventListener('click', () => {
        if(yesno3 == true){
            frutas.style.width = '800px';
            frutas.style.height = '400px';
            frutas.style.marginLeft = '20%';
            frutas.style.marginTop = '100px';
            frutas.style.transition = 'width 0.5s ease-in, height 0.5s ease-in, margin-left 0.5s ease-in, margin-top 0.5s ease-in';
            yesno3 = false;
           
            verduras.style.opacity = '0';
            verduras.style.pointerEvents = 'none';
            tuberculos.style.opacity = '0';
            tuberculos.style.pointerEvents = 'none';
            postres.style.opacity = '0';
            postres.style.pointerEvents = 'none';
            otros.style.opacity = '0';
            otros.style.pointerEvents = 'none';

            // esconder inputs y labels
            calabacin.style.opacity = '0';
            calabacin2.style.opacity = '0';
            pimiento.style.opacity = '0';
            pimiento2.style.opacity = '0';
            brocoli.style.opacity = '0';
            brocoli2.style.opacity = '0';
            acelgas.style.opacity = '0';
            acelgas2.style.opacity = '0';
            patata.style.opacity = '0';
            patata2.style.opacity = '0';
            zanahoria.style.opacity = '0';
            zanahoria2.style.opacity = '0';
            remolacha.style.opacity = '0';
            remolacha2.style.opacity = '0';
            apio.style.opacity = '0';
            apio2.style.opacity = '0';
            chocolate.style.opacity = '0';
            chocolate2.style.opacity = '0';
            nata.style.opacity = '0';
            nata2.style.opacity = '0';
            helado.style.opacity = '0';
            helado2.style.opacity = '0';
            vainilla.style.opacity = '0';
            vainilla2.style.opacity = '0';
            seitan.style.opacity = '0';
            seitan2.style.opacity = '0';
            tofu.style.opacity = '0';
            tofu2.style.opacity = '0';
            tahini.style.opacity = '0';
            tahini2.style.opacity = '0';
            algas.style.opacity = '0';
            algas2.style.opacity = '0';

             //estilo de los checkbox, p...
            
             p3.style.color = 'chartreuse';
             p3.style.fontSize = '40px';
             for(i = 0; i < input.length; i++){
                 input[i].style.display = 'flex';
             }
             for(i = 0; i < label.length; i++){
                 label[i].style.display = 'flex';
             }
 
              //posicionamiento de los inputs y labels
             input1[2].style.marginLeft = '30%';
             input1[2].style.marginTop = '200px';
             input2[2].style.marginLeft = '55%';
             input2[2].style.marginTop = '200px';
             input3[2].style.marginLeft = '30%';
             input3[2].style.marginTop = '310px';
             input4[2].style.marginLeft = '55%';
             input4[2].style.marginTop = '310px';
 
             label1[2].style.marginLeft = '35%';
             label1[2].style.marginTop = '195px';
             label2[2].style.marginLeft = '60%';
             label2[2].style.marginTop = '195px';
             label3[2].style.marginLeft = '35%';
             label3[2].style.marginTop = '305px';
             label4[2].style.marginLeft = '60%';
             label4[2].style.marginTop = '305px';
  
             /* salir[1].style.transition = 'opacity 1.5s ease-in';
              salir[1].style.opacity = '1';
              salir[1].style.marginTop = '280px';*/

           

        }
        else{
            frutas.style.width = '10%';
            frutas.style.height = '50px';
            frutas.style.marginLeft = '10px';
            frutas.style.marginTop = '230px';
            yesno3 = true;

            verduras.style.opacity = '1';
            verduras.style.pointerEvents = 'auto';
            tuberculos.style.opacity = '1';
            tuberculos.style.pointerEvents = 'auto';
            postres.style.opacity = '1';
            postres.style.pointerEvents = 'auto';
            otros.style.opacity = '1';
            otros.style.pointerEvents = 'auto';

            //mostrar inputs y labels
            calabacin.style.opacity = '1';
            calabacin2.style.opacity = '1';
            pimiento.style.opacity = '1';
            pimiento2.style.opacity = '1';
            brocoli.style.opacity = '1';
            brocoli2.style.opacity = '1';
            acelgas.style.opacity = '1';
            acelgas2.style.opacity = '1';
            patata.style.opacity = '1';
            patata2.style.opacity = '1';
            zanahoria.style.opacity = '1';
            zanahoria2.style.opacity = '1';
            remolacha.style.opacity = '1';
            remolacha2.style.opacity = '1';
            apio.style.opacity = '1';
            apio2.style.opacity = '1';
            chocolate.style.opacity = '1';
            chocolate2.style.opacity = '1';
            nata.style.opacity = '1';
            nata2.style.opacity = '1';
            helado.style.opacity = '1';
            helado2.style.opacity = '1';
            vainilla.style.opacity = '1';
            vainilla2.style.opacity = '1';
            seitan.style.opacity = '1';
            seitan2.style.opacity = '1';
            tofu.style.opacity = '1';
            tofu2.style.opacity = '1';
            tahini.style.opacity = '1';
            tahini2.style.opacity = '1';
            algas.style.opacity = '1';
            algas2.style.opacity = '1';

             //estilo de los checkbox, p...
            
             p3.style.color = 'black';
             p3.style.fontSize = '20px';
             for(i = 0; i < input.length; i++){
                 input[i].style.display = 'none';
             }
             for(i = 0; i < label.length; i++){
                 label[i].style.display = 'none';
             }
 
             //posicionamiento de los inputs y labels
            input1[2].style.marginLeft = '0.5%';
            input1[2].style.marginTop = '10px';
            input2[2].style.marginLeft = '0.5%';
            input2[2].style.marginTop = '10px';
            input3[2].style.marginLeft = '0.5%';
            input3[2].style.marginTop = '10px';
            input4[2].style.marginLeft = '0.5%';
            input4[2].style.marginTop = '10px';

            label1[2].style.marginLeft = '0.5%';
            label1[2].style.marginTop = '10px';
            label2[2].style.marginLeft = '0.5%';
            label2[2].style.marginTop = '10px';
            label3[2].style.marginLeft = '0.5%';
            label3[2].style.marginTop = '10px';
            label4[2].style.marginLeft = '0.5%';
            label4[2].style.marginTop = '10px';

        }
          

    })
}



function posicionarpostres(){
    var postres = document.getElementById('postres');
    var input = document.getElementsByTagName('input');
    var label = document.getElementsByTagName('label');
    var i;
    var input1 = document.getElementsByClassName('input1');
    var input2 = document.getElementsByClassName('input2');
    var input3 = document.getElementsByClassName('input3');
    var input4 = document.getElementsByClassName('input4');
    var label1 = document.getElementsByClassName('label1');
    var label2 = document.getElementsByClassName('label2');
    var label3 = document.getElementsByClassName('label3');
    var label4 = document.getElementsByClassName('label4');
    var salir = document.getElementsByClassName('return');
    postres.addEventListener('click', () => {
        if(yesno4 == true){
            postres.style.width = '800px';
            postres.style.height = '400px';
            postres.style.marginLeft = '20%';
            postres.style.marginTop = '100px';
            postres.style.transition = 'width 0.5s ease-in, height 0.5s ease-in, margin-left 0.5s ease-in, margin-top 0.5s ease-in';
            yesno4 = false;

            verduras.style.opacity = '0';
            verduras.style.pointerEvents = 'none';
            tuberculos.style.opacity = '0';
            tuberculos.style.pointerEvents = 'none';
            frutas.style.opacity = '0';
            frutas.style.pointerEvents = 'none';
            otros.style.opacity = '0';
            otros.style.pointerEvents = 'none';

            // esconder inputs y labels
            calabacin.style.opacity = '0';
            calabacin2.style.opacity = '0';
            pimiento.style.opacity = '0';
            pimiento2.style.opacity = '0';
            brocoli.style.opacity = '0';
            brocoli2.style.opacity = '0';
            acelgas.style.opacity = '0';
            acelgas2.style.opacity = '0';
            patata.style.opacity = '0';
            patata2.style.opacity = '0';
            zanahoria.style.opacity = '0';
            zanahoria2.style.opacity = '0';
            remolacha.style.opacity = '0';
            remolacha2.style.opacity = '0';
            apio.style.opacity = '0';
            apio2.style.opacity = '0';
            manzana.style.opacity = '0';
            manzana2.style.opacity = '0';
            platano.style.opacity = '0';
            platano2.style.opacity = '0';
            fresa.style.opacity = '0';
            fresa2.style.opacity = '0';
            coco.style.opacity = '0';
            coco2.style.opacity = '0';
            seitan.style.opacity = '0';
            seitan2.style.opacity = '0';
            tofu.style.opacity = '0';
            tofu2.style.opacity = '0';
            tahini.style.opacity = '0';
            tahini2.style.opacity = '0';
            algas.style.opacity = '0';
            algas2.style.opacity = '0';

             //estilo de los checkbox, p...
            
             p4.style.color = 'chartreuse';
             p4.style.fontSize = '40px';
             for(i = 0; i < input.length; i++){
                 input[i].style.display = 'flex';
             }
             for(i = 0; i < label.length; i++){
                 label[i].style.display = 'flex';
             }
 
              //posicionamiento de los inputs y labels
             input1[3].style.marginLeft = '30%';
             input1[3].style.marginTop = '200px';
             input2[3].style.marginLeft = '55%';
             input2[3].style.marginTop = '200px';
             input3[3].style.marginLeft = '30%';
             input3[3].style.marginTop = '310px';
             input4[3].style.marginLeft = '55%';
             input4[3].style.marginTop = '310px';
 
             label1[3].style.marginLeft = '35%';
             label1[3].style.marginTop = '195px';
             label2[3].style.marginLeft = '60%';
             label2[3].style.marginTop = '195px';
             label3[3].style.marginLeft = '35%';
             label3[3].style.marginTop = '305px';
             label4[3].style.marginLeft = '60%';
             label4[3].style.marginTop = '305px';
  
             /* salir[1].style.transition = 'opacity 1.5s ease-in';
              salir[1].style.opacity = '1';
              salir[1].style.marginTop = '280px';*/
        }
        else{
            postres.style.width = '10%';
            postres.style.height = '50px';
            postres.style.marginLeft = '10px';
            postres.style.marginTop = '340px';
            yesno4 = true;

            verduras.style.opacity = '1';
            verduras.style.pointerEvents = 'auto';
            tuberculos.style.opacity = '1';
            tuberculos.style.pointerEvents = 'auto';
            frutas.style.opacity = '1';
            frutas.style.pointerEvents = 'auto';
            otros.style.opacity = '1';
            otros.style.pointerEvents = 'auto';

            //mostrar inputs y labels
            calabacin.style.opacity = '1';
            calabacin2.style.opacity = '1';
            pimiento.style.opacity = '1';
            pimiento2.style.opacity = '1';
            brocoli.style.opacity = '1';
            brocoli2.style.opacity = '1';
            acelgas.style.opacity = '1';
            acelgas2.style.opacity = '1';
            patata.style.opacity = '1';
            patata2.style.opacity = '1';
            zanahoria.style.opacity = '1';
            zanahoria2.style.opacity = '1';
            remolacha.style.opacity = '1';
            remolacha2.style.opacity = '1';
            apio.style.opacity = '1';
            apio2.style.opacity = '1';
            manzana.style.opacity = '1';
            manzana2.style.opacity = '1';
            platano.style.opacity = '1';
            platano2.style.opacity = '1';
            fresa.style.opacity = '1';
            fresa2.style.opacity = '1';
            coco.style.opacity = '1';
            coco2.style.opacity = '1';
            seitan.style.opacity = '1';
            seitan2.style.opacity = '1';
            tofu.style.opacity = '1';
            tofu2.style.opacity = '1';
            tahini.style.opacity = '1';
            tahini2.style.opacity = '1';
            algas.style.opacity = '1';
            algas2.style.opacity = '1';

            //estilo de los checkbox, p...
            
            p4.style.color = 'black';
            p4.style.fontSize = '20px';
            for(i = 0; i < input.length; i++){
                input[i].style.display = 'none';
            }
            for(i = 0; i < label.length; i++){
                label[i].style.display = 'none';
            }

            //posicionamiento de los inputs y labels
            input1[3].style.marginLeft = '0.5%';
            input1[3].style.marginTop = '10px';
            input2[3].style.marginLeft = '0.5%';
            input2[3].style.marginTop = '10px';
            input3[3].style.marginLeft = '0.5%';
            input3[3].style.marginTop = '10px';
            input4[3].style.marginLeft = '0.5%';
            input4[3].style.marginTop = '10px';

            label1[3].style.marginLeft = '0.5%';
            label1[3].style.marginTop = '10px';
            label2[3].style.marginLeft = '0.5%';
            label2[3].style.marginTop = '10px';
            label3[3].style.marginLeft = '0.5%';
            label3[3].style.marginTop = '10px';
            label4[3].style.marginLeft = '0.5%';
            label4[3].style.marginTop = '10px';
        }
          

    })
}



function posicionarotros(){
    var otros = document.getElementById('otros');
    var input = document.getElementsByTagName('input');
    var label = document.getElementsByTagName('label');
    var i;
    var input1 = document.getElementsByClassName('input1');
    var input2 = document.getElementsByClassName('input2');
    var input3 = document.getElementsByClassName('input3');
    var input4 = document.getElementsByClassName('input4');
    var label1 = document.getElementsByClassName('label1');
    var label2 = document.getElementsByClassName('label2');
    var label3 = document.getElementsByClassName('label3');
    var label4 = document.getElementsByClassName('label4');
    var salir = document.getElementsByClassName('return');
    otros.addEventListener('click', () => {
        if(yesno5 == true){
            otros.style.width = '800px';
            otros.style.height = '400px';
            otros.style.marginLeft = '20%';
            otros.style.marginTop = '100px';
            otros.style.transition = 'width 0.5s ease-in, height 0.5s ease-in, margin-left 0.5s ease-in, margin-top 0.5s ease-in';
            yesno5 = false;

            verduras.style.opacity = '0';
            verduras.style.pointerEvents = 'none';
            tuberculos.style.opacity = '0';
            tuberculos.style.pointerEvents = 'none';
            frutas.style.opacity = '0';
            frutas.style.pointerEvents = 'none';
            postres.style.opacity = '0';
            postres.style.pointerEvents = 'none';

            // esconder inputs y labels
            calabacin.style.opacity = '0';
            calabacin2.style.opacity = '0';
            pimiento.style.opacity = '0';
            pimiento2.style.opacity = '0';
            brocoli.style.opacity = '0';
            brocoli2.style.opacity = '0';
            acelgas.style.opacity = '0';
            acelgas2.style.opacity = '0';
            patata.style.opacity = '0';
            patata2.style.opacity = '0';
            zanahoria.style.opacity = '0';
            zanahoria2.style.opacity = '0';
            remolacha.style.opacity = '0';
            remolacha2.style.opacity = '0';
            apio.style.opacity = '0';
            apio2.style.opacity = '0';
            manzana.style.opacity = '0';
            manzana2.style.opacity = '0';
            platano.style.opacity = '0';
            platano2.style.opacity = '0';
            fresa.style.opacity = '0';
            fresa2.style.opacity = '0';
            coco.style.opacity = '0';
            coco2.style.opacity = '0';
            chocolate.style.opacity = '0';
            chocolate2.style.opacity = '0';
            nata.style.opacity = '0';
            nata2.style.opacity = '0';
            helado.style.opacity = '0';
            helado2.style.opacity = '0';
            vainilla.style.opacity = '0';
            vainilla2.style.opacity = '0';


            //estilo de los checkbox, p...
            
            p5.style.color = 'chartreuse';
            p5.style.fontSize = '40px';
            for(i = 0; i < input.length; i++){
                input[i].style.display = 'flex';
            }
            for(i = 0; i < label.length; i++){
                label[i].style.display = 'flex';
            }

             //posicionamiento de los inputs y labels
             input1[4].style.marginLeft = '30%';
             input1[4].style.marginTop = '200px';
             input2[4].style.marginLeft = '55%';
             input2[4].style.marginTop = '200px';
             input3[4].style.marginLeft = '30%';
             input3[4].style.marginTop = '310px';
             input4[4].style.marginLeft = '55%';
             input4[4].style.marginTop = '310px';
 
             label1[4].style.marginLeft = '35%';
             label1[4].style.marginTop = '195px';
             label2[4].style.marginLeft = '60%';
             label2[4].style.marginTop = '195px';
             label3[4].style.marginLeft = '35%';
             label3[4].style.marginTop = '305px';
             label4[4].style.marginLeft = '60%';
             label4[4].style.marginTop = '305px';
 
            /* salir[1].style.transition = 'opacity 1.5s ease-in';
             salir[1].style.opacity = '1';
             salir[1].style.marginTop = '280px';*/
        }
        else{
            otros.style.width = '10%';
            otros.style.height = '50px';
            otros.style.marginLeft = '10px';
            otros.style.marginTop = '450px';
            yesno5 = true;
            
            verduras.style.opacity = '1';
            verduras.style.pointerEvents = 'auto';
            tuberculos.style.opacity = '1';
            tuberculos.style.pointerEvents = 'auto';
            frutas.style.opacity = '1';
            frutas.style.pointerEvents = 'auto';
            postres.style.opacity = '1';
            postres.style.pointerEvents = 'auto';

            //mostrar inputs y labels
            calabacin.style.opacity = '1';
            calabacin2.style.opacity = '1';
            pimiento.style.opacity = '1';
            pimiento2.style.opacity = '1';
            brocoli.style.opacity = '1';
            brocoli2.style.opacity = '1';
            acelgas.style.opacity = '1';
            acelgas2.style.opacity = '1';
            patata.style.opacity = '1';
            patata2.style.opacity = '1';
            zanahoria.style.opacity = '1';
            zanahoria2.style.opacity = '1';
            remolacha.style.opacity = '1';
            remolacha2.style.opacity = '1';
            apio.style.opacity = '1';
            apio2.style.opacity = '1';
            manzana.style.opacity = '1';
            manzana2.style.opacity = '1';
            platano.style.opacity = '1';
            platano2.style.opacity = '1';
            fresa.style.opacity = '1';
            fresa2.style.opacity = '1';
            coco.style.opacity = '1';
            coco2.style.opacity = '1';
            chocolate.style.opacity = '1';
            chocolate2.style.opacity = '1';
            nata.style.opacity = '1';
            nata2.style.opacity = '1';
            helado.style.opacity = '1';
            helado2.style.opacity = '1';
            vainilla.style.opacity = '1';
            vainilla2.style.opacity = '1';

            //estilo de los checkbox, p...
            
            p5.style.color = 'black';
            p5.style.fontSize = '20px';
            for(i = 0; i < input.length; i++){
                input[i].style.display = 'none';
            }
            for(i = 0; i < label.length; i++){
                label[i].style.display = 'none';
            }

            //posicionamiento de los inputs y labels
            input1[4].style.marginLeft = '0.5%';
            input1[4].style.marginTop = '10px';
            input2[4].style.marginLeft = '0.5%';
            input2[4].style.marginTop = '10px';
            input3[4].style.marginLeft = '0.5%';
            input3[4].style.marginTop = '10px';
            input4[4].style.marginLeft = '0.5%';
            input4[4].style.marginTop = '10px';

            label1[4].style.marginLeft = '0.5%';
            label1[4].style.marginTop = '10px';
            label2[4].style.marginLeft = '0.5%';
            label2[4].style.marginTop = '10px';
            label3[4].style.marginLeft = '0.5%';
            label3[4].style.marginTop = '10px';
            label4[4].style.marginLeft = '0.5%';
            label4[4].style.marginTop = '10px';
        }
          

    })
}


posicionarverduras();
posicionartuberculos();
posicionarfrutas();
posicionarpostres();
posicionarotros();


    function escondermenu(){
        var prevScrollpos = window.pageYOffset;
        window.onscroll = function() {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > 250) {
                document.getElementById("menu").style.opacity = '1';
                document.getElementById("menu").style.pointerEvents = 'auto';

            } else {
                document.getElementById("menu").style.opacity = '0';
                document.getElementById("menu").style.pointerEvents = 'none';
            }
            prevScrollpos = currentScrollPos;
        }
    }
    escondermenu();


