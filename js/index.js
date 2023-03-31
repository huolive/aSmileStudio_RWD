$(document).ready(function () {

  /*modal*/
    $('a[data-bs-dismiss="modal"][data-bs-toggle="modal"]').on('click',function(){
    console.log("click");
    var target= $(this).data('bs-target');
    console.log("target", target);
    });
});

/*form invalid*/
(function () {
    'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
Array.prototype.slice.call(forms)
    .forEach(function (form) {
    form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
        }

        form.classList.add('was-validated')
    }, false)
    })
})()
