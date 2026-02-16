const LOCKED_USERNAME = "@SonaliNair";
const LOCKED_PASSWORD = "12345";
  let timeLeft = 120; 
  const timerEl = document.getElementById("timer");
  const countdown = setInterval(() => {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    timerEl.innerText = 
      `Session expires in ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    if (timeLeft <= 0) {
      clearInterval(countdown);
      window.location.href = "index.html";
    }
    timeLeft--;
  }, 1000);
  function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username === "" || password === "") {
      document.getElementById("error").innerText = "Please fill all fields";
      return;
    }
    clearInterval(countdownInterval);
    window.location.href = "dash.html";
  }
