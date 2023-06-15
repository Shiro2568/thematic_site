let name = document.querySelector('#name')
let email = document.querySelector('#email')
let password = document.querySelector('#password')
let confirm_password = document.querySelector('#confirm_password')
let submit = document.querySelector('#submit')
let users = {}

function User(name,email,password, confirm_password){
    this.name = name 
    this.email = email 
    this.password = password 
    this.confirm_password = confirm_password
}

submit.addEventListener('click', () => {
    const nameUser = name.value 
    const loginUser = login.value 
    const passwordUser = password.value
    const confirmPasswordUser = confirm_password.value
    if(passwordUser == confirmPasswordUser){
        const user = new User()
    }
})

//https://www.youtube.com/watch?v=98NXs-k-7C4