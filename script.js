"use strict";


class AddressBook {
    constructor() {

        this.contacts = [
            new Contact("Dezmen", "dezmen@gmail.com", "3134482424", "family"),
            


        ];
    }
    //   ADD METHOD  
    add(info) {
        const addedContact = new Contact(info.name, info.email, info.phone, info.relation);
        this.contacts.push(addedContact);


    }

    //  DELETE METHOD
    deleteAt(index) {
        this.contacts.splice(index, 1);

    }
    // PRINT METHOD
    print() {
        console.log(this.contacts);
    }
}
class Contact {
    constructor(name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}

const myAddressBook = new AddressBook() 

const button = document.getElementById("button");
button.addEventListener("click", (e) => {
    const nname = document.getElementById("name").value;
    const nemail = document.getElementById("email").value;
    const nphone = document.getElementById("phone").value;
    const nrelation = document.getElementById("relation").value;
   

    const info = {
         name: nname,
        email: nemail,
        phone: nphone,
     relation: nrelation

    }

    myAddressBook.add(info);
    console.log(myAddressBook);
    // myAddressBook.display();

});




















// display();{
//     const display = document.getElementById("display");

//     const div = document.createElement("div");
//     const info = document.createElement("p");
//     const icon = document.createElement("i");
    
//     div.classList.add("display");
//     icon.classList.add("display");
//     icon.classList.add("delete");

//     icon.innerText ="delete";
//     info.innerText =
//     `name:${name.value}
//     email:${email.value}
//     phone:${phone.value}
//     relation:${relation.value}`;

//     div.appendChild(info);
//     div.appendChild(icon);
//     display.appendChild(div);

    
//     icon.addEventListener("click", (e) => {
//         div.remove();

//     });
    
  




//  display();{
//     myAddressBook.contacts.forEach(contact => {
//        const display = document.getElementById("display");
//        const newcontact = document.createElement("div");

