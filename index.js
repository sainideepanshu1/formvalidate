function check(){
    let user=document.getElementById('username');
    let email=document.getElementById('email');
    let phone=document.getElementById('phone');
    let pass=document.getElementById('pass');
    let conpass=document.getElementById('con_pass');
    if(user.value.length!=0){
        if(user.value.length<8){
            document.getElementById('u_error').innerHTML="Choose a username 8–30 characters long";
            user.style.borderColor = "red";
        }
        else{
            document.getElementById('u_error').innerHTML="";
            user.style.borderColor = "black";
        }
    }
    else{
        document.getElementById('u_error').innerHTML="Username cannot be empty";
        user.style.borderColor = "red";
    }
    if(email.value.length!=0){
        let a=email.value.indexOf('@');
        if(a>=1){
            let format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if(email.value.match(format)){
                document.getElementById('e_error').innerHTML="";
                email.style.borderColor = "orange";
            }
            else{
                document.getElementById('e_error').innerHTML="Invalid Email Address";
                email.style.borderColor = "red";
            }
        }
        else{
            document.getElementById('e_error').innerHTML="Invalid Email Address";
            email.style.borderColor = "red";
        }
    }
    else{
        document.getElementById('e_error').innerHTML="Email cannot be empty";
        email.style.borderColor = "red";
    }
    if(phone.value.length!=0){
        if(phone.value.length<10){
            document.getElementById('p_error').innerHTML="Invalid Phone Number!";
            phone.style.borderColor="red";
        }
        else{
            document.getElementById('p_error').innerHTML="";
            phone.style.borderColor="orange";
        }
    }
    else{
        document.getElementById('p_error').innerHTML="Phone Number Cannot be empty";
        phone.style.borderColor="red";
    }
    if(pass.value.length!=0){
        if(pass.value.length<8){
            document.getElementById('pas_error').innerHTML="Password length must be atleast 8 characters";
            pass.style.borderColor="red";
        }
        else{
            document.getElementById('pas_error').innerHTML="";
            pass.style.borderColor="orange";
        }
    }
    else{
        document.getElementById('pas_error').innerHTML="Password cannot be empty!";
        pass.style.borderColor="red";
    }
    if(conpass.value.length!=0){
        if(conpass.value!=pass.value){
            document.getElementById('conpass_error').innerHTML="Confirm Password does not match Password!";
            conpass.style.borderColor="red";
        }
        else{
            document.getElementById('conpass_error').innerHTML="";
            conpass.style.borderColor="orange";
        }
    }
    else{
        document.getElementById('conpass_error').innerHTML="Password cannot be empty!";
        conpass.style.borderColor="red";
    }
    setInterval(check,100);
}