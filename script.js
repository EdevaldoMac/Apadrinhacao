function validarTelefone() {
    var telefone = document.getElementById('telefone').value;
    var regex = /^\+?\d{1,3}[\s.-]?\(?\d{1,4}\)?[\s.-]?\d{1,4}[\s.-]?\d{3,}$/;
    if (!regex.test(telefone)) {
      alert("Por favor, insira um número de telefone válido.");
      return false;
    }
    return true;
  }

