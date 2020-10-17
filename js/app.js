//variables
const sendBtn=document.getElementById('sendBtn'),
      email=document.getElementById('email'),
      subject=document.getElementById('subject'),
      message=document.getElementById('message'),
      resetBtn=document.getElementById('resetBtn'),
      emailForm=document.getElementById('email-form');



//event listeners
eventListener();
function eventListener()
{
    // App init
   document.addEventListener('DOMContentLoaded',appinit);
   //validate the fields
   email.addEventListener('blur',validateField);
   subject.addEventListener('blur',validateField);
   message.addEventListener('blur',validateField);
   resetBtn.addEventListener('click',resetForm);
   emailForm.addEventListener('submit',loading);
   
}


//functions
//app initialization

function appinit()
{
    sendBtn.disabled=true;

   
}

//validate the fields (check for some value)
function validateField(field)
{   let error;
    //validate length of the field
    validateLength(this);
    //validate email(check for '@')
    if(this.type==='email')
    {
        validateEmail(this);
    }

    //check for errors
    errors=document.querySelectorAll('.error')
    if(email.value!=='' && subject.value!=='' && message.value!=='')
    {
        if(errors.length === 0)
        {
            sendBtn.disabled=false;
        }

    }
}
function validateLength(field)
{
    
    if(field.value.length > 0)
    {
        
        field.style.borderBottonColor='green';
        field.classList.remove('error');
    }
    else
    {
          
        field.style.borderBottonColor='red';
        field.classList.add('error');
    }
}
function validateEmail(field)
{
    let emailText=field.value;
    if(emailText.indexOf('@')!== -1)
    {
        
        field.style.borderBottonColor='green';
        field.classList.remove('error');
    }
    else
    {
          
        field.style.borderBottonColor='red';
        field.classList.add('error');
    }
}

//reset the form
function resetForm()
{
    emailForm.reset();
}

// loading gif
function loading(e)
{
    e.preventDefault();

    const spinner=document.querySelector('#spinner');
    spinner.style.display='block';

    //add send email gif
   const sendEmailImg=document.createElement('img');
   sendEmailImg.src='img/mail.gif';
   sendEmailImg.style.display='block';

    //hold the spinner for 3 ms
    setTimeout(function()
    {  //hide the spinner

       spinner.style.display='none';
       //add the img gif after spinner gif
       document.querySelector('#loaders').appendChild(sendEmailImg);

       setTimeout(function(){
         
        emailForm.reset();
        sendEmailImg.remove();
        
       },6000);
    },3000);
}



