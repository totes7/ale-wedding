import video from "../assets/hero.mp4";

const Hero = () => {
    return (
        <>
            <div className="overlay">
                <h1 className="text-6xl font-[Caprasimo] text-secondary text-center">Alessandra&Matteo</h1>
            </div>
            <video src={video} autoPlay={true} loop={true} muted={true} className="h-screen w-full object-cover"></video>
        </>
    )
}
export default Hero
