const ItemHeader = ({selectedData})=>{

const header = selectedData.map((i)=> i.productName)

    return(
        <h1 className="header text-7xl font-bold py-2">
            {header}
        </h1>
    )
}

export default ItemHeader;