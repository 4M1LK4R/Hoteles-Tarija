$('document').ready(function () {


    $("#dataTable").DataTable();

    var table = $("#dataTable_adm").DataTable({
        dom: 'Bfrtip',
        buttons: [
            'pageLength', 'copy', 'csv', 'excel', 'pdf', 'print', 'colvis'
        ]
    });
});

function Guardar() {
    if (EvaluarCampos()) {
        $('#modal_datos').modal('hide');
    };
};
function EvaluarCampos() {
    var flag = false;
    var form = document.getElementById("form-validation");
    if (form.checkValidity() == false) {
        event.preventDefault();
        event.stopPropagation();
        flag = false;
    } else {
        flag = true;
    }
    form.classList.add("was-validated");
    return flag;
};
function ModalEliminar(id) {
    $('#ModalEliminar').modal('show');
};
function Nuevo() {
    var form = document.getElementById("form-validation");
    form.classList.remove('was-validated');
    $('#modal_datos').modal('show');
};

function ModalFiltro() {
    DateTimePicker();
    var form = document.getElementById("form-validation-fechas");
    form.classList.remove('was-validated');
    $('#modal_filtro').modal('show');
};
//DateTimePicker
function DateTimePicker() {
    $('#fechainicial').datetimepicker({
        format: 'L'
    });
    $('#fechafinal').datetimepicker({
        format: 'L',
        useCurrent: false
    });
    $("#fechainicial").on("change.datetimepicker", function (e) {
        $('#fechafinal').datetimepicker('minDate', e.date);
    });
    $("#fechafinal").on("change.datetimepicker", function (e) {
        $('#fechainicial').datetimepicker('maxDate', e.date);
    });
};