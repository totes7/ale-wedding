// import Footer from "./Footer.jsx";
import logo from '../assets/logo-ale.png';

const Home = () => {
    return (
        <>
            <div className="home">
                <div className="overlay-container">
                    <svg>
                        <path id="curve" d="M 0 130 C 0 110, 150 0, 300 75"></path>
                        <text className="text text-c">
                            <textPath className="text_path" href="#curve" startOffset="17%">4 Luglio 2025</textPath>
                        </text>
                    </svg>
                    <div className="overlay">
                        <div className="overlay-content">
                            <img src={logo} className="logo"/>
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

                {/*<div className="circles">*/}
                {/*    <div className="circle">*/}
                {/*        <h2>RSVP</h2>*/}
                {/*    </div>*/}
                {/*    <div className="circle">*/}
                {/*        <h2>Info</h2>*/}
                {/*    </div>*/}
                {/*    <div className="circle">*/}
                {/*        <h2>Regalo</h2>*/}
                {/*    </div>*/}
                {/*</div>*/}


            </div>

            {/*<Footer />*/}
        </>
    )
}
export default Home

