btnBuscar.addEventListener('click', () => {
    document.getElementById('info-wars').innerHTML = '';

    const tagSelect = document.querySelector('select');
    const select = tagSelect.value;

    const people = document.getElementById("opPersonaje").value;
    const planets = document.getElementById("opPlaneta").value;
    const species = document.getElementById("opEspecie").value;

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
            let dataDatos = data.results;
            datos(dataDatos);
        })
        /*  .catch(function(error) {
              console.log(error.message);
          });*/



});


const datos = (dataDatos) => {
    document.getElementById('info-wars').innerHTML = '';
    console.log(dataDatos);
    for (let i = 0; i < dataDatos.length; i++) {
        if (dataDatos[i].name == 'Luke Skywalker') {
            imprimir = document.getElementById("info-wars").innerHTML += `

            <div class="row m-0 p-4">
                <div class="col-6 text-center"><img src="assets/images/Luke-rotjpromo.jpg" alt="" class="img-fluid"></div>
                <div class="col-6">  
                    <h5 class="card-title">${dataDatos[i].name}</h5>
                    <p class="font-weight-normal"><strong>Año Nacimiento:</strong> ${dataDatos[i].birth_year}</p>
                    <p class="font-weight-normal"><strong>Color de ojos</strong> ${dataDatos[i].eye_color}</p>
                    <p class="font-weight-normal"><strong>Género:</strong> ${dataDatos[i].hair_color}</p>
                    <p class="font-weight-normal"><strong>Altura:</strong> ${dataDatos[i].height}</p>
                    <p class="font-weight-normal"><strong>Peso:</strong> ${dataDatos[i].mass}</p>                   
                </div>
            </div>
            <div class="row m-0 p-4">
                <div class="col-12 text-center">
                    <h5 class="card-title">${dataDatos[i].films}</h5>
                </div>
            </div>

            `
        } else if (dataDatos[i].name == 'Tatooine') {
            imprimir = document.getElementById("info-wars").innerHTML += `
            <div class="row m-0 p-4">
                <div class="col-6" text-center><img src="assets/images/tatooine.jpg"" alt="" class="img-fluid"></div>
                <div class="col-6">  <h5 class="card-title">${dataDatos[i].name}</h5>
                    <p class="font-weight-normal"><strong>Clima:</strong> ${dataDatos[i].climate}</p>
                    <p class="font-weight-normal"><strong>Diametro:</strong> ${dataDatos[i].diameter}</p>
                    <p class="font-weight-normal"><strong>Gravedad:</strong> ${dataDatos[i].gravity}</p>
                    <p class="font-weight-normal"><strong>Periodo Orbita:</strong> ${dataDatos[i].orbital_period}</p>
                    <p class="font-weight-normal"><strong>Terreno:</strong> ${dataDatos[i].terrain}</p>
                    
                </div>
            </div>
            `
        } else if (dataDatos[i].name == 'Droid') {
            imprimir = document.getElementById("info-wars").innerHTML += `
            <div class="row m-0 p-4">
                <div class="col-6 text-center"><img src="assets/images/droid.jpg" alt="" class="img-fluid"></div>
                <div class="col-6">  
                    <h5 class="card-title">${dataDatos[i].name}</h5>
                    <p class="font-weight-normal"><strong>Clasificación:</strong> ${dataDatos[i].classification}</p>
                    <p class="font-weight-normal"><strong>Designación:</strong> ${dataDatos[i].designation}</p>
                    <p class="font-weight-normal"><strong>Años de vida:</strong> ${dataDatos[i].average_lifespan}</p>
                    <p class="font-weight-normal"><strong>Color de ojos:</strong> ${dataDatos[i].eye_colors}</p>
                    <p class="font-weight-normal"><strong>Lenguaje:</strong> ${dataDatos[i].language}</p>
                </div>
            </div>
            `
        }


    }
}


/*

<!-- Modal -->
        <div class="modal fade" id="${dataDatos[i].name}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">${dataDatos[i].name}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                    <div class="row">
                    <div class="col-6">
                        <img src="assets/images/foto.jpg" alt="" class="img-fluid">
                    </div>
                    <div class="col-6">
                        <p class="font-weight-bold">${dataDatos[i].created}</p>
                        <p class="font-weight-bold">${dataDatos[i].edited}</p>
                        <p class="font-weight-bold">Bold text.</p>
                    </div>
                  </div>
                    </div>
                </div>
            </div>
        </div>


*/