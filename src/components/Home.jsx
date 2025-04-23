import React, { useState, useRef } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../assets/logo-ale.png";
// import Contact from "./Contact";

const Home = () => {
  const [click, setClick] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setClick(!click);
  const handleClose = () => setIsOpen(!isOpen);

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
  };

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <Router>
      <nav className="navbar">
        <div className="container">
          <div className="navbar-inner">
            <div className="navbar-content">
              <div className="nav-logo text-c">
                <Link to="/">M&A</Link>
              </div>
              <div className="nav-links text-r">
                <Link to="#rsvp" scroll={(el) => scrollWithOffset(el)}>
                  RSVP
                </Link>
                <Link to="/">Info</Link>
                <Link to="/">Regalo</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="home">
        <div className="overlay-container">
          <svg>
            <path id="curve" d="M 0 130 C 0 110, 150 0, 300 75"></path>
            <text className="text text-c">
              <textPath className="text_path" href="#curve" startOffset="17%">
                4 Luglio 2025
              </textPath>
            </text>
          </svg>
          <div className="overlay">
            <div className="overlay-content">
              <img src={logo} className="logo" />
              <h1 className="text-c">Matteo&Alessandra</h1>
              <p className="bold">Chiesa dell'Ascensione a Chiaia</p>
              <p>Piazzetta dell'Ascensione, 15</p>
              <p>Napoli</p>
              <h2 className="text-c">ORE 16:00</h2>
              <p className="bold">Noah Mediterranean Beach</p>
              <p>Via Sibilia, Lido di Licola</p>
            </div>
          </div>
        </div>
      </div>

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

      {/*<Footer />*/}
    </Router>
  );
};
export default Home;
