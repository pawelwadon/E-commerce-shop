import { useEffect, useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import { Link } from "react-router-dom";

const HeroSection = () => {
const [imagePath, setImagePath] = useState('public/assets/images/herosection/herosection-web.jpg');
const size = useWindowSize();

useEffect(() => {
        let newImagePath = '';
        if (size.width <= 768) {
            newImagePath = 'public/assets/images/herosection/herosection-mobile.jpg';
        } else if (size.width <= 1024) {
            newImagePath = 'public/assets/images/herosection/herosection-tablet.jpg';
        } else {
            newImagePath = 'public/assets/images/herosection/herosection-web.jpg';
        }
            setImagePath(newImagePath);

},[size.width]);

    return (
        <section className="">
            <div className="flex justify-center w-full h-[calc(100vh-48px)] overflow-hidden">
                <div className="relative w-full h-full" >
                    <img src={imagePath} alt="hero-section-image" srcset="" className="object-contein object-bottom w-full h-full"/>
                </div>
                <div className="absolute bottom-1/4 mx-10 max-w-[50%]">
                    <div className="">
                        <div>
                            <h1 className="uppercase font-bold text-7xl break-al hyphens-auto">G Pro GX</h1>
                            <p className="text-center font-bold text-2xl w-full py-4 hyphens-auto uppercase">Gaming keyboard</p>
                        </div>
                        <div className="text-center ">
                            <Link to={'/keyboard/3'}><button className="px-8 py-4 rounded bg-white text-black uppercase">Shop Now</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;

//Equipe yourself to win 
//Discover the ultimate gaming accessories to elevate your play. 
//At WellPlayed, we offer top-quality mice, headsets, and keyboards designed to enhance your gaming experience. 
//Equip yourself to win with our premium selection, tailored for every gamer. Explore our collection now and take your game to the next level!


