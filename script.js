const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

togglePassword.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    togglePassword.classList.remove("bx-show");
    togglePassword.classList.add("bx-hide");
  } else {
    password.type = "password";
    togglePassword.classList.remove("bx-hide");
    togglePassword.classList.add("bx-show");
  }
});

window.onload = () => {
  const savedEmail = localStorage.getItem("email");
  const savedPassword = localStorage.getItem("password");
  const checked = localStorage.getItem("remember");

  if (checked === "true") {
    document.getElementById("email").value = savedEmail;
    document.getElementById("password").value = savedPassword;
    document.getElementById("remember").checked = true;
  }
};

function login() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  const remember = document.getElementById("remember").checked;

  if (remember) {
    localStorage.setItem("email", email);
    localStorage.setItem("password", pass);
    localStorage.setItem("remember", true);
  } else {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    localStorage.removeItem("remember");
  }

  alert("Login realizado!");
}