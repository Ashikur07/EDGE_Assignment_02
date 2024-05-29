
document.getElementById('btn-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    
   
    if(email === 'ashik.iuict@gmail.com' && password === 'ashik.iuict@gmail.com'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Email and password does not match..! Please try again');
    }
})