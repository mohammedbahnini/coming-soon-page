const form = document.querySelector('form');
form.addEventListener('submit' , (e)=>{
    e.preventDefault();
    if( form.checkValidity() == false )
    {
        form.classList.add('validated');
        form.querySelector('.error-validation').style.display = 'block';
    }
    else{
        form.classList.remove('validated');
        form.querySelector('.error-validation').style.display = 'none';
    }
});