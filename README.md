# 🔥 LuciferAI

LuciferAI is a self-hosted, human-like AI assistant that runs locally on your system.  
It feels natural, friendly, and intelligent, automatically adapting its response length, tone, and reasoning based on the user’s question.

LuciferAI is open-source and requires **no paid software** — users simply paste their own API key and start using it.

---

## ✨ Features

- 🤝 Human-like, friendly conversation
- 🧠 Automatic intelligence adjustment
- ⚡ Dynamic reply length (short / medium / long)
- 😊 Emojis, formatting, and emotional tone
- 🌐 Works on PC, phone, and all devices on the same Wi-Fi
- 🔓 Bring your own API key
- 🛠️ Simple backend + frontend structure
- 🖥️ Runs locally (no cloud hosting required)
- 🔐 No data storage, no tracking

---

## 🎯 Core Concept

LuciferAI does **not** use modes or manual settings.

It automatically understands:
- When to reply briefly (greetings, small talk)
- When to explain deeply (technical or reasoning questions)
- When to be friendly, professional, or supportive

This makes conversations feel natural — like talking to a real assistant.

---

## 📁 Project Structure

  LuciferAI/
  
│

├── backend/

│ ├── app.py

│ └── requirements.txt

│

├── loading.html

├── index.html

├── style.css

├── app.js

│

└── README.md

````md
## 🛠️ Install Requirements

Open **CMD inside the `backend` folder** and run:

```bash
pip install -r requirements.txt
````

---

## ▶️ Start Backend

Run:

```bash
python app.py
```

The server will start at:

```
http://127.0.0.1:5000
```

Keep this window open.

---

## 🖥️ Run Frontend

Open the following file in any browser:

```
loading.html
```

---

## 🌐 Use on Local Wi-Fi

Start a frontend server in the folder containing `loading.html`:

```bash
python -m http.server 8000
```

Open on other devices (phone / PC on same Wi-Fi):

```
http://YOUR_LOCAL_IP:8000/loading.html
```

---

## 🔐 Privacy

* API key stays local on the user’s system
* No chat history is stored
* No analytics or tracking
* Fully local execution

---

## 👤 Who Is This For?

* Beginners
* Developers
* Students
* Anyone wanting a local AI assistant

---

## 🚀 Planned Improvements

* Multi-model support
* Voice input & output
* Desktop EXE build
* Conversation memory
* Plugin system

---

LuciferAI is built to be **simple, powerful, and human**.
