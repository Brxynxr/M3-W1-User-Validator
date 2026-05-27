# 🖥️ User Validator — Interactive JS System

A mini web project that simulates a code terminal with a glassmorphism aesthetic, and validates user data (name and age) using the browser's native `prompt` and `alert`.

---

## 📁 Project Structure

```
M3-W1-User-Validator/
├── public/
│   └── img/
│       └── favicon.ico
├── src/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── sistema_interactivo.js
├── index.html
└── README.md
```

---

## 🚀 How It Works

When you open the project in the browser, the system:

1. Asks for the user's **name** via a `prompt`.
2. Asks for the user's **age** and validates it is a number greater than 0.
3. Evaluates whether the user is **an adult or a minor** and displays a personalized message.
4. If the user presses "Cancel" at any point, the process stops cleanly.

---

## 🧠 Core Logic (`sistema_interactivo.js`)

The central function is `pedirDato(msg, tipo)`, which:

- Accepts two parameters: the `prompt` message and the expected data type (`"texto"` or `"numero"`).
- Validates that the field is not empty.
- In `"numero"` mode, filters out non-numeric and negative values.
- Returns `null` if the user cancels.

```js
function pedirDato(msg, tipo = "texto") { ... }
```

---

## 🛠️ Technologies

| Technology | Usage |
|---|---|
| HTML5 | Semantic structure |
| CSS3 | Glassmorphism & animations |
| JavaScript (Vanilla) | Validation logic |

---

## ▶️ How to Run

No installation or dependencies required. Just open `index.html` in your browser:

```bash
# With Live Server in VS Code
# Right-click index.html → "Open with Live Server"
```

>  Some browsers block `prompt()` in certain contexts. Using Live Server or a local server is recommended.

---

## 👤 Author

**Breyner**
Web Development Student · RIWI Barranquilla
