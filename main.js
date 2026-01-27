document.addEventListener('DOMContentLoaded', () => {

    // Configuración del Intersection Observer
    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.15 // El elemento debe ser visible un 15% para activarse
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Añadir clase active cuando entra en pantalla
                entry.target.classList.add('active');
                // Opcional: Dejar de observar si solo queremos que anime una vez
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Seleccionar todos los elementos con la clase .reveal
    const revealElements = document.querySelectorAll('.reveal');

    revealElements.forEach(element => {
        observer.observe(element);
    });
});
// Articulos de integrantes back - front
document.addEventListener('DOMContentLoaded', () => {
    const teamGrid = document.querySelector('.team-grid');

    teamGrid.addEventListener('click', (e) => {
        // Verificamos si lo que se clickeó es el botón de girar
        if (e.target.classList.contains('flip-btn')) {
            // Buscamos el contenedor interno más cercano
            const cardInner = e.target.closest('.card-inner');
            cardInner.classList.toggle('is-flipped');
        }
    });
});

//SweetsAlerts
document.addEventListener('DOMContentLoaded', () => {
    
    // Diccionario de datos (Igual que el anterior)
    const datosListas = {
        secretarias: {
            titulo: "Secretarías Estatales",
            items: ["Secretaría General de Gobierno", "Secretaría de Seguridad", "Secretaría de Salud", "Secretaría del Trabajo","Secretaría de Educación Ciencia, Tecnología e Innovación","Secretaría de Bienestar","Secretaría de Desarrollo Urbano e Infraestructura","Secretaría del Campo","Secretaría de Desarrollo Económico","Secretaría de Cultura y Turismo o funciones afines.  o funciones afines","Secretaría de la Contraloría","Secretaría del Medio Ambiente y Desarrollo Sostenible","Secretaría del Agua","Secretaría de las Mujeres","Secretaría de Movilidad"]
        },
        orgautonomos: {
            titulo: "Órganos Autonomos",
            items: ["Fiscalía General de Justicia del Estado de México "]
        },
        orgpublicosdescen: {
            titulo: "Organismos públicos descentralizados",
            items: ["Consejo de Investigación y Evaluación de la Política Social", "Comité de Planeación para el Desarrollo del Estado de México", "Instituto Hacendario del Estado de México"]
        },
        orgpublicosdescon: {
            titulo: "Organismos públicos desconcentrados",
            items: ["Consejo Estatal de Población"]
        },
        orgadmcentral: {
            titulo: "Organismos de la Administración Pública Centralizada del Estado de México",
            items: ["Oficialía Mayor", "Coordinación Técnica del Gabinete", "Consejería Jurídica del Estado de México"]
        },
        invitados: {
            titulo: "Invitados",
            items: ["Organizaciones sociales o privadas", "Sector Académico", "Organismos internacionales", "Otras Unidades del Estado"]
        }
        // ... Agrega las demás categorías ...
    };

    // Buscamos todos los elementos con la clase clickable-item
    const items = document.querySelectorAll('.clickable-item');

    items.forEach(item => {
        item.addEventListener('click', function() {
            const categoria = this.getAttribute('data-categoria');
            const info = datosListas[categoria];

            if (info) {
                Swal.fire({
                    title: info.titulo,
                    html: `
                        <div class="swal-unidades-container">
                            <ul class="swal-list">
                                ${info.items.map(i => `<li>${i}</li>`).join('')}
                            </ul>
                        </div>
                    `,
                    iconColor: '#00548F',
                    confirmButtonText: 'CERRAR',
                    confirmButtonColor: '#003366',
                    width: '550px',
                    customClass: {
                        popup: 'swal-institucional-popup',
                        title: 'swal-institucional-title',
                        confirmButton: 'swal-btn-institucional'
                    }
                });
            }
        });
    });
});