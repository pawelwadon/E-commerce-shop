import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import anime from 'animejs/lib/anime.es.js';
import ProductPreview from "../ProductPreview/ProductPreview";

const ProductsSelector = ({data,categoryName})=>{

useEffect(() => {
    if (data.length > 0) {
        anime({
            targets: '.product-preview',
            translateX: ['50%', '0%'],
            opacity: [0, 1],
            easing: 'easeInCubic',
            delay: (el, i) => 100 * i,
            duration: 300,
        });
    }
}, [data]);

const selectedData = data.filter((i) =>i.category[1].name === categoryName)

    return(
        <div className={`grid grid-flow-row md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 pt-10 ${'' ? 'blur-sm' : 'blur-none'}`}>
            {selectedData.map((i)=>{
                let id = i.category[0].id
            return(
                <Link to={`/${categoryName}/${id}`} className="product-preview" key={id}>
                    <ProductPreview categoryName={categoryName} id={id}/>
                </Link>)})
            }
        </div>
    )
}

export default ProductsSelector;