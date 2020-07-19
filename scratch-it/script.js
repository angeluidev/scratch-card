$(function() {
    $("#play").click(function() {
        // Validates First and Last Name entries
        var fname = $("#Fname").val();
        var lname = $("#Lname").val();

        if (fname == "" && lname == "") {
            event.preventDefault();
            $("#Fname").css("border", "1px solid red");
            $("#Fname_error").text("First name is required.");
            $("#Lname").css("border", "1px solid red");
            $("#Lname_error").text("Last name is required.");
        } else if (fname == "") {
            event.preventDefault();
            $("#Fname").css("border", "1px solid red");
            $("#Fname_error").text("First name is required.");
        } else if (lname == "") {
            event.preventDefault();
            $("#Lname").css("border", "1px solid red");
            $("#Lname_error").text("Last name is required.");
        } else {
            $(".top").css("border", "1px solid green");
            $("#Lname_error").text("");
            $("#Fname_error").text("");
        }

        // Validates email input
        var email = $("#email").val();
        var regexp = /^([a-zA-Z0-9\.-_]+)@([a-zA-Z0-9-]+).([a-zA-Z]{2,8}).(.[a-z]{2,8})?$/;

        if (email == "") {
            event.preventDefault();
            $("#email").css("border", "1px solid red");
            $("#email_error").text("Email can not be left blank.");
        } else if (regexp.test(email) == false) {
            event.preventDefault();
            $("#email").css("border", "1px solid red");
            $("#email_error").text("Email is not valid.");
        } else {
            $("#email").css("border", "1px solid green");
            $("#email_error").text("");
        }

        // Validates T&C checkbox
        var terms = $('input[type="checkbox"]');
        if (terms.prop("checked") == false) {
            event.preventDefault();
            $("#Terms_error").text("You must agree to the Terms & Conditions");
        }
    });

});



