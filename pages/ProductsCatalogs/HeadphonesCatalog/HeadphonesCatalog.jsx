import ProductsSelector from "../../../components/ProductsSelector/ProductsSelector";

const HeadphonesCatalog = ({data})=>{
    return(
        <>
        <ProductsSelector data={data} categoryName={"headphones"}/>
        </>
    )
}

export default HeadphonesCatalog;