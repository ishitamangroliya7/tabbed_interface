$(document).ready(function () {
    var loginCompleted = false;

    // Handle tab navigation
    $('.nav-tabs .nav-link').on('click', function (e) {
        e.preventDefault();

        // Prevent navigation to other tabs if login is not completed
        if (!loginCompleted && $(this).data('tab') !== 'tab1') {
            alert('Please complete the login form first.');
            return;
        }

        // Switch tabs
        $('.nav-tabs .nav-link').removeClass('active');
        $('.tab-pane').removeClass('active');
        $(this).addClass('active');
        var tabId = $(this).data('tab');
        $('#' + tabId).addClass('active');
    });

    // Handle login form submission
    $('#loginForm').on('submit', function (e) {
        e.preventDefault();

        // Clear previous error messages
        $('.error').text('');

        // Get form field values
        const username = $('#username').val().trim();
        const email = $('#email').val().trim();
        const phone = $('#phone').val().trim();
        const password = $('#password').val().trim();

        let isValid = true;

        // Validate Username: Must be alphanumeric and between 3-15 characters
        if (!/^[a-zA-Z0-9]{3,15}$/.test(username)) {
            $('#usernameError').text('Username must be alphanumeric and between 3-15 characters.');
            isValid = false;
        }

        // Validate Email: Basic email validation
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            $('#emailError').text('Please enter a valid email address.');
            isValid = false;
        }

        // Validate Phone: Must be 10 digits
        if (!/^\d{10}$/.test(phone)) {
            $('#phoneError').text('Phone number must be 10 digits.');
            isValid = false;
        }

        // Validate Password: Must be at least 6 characters
        if (password.length < 6) {
            $('#passwordError').text('Password must be at least 6 characters long.');
            isValid = false;
        }

        // Check if all fields are valid
        if (isValid) {
            // Enable Tab 2 and switch to it
            $('#tab2Link').removeClass('disabled');
            $('.nav-tabs .nav-link').removeClass('active');
            $('.tab-pane').removeClass('active');

            $('#tab2Link').addClass('active');
            $('#tab2').addClass('active');
            loginCompleted = true;
        }
    });

    // Handle confirmation form submission
    $('#confirmationForm').on('submit', function (e) {
        e.preventDefault();

        if ($('#confirmationCheckbox').is(':checked')) {
            // Enable Tab 3 and switch to it
            $('#tab3Link').removeClass('disabled');
            $('.nav-tabs .nav-link').removeClass('active');
            $('.tab-pane').removeClass('active');

            $('#tab3Link').addClass('active');
            $('#tab3').addClass('active');
        }
    });
});
