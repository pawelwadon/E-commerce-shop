import { useRef } from "react";
import { useParams } from "react-router-dom";
import Price from "./Price";
import DisplayedImages from "./DisplayedImages";
import AddToCart from "./AddToCart";
import ProductHeader from "./ProductHeader";
import BackgroundHeader from "./BackgroundHeader";
import DescriptionButton from "./DescriptionButton";
import DescriptionSection from "../DescriptionSection/DescriptionSection";

const ProductCard = ({ data, categoryName, setCart }) => {
    const { id } = useParams();
    const selectedData = data.filter((i) => i.category[1].name === categoryName && i.category[0].id === parseInt(id));

    const descriptionRef = useRef();

    const showDescription = () => {
        descriptionRef.current.scrollIntoView({
            behavior: 'smooth'
        });
    };

    if (selectedData.length === 0) {
        return <div>Product not found</div>;
    }

    return (
        <section className="w-[100vw] overflow-hidden">
            <BackgroundHeader selectedData={selectedData} />
            <div className="relative md:flex-1 h-[calc(100vh-48px)] lg:flex block items-center">
                <div className="h-full flex lg:flex-row lg:justify-between items-center flex-col-reverse mx-10 relative">
                    <div className="flex-1 p-10 xl:relative lg:h-1/2 h-auto absolute">
                        <ProductHeader selectedData={selectedData} />
                        <div className="flex justify-between items-center lg:block py-3">
                            <Price selectedData={selectedData} />
                            <AddToCart selectedData={selectedData} setCart={setCart} />
                        </div>
                    </div>
                    <DisplayedImages selectedData={selectedData} />
                </div>
                <DescriptionButton showDescription={showDescription} />
            </div>
            <DescriptionSection selectedData={selectedData} descriptionRef={descriptionRef} />
        </section>
    );
};

export default ProductCard;