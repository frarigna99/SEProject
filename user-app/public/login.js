let usernamee 
let passwordd 

let users = [ 
    {
        username: "admin",
        password: "admin"
    },
]

handleLogin = () => {
    var x = false
    let usernamee = document.getElementById('fname').value
    let passwordd = document.getElementById('lname').value
    for (let i = 0; i < users.length; i++) {
        if((usernamee === users[i].username) && (passwordd === users[i].password)){
            location.href = "home.html";
            alert("Welcome to Solar Monitoring Service!")
            x = true 
        }
    }
    if(!x){
        location.href = "login.html";
        alert("Username or password not found")

    }
}
