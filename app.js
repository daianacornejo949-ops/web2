document.addEventListener("DOMContentLoaded", () => {
    
    const tablaDestino = document.getElementById("cuerpoTablaDinamica");
    
    if (tablaDestino) {
        const listaInstructores = [
            { nombre: "Elena Rostova", estilo: "Ballet Clásico Académico", horario: "Lun - Mié - Vie | 09:00 - 11:00", rango: "Iniciación" },
            { nombre: "Carlos Mendoza", estilo: "Danza Contemporánea y Suelo", horario: "Mar - Jue | 14:00 - 16:30", rango: "Intermedio" },
            { nombre: "Kiara Choque", estilo: "Commercial Dance & Hip Hop", horario: "Viernes | 18:30 - 21:00", rango: "Avanzado" },
            { nombre: "Marcos Soria", estilo: "Acondicionamiento Físico", horario: "Sábados | 08:00 - 10:30", rango: "Todo Público" }
        ];

        tablaDestino.innerHTML = ""; 

        listaInstructores.forEach(profesor => {
            const hilera = document.createElement("tr");
            hilera.innerHTML = `
                <td class="fw-bold text-danger">➡️ ${profesor.nombre}</td>
                <td>${profesor.estilo}</td>
                <td>${profesor.horario}</td>
                <td><span class="badge bg-secondary px-3 py-2">${profesor.rango}</span></td>
            `;
            tablaDestino.appendChild(hilera);
        });
    }

    const formElemento = document.getElementById("formularioRegistro");
    const cuadroExito = document.getElementById("alertaExito");

    if (formElemento) {
        formElemento.addEventListener("submit", (evento) => {
            evento.preventDefault();
            evento.stopPropagation();

            const campoNombre = document.getElementById("nombreCompleto");
            const campoCorreo = document.getElementById("correo");
            const campoEstilo = document.getElementById("seleccionEstilo");

            let todoCorrecto = true;

            if (campoNombre.value.trim() === "") {
                campoNombre.classList.add("is-invalid");
                todoCorrecto = false;
            } else {
                campoNombre.classList.remove("is-invalid");
                campoNombre.classList.add("is-valid");
            }
            const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!patronCorreo.test(campoCorreo.value.trim())) {
                campoCorreo.classList.add("is-invalid");
                todoCorrecto = false;
            } else {
                campoCorreo.classList.remove("is-invalid");
                campoCorreo.classList.add("is-valid");
            }

            if (campoEstilo.value === "") {
                campoEstilo.classList.add("is-invalid");
                todoCorrecto = false;
            } else {
                campoEstilo.classList.remove("is-invalid");
                campoEstilo.classList.add("is-valid");
            }

            if (todoCorrecto) {
                cuadroExito.classList.remove("d-none");
                formElemento.reset(); 

                setTimeout(() => {
                    campoNombre.classList.remove("is-valid");
                    campoCorreo.classList.remove("is-valid");
                    campoEstilo.classList.remove("is-valid");
                    cuadroExito.classList.add("d-none");
                }, 4000);
            }
        });
    }
});