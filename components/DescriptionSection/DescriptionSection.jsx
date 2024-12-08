import Description from "./Description";

const DescriptionSection = ({selectedData,descriptionRef}) => {
    return(
        <div className={`block mx-10 px-10`} ref={descriptionRef}>
            <Description selectedData={selectedData} point={0}/>
            <Description selectedData={selectedData} point={1}/>
            <Description selectedData={selectedData} point={2}/>
            <Description selectedData={selectedData} point={3}/>
        </div>
    )
}

export default DescriptionSection;