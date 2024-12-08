const BackgroundHeader = ({selectedData})=>{

const bgheader = selectedData.map((i)=> i.bgheader)

let letter = bgheader.toString()
const bgHeader = [];

for(let i=0;i<letter.length;i++){
    bgHeader.push(<span key={i} className="letter">{letter[i]}</span>)
}
    return(
        <h1 className="bg-header absolute z-0 translate-y-2/4 left-[-2%] uppercase text-[rgba(114,116,142,0.25)] font-black tracking-wider text-[18rem] overflow-hidden max-w-full">
            {bgHeader}
        </h1>
    )
}

export default BackgroundHeader;