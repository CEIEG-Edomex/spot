# Portal Informativo CEIEG - Estado de México

Este repositorio contiene el código fuente del sitio web informativo del **Comité Estatal de Información Estadística y Geográfica (CEIEG)** del Estado de México. El proyecto ha sido diseñado bajo estándares de comunicación gubernamental, priorizando la accesibilidad, la transparencia y el rendimiento.

## 🏛️ Sobre el CEIEG

El CEIEG se constituye como una instancia colegiada de participación y consulta donde convergen representantes de las áreas administrativas del Estado de México, sus municipios y el INEGI, para el cumplimiento de los principios establecidos en el **Sistema Nacional de Información Estadística y Geografía (SNIEG)**.

## 🚀 Características Técnicas

El sitio fue desarrollado siguiendo una arquitectura "Vanilla", evitando la sobrecarga de dependencias innecesarias para garantizar tiempos de carga óptimos y facilidad de mantenimiento.

- **Tecnologías:** HTML5, CSS3 (Modern Grid & Flexbox) y JavaScript Nativo (ES6+).
- **Diseño:** _Flat Design_ Institucional basado en la paleta de colores del SNIEG/INEGI.
- **Interactividad:**
  - **Card Flipping:** Animaciones 3D en CSS para la consulta de funciones de los integrantes.
  - **Modales Dinámicos:** Implementación personalizada de SweetAlert2 con arquitectura de datos centralizada.
  - **Scroll Animations:** Uso de la librería AOS (Animate On Scroll) con optimización para evitar desbordamiento lateral en móviles.
- **Responsividad:** Totalmente adaptable a dispositivos móviles mediante Media Queries y layouts dinámicos.

## 🛠️ Instalación y Uso

Al ser un proyecto basado en tecnologías web estándar, no requiere de un entorno de compilación (como Node.js o Webpack).

1.  Clona el repositorio:
    ```bash
    git clone [https://github.com/CEIEG-Edomex/spot.git](https://github.com/CEIEG-Edomex/spot.git)
    ```
2.  Abre el archivo `index.html` en cualquier navegador moderno.

## 📁 Estructura del Proyecto

```text
├── img/                # Recursos gráficos (Logos de INEGI, SNIEG, EDOMEX)
├── css/                # (Opcional si decides separar los estilos)
├── js/                 # Lógica de diccionarios y modales
└── index.html          # Estructura principal y contenido
```
