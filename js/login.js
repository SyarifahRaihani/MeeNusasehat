const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () =>{
    container.classList.add("active");
});

loginBtn.addEventListener('click', () =>{
    container.classList.remove("active");
});

function showAlert() {
    alert("Selamat Datang di Website MeeNusasehat!");
}

function showAlert1() {
    alert("Registrasi sudah berhasil silahkan login kembali!");
}