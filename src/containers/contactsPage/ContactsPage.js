import React, { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { ContactForm } from "../../components/contactForm/ContactForm";
import {TileList } from '../../components/tileList/TileList';

export const ContactsPage = ({ contacts, addContact }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [duplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!duplicate) {
      addContact(name, email, phone);
      setName("");
      setEmail("");
      setPhone("");
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    const found = contacts.find((cont) => cont.name === name);
    const isDuplicate = () => {
      if (found !== undefined) {
        return true;
      } else {
        return false;
      }
    };
    if (isDuplicate()) {
      setDuplicate(true);
    } else {
      setDuplicate(false);
    }
  }, [name, duplicate, contacts]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <small>{duplicate ? "Name already exist!" : ""}</small>
        <ContactForm
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          phone={phone}
          setPhone={setPhone}
          onSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts} />
      </section>
    </div>
  );
};
