

# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon


### Links

- Solution URL: [https://github.com/moises7773/articulo.git](https://your-solution-url.com)
- Live Site URL: [https://articulopopover.vercel.app/](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library



### What I learned
Lo que aprendí

-Durante el desarrollo de este proyecto reforcé mis conocimientos de React, CSS y JavaScript. En particular, aprendí a:

- Utilizar useRef para acceder a elementos del DOM y obtener sus dimensiones y posiciones mediante getBoundingClientRect().

- Comprender las diferencias entre useEffect y useLayoutEffect, especialmente al medir elementos del DOM antes de que el navegador pinte la interfaz.

- Implementar renderizado condicional en React para controlar la aparición de componentes.

- - Gestionar estados con useState para actualizar dinámicamente la posición de los elementos.

- Utilizar position: absolute y position: relative para superponer elementos sin alterar la distribución de Flexbox.

- Calcular posiciones dinámicas para crear un Popover que se adapte a la ubicación de su elemento activador y evitar que sobresalga del viewport.

- Trabajar con CSS Modules para organizar y encapsular los estilos de los componentes.
### Continued development

En mis próximos proyectos quiero seguir profundizando en los siguientes aspectos:

- **Posicionamiento dinámico:** perfeccionar los cálculos geométricos para posicionar elementos flotantes, como Popovers y Tooltips, teniendo en cuenta los límites del viewport.
- **Hooks de React:** profundizar en el funcionamiento de `useLayoutEffect`, `useEffect` y `useRef`, especialmente en su interacción con el DOM.
- **Responsive Design:** mejorar la adaptación de los componentes a diferentes tamaños de pantalla y condiciones de visualización.
- **Accesibilidad:** implementar interacciones mediante teclado, gestión del foco y atributos ARIA en componentes interactivos.
- **Arquitectura de componentes:** mejorar la reutilización, separación de responsabilidades y organización de los componentes en React.

### Useful resources

- [React – useLayoutEffect](https://react.dev/reference/react/useLayoutEffect) - Me ayudó a comprender cómo ejecutar operaciones de medición y manipulación del DOM antes de que el navegador pinte los cambios.
- [React – useRef](https://react.dev/reference/react/useRef) - Recurso útil para comprender cómo acceder a elementos del DOM y conservar referencias entre renderizados.
- [MDN – getBoundingClientRect()](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect) - Documentación fundamental para comprender cómo obtener las dimensiones y coordenadas de los elementos HTML respecto al viewport.
- [MDN – CSS position](https://developer.mozilla.org/en-US/docs/Web/CSS/position) - Me permitió profundizar en el posicionamiento de elementos mediante `absolute` y `relative`.

### AI Collaboration

Durante el desarrollo de este proyecto utilicé ChatGPT como herramienta de asistencia técnica.

Lo utilicé principalmente para:

- Comprender conceptos de React, especialmente `useRef`, `useState` y `useLayoutEffect`.
- Analizar problemas relacionados con el posicionamiento dinámico de elementos HTML.
- Depurar errores y comprender las diferencias entre las coordenadas del DOM y las propiedades de posicionamiento de CSS.
- Explorar diferentes estrategias para implementar un Popover que se adaptara a la posición de su elemento activador.

La colaboración con la IA me permitió comprender mejor los problemas que estaba resolviendo. Sin embargo, las decisiones de implementación, los cálculos y la integración del código fueron realizados por mí.

### Author

- Frontend Mentor - [https://www.frontendmentor.io/profile/moises7773]
- GitHub - [Mhttps://github.com/moises7773](#)

### Acknowledgments

Agradezco a Frontend Mentor por proporcionar los desafíos y diseños que permiten practicar y mejorar las habilidades de desarrollo frontend mediante proyectos prácticos.

También agradezco la asistencia de ChatGPT durante el proceso de aprendizaje y resolución de problemas técnicos.