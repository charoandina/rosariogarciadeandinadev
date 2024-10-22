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

// CONTACT FORM

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    emailjs.sendForm('service_qcqsot5', 'template_vpgqin6', this)
      .then(function() {
        Swal.fire({
            icon: "success",
            title: "¡Formulario enviado!",
            text: "¡Me pondré en contacto contigo a la brevedad!",
            customClass: {
              popup: 'custom-alert',
              confirmButton: 'custom-button'
            }
          });
        document.getElementById('contact-form').reset();
      }, function(error) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Algo salió mal",
            footer: error,
            customClass: {
              popup: 'custom-alert',
              confirmButton: 'custom-button'
            }
          });
      });
  });

// PROJECTS + CHANGING LANGUAGE

document.addEventListener('DOMContentLoaded', function() {
    const projectContainer = document.getElementById('projects');
    const popup = document.getElementById('popup');
    const popupTitle = document.querySelector('.popup-title');
    const popupDescription = document.querySelector('.popup-description');
    const popupImages = document.querySelector('.popup-images');
    const languages = document.querySelector('.languages');
    const link = document.querySelector('.link');
    let interval;

    const projectsEs = [
        {
            title: "KetoPower X - Quiz",
            description: "Ayuda a los usuarios a descubrir si las píldoras Keto Power son adecuadas para ellos a través de un breve cuestionario sobre sus hábitos y objetivos de salud, ofreciendo resultados personalizados para apoyar su pérdida de peso.",
            images: ["img/ketoquiz1.png", "img/ketoquiz2.png", "img/ketoquiz3.png", "img/ketoquiz4.png"],
            languages: `
                <p>Tecnologías empleadas:</p>
                <ul>
                    <li><i class="devicon-html5-plain"></i></li>
                    <li><i class="devicon-css3-plain"></i></li>
                    <li><i class="devicon-javascript-plain"></i></li>
                    <li><i class="devicon-figma-plain"></i></li>
                </ul>
            `,
            link: `<a href="https://charoandina.github.io/ketopowerquiz/" target=_blank>Ver proyecto</a>`
        },
        {
            title: "Game Over - Ecommerce",
            description: "Tienda online destinado a la venta de insumos teconológicos del mundo Gaming. Se pueden encontrar diversos productos, divididos en distintas categorías.",
            images: ["img/gameover1.png", "img/gameover2.png", "img/gameover3.png", "img/gameover4.png"],
            languages: `
                <p>Tecnologías empleadas:</p>
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
                <p>Tecnologías empleadas:</p>
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
                <p>Tecnologías empleadas:</p>
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
                <p>Tecnologías empleadas:</p>
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
                <p>Tecnologías empleadas:</p>
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
                <p>Tecnologías empleadas:</p>
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
                <p>Tecnologías empleadas:</p>
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
    
    const projectsEn = [
        {
            title: "KetoPower X - Quiz",
            description: "It helps users discover if Keto Power pills are right for them through a short questionnaire about their health habits and goals, offering personalized results to support their weight loss.",
            images: ["img/ketoquiz1.png", "img/ketoquiz2.png", "img/ketoquiz3.png", "img/ketoquiz4.png"],
            languages: `
                <p>Technologies used:</p>
                <ul>
                    <li><i class="devicon-html5-plain"></i></li>
                    <li><i class="devicon-css3-plain"></i></li>
                    <li><i class="devicon-javascript-plain"></i></li>
                    <li><i class="devicon-figma-plain"></i></li>
                </ul>
            `,
            link: `<a href="https://charoandina.github.io/ketopowerquiz/" target=_blank>View project</a>`
        },
        {
            title: "Game Over - Ecommerce",
            description: "Online store dedicated to selling technological supplies in the gaming world. Various products can be found, divided into different categories.",
            images: ["img/gameover1.png", "img/gameover2.png", "img/gameover3.png", "img/gameover4.png"],
            languages: `
                <p>Technologies used:</p>
                <ul>
                    <li><i class="devicon-html5-plain"></i></li>
                    <li><i class="devicon-css3-plain"></i></li>
                    <li><i class="devicon-react-original"></i></li>
                    <li><i class="devicon-firebase-plain"></i></li>
                    <li><i class="devicon-figma-plain"></i></li>
                </ul>
            `,
            link: `<a href="https://gameover-blush.vercel.app/" target=_blank>View project</a>`
        },
        {
            title: "Palmistry Astrology",
            description: "Interactive web application that allows users to explore and obtain palm readings. This application uses advanced JavaScript techniques to provide a fun and educational experience about palmistry.",
            images: ["img/handpalm1.png", "img/handpalm2.png", "img/handpalm3.png", "img/handpalm4.png"],
            languages: `
                <p>Technologies used:</p>
                <ul>
                    <li><i class="devicon-html5-plain"></i></li>
                    <li><i class="devicon-css3-plain"></i></li>
                    <li><i class="devicon-javascript-plain"></i></li>
                    <li><i class="devicon-figma-plain"></i></li>
                </ul>
            `,
            link: `<a href="https://charoandina.github.io/handpalmreader/" target=_blank>View project</a>`
        },
        {
            title: "Apple - iPad Promo",
            description: "Provide a detailed presentation of the features and specifications of the iPad. The page is designed to deliver an intuitive and engaging user experience, highlighting key device information in a clear and visually appealing manner.",
            images: ["img/apple1.png", "img/apple2.png", "img/apple3.png", "img/apple4.png"],
            languages: `
                <p>Technologies used:</p>
                <ul>
                    <li><i class="devicon-html5-plain"></i></li>
                    <li><i class="devicon-css3-plain"></i></li>
                    <li><i class="devicon-javascript-plain"></i></li>
                    <li><i class="devicon-figma-plain"></i></li>
                </ul>
            `,
            link: `<a href="https://charoandina.github.io/ipadinfo/" target=_blank>View project</a>`
        },
        {
            title: "El Club de la Gula - Ecommerce",
            description: "Online store where users can purchase products such as snacks, candies, and beverages. Users can shop online, browse the catalog of available products, and enjoy the convenience of having their purchases delivered to their doorstep.",
            images: ["img/gula1.png", "img/gula2.png", "img/gula3.png", "img/gula4.png"],
            languages: `
                <p>Technologies used:</p>
                <ul>
                    <li><i class="devicon-html5-plain"></i></li>
                    <li><i class="devicon-css3-plain"></i></li>
                    <li><i class="devicon-javascript-plain"></i></li>
                    <li><i class="devicon-figma-plain"></i></li>
                </ul>
            `,
            link: `<a href="https://charoandina.github.io/elclubdelagula/" target=_blank>View project</a>`
        },
        {
            title: "Wedding Invitation",
            description: "The page is designed to be an information hub for guests, providing all necessary details about the event in an elegant and accessible manner: stylish design, integrated map, photo gallery.",
            images: ["img/casamiento1.png", "img/casamiento2.png", "img/casamiento3.png", "img/casamiento4.png"],
            languages: `
                <p>Technologies used:</p>
                <ul>
                    <li><i class="devicon-html5-plain"></i></li>
                    <li><i class="devicon-css3-plain"></i></li>
                    <li><i class="devicon-javascript-plain"></i></li>
                    <li><i class="devicon-figma-plain"></i></li>
                </ul>
            `,
            link: `<a href="https://casamientomartuynico.netlify.app/" target=_blank>View project</a>`
        },
        {
            title: "Cosmos - Astrology",
            description: "Interactive web application that offers users an immersive experience in space. The application provides information about different celestial bodies and astronomical events, presented in a visual and attractive manner.",
            images: ["img/cosmos1.png", "img/cosmos2.png", "img/cosmos3.png", "img/cosmos4.png"],
            languages: `
                <p>Technologies used:</p>
                <ul>
                    <li><i class="devicon-html5-plain"></i></li>
                    <li><i class="devicon-css3-plain"></i></li>
                    <li><i class="devicon-javascript-plain"></i></li>
                    <li><i class="devicon-figma-plain"></i></li>
                </ul>
            `,
            link: `<a href="https://charoandina.github.io/cosmos/" target=_blank>View project</a>`
        },
        {
            title: "Mili Andina - Make Up",
            description: "Website dedicated to professional makeup services offered by Mili Andina. The page is designed to showcase Mili's talent and experience in the field of makeup, providing visitors with a comprehensive view of her services and completed works.",
            images: ["img/makeup1.png", "img/makeup2.png", "img/makeup3.png", "img/makeup4.png"],
            languages: `
                <p>Technologies used:</p>
                <ul>
                    <li><i class="devicon-html5-plain"></i></li>
                    <li><i class="devicon-css3-plain"></i></li>
                    <li><i class="devicon-javascript-plain"></i></li>
                    <li><i class="devicon-figma-plain"></i></li>
                    <li><i class="devicon-bootstrap-plain"></i></li>
                </ul>
            `,
            link: `<a href="https://charoandina.github.io/miliandinamakeup/" target=_blank>View project</a>`
        },
    ];
    

    let currentLanguage = "es";

    function renderProjects(language) {
        projectContainer.innerHTML = "";
        const projects = language === "es" ? projectsEs : projectsEn;

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
    }

    renderProjects(currentLanguage);

    // Cerrar el pop-up al hacer clic fuera del contenido
    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.style.display = 'none';
            clearInterval(interval);
        }
    });

    document.getElementById("translate-en").addEventListener("click", function() {
        translateContent("en");
        document.getElementById("translate-en").style.display = "none";
        document.getElementById("translate-es").style.display = "block";
        currentLanguage = "en";
        renderProjects(currentLanguage);
    });

    document.getElementById("translate-es").addEventListener("click", function() {
        translateContent("es");
        document.getElementById("translate-en").style.display = "block";
        document.getElementById("translate-es").style.display = "none";
        currentLanguage = "es";
        renderProjects(currentLanguage);
    });

    function translateContent(language) {
        const translations = {
            en: {
                jobTitle: "Developer & Designer",
                socialHeading: "Visit my social media for more content",
                aboutmeText: "Web developer and UI/UX designer from Argentina, born in 1996. I have a solid command of HTML, CSS, JavaScript, and React, allowing me to create interactive and dynamic websites. Additionally, my passion for design is reflected in every project, always striving to provide intuitive and engaging user experiences. I am a curious and self-taught person, always seeking new knowledge and technologies to continue growing professionally.",
                projectsSubtitle: "Projects",
                experienceSubtitle: "Experience",
                contactSubtitle: "Contact",
                contactText: "Fill out the form and I will get back to you as soon as possible",
                "52north-date": "February 2024 - Present",
                "52north-description": "I create attractive and functional user interfaces for specialized web applications. I am responsible for designing and developing the visible part of the systems, using HTML, CSS, and JavaScript to ensure an intuitive and effective user experience.",
                "freelance-date": "August 2022 - Present",
                "freelance-description": "Experience in comprehensive web page design and development. From design and structure conceptualization to full functionality implementation, ensuring to meet the client's detailed specifications.",
                navHome: "Home",
                navProjects: "Projects",
                navExperience: "Experience",
                navContact: "Contact",
                formName: "Name",
                formEmail: "Email",
                formSubject: "Subject",
                formMessage: "Message",
                formButton: "Send",
                northLocation: "Remote - Netherlands",
                freelanceLocation: "Remote - Argentina"
            },
            es: {
                jobTitle: "Desarrolladora & Diseñadora",
                socialHeading: "Visita mis redes sociales para más contenido",
                aboutmeText: "Desarrolladora web y diseñadora de interfaces de usuario (UX/UI) de Argentina, nacida en 1996. Tengo un sólido dominio de HTML, CSS, JavaScript y React, lo que me permite crear sitios web interactivos y dinámicos. Además, mi pasión por el diseño se refleja en cada proyecto, siempre buscando ofrecer experiencias de usuario intuitivas y atractivas. Soy una persona curiosa y autodidacta, siempre en busca de nuevos conocimientos y tecnologías para seguir creciendo profesionalmente.",
                projectsSubtitle: "Proyectos",
                experienceSubtitle: "Experiencia",
                contactSubtitle: "Contacto",
                contactText: "Completa el formulario y te responderé a la brevedad",
                "52north-date": "Febrero 2024 - Actualidad",
                "52north-description": "Creo interfaces de usuario atractivas y funcionales para aplicaciones web especializadas. Me encargo de diseñar y desarrollar la parte visible de los sistemas, utilizando HTML, CSS y JavaScript para asegurar una experiencia de usuario intuitiva y efectiva.",
                "freelance-date": "Agosto 2022 - Actualidad",
                "freelance-description": "Experiencia en diseño y desarrollo integral de páginas web. Desde la conceptualización del diseño y la estructura hasta la implementación completa de la funcionalidad, asegurando cumplir con las especificaciones detalladas por el cliente.",
                navHome: "Home",
                navProjects: "Proyectos",
                navExperience: "Experiencia",
                navContact: "Contacto",
                formName: "Nombre",
                formEmail: "Email",
                formSubject: "Asunto",
                formMessage: "Mensaje",
                formButton: "Enviar",
                northLocation: "Remoto - Paises Bajos",
                freelanceLocation: "Remoto - Argentina"
            }
        };

        document.getElementById("job-title").textContent = translations[language].jobTitle;
        document.getElementById("social-heading").textContent = translations[language].socialHeading;
        document.getElementById("aboutme-text").textContent = translations[language].aboutmeText;
        document.getElementById("projects-subtitle").textContent = translations[language].projectsSubtitle;
        document.getElementById("experience-subtitle").textContent = translations[language].experienceSubtitle;
        document.getElementById("contact-subtitle").textContent = translations[language].contactSubtitle;
        document.getElementById("contact-text").textContent = translations[language].contactText;
        document.getElementById("52north-date").textContent = translations[language]["52north-date"];
        document.getElementById("52north-description").textContent = translations[language]["52north-description"];
        document.getElementById("freelance-date").textContent = translations[language]["freelance-date"];
        document.getElementById("freelance-description").textContent = translations[language]["freelance-description"];
        document.getElementById("nav-home").textContent = translations[language].navHome;
        document.getElementById("nav-projects").textContent = translations[language].navProjects;
        document.getElementById("nav-experience").textContent = translations[language].navExperience;
        document.getElementById("nav-contact").textContent = translations[language].navContact;
        document.getElementById("form-name").textContent = translations[language].formName;
        document.getElementById("form-email").textContent = translations[language].formEmail;
        document.getElementById("form-subject").textContent = translations[language].formSubject;
        document.getElementById("form-message").textContent = translations[language].formMessage;
        document.getElementById("button").textContent = translations[language].formButton;
        document.getElementById("52northlocation").textContent = translations[language].northLocation;
        document.getElementById("freelancelocation").textContent = translations[language].freelanceLocation;
    }
});