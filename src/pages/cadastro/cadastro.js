function handleSubmit() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
  
    if (password !== confirmPassword) {
      showError("As senhas não coincidem.");
      return false;
    }
  
    if (password.length < 8) {
      showError("A senha deve ter no mínimo 8 caracteres.");
      return false;
    }
  
    // Simulando um cadastro bem-sucedido
    showSuccess("Cadastro efetuado com sucesso!");
    return true; // Permite o envio do formulário
  }
  
  function showError(message) {
    const errorMessage = document.getElementById("errorMessage");
    errorMessage.textContent = message;
    errorMessage.style.display = "block";
  }
  
  function showSuccess(message) {
    const successMessage = document.getElementById("successMessage");
    successMessage.textContent = message;
    successMessage.style.display = "block";
    
    // Redirecionar para a página de login após 2 segundos (2000 milissegundos)
    setTimeout(function() {
      window.location.href = "/src/pages/login/login.html"; // Redireciona para a página login.html
    }, 2000)
  }
 
  