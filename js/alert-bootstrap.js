function alert_danger(div, titulo, mensaje) {
    var codigo = '<div class="alert alert-danger alert-dismissible fade show" role="alert">';
    codigo += '<strong> <i class="icon-warning"></i>'+titulo+'</strong> <br />'+mensaje;
    codigo += '  <button type="button" class="close" data-dismiss="alert" aria-label="Close">';
    codigo += '      <span aria-hidden="true">&times;</span>';
    codigo += '  </button>';
    codigo += '</div>';
    $(div).html(codigo);
}

function alert_success(div, titulo, mensaje) {
    var codigo = '<div class="alert alert-success alert-dismissible fade show" role="alert">';
    codigo += '<strong> <i class="icon-ok"></i>' + titulo + '</strong> <br />' + mensaje;
    codigo += '  <button type="button" class="close" data-dismiss="alert" aria-label="Close">';
    codigo += '      <span aria-hidden="true">&times;</span>';
    codigo += '  </button>';
    codigo += '</div>';
    $(div).html(codigo);
}