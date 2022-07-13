class MessageController{
    constructor(){
        this.messages = [],
        this.date;
    }

    addMessage(firstName, lastName, email, reasonForMessaging, message){
        const Obj = {
            name : firstName,
            lName: lastName,
            mail: email,
            reason: reasonForMessaging,
            need: message,
            date: Date.now()
        }
        this.messages.push(Obj)
    }
}