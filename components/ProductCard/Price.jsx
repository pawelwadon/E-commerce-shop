const Price = ({selectedData})=>{

const price = selectedData.map((i)=> i.price)
const productPrice = `$ ${price}`

    return(
        <h2 className="price text-4xl font-medium text-[#676eff]">
            {productPrice}
        </h2>
    )
}

export default Price;