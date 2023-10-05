function bienvenida(){
    alert("!!Hola amiguitos jaja¡¡");
}
/*Juan de la Cruz*/
function Compañía(){
    var puntos=0;
    var datoUsuario=prompt("Hola, antes de irte, ¿quieres hacer un quizz? \n-Si\n-No");
    if(datoUsuario.toLowerCase()=="si"){
        do{
            var datoUsuario=prompt("¿Cuál es la misión y visión princial de Disney? \na)Ser la compañía más admirada del mundo.\nb)Ganar dinero.\nc)Ganarle a Warner Bros.\nd)Hacer malas peliculas.");
            if(datoUsuario.toLowerCase()=="a"){
                alert("Perfecto! +5 puntos.");
                puntos=puntos+5;
            }else if(datoUsuario.toLowerCase()=="b"){
                alert("Pongase a leer.");
            }else if(datoUsuario.toLowerCase()=="c"){
                alert("Pongase a leer.");
            }else if(datoUsuario.toLowerCase()=="d"){
                alert("Pongase a leer.");
            }
    
            var datoUsuario=prompt("¿Cuánto dinero recibe Disney cada dia? \na)138 millones de dólares.\nb)20 pesos.\nc)50000000000000000 pesos.\nd)1000 dólares.");
            if(datoUsuario.toLowerCase()=="a"){
                alert("Perfecto! +5 puntos.");
                puntos=puntos+5;
            }else if(datoUsuario.toLowerCase()=="b"){
                alert("Pongase a leer.");
            }else if(datoUsuario.toLowerCase()=="c"){
                alert("Pongase a leer.");
            }else if(datoUsuario.toLowerCase()=="d"){
                alert("Pongase a leer.");
            }
            var datoUsuario=prompt("«No es la magia lo que hace que todo funcione, sino que es nuestro modo de trabajar lo que origina la magia.»¿Quiénes aprenden este principio? \na)Todos los que trabajan en Walt Disney World. \nb)La chaviza.\nc)AMLO.\nd)Bob Iger.");
            if(datoUsuario.toLowerCase()=="a"){
                alert("Perfecto! +5 puntos.");
                puntos=puntos+5;
            }else if(datoUsuario.toLowerCase()=="b"){
                alert("Pongase a leer.");
            }else if(datoUsuario.toLowerCase()=="c"){
                alert("Pongase a leer.");
            }else if(datoUsuario.toLowerCase()=="d"){
                alert("Pongase a leer.");
            }
            alert("Su puntuación es: "+ puntos)
            var datoUsuario=prompt("¿Quieres seguir jugando?\nSi\nNo");
        }while(datoUsuario.toLocaleLowerCase()=="si");
    }else {
        alert("Ni modo :(.");
    }
}
/*Alan*/
function Marketing(){
    var puntos=0;
    var datoUsuario=prompt("¡Hola!, antes de irte, ¿Quieres hacer un quizz? \n-Si\n-No");
    if(datoUsuario.toLowerCase()=="si"){
    do {
            var datousuario=prompt("¿Cuál es el objetivo de la campaña publicitaria Disney Side? \na) Hacer más dinero para la empresa.\nb) Crear una conexión más fuerte entre sus clientes.\nc) Atraer a más personas a sus parques.");
            if(datousuario.toLocaleLowerCase()=="a") {
                alert("¡Incorrecto! :(.");
            }else{
                if(datousuario.toLocaleLowerCase()=="b") {
                    alert("¡Correcto! :) +5 puntos.");
                    puntos=puntos+5;
                    }
                    else{
                        if(datousuario.toLocaleLowerCase()=="c") {
                            alert("¡Incorrecto! :(.");
                             }
                    }
            }
            var datousuario=prompt("¿Qué te parece la publicidad de Disney? \na) Muy divertida :).\nb) Buena :).\nc) Mala :(.");
            if(datousuario.toLocaleLowerCase()=="a") {
                alert("¡Genial! :) +5 puntos.");
                puntos=puntos+5;
            }else{
                if(datousuario.toLocaleLowerCase()=="b") {
                    alert("¡Genial! :) +3 puntos.");
                    puntos=puntos+3;
                    }
                    else{
                        if(datousuario.toLocaleLowerCase()=="c") {
                            alert("¡Entiendo! :(");
                             }
                    }
            }
            var datousuario=prompt("¿Cuál es el nombre de la máquina que desprende aromas de acuerdo al lugar en que te encuentres del parque? \na) FLDSMDFR :).\nb) Máquina de aromas :).\nc) Smellitzers :(.");
            if(datousuario.toLocaleLowerCase()=="a") {
                alert("¡Incorrecto! :(.");
            }else{
                if(datousuario.toLocaleLowerCase()=="b") {
                    alert("¡Incorrecto! :(.");
                    }
                    else{
                        if(datousuario.toLocaleLowerCase()=="c") {
                            alert("¡Correcto! :) +5 puntos.");
                            puntos=puntos+5;
                             }
                    }
            }
            alert("Su puntuación es: "+puntos)
            var datoUsuario=prompt("¡Genial!, antes de irte, ¿Quieres hacer el quizz otra vez?.");
            if(datoUsuario.toLowerCase()=="si") {
                
            }else{
                alert("Ni modo :(");
            }
    } while(datoUsuario.toLocaleLowerCase()=="si");
}else{
    alert("Ni modo :(.");
}
}
/*Pablo*/
function Carreras(){
    var puntos=0;
    var datoUsuario=prompt("Hola, antes de irte, ¿quieres hacer un quizz? \n-Si\n-No");
    if(datoUsuario.toLowerCase()=="si"){
        do{
            var datoUsuario=prompt("¿Qué es lo que la empresa Disney refleja en sus historias?"+"\n\na)Odio inmensurado hacia las personas.\nb)Criticas sociales sobre el mundo moderno.\nc)Las marcas icónicas, las mentes creativas y las tecnologías innovadoras.");
            if(datoUsuario.toLowerCase()=="a"){
                alert("¿Qué clase de Disney conoces?.");
            }else if(datoUsuario.toLowerCase()=="b"){
                alert("Disney no es taan moderno.");
            }else if(datoUsuario.toLowerCase()=="c"){
                alert("Correcto +5 puntos.");
                puntos=puntos+5;
            }
            var datoUsuario=prompt("¿Cuáles eran los beneficios que Pixar obtendría al fusionarse con Disney?"+"\n\na)Una red de seguridad financiera y red de distribución de primera clase.\nb)Una red de seguridad financiera y altos costos.\nc)Una red de distribución de alto nivel y mucha plata.");
            if(datoUsuario.toLowerCase()=="a"){
                alert("Correcto +5 puntos.");
                puntos=puntos+5;
            }else if(datoUsuario.toLowerCase()=="b"){
                alert("Pixar no obtuvo altos costos.");
            }else if(datoUsuario.toLowerCase()=="c"){
                alert("Incorrecto, Pixar no buscaba plata en esos tiempos.");
            }
            var datoUsuario=prompt("¿Que pasó con Stive Jobs al final de la compra de Pixar?"+"\n\na)Se murió.\nb)Quedó como accionista mayoritario de Disney.\nc)Compró la companía de Disney.");
            if(datoUsuario.toLowerCase()=="a"){
                alert("Año equivocado amigo.");
            }else if(datoUsuario.toLowerCase()=="b"){
                alert("Correcto +5 puntos.");
                puntos=puntos+5;
            }else if(datoUsuario.toLowerCase()=="c"){
                alert("Incorrecto amigo, te falta leer.");
            }
            alert("Su puntuación es: "+puntos);
            var datoUsuario=prompt("¿Quiere seguir jugando?\nSi\nNo");
        }while(datoUsuario.toLocaleLowerCase()=="si");
    }else {
        alert("Ni modo :(");
    }
}
/*Juan Cortés*/
function Inversores(){
    var puntos=0;
    var datoUsuario=prompt("Hola, antes de irte, ¿quieres hacer un quizz? \n-Si\n-No");
    if(datoUsuario.toLowerCase()=="si"){
        do{
            var datoUsuario=prompt("¿En que año se fundó Disney?"+"\n\na)1894.\nb)1999.\nc)1923.");
            if(datoUsuario.toLowerCase()=="a"){
                alert("Muy pronto para que se fundara Disney.");
            }else if(datoUsuario.toLowerCase()=="b"){
                alert("Fecha equivocada, se fundó antes.");
            }else if(datoUsuario.toLowerCase()=="c"){
                alert("Correcto +5 puntos.");
                puntos=puntos+5;
            }
            var datoUsuario=prompt("¿Cuáles son los principales accionistas de Disney?"+"\n\na)Los partidos políticos.\nb)Instituciones financieras.\nc)Sindicatos de artistas.");
            if(datoUsuario.toLowerCase()=="a"){
                alert("Los partidos politicos no meten mano amigo.");
            }else if(datoUsuario.toLowerCase()=="b"){
                alert("Correcto +5 puntos.");
                puntos=puntos+5;
            }else if(datoUsuario.toLowerCase()=="c"){
                alert("Los sindicatos de artistas no son los principales accionistas.");
            }
            var datoUsuario=prompt("¿Cuál es el nombre del principal accionista de Disney?"+"\n\na)Robert Allen Iger. \nb)Helen Keller. \nc)Robert Downey Jr.");
            if(datoUsuario.toLowerCase()=="a"){
                alert("Correcto +5 puntos.");
                puntos=puntos+5;
            }else if(datoUsuario.toLowerCase()=="b"){
                alert("Pixar no obtuvo altos costos.");
            }else if(datoUsuario.toLowerCase()=="c"){
                alert("Incorrecto, Pixar no buscaba plata en esos tiempos.");
            }
            alert("Su puntuación es: "+puntos);
            var datoUsuario=prompt("¿Quiere seguir jugando?\nSi\nNo");
        }while(datoUsuario.toLocaleLowerCase()=="si");
    }else {
        alert("Ni modo :(");
    }
}
/*Yo, el más riatón :)*/
function Franquicias(){
    var puntos=0;
    var datoUsuario=prompt("Hola, antes de irte, ¿quieres hacer un quizz? \n-Si\n-No");
    if(datoUsuario.toLowerCase()=="si"){
        do{
            var datoUsuario=prompt("¿Cuál era el lema de Walt Disney?"+"\n\na)'Solo sé que no sé nada.'\nb)'La animación puede explicar cualquier cosa que la mente del hombre pueda concebir.'\nc)'Con la animación podían crearse mundos fantásticos para que personajes más versátiles que los actores de carne y hueso comunicaran los atributos de las marcas.'");
            if(datoUsuario.toLowerCase()=="a"){
                alert("Eso es de Sócrates, hermano.");
            }else if(datoUsuario.toLowerCase()=="b"){
                alert("Correcto +5 puntos.");
                puntos=puntos+5;
            }else if(datoUsuario.toLowerCase()=="c"){
                alert("Ese lema pertenece a Milán Salcedo.");
            }
            var datoUsuario=prompt("¿Cuál es la franquicia más valiosa de Disney?"+"\n\na)Winnie the Phoo.\nb)Pokemón.\nc)Marte necesita mamás.");
            if(datoUsuario.toLowerCase()=="a"){
                alert("Correcto +5 puntos.");
                puntos=puntos+5;
            }else if(datoUsuario.toLowerCase()=="b"){
                alert("Ni siquiera pertenece a Disney.");
            }else if(datoUsuario.toLowerCase()=="c"){
                alert("Es uno de los peores fracasos de Disney.");
            }
            var datoUsuario=prompt("¿Cuál de las siguientes es una de las franquicias más exitosas de Disney?"+"\n\na)Lord of the rings.\nb)Star Trek.\nc)Star Wars.");
            if(datoUsuario.toLowerCase()=="a"){
                alert("Exelente saga, pero no es de Disney.");
            }else if(datoUsuario.toLowerCase()=="b"){
                alert("Spock hubiera adivinado la respuesta.");
            }else if(datoUsuario.toLowerCase()=="c"){
                alert("Correcto +5 puntos.");
                puntos=puntos+5;
            }
            alert("Su puntuación es: "+puntos)
            var datoUsuario=prompt("¿Se equivocó de horario?\nSi\nNo");
        }while(datoUsuario.toLocaleLowerCase()=="si");
    }else {
        alert("Ni modo :(");
    }
}

barba.init({
    transitions: [{
        name:"prueba",
        leave: function(data){
            var done=this.async();
            document.body.classList.add("loading");
            setTimeout(function(){
                done();
            },900);
        },
        enter: function(data){
            var done=this.async();
            document.body.classList.add("loading");
            setTimeout(function(){
                done();
            },900);
        }
    }]
});