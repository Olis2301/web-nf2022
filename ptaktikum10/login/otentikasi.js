function login(){
    event.preventDefault();
    let uname = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (uname == "olis" && pass =="123"){
        location.replace("https://kreasi.nurulfikri.ac.id/muha22200ti/");
        alert("login berhasil");
    } else {
        alert("login gagal");
}
}