<p align="center">
  <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" alt="project-logo">
</p>
<p align="center">
    <h1 align="center">FACE-REACT</h1>
</p>
<p align="center">
    <em><code>► APP DE DETECCIÓN FACIAL</code></em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/Walteriba/Face-React?style=default&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/Walteriba/Face-React?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/Walteriba/Face-React?style=default&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/Walteriba/Face-React?style=default&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
	<!-- default option, no dependency badges. -->
</p>

##  Descripción General

<code>► Face-React es un proyecto desarrollado como parte de la iniciativa Codo a Codo. Utiliza Face-api.js, React, Bootstrap y Firebase para ofrecer una plataforma de reconocimiento facial y análisis de imágenes.
</code>

<p align="center">
  <a href="https://youtu.be/k4IZaIDmf6w">VIDEO DEMO</a>
</p>

##  Características

   
- Detección y reconocimiento facial en tiempo real
- Detección de emociones
- Estimación de edad y género
- Autenticación y gestión de usuarios con Firebase
- Diseño adaptable utilizando Bootstrap




##  Estructura del Repositorio
```sh
└── Face-React/
    ├── README.md
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── public
    │   ├── cam_background.jpg
    │   ├── emojis
    │   ├── models
    │   └── vite.svg
    ├── src
    │   ├── App.css
    │   ├── App.jsx
    │   ├── components
    │   ├── context
    │   ├── firebaseConfig
    │   ├── index.css
    │   ├── main.jsx
    │   └── utils
    └── vite.config.js
```

### Instalación

#### Desde `source`:

> 1. Clona el repositorio de Face-React:
> ```console
> $ git clone https://github.com/Walteriba/Face-React
> ```
>
> 2. Cambia al directorio del proyecto:
> ```console
> $ cd Face-React
> ```
>
> 3. Instala las dependencias:
> ```console
> $ npm install
> ```

#### Configurar Firebase:

> 1. Configura tu propio proyecto de Firebase siguiendo las instrucciones en la [Consola de Firebase](https://console.firebase.google.com/).
>
> 2. Una vez que hayas configurado tu proyecto de Firebase, obtén la configuración de tu proyecto. Encontrarás el fragmento del SDK de Firebase con los detalles de tu configuración en la configuración del proyecto.
>
> 3. Crea un archivo .env en el directorio raíz de tu proyecto y agrega las siguientes variables, reemplazando los valores de marcador de posición con tu configuración real de Firebase:
> ```env
> VITE_FIREBASE_API_KEY=your_api_key
> VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
> VITE_FIREBASE_PROJECT_ID=your_project_id
> VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
> VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
> VITE_FIREBASE_APP_ID=your_app_id
> ```

El archivo `.env` debería verse algo así:
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id

```

###  Uso

> Ejecuta Face-React utilizando el siguiente comando:
> ```console
> $ npm run dev
> ```


## Authors and Contributors Graph

- Walter Ibarrola
- Ezequiel Prueba

<br>
<p align="center">
   <a href="https://github.com{/Walteriba/Face-React/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=Walteriba/Face-React">
   </a>
</p>
</details>
