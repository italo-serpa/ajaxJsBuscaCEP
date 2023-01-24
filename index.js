console.log("Oi, eu existo");

function buscaCep() {
    let inputCep = document.querySelector('#cep');
    let cep = inputCep.value.replace('-', '');
    let url = 'http://viacep.com.br/ws/' + cep + '/json';
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            if (xhr.status = 200) {
                preencheCampos(JSON.parse(xhr.responseText));
            }
        }
    }
    xhr.send();
}

function preencheCampos(json) { 
    document.querySelector('#endereco').value = json.logradouro;
    document.querySelector('#bairro').value = json.bairro; 
    document.querySelector('#complemento').value = json.complemento;
    document.querySelector('#cidade').value = json.localidade; 
    document.querySelector('#estado').value = json.uf;
}