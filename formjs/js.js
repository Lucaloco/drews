
function teste(){

    var nome = document.getElementById('nome').value;
    var idade = document.getElementById('idade').value;
    var cpf = document.getElementById('cpf').value;
    var cep = document.getElementById('cep').value;
    var endereco = document.getElementById('endereco').value;
    var telefone = document.getElementById('telefone').value;

    if (nome == "") {
      alert("O campo não pode ficar vazio");
      return false;
    }
    if (isNaN(idade)) {
      alert("O campo só pode conter números");
      return false;
    }
    if (isNaN(cpf)) {
      alert("O campo só pode conter números");
      return false;
    }
    if (isNaN(cep)) {
      alert("O campo só pode conter números");
      return false;
    }
    if (ISNAN(endereco)) {
      alert("O campo não pode ficar vazio e não pode conter números");
      return false;
    }
    if (ISNAN(telefone)) {
      alert("O campo só pode conter números");
      return false;
    }
}
