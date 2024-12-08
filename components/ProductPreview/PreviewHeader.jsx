const PreviewHeader = ({selectedData})=> {

const header = selectedData.map((i)=> i.productName)

    return(
        <h1 className="text-3xl font-bold">
            {header}
        </h1>
    )
}

export default PreviewHeader;