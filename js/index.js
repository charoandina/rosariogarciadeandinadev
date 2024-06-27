/* CIRCLE FOLLOWING MOUSE */
/*
const circle = document.querySelector('#mousepointer');
const circleSize = 40;

document.addEventListener('mousemove', e => {
    const mouseX = e.pageX - circleSize / 2;
    const mouseY = e.pageY - circleSize / 2;

    circle.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
});*/

//SELECT PAGE

document.addEventListener('DOMContentLoaded', function() {
    const navItems = document.querySelectorAll('.navbar p');
    const sections = document.querySelectorAll('.page-container > div');

    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');

            // Remove 'hidden' from the targeted section and add to others
            sections.forEach(section => {
                if (section.id === targetId) {
                    section.classList.remove('hidden');
                } else {
                    section.classList.add('hidden');
                }
            });

            // Add 'active' class to the clicked <p> and remove from others
            navItems.forEach(navItem => {
                navItem.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
});


// PROJECTS

const projects = [
    {
        title: "Game Over - Ecommerce",
        description: "Tienda online destinado a la venta de insumos teconológicos del mundo Gaming. Se pueden encontrar diversos productos, divididos en distintas categorías.",
        images: ["img/gameover1.png", "img/gameover2.png", "img/gameover3.png", "img/gameover4.png"],
        languages: `
            <p>Lenguajes utilizados:</p>
            <ul>
                <li><i class="devicon-html5-plain"></i></li>
                <li><i class="devicon-css3-plain"></i></li>
                <li><i class="devicon-react-original"></i></li>
                <li><i class="devicon-firebase-plain"></i></li>
                <li><i class="devicon-figma-plain"></i></li>
            </ul>
        `,
        link: `<a href="https://gameover-blush.vercel.app/" target=_blank>Ver proyecto</a>`
    },
    {
        title: "Quiromancia Astrologia",
        description: "Aplicación web interactiva que permite a los usuarios explorar y obtener lecturas de la palma de la mano. Esta aplicación utiliza técnicas avanzadas de JavaScript para proporcionar una experiencia divertida y educativa sobre la quiromancia.",
        images: ["img/handpalm1.png", "img/handpalm2.png", "img/handpalm3.png", "img/handpalm4.png"],
        languages: `
            <p>Lenguajes utilizados:</p>
            <ul>
                <li><i class="devicon-html5-plain"></i></li>
                <li><i class="devicon-css3-plain"></i></li>
                <li><i class="devicon-javascript-plain"></i></li>
                <li><i class="devicon-figma-plain"></i></li>
            </ul>
        `,
        link: `<a href="https://charoandina.github.io/handpalmreader/" target=_blank>Ver proyecto</a>`
    },
    {
        title: "Apple - iPad Promo",
        description: "Ofrece una presentación detallada de las características y especificaciones del iPad. La página está diseñada para proporcionar una experiencia de usuario intuitiva y atractiva, destacando la información clave del dispositivo de una manera clara y visualmente agradable.",
        images: ["img/apple1.png", "img/apple2.png", "img/apple3.png", "img/apple4.png"],
        languages: `
            <p>Lenguajes utilizados:</p>
            <ul>
                <li><i class="devicon-html5-plain"></i></li>
                <li><i class="devicon-css3-plain"></i></li>
                <li><i class="devicon-javascript-plain"></i></li>
                <li><i class="devicon-figma-plain"></i></li>
            </ul>
        `,
        link: `<a href="https://charoandina.github.io/ipadinfo/" target=_blank>Ver proyecto</a>`
    },
    {
        title: "El Club de la Gula - Ecommerce",
        description: "Kiosko online donde se pueden adquirir productos como snacks, golosinas, y bebidas. Los usuarios pueden realizar compras en línea, explorar el catálogo de productos disponibles y disfrutar de la conveniencia de recibir sus compras en su domicilio.",
        images: ["img/gula1.png", "img/gula2.png", "img/gula3.png", "img/gula4.png"],
        languages: `
            <p>Lenguajes utilizados:</p>
            <ul>
                <li><i class="devicon-html5-plain"></i></li>
                <li><i class="devicon-css3-plain"></i></li>
                <li><i class="devicon-javascript-plain"></i></li>
                <li><i class="devicon-figma-plain"></i></li>
            </ul>
        `,
        link: `<a href="https://charoandina.github.io/elclubdelagula/" target=_blank>Ver proyecto</a>`
    },
    {
        title: "Invitación de Casamiento",
        description: "La página está diseñada para ser un centro de información para los invitados, proporcionando todos los detalles necesarios sobre el evento de una manera elegante y accesible: diseño elegante, mapa integrado, galería de fotos.",
        images: ["img/casamiento1.png", "img/casamiento2.png", "img/casamiento3.png", "img/casamiento4.png"],
        languages: `
            <p>Lenguajes utilizados:</p>
            <ul>
                <li><i class="devicon-html5-plain"></i></li>
                <li><i class="devicon-css3-plain"></i></li>
                <li><i class="devicon-javascript-plain"></i></li>
                <li><i class="devicon-figma-plain"></i></li>
            </ul>
        `,
        link: `<a href="https://casamientomartuynico.netlify.app/" target=_blank>Ver proyecto</a>`
    },
    {
        title: "Cosmos - Astrología",
        description: "Aplicación web interactiva que ofrece a los usuarios una experiencia inmersiva en el espacio. La aplicación proporciona información sobre diferentes cuerpos celestes y eventos astronómicos, presentados de manera visual y atractiva.",
        images: ["img/cosmos1.png", "img/cosmos2.png", "img/cosmos3.png", "img/cosmos4.png"],
        languages: `
            <p>Lenguajes utilizados:</p>
            <ul>
                <li><i class="devicon-html5-plain"></i></li>
                <li><i class="devicon-css3-plain"></i></li>
                <li><i class="devicon-javascript-plain"></i></li>
                <li><i class="devicon-figma-plain"></i></li>
            </ul>
        `,
        link: `<a href="https://charoandina.github.io/cosmos/" target=_blank>Ver proyecto</a>`
    },
    {
        title: "Mili Andina - Make Up",
        description: "Página web dedicada a los servicios de maquillaje profesional ofrecidos por Mili Andina. La página está diseñada para mostrar el talento y la experiencia de Mili en el campo del maquillaje, ofreciendo a los visitantes una visión completa de sus servicios y trabajos realizados.",
        images: ["img/makeup1.png", "img/makeup2.png", "img/makeup3.png", "img/makeup4.png"],
        languages: `
            <p>Lenguajes utilizados:</p>
            <ul>
                <li><i class="devicon-html5-plain"></i></li>
                <li><i class="devicon-css3-plain"></i></li>
                <li><i class="devicon-javascript-plain"></i></li>
                <li><i class="devicon-figma-plain"></i></li>
                <li><i class="devicon-bootstrap-plain"></i></li>
            </ul>
        `,
        link: `<a href="https://charoandina.github.io/miliandinamakeup/" target=_blank>Ver proyecto</a>`
    },
];

document.addEventListener('DOMContentLoaded', function() {
    const projectContainer = document.getElementById('projects');
    const popup = document.getElementById('popup');
    const popupTitle = document.querySelector('.popup-title');
    const popupDescription = document.querySelector('.popup-description');
    const popupImages = document.querySelector('.popup-images');
    const languages = document.querySelector('.languages');
    const link = document.querySelector('.link');
    let interval;

    // Generar dinámicamente las tarjetas de proyecto
    projects.forEach((project, index) => {
        const card = document.createElement('div');
        card.classList.add('card-projects');
        card.innerHTML = `
            <h3>${project.title}</h3>
            <p class="card-description">${project.description}</p>
            <div class="cardimg-container">
                ${project.images.map((src, i) => `<img src="${src}" alt="" style="display: ${i === 0 ? 'block' : 'none'};">`).join('')}
            </div>
        `;
        projectContainer.appendChild(card);

        const images = card.querySelectorAll('.cardimg-container img');
        let currentImageIndex = 0;

        function showNextImage() {
            images[currentImageIndex].style.display = 'none';
            images[currentImageIndex].classList.remove('animate__animated', 'animate__fadeIn', 'animate__fadeInSlow');
            currentImageIndex = (currentImageIndex + 1) % images.length;
            images[currentImageIndex].style.display = 'block';
            images[currentImageIndex].classList.add('animate__animated', 'animate__fadeIn', 'animate__fadeInSlow');
        }

        card.addEventListener('mouseenter', () => {
            interval = setInterval(showNextImage, 3000);
        });

        card.addEventListener('mouseleave', () => {
            clearInterval(interval);
            images.forEach((img, index) => {
                img.style.display = index === 0 ? 'block' : 'none';
                img.classList.remove('animate__animated', 'animate__fadeIn', 'animate__fadeInSlow');
            });
            currentImageIndex = 0;
        });

        card.addEventListener('click', () => {
            // Actualizar el contenido del pop-up con los datos del contenedor seleccionado
            popupTitle.textContent = project.title;
            popupDescription.textContent = project.description;
            popupImages.innerHTML = project.images.map(src => `<img src="${src}" alt="">`).join('');
            languages.innerHTML = project.languages;
            link.innerHTML = project.link;

            // Mostrar el pop-up
            popup.style.display = 'flex';

            // Reiniciar la animación en el pop-up
            const popupImagesElements = popupImages.querySelectorAll('img');
            popupImagesElements.forEach((img, index) => {
                img.style.display = index === 0 ? 'block' : 'none';
                img.classList.remove('animate__animated', 'animate__fadeIn', 'animate__fadeInSlow');
            });
            let popupImageIndex = 0;
            interval = setInterval(() => {
                popupImagesElements[popupImageIndex].style.display = 'none';
                popupImagesElements[popupImageIndex].classList.remove('animate__animated', 'animate__fadeIn', 'animate__fadeInSlow');
                popupImageIndex = (popupImageIndex + 1) % popupImagesElements.length;
                popupImagesElements[popupImageIndex].style.display = 'block';
                popupImagesElements[popupImageIndex].classList.add('animate__animated', 'animate__fadeIn', 'animate__fadeInSlow');
            }, 3000);
        });
    });

    // Cerrar el pop-up al hacer clic fuera del contenido
    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = 'none';
            clearInterval(interval);
        }
    });
});

// CONTACT FORM

