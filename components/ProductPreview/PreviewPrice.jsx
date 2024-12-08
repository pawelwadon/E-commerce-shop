const PreviewPrice = ({selectedData})=>{

const price = selectedData.map((i)=> i.price)
const productPrice = `$ ${price}`

    return(
        <h2 className="price absolute bottom-0 text-2xl font-medium text-[#676eff]">
            {productPrice}
        </h2>
    )
}

export default PreviewPrice;