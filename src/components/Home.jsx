// import Footer from "./Footer.jsx";
import logo from '../assets/logo-ale.png';

const Home = () => {
    return (
        <>
            <div className="home">
                <div className="overlay">
                    <img src={logo} className="logo" />
                    <div className="overlay-content">
                        <h1>Matteo&Alessandra</h1>
                        <p>4 Luglio 2025</p>
                        <p>ORE 16:00</p>
                        <p>Chiesa dell'Ascensione a Chiaia</p>
                        <p>Piazzetta dell'Ascensione, 15</p>
                        <p>Napoli</p>
                        <h2>RICEVIMENTO</h2>
                        <p>Noah Mediterranean Beach</p>
                        <p>Via Sibilia, Lido di Licola</p>
                    </div>


                </div>
                <div className="circles">
                    <div className="circle">
                        <h2>RSVP</h2>
                    </div>
                    <div className="circle">
                        <h2>Info</h2>
                    </div>
                    <div className="circle">
                        <h2>Regalo</h2>
                    </div>
                </div>


            </div>

            {/*<Footer />*/}
        </>
    )
}
export default Home

