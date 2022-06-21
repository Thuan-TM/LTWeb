var usernameValue = document.getElementById('inputusername')
var passwordValue = document.getElementById('inputpassword')


var btnSubmit = document.querySelector('.btn');
btnSubmit.addEventListener("click", (e) => {
    if(usernameValue.value !== 'Admin' || passwordValue.value !== 'Team9'){
        alert('Your username or password is not correct!');
    }
})

// var btnSubmit = document.querySelector('.btn');
// var form = document.getElementById(form);
// var username = document.getElementById('inputusername');
// var password = document.getElementById('inputpassword');

// form.addEventListener('submit' , (e) =>{
//     checkInputs();
// });

// function checkInputs() {
//     var usernameValue = username.value.trim();
//     var passwordValue = password.value.trim();

//     if(usernameValue !== 'Admin'){
//         setError(username, 'Username is wrong!');
//     }
//     if(passwordValue !== 'Team9'){
//         setError(password, 'Password is wrong!');
//     }
// }
// function setError(input, message){
//     var formGroup = input.parentElement;
//     var small = formGroup.querySelector('small');

//     small.innerText = message;

//     formGroup.className = 'form-group error';
// }
