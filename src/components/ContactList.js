import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => { // props is a default parameter
    // console.log(props);
    const renderContactsList = props.contacts.map((contact) => {
        return (
           <ContactCard contact={contact}/>
        );
    });

    return (
        <div className="ui celled list">
            Contact List
            {renderContactsList}
        </div>
    );
}; 

export default ContactList;