
var counter = 0;


//funcion que va alternando las imágenes y los textos del banner
function swapbanner(){
    
    if(counter == 0){
        document.getElementById('imgbanner').src = "./img/banner vegetales2.jpg";
        document.getElementById('linkweb').href = 'https://www.sonoonda.com/index.php/noticias/529-doctores-y-otros-expertos-siempre-recomiendan-consumir-verduras-en-la-dieta-diaria-pero-no-todas-tienen-las-mismas-propiedades-nutricionales';
        document.getElementById('txt').innerHTML = 'Doctores y otros expertos siempre recomiendan consumir verduras en la dieta diaria, pero no todas tienen las mismas propiedades nutricionales. Por ejemplo, la lechuga conocida como "iceberg"  -redonda, palida y crujiente- es considerada entre su familia como una de las menos ricas nutricionalmente.'
        + 'El Plato para Comer Saludable de la Escuela de Salud Pública de la Universidad de Harvard, en EE.UU., indica que los vegetales deberían formar parte -junto con las frutas- de la alimentación diaria. "Incorporar frutas y verduras a la dieta diaria puede reducir el riesgo de algunas enfermedades no transmisibles, como las cardiopatías y determinados tipos de cáncer", indica la Organización Mundial de la Salud (OMS).'
        + '"También existen algunos datos que indican que cuando se consumen como parte de una dieta saludable baja en grasas, azúcares y sal (o sodio), las frutas y verduras también pueden contribuir a prevenir el aumento de peso y reducir el riesgo de obesidad añade", agrega la OMS. '
        + '<strong><br>¡Haz click en la imagen para averiguar cuales son las mejores verduras en tu dieta!</strong>';
        counter++;
        console.log(counter);
    }
    else if(counter == 1){
        document.getElementById('imgbanner').src = "./img/banner navidad.jpg";
        document.getElementById('linkweb').href = 'https://www.recetasgratis.net/articulo-mas-de-100-recetas-vegetarianas-para-navidad-71284.html';
        document.getElementById('txt').innerHTML = 'Preparar comida vegetariana representa una cuestión de creatividad, ingenio y entusiasmo. Quizá lo más importante de este estilo de alimentación es lograr el equilibrio: aportar los nutrientes necesarios por día al organismo, respetar el mundo que nos rodea y mantenernos saludables. ¡Pura armonía!'
        +'En fechas tan señaladas como la Navidad, un banquete vegetariano incluso resulta atractivo para quienes siguen una dieta convencional. Si no eres vegetariano puedes considerar esta opción tan original, al menos para alguna parte del menú. ¿Por qué? Porque si el plato principal resulta muy pesado, puedes equilibrar la cena utilizando recetas vegetarianas navideñas.'
        + '<strong><br>¡Haz click en la imagen para acceder a un recopilatorio de recetas de carácter navideño!</strong>';
        counter++;
        console.log(counter);
    }
    else if(counter == 2){
        document.getElementById('imgbanner').src = "./img/banner frutas.jpg";
        document.getElementById('linkweb').href = 'https://www.lavanguardia.com/comer/tendencias/20190605/462680078779/fruta-horas-adelgazar-dietas-mitos.html';
        document.getElementById('txt').innerHTML = 'Tradicionalmente en España la fruta se ha tomado como postre, después de comer o cenar. Hasta que hace ya unas décadas, con el auge de las dietas disociativas, empezó a propagarse la idea de que lo conveniente era comerla en ayunas o bien entre horas, y que hacerlo para culminar una comida era perjudicial.'
        + 'Pero no todos los expertos en nutrición lo ven de la misma manera, y son muchos los que lo ponen en duda, cuando no echan a tierra lo que consideran un mito. Entre otras cosas porque creen que no hay pruebas científicas que lo sostengan.'
        + '<strong><br>¡Haz click en la imagen si quieres saber a cerca de los mayores mitos sobre las frutas!</strong>';
        
        counter++;
        console.log(counter);
    }
    else if(counter == 3){
        document.getElementById('imgbanner').src = "./img/banner calendario.jpg";
        document.getElementById('linkweb').href = 'https://www.ocu.org/alimentacion/alimentos/calculadora/calendario-de-frutas-y-verduras/calendario-de-frutas#';
        document.getElementById('txt').innerHTML = 'La fruta y la verdura deben formar parte de la dieta de grandes y pequeños. Los nutricionistas recomiendan incluso cinco raciones diarias de fruta o verdura como pilar fundamental de una alimentación sana y equilibrada. Y si esas piezas se toman en su mejor época de consumo, mejor que mejor. ¿Sabes cuáles son los meses de recolección y la mejor época para cada fruta? Aunque la fruta de importación está a la orden del día y que en los supermercados o tiendas de barrio encontramos alimentos que no se corresponden a la temporada actual, lo cierto es que es recomendable «consumir preferentemente las frutas o verduras de temporada», tal y como destaca la Organización de Consumidores y Usuarios (OCU)'
        + '<strong><br>¡Haz click en la imagen para acceder a un calendario con las mejores frutas en función de la temporada!</strong>';
        counter = 0;
    }
}

setInterval(swapbanner, 8000);






