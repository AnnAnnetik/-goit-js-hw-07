const form=document.querySelector('.login-form');

form.addEventListener('submit', (e) => {
    e.preventDefault(); 
    const email=form.elements.email.value.trim();
    const password=form.elements.password.value.trim();
    if(email===''||password===''){
        alert('All form fields must be filled in');
    }else{
        const formObj={
            email:email,
            password:password,
        };
        form.reset();
        console.log(formObj);
    }
});




