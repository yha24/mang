// array of uername and password
var username= ["admin","auther","guest"]
var password= ["123","abc","xyz"]

function login(){
    var username= document.getElementById("txt1").value;
    var password= document.getElementById("txt2").value;
    var sms= "";

    for(var i=0; i<username.length; i++ ){
        if (username== username[i]){
            sms="";

        if (password== password[i]){

            location.href=""
        }

        else{
            sms= "invalid password"
        }
        break;
        }
        else{
            sms= "invalid username"
        }    
    }
    document.getElementById("sms").innerHTML = sms;
}

function cancle(){
    document.getElementById("txt1").value="";
    document.getElementById("txt2").value="";
    document.getElementById("txt1").focus();
}