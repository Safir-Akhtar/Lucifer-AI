/* ======================================================
   LuciferAI – Single Model Frontend Logic
   Stable • Clean • Future-ready
====================================================== */

document.addEventListener("DOMContentLoaded", () => {
  console.log("LuciferAI app.js loaded");

  // ================= ELEMENTS =================
  const chat = document.getElementById("chat");
  const input = document.getElementById("userInput");
  const sendBtn = document.getElementById("sendBtn");

  const typingSfx = document.getElementById("typingSfx");
  const sendSfx = document.getElementById("sendSfx");

  if (!chat || !input || !sendBtn) {
    alert("LuciferAI UI error: Required elements missing.");
    return;
  }

  // ================= CONFIG =================
  // 🔴 CHANGE IP IF LAN IP CHANGES
  const BACKEND_URL = "http://192.168.1.8:5000/chat";

  let isSending = false;

  // ================= EVENTS =================
  sendBtn.addEventListener("click", sendMessage);

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  });

  // ================= MAIN =================
  async function sendMessage() {
    if (isSending) return;

    const userText = input.value.trim();
    if (!userText) return;

    isSending = true;
    input.value = "";

    // Play send sound
    sendSfx?.play().catch(() => {});

    // User bubble
    addMessage(userText, "user");

    // AI bubble (thinking)
    const aiBubble = document.createElement("div");
    aiBubble.className = "msg ai";
    aiBubble.textContent = "LuciferAI is thinking…";
    chat.appendChild(aiBubble);
    scrollBottom();

    // Typing sound
    if (typingSfx) {
      typingSfx.currentTime = 0;
      typingSfx.play().catch(() => {});
    }

    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 30000); // 30s hard stop

      const response = await fetch(BACKEND_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userText }),
        signal: controller.signal
      });

      clearTimeout(timeout);

      if (!response.ok) {
        throw new Error("Backend returned error");
      }

      const data = await response.json();
      stopTypingSound();

      const reply = data.reply || "LuciferAI: No response received.";
      typeText(aiBubble, reply);

    } catch (err) {
      console.error("LuciferAI frontend error:", err);
      stopTypingSound();
      aiBubble.textContent =
        "LuciferAI: Temporary connection issue. Please try again.";
    } finally {
      isSending = false;
    }
  }

  // ================= HELPERS =================
  function addMessage(text, role) {
    const div = document.createElement("div");
    div.className = `msg ${role}`;
    div.textContent = text;
    chat.appendChild(div);
    scrollBottom();
  }

  function typeText(element, text) {
    element.textContent = "";
    let i = 0;

    const speed = 18; // typing speed (ms)
    const typer = setInterval(() => {
      element.textContent += text.charAt(i);
      i++;
      scrollBottom();

      if (i >= text.length) {
        clearInterval(typer);
      }
    }, speed);
  }

  function stopTypingSound() {
    if (typingSfx) {
      typingSfx.pause();
      typingSfx.currentTime = 0;
    }
  }

  function scrollBottom() {
    chat.scrollTop = chat.scrollHeight;
  }
});
