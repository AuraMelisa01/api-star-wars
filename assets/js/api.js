btnBuscar.addEventListener('click', () => {
    document.getElementById('info-wars').innerHTML = '';

    let tagSelect = document.querySelector('select');
    let select = tagSelect.value;

    let people = document.getElementById("opPersonaje").value;
    let planets = document.getElementById("opPlaneta").value;
    let species = document.getElementById("opEspecie").value;

    let valor = '';

    if (select == people) {
        valor = 'people';

    } else if (select == planets) {
        valor = 'planets';

    } else if (select == species) {
        valor = 'species';

    }

    fetch(`https://swapi.dev/api/${valor}`)
        .then(response => response.json())
        .then(data => {
            //console.log(data);
            let dataDatos = data.next; //Dato campo seleccionado
            let dataInfo = data.results; // muestra los datos del campo seleecionado anterior
            datos(dataDatos, dataInfo);
            //console.log(dataDatos);
            //console.log(dataInfo);

        })
        /* .catch(function(error) {
             console.log('Error verifica tu conexíon' + error.message);
         });*/



});


const datos = (dataDatos, dataInfo) => {
    // console.log(dataDatos);
    // console.log(dataInfo);

    if (dataDatos == "http://swapi.dev/api/people/?page=2") {
        //console.log('personajes');
        document.getElementById('info-wars').innerHTML = '';
        for (let i = 0; i < dataInfo.length; i++) {
            //console.log(dataDatos[i]);

            document.getElementById("info-wars").innerHTML += `
            <div class="line"></div>
                    <div class="row m-0 p-4">
                        <div class="col-6 text-center">
                            <img src="assets/images/personaje.jpg" alt="" class="img-fluid poster">
                        </div>
                        <div class="col-6">  
                            <h5 class="card-title">${dataInfo[i].name}</h5>
                            <p class="font-weight-normal"><strong>Año Nacimiento:</strong> ${dataInfo[i].birth_year}</p>
                            <p class="font-weight-normal"><strong>Color de ojos</strong> ${dataInfo[i].eye_color}</p>
                            <p class="font-weight-normal"><strong>Género:</strong> ${dataInfo[i].hair_color}</p>
                            <p class="font-weight-normal"><strong>Altura:</strong> ${dataInfo[i].height}</p>
                            <p class="font-weight-normal"><strong>Peso:</strong> ${dataInfo[i].mass}</p>                   
                        </div>
                    </div>
                    `;
            let array = dataInfo[i].films;
            //console.log(array);

            array.forEach(function(indice, valor) {
                console.log("En el índice " + indice + " hay este valor: " + valor);
                if (indice == "http://swapi.dev/api/films/1/") {
                    document.getElementById("info-wars").innerHTML += `
                                <div class="row m-0 p-4 d-inline-block">
                                    <div class="col-12 text-center ">
                                        <p>${indice}</p>
                                        <img src="assets/images/imagen1.jpg" alt="" class="img-fluid poster">
                                    </div>
                                </div>             
                `
                }
                if (indice == "http://swapi.dev/api/films/2/") {
                    document.getElementById("info-wars").innerHTML += `
                                <div class="row m-0 p-4 d-inline-block">
                                    <div class="col-12 text-center ">
                                        <p>${indice}</p>
                                        <img src="assets/images/imagen2.jpg" alt="" class="img-fluid poster">
                                    </div>
                                </div>               
                `
                }
                if (indice == "http://swapi.dev/api/films/3/") {
                    document.getElementById("info-wars").innerHTML += `
                                <div class="row m-0 p-4 d-inline-block">
                                    <div class="col-12 text-center ">
                                        <p>${indice}</p>
                                        <img src="assets/images/imagen3.jpg" alt="" class="img-fluid poster">
                                    </div>
                                </div>               
                `
                }
                if (indice == "http://swapi.dev/api/films/4/") {
                    document.getElementById("info-wars").innerHTML += `
                                <div class="row m-0 p-4 d-inline-block">
                                    <div class="col-12 text-center ">
                                        <p>${indice}</p>
                                        <img src="assets/images/imagen4.jpg" alt="" class="img-fluid poster">
                                    </div>
                                </div>               
                `
                }
                if (indice == "http://swapi.dev/api/films/5/") {
                    document.getElementById("info-wars").innerHTML += `
                                <div class="row m-0 p-4 d-inline-block">
                                    <div class="col-12 text-center ">
                                        <p>${indice}</p>
                                        <img src="assets/images/imagen5.jpg" alt="" class="img-fluid poster">
                                    </div>
                                </div>               
                `
                }
                if (indice == "http://swapi.dev/api/films/6/") {
                    document.getElementById("info-wars").innerHTML += `
                                <div class="row m-0 p-4 d-inline-block">
                                    <div class="col-12 text-center">
                                        <p>${indice}</p>
                                        <img src="assets/images/imagen6.jpg" alt="" class="img-fluid poster">
                                    </div>
                                </div>               
                `
                }
            });

        }


    } else if (dataDatos == "http://swapi.dev/api/planets/?page=2") {
        //console.log('planetas');
        document.getElementById('info-wars').innerHTML = '';

        for (let i = 0; i < dataInfo.length; i++) {
            //console.log(dataDatos[i]);
            document.getElementById("info-wars").innerHTML += `
            <div class="line"></div>
            <div class="row m-0 p-4">
                <div class="col-6 text-center" >
                    <img src="assets/images/planeta.jpg"" alt="" class="img-fluid poster">
                </div>
                <div class="col-6">  <h5 class="card-title">${dataInfo[i].name}</h5>
                    <p class="font-weight-normal"><strong>Clima:</strong> ${dataInfo[i].climate}</p>
                    <p class="font-weight-normal"><strong>Diametro:</strong> ${dataInfo[i].diameter}</p>
                    <p class="font-weight-normal"><strong>Gravedad:</strong> ${dataInfo[i].gravity}</p>
                    <p class="font-weight-normal"><strong>Periodo Orbita:</strong> ${dataInfo[i].orbital_period}</p>
                    <p class="font-weight-normal"><strong>Terreno:</strong> ${dataInfo[i].terrain}</p>
                    
                </div>
            </div>
            
            `;
            let array = dataInfo[i].films;
            //console.log(array);

            array.forEach(function(indice, valor) {
                //console.log("En el índice " + indice + " hay este valor: " + valor);
                if (indice == "http://swapi.dev/api/films/1/") {
                    document.getElementById("info-wars").innerHTML += `
                                <div class="row m-0 p-4 d-inline-block">
                                    <div class="col-12 text-center ">
                                        <p>${indice}</p>
                                        <img src="assets/images/imagen1.jpg" alt="" class="img-fluid poster">
                                    </div>
                                </div>             
                `
                }
                if (indice == "http://swapi.dev/api/films/2/") {
                    document.getElementById("info-wars").innerHTML += `
                                <div class="row m-0 p-4 d-inline-block">
                                    <div class="col-12 text-center ">
                                        <p>${indice}</p>
                                        <img src="assets/images/imagen2.jpg" alt="" class="img-fluid poster">
                                    </div>
                                </div>               
                `
                }
                if (indice == "http://swapi.dev/api/films/3/") {
                    document.getElementById("info-wars").innerHTML += `
                                <div class="row m-0 p-4 d-inline-block">
                                    <div class="col-12 text-center ">
                                        <p>${indice}</p>
                                        <img src="assets/images/imagen3.jpg" alt="" class="img-fluid poster">
                                    </div>
                                </div>               
                `
                }
                if (indice == "http://swapi.dev/api/films/4/") {
                    document.getElementById("info-wars").innerHTML += `
                                <div class="row m-0 p-4 d-inline-block">
                                    <div class="col-12 text-center ">
                                        <p>${indice}</p>
                                        <img src="assets/images/imagen4.jpg" alt="" class="img-fluid poster">
                                    </div>
                                </div>               
                `
                }
                if (indice == "http://swapi.dev/api/films/5/") {
                    document.getElementById("info-wars").innerHTML += `
                                <div class="row m-0 p-4 d-inline-block">
                                    <div class="col-12 text-center ">
                                        <p>${indice}</p>
                                        <img src="assets/images/imagen5.jpg" alt="" class="img-fluid poster">
                                    </div>
                                </div>               
                `
                }
                if (indice == "http://swapi.dev/api/films/6/") {
                    document.getElementById("info-wars").innerHTML += `
                                <div class="row m-0 p-4 d-inline-block">
                                    <div class="col-12 text-center">
                                        <p>${indice}</p>
                                        <img src="assets/images/imagen6.jpg" alt="" class="img-fluid poster">
                                    </div>
                                </div>               
                `
                }
            });
        }
    } else if (dataDatos == "http://swapi.dev/api/species/?page=2") {
        //console.log('especies');
        for (let i = 0; i < dataInfo.length; i++) {
            // console.log(dataInfo[i].films);
            //console.log(dataDatos[i]);
            document.getElementById("info-wars").innerHTML += `
            <div class="line"></div>
            <div class="row m-0 p-4">
                <div class="col-6 text-center">
                    <img src="assets/images/especie.jpg" alt="" class="img-fluid poster">
                </div>
                <div class="col-6">  
                    <h5 class="card-title">${dataInfo[i].name}</h5>
                    <p class="font-weight-normal"><strong>Clasificación:</strong> ${dataInfo[i].classification}</p>
                    <p class="font-weight-normal"><strong>Designación:</strong> ${dataInfo[i].designation}</p>
                    <p class="font-weight-normal"><strong>Años de vida:</strong> ${dataInfo[i].average_lifespan}</p>
                    <p class="font-weight-normal"><strong>Color de ojos:</strong> ${dataInfo[i].eye_colors}</p>
                    <p class="font-weight-normal"><strong>Lenguaje:</strong> ${dataInfo[i].language}</p>
                </div>
            </div>

            `;

            let array = dataInfo[i].films;
            //console.log(array);

            array.forEach(function(indice, valor) {
                //console.log("En el índice " + indice + " hay este valor: " + valor);
                if (indice == "http://swapi.dev/api/films/1/") {
                    document.getElementById("info-wars").innerHTML += `
                                <div class="row m-0 p-4 d-inline-block">
                                    <div class="col-12 text-center ">
                                        <p>${indice}</p>
                                        <img src="assets/images/imagen1.jpg" alt="" class="img-fluid poster">
                                    </div>
                                </div>             
                `
                }
                if (indice == "http://swapi.dev/api/films/2/") {
                    document.getElementById("info-wars").innerHTML += `
                                <div class="row m-0 p-4 d-inline-block">
                                    <div class="col-12 text-center ">
                                        <p>${indice}</p>
                                        <img src="assets/images/imagen2.jpg" alt="" class="img-fluid poster">
                                    </div>
                                </div>               
                `
                }
                if (indice == "http://swapi.dev/api/films/3/") {
                    document.getElementById("info-wars").innerHTML += `
                                <div class="row m-0 p-4 d-inline-block">
                                    <div class="col-12 text-center ">
                                        <p>${indice}</p>
                                        <img src="assets/images/imagen3.jpg" alt="" class="img-fluid poster">
                                    </div>
                                </div>               
                `
                }
                if (indice == "http://swapi.dev/api/films/4/") {
                    document.getElementById("info-wars").innerHTML += `
                                <div class="row m-0 p-4 d-inline-block">
                                    <div class="col-12 text-center ">
                                        <p>${indice}</p>
                                        <img src="assets/images/imagen4.jpg" alt="" class="img-fluid poster">
                                    </div>
                                </div>               
                `
                }
                if (indice == "http://swapi.dev/api/films/5/") {
                    document.getElementById("info-wars").innerHTML += `
                                <div class="row m-0 p-4 d-inline-block">
                                    <div class="col-12 text-center ">
                                        <p>${indice}</p>
                                        <img src="assets/images/imagen5.jpg" alt="" class="img-fluid poster">
                                    </div>
                                </div>               
                `
                }
                if (indice == "http://swapi.dev/api/films/6/") {
                    document.getElementById("info-wars").innerHTML += `
                                <div class="row m-0 p-4 d-inline-block">
                                    <div class="col-12 text-center">
                                        <p>${indice}</p>
                                        <img src="assets/images/imagen6.jpg" alt="" class="img-fluid poster">
                                    </div>
                                </div>               
                `
                }
            });
        }


    }

}