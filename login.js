function mostraAvisoUm() {
    let nome = document.getElementById('nome').value;
    if (nome.trim().length > 8) {
        document.getElementById('avisoUm') ? document.getElementById('avisoUm').innerHTML = "" : null;
    } else {
        if (!document.getElementById('avisoUm')) {
            let aviso = document.createElement('span');
            aviso.id = 'avisoUm';
            aviso.innerHTML = "Mín. de 8 caracteres";
            document.querySelector('.input-field').appendChild(aviso);
        }
    }
}

function mostraAvisoDois() {
    let senha = document.getElementById('senha').value;
    if (senha.trim().length > 8) {
        document.getElementById('avisoDois') ? document.getElementById('avisoDois').innerHTML = "" : null;
    } else {
        if (!document.getElementById('avisoDois')) {
            let aviso = document.createElement('span');
            aviso.id = 'avisoDois';
            aviso.innerHTML = "Mín. de 8 caracteres";
            document.querySelectorAll('.input-field')[1].appendChild(aviso);
        }
    }
}

const titulo = document.getElementById("titulo");
    titulo.onmouseover = function() {
      titulo.style.color = "purple"; 
    }

    titulo.onmouseout = function() {
      titulo.style.color = "White";
    }