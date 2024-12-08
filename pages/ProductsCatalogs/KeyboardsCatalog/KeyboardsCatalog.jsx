import ProductsSelector from "../../../components/ProductsSelector/ProductsSelector";

const KeyboardsCatalog = ({data})=>{
    return(
        <>
        <ProductsSelector data={data} categoryName={"keyboard"}/>
        </>
    )
}

export default KeyboardsCatalog;