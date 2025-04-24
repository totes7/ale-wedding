import React, { useRef } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import logo from "../assets/logo-ale.png";
import emailjs from "@emailjs/browser";

const Home = () => {
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
      {/* NAVBAR */}
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
                <Link to="#info" scroll={(el) => scrollWithOffset(el)}>
                  Info
                </Link>
                <Link to="/">Regalo</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
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

      {/* RSVP FORM */}
      <div className="contact-container">
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <h1 id="rsvp">RSVP</h1>

          <p>
            Compila il modulo per farci sapere se parteciperai al nostro
            matrimonio
          </p>

          <label htmlFor="">Nome</label>
          <input type="text" name="name" id="" placeholder="Nome" required />
          <label htmlFor="">Cognome</label>
          <input
            type="text"
            name="surname"
            id=""
            placeholder="Cognome"
            required
          />
          <label htmlFor="">Allergie/Intolleranze</label>
          <input
            type="text"
            name="allergies"
            id=""
            placeholder="Allergie/Intolleranze"
          />

          <input type="submit" value="INVIA" />
        </form>
      </div>


        {/* INFO SECTION */}
      <div className="info">
        <h1 id="info">INFO</h1>
        <h3>Wedding Day</h3>

        <div className="info-container">
          <div className="info-card">
            <h2>Chiesa dell'Ascensione a Chiaia</h2>
            <p>Piazzetta dell'Ascensione, 15</p>
            <p>Napoli</p>
            <p>Ore 16:00</p>
          </div>
          <div className="info-card">
            <h2>Noah Mediterranean Beach</h2>
            <p>Via Sibilia, Lido di Licola</p>
            <p>Ore 18:30</p>
            <Link
              to="https://www.google.co.uk/maps/place/Noah+Mediterranean+Beach/@40.8661444,14.0420386,16.5z/data=!4m6!3m5!1s0x133b11d6f0973777:0x784f719209d34361!8m2!3d40.866337!4d14.0452846!16s%2Fg%2F11j_yzgt_q?entry=ttu&g_ep=EgoyMDI1MDQyMi4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D"
              target="_blank"
            >
              <button>Avvia Navigazione</button>
            </Link>
          </div>
        </div>
      </div>
    </Router>
  );
};
export default Home;
