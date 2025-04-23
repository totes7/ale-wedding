import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_k57ctfa",
                "template_qmnsqus",
                form.current,
                "w3PTPQHEg7TjRVSxm"
            )
            .then(
                (result) => {
                    alert("Messaggio inviato con successo!");
                    form.current.reset(); // Reset the form after successful submission
                    console.log(result.text);
                },
                (error) => {
                    alert("Errore nell'invio del messaggio. Riprova più tardi.");
                    console.log(error.text);
                }
            );
    }

  return (
    <div className="contact-container">
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <h1 id="rsvp">RSVP</h1>

        <h2>Invitato #1</h2>
        <label htmlFor="">Nome</label>
        <input type="text" name="name1" id="" placeholder="Nome" required />
        <label htmlFor="">Cognome</label>
        <input
          type="text"
          name="surname1"
          id=""
          placeholder="Cognome"
          required
        />
        <label htmlFor="">Allergie/Intolleranze</label>
        <input
          type="text"
          name="allergies1"
          id=""
          placeholder="Allergie/Intolleranze"
        />

        <h2>Invitato #2</h2>
        <label htmlFor="">Nome</label>
        <input type="text" name="name2" id="" placeholder="Nome" />
        <label htmlFor="">Cognome</label>
        <input type="text" name="surname2" id="" placeholder="Cognome" />
        <label htmlFor="">Allergie/Intolleranze</label>
        <input
          type="text"
          name="allergies2"
          id=""
          placeholder="Allergie/Intolleranze"
        />

        <input type="submit" value="INVIA" />
      </form>
      
    </div>
  );
};

export default Contact;
