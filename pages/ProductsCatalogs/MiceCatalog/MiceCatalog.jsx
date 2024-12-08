import ProductsSelector from "../../../components/ProductsSelector/ProductsSelector";

const MiceCatalog = ({data}) =>{
    return(
        <>
        <ProductsSelector data={data} categoryName={'mouse'}/>
        </>
    )
}

export default MiceCatalog;