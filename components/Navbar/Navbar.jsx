import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import anime from 'animejs/lib/anime.es.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'

const Navbar = () =>{

const[isActive,setActive] = useState(false)

useEffect(() => {
if (isActive) {
    anime({
        targets: '.mobile-nav',
        translateY: ['-10%', '0%'],
        opacity: [0, 1],
        easing: 'easeInCubic',
        duration: 400,
    });

    anime({
        targets: '.top-bar',
        translateY: 4,
        rotate: 45,
        duration: 400,
        easing: 'easeInOutCubic'
    });

    anime({
        targets: '.bottom-bar',
        translateY: -4,
        rotate: -45,
        duration: 400,
        easing: 'easeInOutCubic'
    });
    } else {
    // anime({
    //     targets: '.mobile-nav',
    //     translateY:['0%','-100%'],
    //     opacity: [1, 0],
    //     easing: 'easeInCubic',
    //     duration: 400,
    // });

    anime({
        targets: '.top-bar',
        translateY: 0,
        rotate: 0,
        duration: 400,
        easing: 'easeInOutCubic'
    });

    anime({
        targets: '.bottom-bar',
        translateY: 0,
        rotate: 0,
        duration: 400,
        easing: 'easeInOutCubic'
    });
    }
}, [isActive]);

    return(
        <nav className={`flex justify-between items-center h-[3rem] px-8 py-[0.75rem] sticky top-0 bg-[rgba(35,35,47,1)] z-50`}>
            <Link to="/" >
                <img src="../../assets/images/logo/logo.png" className="h-6 w-[100%] object-contein"/>   
            </Link>
            <ul className={`mobile-nav flex md:justify-between md:items-center md:static md:flex md:flex-row md:h-auto md:w-auto ${isActive ? 'block' : 'hidden'} absolute top-[48px] right-0 w-screen max-h-min flex-col items-center justify-center uppercase font-semibold bg-[#23232f] md:bg-inherit z-49`}>
                <li className="px-4 py-6 md:py-0" onClick={() => setActive(false)}>
                    <Link to="/headphones">Headphones</Link>
                </li>
                <li className="px-4 py-6 md:py-0" onClick={() => setActive(false)}>
                    <Link to="/keyboards">Keyboards</Link>
                </li>
                <li className="px-4 py-6 md:py-0" onClick={() => setActive(false)}>
                    <Link to="/mice">Mice</Link>
                </li>
            </ul>
            <div className="flex flex-row-reverse items-center gap-4">
                <span id="cart">
                    <Link to="/cart"><FontAwesomeIcon icon={faCartShopping}/></Link>
                </span>
                <div className="relative md:hidden" onClick={() => { setActive(!isActive);}}>
                    <span className="top-bar w-[20px] h-[4px] bg-white block my-1 rounded-md"/>
                    <span className="bottom-bar w-[20px] h-[4px] bg-white block my-1 rounded-md"/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;