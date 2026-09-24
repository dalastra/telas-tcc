const senha = document.getElementById("senha");
const toggleSenha = document.getElementById("toggleSenha");

toggleSenha.addEventListener("click", () => {
    if (senha.type === "password") {
        senha.type = "text";
        toggleSenha.innerHTML = '<i class="ph ph-eye-slash"></i>';
    } else {
        senha.type = "password";
        toggleSenha.innerHTML = '<i class="ph ph-eye"></i>';
    }
});

const confirmarSenha = document.getElementById("confirmarSenha");
const toggleConfirmarSenha = document.getElementById("toggleConfirmarSenha");

toggleConfirmarSenha.addEventListener("click", () => {
    if (confirmarSenha.type === "password") {
        confirmarSenha.type = "text";
        toggleConfirmarSenha.innerHTML = '<i class="ph ph-eye-slash"></i>';
    } else {
        confirmarSenha.type = "password";
        toggleConfirmarSenha.innerHTML = '<i class="ph ph-eye"></i>';
    }
});