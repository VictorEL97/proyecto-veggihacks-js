


var recetas = [
    {
        "nombre" : "Tortilla de patatas",
        "dificultad" : "media",
        "duracion" : "1h",
        "ingredientes" : ["patata", "huevo", "cebolla", "sal", "aceite"],
        "categoria" : "tortillas",
        "procedimiento" : "Pela y pica la cebolla en dados medianos. Limpia el pimiento verde, retírale el tallo y las pepitas y córtalo en dados."
        +"<br>Si las patatas estuvieran sucias, pásalas por agua. Pélalas, córtalas por la mitad a lo largo y después corta cada trozo en medias lunas finas de 1/2 centímetros."
        +"<br>Introduce todo en la sartén, sazona a tu gusto y fríe a fuego suave durante 25-30 minutos."
        +"<br>Retira la fritada y escúrrela. Pasa el aceite a un recipiente y resérvalo. Limpia la sartén con papel absorbente de cocina."
        +"<br>Casca los huevos, colócalos en un recipiente grande y bátelos.<br> Sálalos a tu gusto, agrega la fritada de patatas, cebolla y pimiento y mezcla bien."
        +"<br>Coloca la sartén nuevamente en el fuego, agrega un chorrito del aceite reservado y agrega la mezcla. Remueve un poco con una cuchara de madera y espera (20 segundos) a que empiece a cuajarse."
        +"<br>Separa los bordes, cubre la sartén con un plato de mayor diámetro que la sartén y dale la vuelta. Échala de nuevo para que cuaje por el otro lado.",
        "enlace" : "./img/recetatortillapatatas.jpg"
    },
    {
        "nombre" : "Banana split",
        "dificultad" : "baja",
        "duracion" : "10min",
        "ingredientes" : ["platano", "chocolate", "nata", "helado"],
        "categoria" : "helados",
        "procedimiento" : "Pon la nata líquida en un bol y bate con la varilla eléctrica (puedes utilizar la manual) hasta montarla. En el último momento, añade el azúcar y bate un poco más. Introduce la nata montada en una manga pastelera y deja enfriar en el frigorífico durante unos minutos. Reserva."
        +"Pela los plátanos y pártelos por la mitad a lo largo. Colócalos en el recipiente donde después los servirás (2 mitades de plátano en cada recipiente). Pon entre las dos mitades de plátano (en fila, a lo largo) una bola de helado de vainilla, otra de chocolate y una más de vainilla."
         +"Pon encima del helado unos montoncitos de nata y añade las avellanas picadas. Corta las fresas por la mitad y pon media fresa encima de cada montón. Por último, agrega unas líneas de sirope de chocolate por todo el postre y decora con unas hojitas de menta. Sirve el banana split.",
         "enlace" : "./img/recetabananasplit.jpg"
    },
    {
        "nombre" : "Patatas fritas",
        "dificultad" : "baja",
        "duracion" : "5min",
        "ingredientes" : ["patata", "aceite", "sal"],
        "categoria" : "fritos",
        "procedimiento" : "1.- Lo primero a tener en cuenta,como ya decía, es el corte. El grosor del mismo sí importa. Y mucho. Pelamos la patata y la cortamos en forma de bastoncitos. El tamaño del mismo debe ser de alrededor de 1 centímetro de grosor. Esté es el tamaño estandar y más común en una patata frita. Con él, nos aseguramos que tenga una carcasa crujiente y un interior blandito y sabroso."
       + "2.- El siguiente paso, es lavar las patatas. Con ello, eliminaremos el exceso almidón que contienen y conseguiremos que, no se peguen entre sí y que nos queden más crujientes. Así que las colocamos sobre una escurridera y las lavamos con abundante agua."
        +"3.- Les escurrimos bien el exceso de agua y procedemos a freír las patatas. Y lo vamos a hacer en dos fases muy diferenciadas entre sí. En la primera,ponemos en una sartén o freidora abundante aceite de oliva a fuego medio; el suficiente como para que cubra por completo las patatas, y las metemos dentro. Dejamos que vayan cocinándose cerca de 10 minutos,dependiendo de la dureza de la patata. Cuando esté blanda, la retiramos del aceite y las dejamos mínimo 30 minutos para que se enfríen. Este tiempo de reposo, es crucial así que, si tienes tiempo, no te lo saltes."
        +"4.- Pasado este tiempo, calentamos el aceite al máximo y metemos en él las patatas. Cuando estén doradas y a nuestro gusto, las sacamos. Alrededor de dos minutos. Las ponemos sobre papel absorbente y les echamos la sal.",
        "enlace" : "./img/recetapatatasfritas.jpg"
    },
    {
        "nombre" : "Bizcocho de zanahoria",
        "dificultad" : "media",
        "duracion" : "1h",
        "ingredientes" : ["zanahoria", "harina", "levadura", "aceite", "huevo", "azucar"],
        "categoria" : "tartas y bizcochos",
        "procedimiento" : "Trituramos las zanahorias junto con el aceite."
        + "Echamos los huevos en un bol y los batimos con el azúcar, añadiendo luego la pasta de zanahoria que habíamos preparado ccon anterioridad. Incorporamos la harina y la levadura tamizadas y mezclamos con cuidado."
        + "Engrasamos con aceite o mantequilla un mole de 24 cm y echamos la masa. Hornear a 185ºC unos 30 minutos o hasta que veamos que al pinchar con un palillo o la punta de cuchillo el centro del bizcocho de zanahoria éste sale limpio.",
        "enlace" : "./img/recetabizcochozanahoria.jpg"
    }
]

//función que busca en función de los ingredientes seleccionados aquellas recetas que los contienen todos, mostrándolas en una nueva página
function buscarRecetas(){

    var ingredientes = [];
    var recetas_contenidas = [];


    if(document.getElementById('calabacin').checked == true){
        ingredientes.push('calabacin');
    }
    if(document.getElementById('pimiento').checked == true){
        ingredientes.push('pimiento');
    }
    if(document.getElementById('brocoli').checked == true){
        ingredientes.push('brocoli');
    }
    if(document.getElementById('acelgas').checked == true){
        ingredientes.push('acelgas');
    }
    if(document.getElementById('patata').checked == true){
        ingredientes.push('patata');
    }
    if(document.getElementById('zanahoria').checked == true){
        ingredientes.push('zanahoria');
    }
    if(document.getElementById('remolacha').checked == true){
        ingredientes.push('remolacha');
    }
    if(document.getElementById('apio').checked == true){
        ingredientes.push('apio');
    }
    if(document.getElementById('manzana').checked == true){
        ingredientes.push('manzana');
    }
    if(document.getElementById('platano').checked == true){
        ingredientes.push('platano');
    }
    if(document.getElementById('fresa').checked == true){
        ingredientes.push('fresa');
    }
    if(document.getElementById('coco').checked == true){
        ingredientes.push('coco');
    }
    if(document.getElementById('chocolate').checked == true){
        ingredientes.push('chocolate');
    }
    if(document.getElementById('nata').checked == true){
        ingredientes.push('nata');
    }
    if(document.getElementById('helado').checked == true){
        ingredientes.push('helado');
    }
    if(document.getElementById('vainilla').checked == true){
        ingredientes.push('vainilla');
    }
    if(document.getElementById('seitan').checked == true){
        ingredientes.push('seitan');
    }
    if(document.getElementById('tofu').checked == true){
        ingredientes.push('tofu');
    }
    if(document.getElementById('tahini').checked == true){
        ingredientes.push('tahini');
    }
    if(document.getElementById('algas').checked == true){
        ingredientes.push('algas');
    }

    console.log(ingredientes);

    
    //
    for(var i = 0; i < recetas.length; i++){
        var comprobar = true;
        for(var x = 0; x < ingredientes.length; x++){
            if(recetas[i].ingredientes.includes(ingredientes[x]) && comprobar == true && ingredientes[x].length > 0){
                
            }
            else{
                comprobar = false;
            }
            
        }
        if(comprobar == true){
            recetas_contenidas.push(recetas[i]);
        }
    }
    console.log(recetas_contenidas);

    var rec = '<h1>RECETAS</h1>';
    for(var i = 0; i < recetas_contenidas.length; i++){
        rec = rec + '<div class="receta"><h2>' + recetas_contenidas[i].nombre + '</h2>'
        + '<p><strong>Dificultad:</strong> '+ recetas_contenidas[i].dificultad
        +'</p><p><strong>Duración:</strong> '+ recetas_contenidas[i].duracion 
        +'</p><p><strong>Ingredientes:</strong> '+ recetas_contenidas[i].ingredientes 
        +'</p><p><strong>Categoria:</strong> '+ recetas_contenidas[i].categoria 
        +'</p><p><strong>Procedimiento:</strong></p> '+ recetas_contenidas[i].procedimiento 
        +'<img class="imagen" src="'+recetas_contenidas[i].enlace+'"><br></div>';
    }
    //aquí creo la página nueva con las recetas que coincien con los ingredientes seleccionados, le adjunto los archivos .css y .js necesarios
    if(ingredientes.length > 0 && recetas_contenidas.length > 0){
        var opened = window.open("");
        opened.document.write('<html><head><title>Recetas</title><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">'
        +'<link rel="stylesheet" href="Styleall.css"><link rel="stylesheet" href="Stylerecetas.css"><link href="https://fonts.googleapis.com/css2?family=Pavanam&display=swap" rel="stylesheet"></head><body><nav><div class="logo"><h4>VEGGIHACKS</h4></div><ul class="nav-links"><li id="first"><a href="Proyecto Final.html">Inicio</a></li>'
            +'<li id="second"><a href="Ingredientes.html">Ingredientes</a><ul class="submenu"><li><a href="Ingredientes.html#articulopatata">Patata</a></li><li><a href="Ingredientes.html#articulocalabacin">Calabacin</a></li><li><a href="Ingredientes.html#articuloberenjena">Berenjena</a></li>'
            +'<li><a href="Ingredientes.html#articulopimiento">Pimiento</a></li><li><a href="Ingredientes.html#articulofruta">Fruta</a></li></ul></li>'
            +'<li id="third"><a href="#">Recetas</a></li><li id="fourth"><a href="#">Sobre_nosotr@s</a></li></ul><div class="burger"><div class="line1"></div><div class="line2"></div><div class="line3"></div></div></nav>'
            + rec +'<script src="javascriptall.js"></script><div id="jeje"></div></body></html>');
    }
    else if(ingredientes.length < 1){
        alert('No tiene sentido buscar recetas sin marcar algún ingrediente antes ¿no? ;)')
    }
    else if(recetas_contenidas.length < 1){
        alert('Vaya, parece que no disponemos de ninguna receta que contenga los ingredientes seleccionados, ¡prueba seleccionando alguno diferente!')
    }
    
}


function escribirrecetasgeneral(){
    var rec = "";
    for(var i = 0; i < recetas.length; i++){
        rec = rec + '<div class="receta"><h2>' + recetas[i].nombre + '</h2>'
        + '<p><strong>Dificultad:</strong> '+ recetas[i].dificultad
        +'</p><p><strong>Duración:</strong> '+ recetas[i].duracion 
        +'</p><p><strong>Ingredientes:</strong> '+ recetas[i].ingredientes 
        +'</p><p><strong>Categoria:</strong> '+ recetas[i].categoria 
        +'</p><p><strong>Procedimiento:</strong></p> '+ recetas[i].procedimiento 
        +'<img class="imagen" src="'+recetas[i].enlace+'"><br></div>';
        
    }
    document.write(rec);
}

function pruebita(){
    if(document.getElementById('prueba')){
        escribirrecetasgeneral();
    }
}
pruebita();

