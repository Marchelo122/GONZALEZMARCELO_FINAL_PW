document.addEventListener("DOMContentLoaded", function () {
    // Manejo del formulario de inicio de sesión
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            const message = document.getElementById("message");

            // Cambiar la verificación de usuario y contraseña
            if (username === "USER" && password === "PASS") {
                message.textContent = "Ingreso correcto. Redirigiendo...";
                setTimeout(() => {
                    window.location.href = "2paginaprincipal.html"; // Redirige a la página principal
                }, 2000);
            } else {
                message.textContent = "Usuario o contraseña incorrectos. Intente de nuevo.";
            }
        });
    }

    // Carga de imágenes de gatos desde la API de Random Animal
    document.getElementById("load-animal").addEventListener("click", function () {
        const url = 'https://api.thecatapi.com/v1/images/search'; // URL de la API de imágenes aleatorias de gatos

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const img = document.createElement('img');
                img.src = data[0].url; // Obtiene la URL de la imagen
                img.alt = 'Animal';
                img.style.width = '300px'; // Ajusta el tamaño de la imagen
                img.style.height = 'auto'; // Mantiene la proporción
                document.getElementById("animal-container").innerHTML = ''; // Limpia el contenedor
                document.getElementById("animal-container").appendChild(img); // Muestra la imagen
            })
            .catch(error => {
                console.error('Error al cargar la imagen:', error);
            });
    });

    // Enviar correo (simulación)
    document.getElementById("emailForm").addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const emailMessage = document.getElementById("emailMessage");

        // Simulación de envío de correo
        emailMessage.textContent = `Correo enviado a: ${email}`; // Usar backticks correctamente
        console.log(`Correo enviado a: ${email}`);
    });

    // Cargar datos aleatorios desde una API
    document.getElementById("fetchData").addEventListener("click", function () {
        const url = 'https://jsonplaceholder.typicode.com/posts'; // URL de la API de datos aleatorios

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const dataDisplay = document.getElementById("dataDisplay");
                dataDisplay.innerHTML = ''; // Limpia el contenedor de datos

                // Mostrar los primeros 5 posts
                for (let i = 0; i < 5; i++) {
                    const post = data[i]; // Obtiene un post
                    const postElement = document.createElement('div');
                    postElement.classList.add('post'); // Clase para estilo (opcional)
                    postElement.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`; // Usar backticks correctamente
                    dataDisplay.appendChild(postElement); // Agrega el post al contenedor
                }
            })
            .catch(error => {
                console.error('Error al cargar los datos:', error);
            });
    });

    // Cargar datos de Luke Skywalker desde la API de Star Wars
    document.getElementById("fetchStarWarsData").addEventListener("click", function () {
        const url = 'https://swapi.py4e.com/api/people/1/'; // URL de la API de Star Wars

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const starWarsDataDisplay = document.getElementById("starWarsDataDisplay");
                starWarsDataDisplay.innerHTML = ''; // Limpia el contenedor

                // Mostrar la información del personaje
                starWarsDataDisplay.innerHTML = `
                    <h3>${data.name}</h3>
                    <p>Altura: ${data.height} cm</p>
                    <p>Masa: ${data.mass} kg</p>
                    <p>Color de cabello: ${data.hair_color}</p>
                    <p>Color de piel: ${data.skin_color}</p>
                    <p>Color de ojos: ${data.eye_color}</p>
                    <p>Año de nacimiento: ${data.birth_year}</p>
                    <p>Género: ${data.gender}</p>
                    <p>Mundo natal: <a href="${data.homeworld}">Ver planeta</a></p>
                    <p>Películas: ${data.films.map(url => `<a href="${url}">Ver película</a>`).join(', ')}</p>
                    <p>Especies: ${data.species.map(url => `<a href="${url}">Ver especie</a>`).join(', ')}</p>
                    <p>Vehículos: ${data.vehicles.map(url => `<a href="${url}">Ver vehículo</a>`).join(', ')}</p>
                    <p>Naves espaciales: ${data.starships.map(url => `<a href="${url}">Ver nave</a>`).join(', ')}</p>
                `;
            })
            .catch(error => {
                console.error('Error al cargar los datos de Star Wars:', error);
            });
    });

    // Funciones de cálculo
    window.calcularSalario = function () {
        const salario = parseFloat(document.getElementById('salario').value);
        const descuento = parseFloat(document.getElementById('descuento').value);
        if (!isNaN(salario) && !isNaN(descuento)) {
            const total = salario - descuento;
            alert(`El total es: ${total}`); // Usar backticks correctamente
        } else {
            alert('Por favor, ingresa valores válidos.');
        }
    };

    window.calcularTotalPuntos = function () {
        const puntos1 = parseFloat(document.getElementById('puntos1').value);
        const puntos2 = parseFloat(document.getElementById('puntos2').value);
        const puntos3 = parseFloat(document.getElementById('puntos3').value);
        if (!isNaN(puntos1) && !isNaN(puntos2) && !isNaN(puntos3)) {
            const total = puntos1 + puntos2 + puntos3;
            alert(`El total de puntos es: ${total}`); // Usar backticks correctamente
        } else {
            alert('Por favor, ingresa valores válidos.');
        }
    };

    window.calcularPorcentaje = function () {
        const puntaje = parseFloat(document.getElementById('puntaje').value);
        if (!isNaN(puntaje)) {
            const porcentaje = puntaje * 0.15;
            alert(`El 15% del puntaje es: ${porcentaje}`); // Usar backticks correctamente
        } else {
            alert('Por favor, ingresa un valor válido.');
        }
    };
});
