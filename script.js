function emailTelefone() {
    var visto = parseInt(document.getElementById('vistos').value);
    var email = document.getElementById('email');
    var telefone = document.getElementById('tel');
    var label1 = document.getElementById('ee');
    var label2 = document.getElementById('tt');
    var botao = document.getElementById('add');

    if (visto == 0) {
        email.classList.add('d-none');
        telefone.classList.add('d-none');
        label1.classList.add('d-none');
        label2.classList.add('d-none');
        botao.classList.add('d-none');
    } else if (visto <= 3){
        email.classList.remove('d-none');
        telefone.classList.remove('d-none');
        label1.classList.remove('d-none');
        label2.classList.remove('d-none');
        botao.classList.remove('d-none');
    }
}