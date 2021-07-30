var btnSignin = document.querySelector("#signin")
var btnSignup = document.querySelector("#signup")

var body = document.querySelector("body")

const signInJs = () => {
    body.className = "sign-in-js"
}

const signUpJs = () => {
    body.className = "sign-up-js"
}

btnSignin.addEventListener("click", signInJs)

btnSignup.addEventListener("click", signUpJs)