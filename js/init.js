(function ($) {
  $(function () {

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

/*Propostas*/
$(document).ready(function () {
  $('ul.tabs').tabs();
});

/*Form*/
$(document).ready(function () {
  $('select').formSelect();
});


/*Votação*/
let votos_Trump = 0;
let votos_Biden = 0;
const votos = {
  Colorado: {
    trump: 0,
    biden: 0,
    delegados: 9
  },
  Oklahoma: {
    trump: 0,
    biden: 0,
    delegados: 7
  },
  Georgia: {
    trump: 0,
    biden: 0,
    delegados: 16
  },
  Nevada: {
    trump: 0,
    biden: 0,
    delegados: 6
  },
  Texas: {
    trump: 0,
    biden: 0,
    delegados: 38
  },
}

function voto(estado, presidente) {

  if (presidente === "Trump") {
    votos[estado].trump += 1
    console.log(votos[estado]);
    if (votos[estado].trump === 3) {
      M.toast({ html: `Trump ganhou ${votos[estado].delegados} delegados do estado de ${estado}` });
    }
  } else {
    votos[estado].biden += 1
    if (votos[estado].biden === 3) {
      M.toast({ html: `Biden ganhou ${votos[estado].delegados} delegados do estado de ${estado}` });
    }
  }
}


function votar() {
  let nome = document.ficha.name.value;
  let titulo = document.ficha.title.value;
  let presidente = document.ficha.presidente.value;
  let estado = document.ficha.estado.value;

  if (nome == "" || titulo == "" || presidente == "" || estado == "") {
    M.toast({ html: 'Preencha todos os campos!' });
  }
  else {
    voto(estado, presidente)
  };
}


function limpar() {
  document.ficha.name.value= "";
  document.ficha.title.value = "";
  document.ficha.presidente.value ="";
  document.ficha.estado.value = "";
}