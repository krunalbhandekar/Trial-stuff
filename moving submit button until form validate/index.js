
    const button = document.getElementById('btn');
button.addEventListener('mouseover', function () {
  var effect=Math.ceil(Math.random() * 90);
    console.log(effect);
    button.style.left = `${effect}%`;
    // button.style.top = `${Math.ceil(Math.random() * 45)}%`;
});
button.addEventListener('click', function () {
    alert('Validate form !')
})
    
        $(document).ready(function () {
            // ----------- Set all elements as INVALID --------------
            var myInputElements = document.querySelectorAll(".form-control");
            var i;
            for (i = 0; i < myInputElements.length; i++) {
                myInputElements[i].classList.add('is-invalid');
                myInputElements[i].classList.remove('is-valid');
            }

            // ----------------- Validate on submit -----------------
            let currForm1 = document.getElementById('myForm1');
            currForm1.addEventListener('submit', function (event) {
                if (currForm1.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                else {
                    $("#submitBtn").attr("disabled", false);
                    $('#submitBtn').addClass('btn-primary').removeClass('btn-secondary');
                    currForm1.classList.add('was-validated');
                }
            }, false);
            // ----------------- Validate on input -----------------
            currForm1.querySelectorAll('.form-control').forEach(input => {
                input.addEventListener(('input'), () => {
                    if (input.checkValidity()) {
                        input.classList.remove('is-invalid');
                        input.classList.add('is-valid');
                    } else {
                        input.classList.remove('is-valid');
                        input.classList.add('is-invalid');
                    }
                    var is_valid = $('.form-control').length === $('.form-control.is-valid').length;
                    // $("#submitBtn").attr("disabled", !is_valid);
                    if (is_valid) {
                        // alert("form is valid");
                        $("#submitBtn").show();
                        $("#submitBtn").attr("disabled", false);
                        $('#btn').hide();
                        $('#submitBtn').addClass('btn-primary').removeClass('btn-secondary');
                    } else {
                        // alert("invalid");
                        $("#submitBtn").attr("disabled", true);
                        $('#submitBtn').addClass('btn-secondary').removeClass('btn-primary');
                    }
                });
            });
            // ------------------------------------------------------
        });
