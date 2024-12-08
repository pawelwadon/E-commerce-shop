const PreviewImage = ({selectedData})=>{

const images = selectedData.map((i)=>i.images)
const displayImage = images.map((image) => image[0].image)

    return(
        <img src={displayImage} alt="" className="h-[100%] object-contain" />
    )
}

export default PreviewImage;