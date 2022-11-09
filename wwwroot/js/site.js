// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


function validar(){
    alert ("Formulário enviado com sucesso.")
    
}

function validarNome(){
    var valorNome = document.getElementById('txtNome').value;
    if (valorNome.length <3 ) {
        alert("Preencha o campo com mais de 3 caraceteres!");
        return false; 
    }
    else{
        return true; 
        
    }
}

function openModal(mn) {
  let modal = document.getElementById(mn);

  if (typeof modal == 'undefined' || modal === null)
      return;

  modal.style.display = 'Block';
  document.body.style.overflow = 'hidden';
}

function closeModal(mn) {
  let modal = document.getElementById(mn);

  if (typeof modal == 'undefined' || modal === null)
      return;

  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
}


