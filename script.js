const btn = document.querySelector(".submit")
const inputEmail = document.querySelector(".Email")
const inputpassword = document.querySelector(".Password")
const errorMessageEmail = document.querySelector(".error-message-email")
const errorMessagePassword = document.querySelector(".error-message-password")
const message = document.querySelector(".valid")

inputEmail.addEventListener("keyup" , function() {
    if(!inputEmail.value.match(/^\w{3,}@\w{2,}\.\w{2,}$/) ){
        errorMessageEmail.textContent = "Email is not valid"
        
    }
     else {errorMessageEmail.textContent = "" }

})
inputpassword.addEventListener("keyup" , function(){
    if(!inputpassword.value.match(/^\S{6,}$/)){
        errorMessagePassword.textContent = "Password is not valid" 
    }
    else errorMessagePassword.textContent = ""
})
btn.addEventListener("click" , () => {
    if( inputEmail.value.match(/^\w{3,}@\w{2,}\.\w{2,}$/) && inputpassword.value.match(/^\S{6,}$/) ){
        message.innerHTML = "All fields are valid"
    }
})


