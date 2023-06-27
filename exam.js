var email = document.getElementById('field1')
var err1 = document.getElementById('err1')
var pwd = document.getElementById('field2')
var err2 = document.getElementById('err2')
var pwd = document.getElementById9('field3')
var err3 = document.getElementById('err3')
//var regx = /^([A-Za-z0-9\-#_.]+)@([A-Za-z0-9\-]+).([a-z]{2,3}).([a-z]{2,3})?$/

function validateEmail() {
    if (email.value.trim() == '') {
        err1.innerText = 'Field can no be empty'
        email.style.border = '5px solid red'
        console.log('hii');
        return false

    }

    else if (!email.value.match(regx)) {
        err1.innerText = "Email is not correct format";
        email.style.border = '1px soild yellow';
        return false

    }

    else {
        err1.innerText = "";
        email.style.border = "1 px soild green";
        return true

    }
}
function validatePass(){
    if(pwd.value.trim()==''){
    err2.innerText="password should not be empty";
    pwd.style.border="2px soild red";
    return false 
    

    }
    else if(pwd.value.length<3){
        err2.innerText="password should be more than 3 characters";
        pwd.style.border="2px soild red";
        return false
    }
else{
    err2.innerText=''
    pwd.style.border="2px soild green"
    return true
    
}
     function validatePh(){
    if(pwd.value.trim()==''){
    err3.innerText="phoneno should not be empty";
    pwd.style.border="2px soild red";
    return false 
    }
}
 if(pwd.value.length<10){
    err3.innerText="phonenumber should be more than 10 characters";
    pwd.style.border="2px soild red";
    return false
}

function varify(){
    if (validateEmail()||!validatePass()||validatePh()){
        return false
    }
    else{
        return true
    }
    
    
}
     }