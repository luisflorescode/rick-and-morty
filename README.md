# Rick and Morty

Está es una aplicación desarrollada en React que consume la API de [The Rick and Morty API](https://rickandmortyapi.com/) para mostrar los distintos personajes de la serie y poder elegir tus favoritos, los cuales se almacenan en un estado de Redux.
 
Elegí esta API ya que es muy completa en los datos que provee, además de que contiene las imágenes de cada personaje.

## Instalación
```
npm install
```

## Ejecución
```
npm run start
```

## Aplicación para producción
```
npm run build
```

## Carpetas y contrucción de elementos

![alt text](https://i.imgur.com/xzOvSrr.png "Logo Title Text 1")

* **src/actions**: Contiene los actions para realizar cambios al estado de Redux.
* **src/assets**: Contiene los elementos visuales de la aplicación como estilos, imágenes e iconos.
* **src/assets/static**: Contiene los elementos de assets que se mantendrán sin cambios (iconos e imágenes).
* **src/assets/static/icons**: Contiene los iconos de la aplicación.
* **src/assets/static/images**: Contiene los imágenes de la aplicación.
* **src/assets/styles**: Contiene los estilos de la apliación, los estilos como App.scss y Vars.scss corresponden a estilos globales.
* **src/assets/styles/components**: Contiene los estilos de los componentes, existe un archivo .scss para cada componente.
* **src/assets/styles/containers**: Contiene los estilos de los containers, existe un archivo .scss para cada container en caso de que se requiera.
* **src/components**: Contiene los componentes de la aplicación.
* **src/containers**: Contiene los containers de la aplicación, entiéndase como container un componente que encapsula varios componentes para construir una página.
* **src/reducers**: Contiene los reducers para aplicar los actions al estado de Redux.
* **src/routes**: Contiene las rutas de la aplicación para el direccionamiento de los containers de acuerdo al path.
* **src/index.jsx**: Contiene el archivo principal de la aplicación y el estado inicial de Redux.

## Mejoras y actualizaciones
Una de las mejoras que de pueden implementar en la aplicación es incluir **media queries** para la que la aplicación pueda visualizarse de manera adecuada en todos los dispositivos de acuerdo a sus dimensiones.

En cuanto a las actualizaciones, una muy buena sería incluir todas las páginas de la API para mostrar y poder elegir a todos los personajes que almacena.
