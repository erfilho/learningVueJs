# 📋 Projeto TaskList Vue 3

## This repository has two different versions of a to-do list application developed with Vue 3 + Tailwind.

## 🚀 Tech Stack

- [Vue 3](https://vuejs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Pinia](https://pinia.vuejs.org/) (in local version)
- [Firebase](https://firebase.google.com/) (in Firebase version)

---

## 🌱 Avaible branches

This project are organized on two different branches, each one with a different version of the application.

| Branch     | Description                         |
| ---------- | ----------------------------------- |
| `main`     | Version with pinia and localStorage |
| `firebase` | Version with Firebase and Firestore |

---

## 🔀 How to use

Clone the repository:

```bash
git clone https://github.com/erfilho/learningVueJs.git
cd learningVueJs
```

After chose the branch you want to use, install the dependencies:

### 🧩 Version with Pinia and localStorage:

```bash
git checkout main
npm install
npm run dev
```

### 🔥 Version with Firebase

```bash
git checkout firebase
npm install
npm run dev
```

> 💡 Needs Firebase configuration file at `firebaseConfig.js`

---

## 💬 About the project

## This project was created to study Vue 3 in a progressive way, comparing different approaches to state and data persistence.

## 📂 Basic structure

```
.
├── src/
│   ├── components/
│   ├── stores/
│   ├── views/
│   └── App.vue
├── index.html
└── vite.config.js
```

---

## 📌 Autor

Developed by Erineldo Filho.
