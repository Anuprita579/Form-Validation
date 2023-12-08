function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}
$("#subbutton").click(function(){
    var errormsg = "";
    var missfield = "";
    if( $("#email").val() == "" ){
        missfield += " Email is empty. ";
    }
    if( $("#phone").val() == "" ){
        missfield += " Phone number is empty. ";
    }
    if( $("#pass").val() == "" ){
        missfield += " Password is empty. ";
    }
    if(isEmail($("#email").val()) == false){
        errormsg += " Email is not valid. ";
    }
    if( $.isNumeric($("#phone").val()) ==false ){
        errormsg += " Phone number is not valid. ";
    }
    if( $("#pass").val() != $("#conpass").val() ){
        errormsg += " Password does not match. ";
    }
    if( errormsg == "" && missfield=="" ){
        $("#success").html(" You are registered. ");

        setTimeout(function () {
            $("#success").html("");
        }, 2000);

        // Reload the page
        setTimeout(function () {
            location.reload();
        }, 2000);
    }
    else{
    $("#error").html(errormsg + missfield);
    }
});