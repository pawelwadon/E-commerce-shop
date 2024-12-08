import { useState } from "react";
import anime from 'animejs/lib/anime.es.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const AddToCart = ({ selectedData, setCart }) => {

    const [quantity, setQuantity] = useState(1);

    const images = selectedData.map((i)=>i.images)
    const image = images.map((image) => image[0].image)

    const handleAddToCart = () => {
        const product = {
            id: selectedData[0].id,
            productName: selectedData[0].productName,
            price: selectedData[0].price,
            image: image,
            quantity: quantity,
        };
        
        setCart(prevCart => {
            const existingProductIndex = prevCart.findIndex(item => item.id === product.id);
            if (existingProductIndex > -1) {
                const updatedCart = [...prevCart];
                updatedCart[existingProductIndex].quantity += 1; 
                return updatedCart;
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });

        addItemAnimation();
    };

    const addItemAnimation = () => { 
        anime({
            targets: '#cart',
            rotate: [0, -15, 15, 0],
            duration: 400,
            easing: 'easeInCubic'
        });
    };

    return (
        <div className="add-to-cart xl:absolute xl:bottom-1/4 bg-[#676eff] border border-[#23232f] rounded-md">
            <button className='flex justify-center items-center' onClick={handleAddToCart}>
                <FontAwesomeIcon icon={faCartShopping} className='xl:pl-4 hidden lg:block' />
                <span className='uppercase tracking-wider xl:px-4 lg:rounded-none lg:border-none rounded-md px-6 py-4 border border-[#676eff]'>Add to cart</span>
            </button>
        </div>
    );
};

export default AddToCart;