<p align="center">
  <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" alt="project-logo">
</p>
<p align="center">
    <h1 align="center">FACE-REACT</h1>
</p>
<p align="center">
    <em><code>► FACIAL DETECTION APP</code></em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/last-commit/Walteriba/Face-React?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/Walteriba/Face-React?style=default&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/Walteriba/Face-React?style=default&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat&logo=HTML5&logoColor=white" alt="HTML5">
	<img src="https://img.shields.io/badge/Bootstrap-7952B3.svg?style=flat&logo=Bootstrap&logoColor=white" alt="Bootstrap">
	<img src="https://img.shields.io/badge/Vite-646CFF.svg?style=flat&logo=Vite&logoColor=white" alt="Vite">
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
	<img src="https://img.shields.io/badge/Firebase-FFCA28.svg?style=flat&logo=Firebase&logoColor=black" alt="Firebase">
</p>

## Overview

<code>► **Face-React** is a project developed as part of the **Codo a Codo** initiative. It uses **Face-api.js**, **React**, **Bootstrap**, and **Firebase** to provide a facial recognition and image analysis platform.
</code>

<p align="center">
    <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWxyOWk3bjAxNTk1MmRhNnB6Y2JoZTNxZjhudnY1aHRhdXk1cWxyOSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kuQrK3m1pX5kvB1Mu1/giphy.gif" alt="GIF">
</p>

<p align="center">
  <a href="https://face-react.vercel.app/">DEPLOY DEMO</a>
</p>

## Features

- Real-time facial detection and recognition
- Emotion detection
- Age and gender estimation
- User authentication and management with Firebase
- Responsive design using Bootstrap


## Repository Structure

```sh
└── Face-React/
    ├── README.md
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── public
    │   ├── background.svg
    │   ├── emojis
    │   │   ├── angry.svg
    │   │   ├── disgusted.svg
    │   │   ├── fearful.svg
    │   │   ├── happy.svg
    │   │   ├── neutral.svg
    │   │   ├── sad.svg
    │   │   └── surprised.svg
    │   ├── models
    │   ├── happy-girl.svg
    │   ├── linkedin.svg
    │   ├── github.svg
    │   └── vite.svg
    ├── src
    │   ├── App.css
    │   ├── App.jsx
    │   ├── components
    │   │   ├── Header.jsx
    │   │   ├── Home.jsx
    │   │   ├── auth
    │   │   │   ├── Login.jsx
    │   │   │   ├── ProtectedRoute.jsx
    │   │   │   └── Register.jsx
    │   │   └── home
    │   │       ├── CanvasComponent.jsx
    │   │       ├── DataComponent.jsx
    │   │       ├── LoaderComponent.jsx
    │   │       └── VideoComponent.jsx
    │   ├── context
    │   │   └── authContext.jsx
    │   ├── firebaseConfig
    │   │   └── firebase.js
    │   ├── index.css
    │   ├── main.jsx
    │   └── utils
    │       ├── FaceDetection.js
    │       └── LoadModels.js
    ├── vercel.json
    └── vite.config.js
```
### Installation

#### From `source`:

> 1. Clone the Face-React repository:
>
> ```console
> $ git clone https://github.com/Walteriba/Face-React
> ```
>
> 2. Change to the project directory:
>
> ```console
> $ cd Face-React
> ```
>
> 3. Install the dependencies:
>
> ```console
> $ npm install
> ```

#### Configure Firebase:

1. Set up your own Firebase project by following the instructions on the [Firebase Console](https://console.firebase.google.com/).

2. Once you have set up your Firebase project, obtain your project's configuration. You will find the Firebase SDK snippet with your configuration details in the project settings.

3. Create a `.env` file in the root directory of your project and add the following variables, replacing the placeholder values with your actual Firebase configuration:

The `.env` file should look something like this:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id

```

### Usage

> Run Face-React using the following command:
> ```console
> $ npm run dev
> ```

## Authors and Contributors

- Walter Ibarrola
- Alejandro E. Aguilar

<br>
<p align="center">
   <a href="https://github.com/Walteriba/Face-React/graphs/contributors">
      <img src="https://contrib.rocks/image?repo=Walteriba/Face-React">
   </a>
</p>
