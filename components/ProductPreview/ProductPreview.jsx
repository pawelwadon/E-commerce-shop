import { useState, useEffect } from "react";
import axios from "axios";
import PreviewPrice from "./PreviewPrice";
import PreviewHeader from "./PreviewHeader";
import PreviewImage from "./PreviewImage";

const ProductPreview = ({categoryName,id})=>{

const[data,setData] = useState([])

useEffect(() => {
    axios
      .get("../../assets/data.json")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

const selectedData = data.filter((i) =>i.category[1].name === categoryName && i.category[0].id === id )
// const categoryId = data.filter((i) => i.category[0].id === id)

    return(
        <div className="shadow-[0px_0px_10px_-4px_rgba(49,49,63,1)] rounded py-6 ">
            <div className="flex justify-center items-center px-4 pb-6 h-[24rem]">
                <PreviewImage selectedData={selectedData}/>
            </div>
            <div className="h-[8.5rem] relative pt-6 px-4 border-t border-[rgba(255,255,255,0.15)]">
                <PreviewHeader selectedData={selectedData}/>
                <PreviewPrice selectedData={selectedData}/>
            </div>
        </div>
    )
}

export default ProductPreview;