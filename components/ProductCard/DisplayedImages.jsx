const DisplayedImages = ({selectedData})=>{

const images = selectedData.map((i)=>i.images)
const displayImage = images.map((image) => image[0].image)

    return(
        <div className="flex-1 flex items-center justify-center py-4 h-full w-full relative">
            <div className="image overflow-hidden w-full h-1/2 xl:h-full max-w-[100%] max-h-[100%] flex items-center justify-center absolute top-24 lg:static">
                <img
                src={displayImage}
                alt="product-image"
                className="w-full h-full object-contain drop-shadow-[5px_5px_5px_rgba(0,0,0,0.75)]"
                />
            </div>
        </div>
    )
}

export default DisplayedImages;