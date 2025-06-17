#  Pomodoro Task Manager

A clean and responsive React-based productivity app that combines the **Pomodoro Technique** with a **Task Manager**. It helps you stay focused by breaking your work into intervals (focus sessions) separated by short breaks, while keeping track of your daily tasks and progress.

---

##  Features

*  Add and manage daily tasks with deadlines
*  Pomodoro Timer with adjustable focus/break durations
*  Auto-start next session (focus or break)
*  Daily progress tracker
*  Tasks and progress saved in localStorage
*  Fully responsive UI (mobile-friendly)
*  Beautiful, modern, and clean design
*  Built with React + Express + Ngrok for testing

---

##  Preview

![preview](https://github.com/user-attachments/assets/1797a9b3-4c42-4e27-8587-7e1b2ceb1608)


---

##  Tech Stack

| Frontend | Backend | Tools      |
| -------- | ------- | ---------- |
| React    | Express | Ngrok      |
| HTML5    | Node.js | VSCode     |
| CSS3     |         | Git/GitHub |

---

##  Installation

```bash
# Clone the repository
git clone https://github.com/your-username/pomodoro-task-manager.git
cd pomodoro-task-manager

# Install dependencies
npm install

# Start development server
npm start
```

---

##  Running with Ngrok (for public testing)

1. Start your app:

```bash
npm start
```

2. In a new terminal, run:

```bash
ngrok http 3000
```

3. Copy the public URL from Ngrok (e.g., `https://abc123.ngrok.io`) and open it in your browser.

---

##  Build for Production

```bash
npm run build
```

This will generate an optimized production build in the `/build` folder.

---

##  Customize the App

* Update the title and favicon in `public/index.html`.
* Adjust Pomodoro and break durations from the UI.
* You can change design colors in `App.css`.

---

##  Folder Structure

```
pomodoro-task-manager/
│
├── public/              # Static assets and index.html
├── src/                 # React components and main logic
│   ├── App.js
│   ├── index.js
│   └── ...
├── server.js            # Express server (for production or Ngrok)
├── package.json
├── preview.png         # Website's screenshot for preview
└── README.md
```

---

##  Author

**Haider**
Built with ❤️ using React & Express
[GitHub Profile](https://github.com/HSA-ATTOCK)

---

##  License

This project is licensed under the [MIT License](LICENSE).

---
