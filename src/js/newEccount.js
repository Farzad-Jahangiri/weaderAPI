$("#btnRegister").on("click", function () {
    let name = $("#name").val();
    let lastName = $("#lastName").val();
    let email = $("#email").val();
    let userName = $("#userName").val();
    let passwd = $("#passwd").val();
    let passwd2 = $("#passwd2").val();
    if(name.length<3){
        $("#name").css('border-color','red');
        return;
    }
    $("#name").css('border-color','green');
    if(lastName.length<3){
        $("#lastName").css('border-color','red');
        return;
    }
    $("#lastName").css('border-color','green');
    if(email.length<3){
        $("#email").css('border-color','red');
        return;
    }
    $("#email").css('border-color','green');
    if(userName.length<3){
        $("#userName").css('border-color','red');
        return;
    }
    $("#userName").css('border-color','green');
    if(passwd.length>6){
        $("#passwd").css('border-color', 'black');
        if(passwd2.length>6){
            if(passwd==passwd2){
                $("#passwd").css('border-color', 'green');
                $("#passwd2").css('border-color', 'green');
                
            }
            else{
                $("#passwd").css('border-color', 'red');
                $("#passwd2").css('border-color', 'red');
                return;
            }
        }
        else{
            $("#passwd2").css('border-color', 'red');
            return;
        }
    }
    else{
        $("#passwd").css('border-color', 'red');
        return;
    }

    let user = {
        flag : true,
        name : userName,
    }
    user = JSON.stringify(user);
    localStorage.setItem("user", user);
    window.location.href = "http://127.0.0.1:5500/src/index.html";
});