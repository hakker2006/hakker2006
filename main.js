function passwordFunction() {
    var password=document.getElementById('password');
    var picture=document.getElementById('picture');
    if (password.type=='password'){
        password.type='text';
        picture.src='images/eye-slash.svg'
    }
    else{
        password.type='password';
        picture.src='images/eye.svg'
    }
}
// // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // //*
function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
}