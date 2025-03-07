import video from "../assets/hero.mp4";

const Hero = () => {
    return (
        <>
            <video src={video} autoPlay={true} loop={true} muted={true} className="h-screen w-full object-cover"></video>
        </>
    )
}
export default Hero
