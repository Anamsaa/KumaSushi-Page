# KumaSushi

## Integrantes del proyecto

* Bernat López Munar
* Ana María Saavedra Yandún

## Objetivo

Continuando con el proyecto anteriormente entregado, adaptar la página web a nuevas características y funcionalidades de la mano del programa de scripting JavaScript.

## Concepto del proyecto

La idea del proyecto radica en un restaurante de comida japonesa, que trata de darle visibilidad a productos relacionados a esta cultura. Con esta idea se pretende venderle al usuario **(consumidor)** el concepto de un negocio acogedor, abierto a todo el público.
Cuenta con tres conceptos elementales: la restauración, la introducción al negocio, la carta y la información de contacto para reservas.

## Color

Teniendo en cuenta que nos basamos en un restaurante con influencias asiáticas, decidimos basar nuestra paleta de colores en colores seleccionados de distintos platos disponibles en el restaurante tales como el nigiri, sashimi, rolls, entre otros. Además de los utilizados en el logo.

#### Referencias
![Referencias](https://github.com/Anamsaa/KumaSushi-Page/assets/147981377/7121701c-bc4a-4b11-9b99-8b3886651da6)

#### Logo
![logo](https://github.com/Anamsaa/KumaSushi-Page/assets/147981377/4ced8d6b-8be4-4683-80b6-a6e1cee38b89)

### Lista de colores
![Paleta](https://github.com/Anamsaa/KumaSushi-Page/assets/147981377/0fd3cf6b-5e3b-4983-9034-d86150cf8a0b)
![KumaSushi](https://github.com/Anamsaa/KumaSushi-Page/assets/147981377/b91cd003-b119-47ae-a94e-d2515750506c)

* Color negro: #131814
* Color blanco: #ffffff
* Color gris: #bfb9b6
* Color rosa: #FBB4B8
* Color rojo: #ca403f
* Color naranja claro: #efcaa5
* Color naranja fuerte: #fe7c04

## Estructura de carpetas y archivos que conforman la página web

### Cambios generales

#### Reestructuración del proyecto

Como equipo decidimos darle una visión más estructurada al proyecto. Y nos basamos en nuevas normas de organización. Distribuimos los recursos, que serían utilizados en las páginas en una carpeta llamada (Assets) en inglés Activos.
En esta carpeta se encuentran:

1. **Hojas de estilo:**
    * Carta
    * Reservas e Inicio
    * Main
2. **Fuente:** Monserrat

* **Sobre la tipografía:** es una tipografía palo seco geométrica, desarrollada por la diseñadora gráfica argentina Julieta Ulanovsky y lanzada en 2011.

3. **Imágenes:** Separadas por directorios para cada página. Nombre: img

4. **Videos:**  Utilizados para la página de inicio.  Nombre: video

5. **Scripts:** Diseñados en cuestión de las funciones requeridas para el tratamiento de elementos en la página. Nombre: js

    * Dentro de la carpeta del proyecto, se encuentran 4 archivos html referentes a las páginas construidas para la elaboración de nuestra web, de las cuales hablaremos a continuación.

![Organización](https://github.com/Anamsaa/KumaSushi-Page/assets/147981377/80f04a23-f1dd-4616-8cba-fa9c21d65f39)

## Secciones fijas
Dentro de la página web hay dos estructuras semánticas que se quedan fijas, correspondientes a la barra de navegación y el footer. Se adaptan a diversas resoluciones, adecuando su diseño.
### Barra de navegación
![barra](https://github.com/Anamsaa/KumaSushi-Page/assets/147981377/5ffb01ec-5b78-45ff-b664-baf642a2dba6)

#### Diseño responsive
El diseño de la barra lateral se establece con una función que permite acceder a elementos del DOM y manipular su aparición con la propiedad de estilos .styles definiendo el display.
![Menu](https://github.com/Anamsaa/KumaSushi-Page/assets/147981377/0cea0146-648f-4859-9d65-69edf2e89624)
![Barra-lateral](https://github.com/Anamsaa/KumaSushi-Page/assets/147981377/0a5d6856-7010-433f-bf23-4b29ab575eb6)
![script](https://github.com/Anamsaa/KumaSushi-Page/assets/147981377/6c521dcf-7503-4010-8dcb-05413052e6f6)

### Footer

![footer](https://github.com/Anamsaa/KumaSushi-Page/assets/147981377/ca72b613-b48a-4dde-a689-fd3c583ad6b7)

#### Diseño responsive 

![footer](https://github.com/Anamsaa/KumaSushi-Page/assets/147981377/c2f5bca3-ca3f-4eeb-9f0a-8f3b86116a6c)

## Páginas

Teniendo en cuenta la idea y el objetivo del proyecto. Se desarrollan cuatro páginas:

### Main

EL main es la página principal que recibe al usuario, esta se compone por la barra de navegación, un carrusel de imagenes con un link a la página de reservas. Y por último, el footer. 

![Main](https://github.com/Anamsaa/KumaSushi-Page/assets/147981377/9317d6e1-098f-4482-bebc-874cc63247e6)

Sobre el carrusel: Este carrusel es automático, tiene iconos laterales que permiten que los usuarios puedan pasar las imágenes de derecha a izquierda o viceversa. 

![Carrusel](https://github.com/Anamsaa/KumaSushi-Page/assets/147981377/2ed01849-f254-440e-a327-90fd7096187c)

El script de esta función que permite el movimiento de las imágenes se denomina carrusel.js 

[Script](https://github.com/Anamsaa/KumaSushi-Page/assets/147981377/3fb55818-7d7f-4a0e-98f5-8feebb9b2236)
[Script](https://github.com/Anamsaa/KumaSushi-Page/assets/147981377/e8603be6-af31-4178-93d3-74eb19dc8cd9)

### Inicio
Esta compuesto por defecto por el nav y el footer. Tiene dos sections, una galeria interactiva y un apartado con videos.
![image](https://github.com/Anamsaa/KumaSushi-Page/assets/147981377/34646d32-09a6-4a33-bffd-c7e0cac4fd87)

#### Visor de imágenes
Al darle click en cada imagen del la galería, ésta cambia la escala de tamaño y con un icono ubicado en la esquina superior derecha puedes cerrarlo. Además, cuenta con efectos al pasar el cursor por la imagen. La organización de la galeria se deriba de un display de tipo grid con manejo de espacio.

![Efecto](https://github.com/Anamsaa/KumaSushi-Page/assets/147981377/5e6a8b22-0e31-4ff7-851a-13689de83f81)

#### Galería de imágenes 
![Efecto](https://github.com/Anamsaa/KumaSushi-Page/assets/147981377/420fd054-4a0e-4868-9026-cf91a32e8c1d)

Antes de llegar al footer, encontramos un contenedor con videos. Que tiene junto a él un botón que llama a una función que permite visualizar el video ocupando un mayor tamaño de la página, y que nos da la opción de cerrarlo.

#### Botón de video 

![Efecto](https://github.com/Anamsaa/KumaSushi-Page/assets/147981377/2d111bef-fe35-4192-a631-1a73275dcb99)

![Botón](https://github.com/Anamsaa/KumaSushi-Page/assets/147981377/a449f2d1-fbd0-434d-8e90-defbc1567d3c)

![Script](https://github.com/Anamsaa/KumaSushi-Page/assets/147981377/a449f2d1-fbd0-434d-8e90-defbc1567d3c)


### Carta
La carta se basa en un menú desplegable, diseñado con una cuadrícula que corresponde a tres características escenciales imagen del producto, descripción y precio. Para ello utilizamos un display de tipo grid. 
Al pasar el cursor, cambiamos la escala de la imagen con un hover para que esta sea más visible para el usuario. Además de que el contenido se puede desplegar, gracias a funciones de ocultamiento. 

![Carta](https://github.com/Anamsaa/KumaSushi-Page/assets/147981377/663bd16c-99e0-4b61-884f-f07016eb9b1c)

![Desplegable](https://github.com/Anamsaa/KumaSushi-Page/assets/147981377/5c739fd7-a43c-465d-9668-7c6d2422e112)

![script](https://github.com/Anamsaa/KumaSushi-Page/assets/147981377/aecdf526-0657-4b42-8eb0-afee74f7d8e1)


### Reservas

1. Se ha añadido un formulario con diferentes validaciones para poner los datos y simular que se realizan reservas. Este formulario está soporteado por un JS que realiza las validaciones en los campos.

![Reserva](https://github.com/Anamsaa/KumaSushi-Page/assets/147981377/2656eac3-0c5f-4b63-adeb-213496e4a02e)

![Alert](https://github.com/Anamsaa/KumaSushi-Page/assets/147981377/0dd8cb0c-58f6-4d2e-963d-a7342c1a7cc6)

2. Se ha modificado el apartado de Horarios, Contacto y Dirección para que se puedan esconder los elementos, así el que le moleste está información podrá cerrar el las cajas para que no le moleste. Hay un JS para cada div para poder ocultar los elementos.
   
![Botones](https://github.com/Anamsaa/KumaSushi-Page/assets/147981377/42ad818c-8c52-45b3-9e8e-b41994564259)

3. Se ha añadido un alert para que cuando inicies la página ya te pida poner un comentario, este comentario se puede cerrar al salir, también hay un botón para que se pueda reabrir si se ha cerrado anteriormente la pestaña. Al poner los comentarios, se irán añadiendo en la parte inferior del Body, justo debajo del botón de comentarios y por encima del footer.
   
![Caja-Comentarios](https://github.com/Anamsaa/KumaSushi-Page/assets/147981377/eaef1051-a513-4305-80ad-8a670761791b)

4. Se han creado varias funciones en JS para la interactividad de la página, aquí las explico todas:
   
    1.  Creamos la función validacion() para validar el formulario del JS, recogemos los valores introducidos por el usuario y los comparamos usando REGEX, si al final todo es true se enviría la petición, si es false, salta un ALERT con diferente mensaje si ha fallado en alguno de los campos.
       
  ![Validación](https://github.com/Anamsaa/KumaSushi-Page/assets/147981377/cf0c815d-d719-4f3e-8552-84101c10efbd)
    
* Se han creado una serie de funciones: ocultarHorarios(), ocultarCorreo(), ocultarDireccion() para poder ocultar o abrir los elementos descriptivos de la página.
    
  ![funciones](https://github.com/Anamsaa/KumaSushi-Page/assets/147981377/db05c9e7-245d-411c-a7cd-c2f263c5725c) 
    
* Por último, hemos creado un script para que cuando abras la página o le cliques al boton, puedas poner una reseña o comentario, es un script que se llama al clickar el button genera un evento para que se salga una página emergente para poder poner el comentario, al poner el comentario se añade justo encima del footer el comentario. Este último hemos usado vídeos de Youtube y foros para poder llegar a crearlo.
![comentarios](https://github.com/Anamsaa/KumaSushi-Page/assets/147981377/4f77c3a6-3f15-4a3c-b4da-71c190de37ba)


##  Responsive 

### Main

### Inicio
![inicio](https://github.com/Anamsaa/KumaSushi-Page/assets/147981377/2aef1bf8-096a-47b8-a6c3-e4f3cd5e3d7a)

### Carta
![image](https://github.com/Anamsaa/KumaSushi-Page/assets/147981377/db054bc5-02d3-4c66-9dee-d2e793544967)

### Reservas

## Aspectos requeridos

1. Trabajo con espacio de formulario:

* Sección de comentarios
  ![image](https://github.com/Anamsaa/KumaSushi-Page/assets/116670667/c791e242-55be-42fb-ae01-2b315f52968c)
  ![image](https://github.com/Anamsaa/KumaSushi-Page/assets/116670667/00220ec6-f7b5-45ef-b22d-8b987385ed02)

* Formulario con validación
  ![image](https://github.com/Anamsaa/KumaSushi-Page/assets/116670667/ba7501ae-e2d7-4897-9783-a643fca4657c)

2. Manipulación de contenido multimedia:

* Carrusel de imágenes
  ![image](https://github.com/Anamsaa/KumaSushi-Page/assets/116670667/9306e304-d6d3-47c6-a714-96f0849cdc86)
  ![image](https://github.com/Anamsaa/KumaSushi-Page/assets/116670667/fc2a0fb9-8e20-4fa0-a23b-abe8cac27a2b)

* Galería interactiva de imágenes
  ![image](https://github.com/Anamsaa/KumaSushi-Page/assets/116670667/2d7aa975-7c14-41ac-bb29-7214b23dc683)

3. Síntesis de la información:
Apartados que antes eran visibles, se ocultaron mediante botones. Se resume la información en un solo click.

* Reservas, información
  ![image](https://github.com/Anamsaa/KumaSushi-Page/assets/116670667/9aeff5b5-b072-4acf-bc50-fb7bc394ae24)
  ![image](https://github.com/Anamsaa/KumaSushi-Page/assets/116670667/b708797e-1385-4f0e-9d03-c0b7fb6505a2)

* Inicio, más vídeos
  ![image](https://github.com/Anamsaa/KumaSushi-Page/assets/116670667/6638f1c0-067b-4199-be35-946a70d4c5eb)
  ![image](https://github.com/Anamsaa/KumaSushi-Page/assets/116670667/7a03adc0-b58a-4d85-a39d-6f087a2c4929)

* Barra de navegación
  ![image](https://github.com/Anamsaa/KumaSushi-Page/assets/116670667/de00bd1d-48ee-4791-90f0-89a922549d0c)

4. Cambio de estilos a través del JS:
  ![image](https://github.com/Anamsaa/KumaSushi-Page/assets/116670667/e673775f-5e79-4225-b013-787f418214ee)

## Maquetación y contenido

Cada página cuenta con elementos semánticos, distribuidos en distintas secciones con clases o selectores diferentes según las necesidades de la misma:

* ### Algunos elementos de bloque más utilizados

* **Titulos**:
  
  ![image](https://github.com/BernatL99/KumaSushi/assets/147981377/0e824a2f-b160-4096-bd76-ad387143f08d)

* **Párrafos**:
  
  ![image](https://github.com/BernatL99/KumaSushi/assets/147981377/dde76d0e-59f7-45a8-8f22-5a9a66d7ce3e)

* **Listas**:
  
  ![image](https://github.com/BernatL99/KumaSushi/assets/147981377/04833f5d-2ba2-4a57-a00e-c6e1e9bfbdf7)

* ### Elementos semánticos

  * **Header**: Encontramos el menú de navegación, lo conforman el logo y los enlaces de las otras páginas

    * **Código**

      ![Header](https://github.com/BernatL99/KumaSushi/assets/147981377/82371142-bbbe-445a-a4db-9ffbe59aadbc)

  * **Main**: Foco principal de cada página, encontramos generalmente la información más relevante que le queremos enseñar al cliente

    * **Código**

      ![Main](https://github.com/BernatL99/KumaSushi/assets/147981377/f4ddc184-9867-44b5-9136-627adf98d005)

  * **Footer**: El pie de página es una recapitulación de todo lo visto anteriormente, guarda un apartado de información de
    la empresa, ubicación, redes y datos de contacto. Así como una sección de Política de privacidad

    * **Código**

      ![Footer](https://github.com/BernatL99/KumaSushi/assets/147981377/ceba6013-4af1-485c-ae97-c5c0a25abaf6)

  * **Section**: Se utiliza para agrupar contenido relacionado y se puede pensar como un grupo temático de contenido. Nos permitió clasificar la información dentro de la web.  

    * **Código**

      ![image](https://github.com/BernatL99/KumaSushi/assets/147981377/6fa50271-f5a1-4978-a70c-c713280a6079)

  * **Nav**: Su propósito es estructurar y marcar claramente la parte del contenido que contiene los enlaces de navegación principal. Fue importante en el desarrollo de la barra de navegación de la página que se ubica en el header. Esta contiene enlaces como el inicio, carta y reserva.

    * **Código**

      ![image](https://github.com/BernatL99/KumaSushi/assets/147981377/3ee56a52-1bb5-42a2-86d5-51a74a6ddabf)

* ### Contenedores

  * **div**
    Se almacenan los elementos en contenedores como **div** para facilitar el movimiento y organización del contenido.

    ![image](https://github.com/BernatL99/KumaSushi/assets/147981377/2b59fc94-58bf-4c8c-8b30-c0144a8f1035)

  * **span**
    Se utiliza como un contenedor en línea para agrupar y aplicar estilos a elementos en línea.

    ![image](https://github.com/BernatL99/KumaSushi/assets/147981377/c27e5efd-fed2-453c-955b-3dc310735add)

## CSS

* ### Selectores

  * **Selector universal**: Selecciona todos los elementos en una página. Se utiliza para aplicar estilos globales que afectan a todos los elementos.

    ![image](https://github.com/BernatL99/KumaSushi/assets/147981377/03c9e932-4833-430e-a338-815de4deda42)

  * **Selector de etiqueta**: El selector de etiqueta selecciona todos los elementos que coinciden con una etiqueta HTML específica.

    ![image](https://github.com/BernatL99/KumaSushi/assets/147981377/afb79cbf-b5d2-4fa9-b4ae-2240c60f9131)

  * **Selector de clase**: El selector de clase se utiliza para seleccionar elementos que tienen un atributo de clase específico. Se define con un punto seguido del nombre de la clase.

    ![image](https://github.com/BernatL99/KumaSushi/assets/147981377/243a3d98-6131-49cd-b51e-09baffc0a750)

  * **Selector de tipo id**: El selector de tipo ID se utiliza para seleccionar un elemento específico que tiene un atributo de id único. Se define con un hash seguido del nombre del ID.

    ![image](https://github.com/BernatL99/KumaSushi/assets/147981377/3abcc3ba-6265-406d-ac2d-2d3566714078)

* ### Modelo de cajas mayormente utilizados

  * #### Bloques de Contenido (width, height): Se refiere al área de contenido de un elemento, que puede especificarse con propiedades como width y height

  * #### Margen Exterior (margin): Define el espacio fuera del borde del elemento

  * #### Relleno (padding): Define el espacio entre el contenido del elemento y su borde

  * #### Borde (border): Define el borde alrededor del contenido y el relleno

      ![image](https://github.com/BernatL99/KumaSushi/assets/147981377/80e9ca89-578b-4abb-a3f4-2ef4734b65c1)

      ![image](https://github.com/BernatL99/KumaSushi/assets/147981377/fce261dc-9d55-4a47-84b1-397a499793e7)

* ### Cajas flexibles

    Esto permite un diseño más _flexible y control_ sobre cómo se organizan y se distribuyen los elementos secundarios dentro de estos contenedores.

    ![image](https://github.com/BernatL99/KumaSushi/assets/147981377/f24b9342-a3cc-4643-a032-755907af5485)

* ### (Media Queries) Estilos responsivos

    El objetivo principal es que la interfaz de un sitio web se adapte de manera fluida y eficiente a distintas resoluciones, desde grandes pantallas de escritorio hasta dispositivos móviles más pequeños.

    En  nuestro caso, decidimos emplear queries para distintos dispositivos como de menor tamaño, resolución de smarthphones y tablets.

![image](https://github.com/BernatL99/KumaSushi/assets/147981377/51c205e7-7c1a-40f7-85ba-9d71ea97fcdd)

![image](https://github.com/BernatL99/KumaSushi/assets/147981377/24736a26-c0f8-4af0-b759-053beec7c771)

## Tecnológias utilizadas en el desarrollo de la página

#### GitHub

Esta es una plataforma de desarrollo colaborativo, la utilizamos para almacenar y gestionar el código fuente del proyecto. Creamos un repositorio llamado "**KumaSushi**"y actualizamos el contenido con la opción "**Commits**".

![image](https://github.com/BernatL99/KumaSushi/assets/147981377/aef80787-0d15-4266-adda-0c71bc0b29b1)

#### VisualStudioCode

Es un editor de código fuente que proporciona herramientas y características avanzadas para el desarrollo de la web. En esta administramos y coordinamos _la maquetación y estilos de la página_. Gracias a extensiones como "**Live Share**" tuvimos una previsualización de cada uno de los documentos _(.html)._


![vsc](https://github.com/Anamsaa/KumaSushi-Page/assets/147981377/2879debc-78b4-4b9c-9570-a962d119efbf)

#### Google Fonts

Es un servicio que ofrece una amplia variedad de fuentes tipográficas, permite agregar el código en la sección de encabezado del HTML. En nuestro caso, utilizamos la fuente "**Monserrat**"

![image](https://github.com/BernatL99/KumaSushi/assets/147981377/d35e75eb-ae03-486e-9ba2-4f4bf3c9a8dc)

#### Navegadores (Inspección de elementos)

Son fundamentales para visualizar y probar la web, además de que nos permite la búsqueda de contenido.
Cabe de destacar, que cuenta con herramientas que resultaron importantes en el desarrollo de la página. En aspectos como el responsive y la maquetación:

* **Inspección de elementos**: Permite modificar y examinar elementos _HTML Y CSS._

* **Depuración**: Utiliza la consola del navegador para detectar errores y realizar pruebas de rendimiento.

![image](https://github.com/Anamsaa/KumaSushi-Page/assets/147981377/c6fec45f-97df-464d-bd2b-023a7af01809)

## Distribución de tareas

|Tarea|Responsable |
|-------|-----|
|Css | Ana Saavedra, Bernat López |
|Página 1 Home JS y CSS |Ana Saavedra |
|Página 2  Carta JS y CSS |Ana Saavedra |
|Página 3  Reservas JS, CSS y Form|Bernat López |
|Responsive (Adaptabilidad de la Web)|Bernat López |
|Página 4 (html, css, JS) Inicio|Ana Saavedra |

