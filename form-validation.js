console.log("Hello World");

const form = document.getElementById('form');

const username = document.getElementById('username');
const password = document.getElementById('password');

form.addEventListener('submit',(error) =>{

    
    // let message=[];
    // if(username.value.length < 6)
    // {
    // message.push('User Name must be atleast 6 Characters');
    // }
    // if(message.length >0){
    //     message.forEach(message =>{
    //         alert(message);
    //     });
    //     error.preventDefault();
    //}
    let message=[];
    if(password.value.length < 6)
    {
    message.push('password must be atleast 6 Characters');
    
    if(message.length >0){
        message.forEach(message =>{
            alert(message);
        });
        error.preventDefault();
    } 
    }
})



