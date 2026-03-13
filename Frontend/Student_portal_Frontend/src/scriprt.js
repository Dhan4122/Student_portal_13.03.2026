//register

document.getElementById("registerform").addEventListener("submit", async (e) => {
    e.preventDefault();
    const user ={
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };
    const response = await fetch("http://localhost:8080/register",{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(user)
        }
    );
    alert(await response.text());
});

//login
document.getElementById("loginform").addEventListener("submit", async (e) => {
    e.preventDefault();
    const user ={
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    };
    const response = await fetch("http://localhost:8080/login",{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(user)
        }
    );
    const data = await response.json();
    if(data.token){
        localStorage.setItem("token", data.token);
        alert("Login successful");
        window.location.href = "dashboard.html";
    } else {
        alert("Login failed");
    }
});

