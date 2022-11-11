const messageController = new MessageController();

let first_Name = document.getElementById("form_name");
let last_Name = document.getElementById("form_lastname");
let email = document.getElementById("form_email");
let reasonForContact = document.getElementById("form_need");
let message = document.getElementById("form_message");

function capture(){
    if(first_Name.value && last_Name.value && email.value && message.value){
        messageController.addMessage(first_Name.value, last_Name.value, email.value, reasonForContact.value, message.value);
//         console.log(messageController.messages);
        alert("Thank you for contacting me. I will get back to you as soon as possible.");
        const mess = JSON.stringify(messageController.messages);
        localStorage.setItem('message', mess);
        window.location.reload();
    } else {
        alert("Please fillout all fields");
    
           }
}

const underConAlert = ()=>{
    alert('This page is still under construction, please checkback later. Thanks!')
}