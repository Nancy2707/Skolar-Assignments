document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');
    const inputs = form.querySelectorAll('.form-input');

    form.addEventListener('submit', function (event) {
        let valid = true;

        inputs.forEach(input => {
            const errorMessage = input.nextElementSibling;
            if (!input.checkValidity()) {
                valid = false;
                input.classList.add('invalid');
                errorMessage.style.display = 'block';
            } else {
                input.classList.remove('invalid');
                errorMessage.style.display = 'none';
            }
        });

        if (!valid) {
            event.preventDefault();
        }
    });

    inputs.forEach(input => {
        input.addEventListener('input', function () {
            const errorMessage = input.nextElementSibling;
            if (input.checkValidity()) {
                input.classList.remove('invalid');
                errorMessage.style.display = 'none';
            }
        });
    });
});
