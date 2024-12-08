const Description = ({selectedData,point}) => {

const description = selectedData.map((i)=> i.description)
const images = selectedData.map((i)=> i.images)

const fragment = description.map((i)=> i[point])

const header = fragment.map((i)=> i.header)
const text = fragment.map((i)=> i.text)

let even = point%2 == 1

    return (
        <div className="lg:grid lg:grid-cols-2  lg:mx-40 py-20 gap-10">
            <div className={`${even ? 'order-last' : ''} grid lg:grid-rows-4 pb-6 pt-2 lg:pb-0 lg:pt-0`}>
                <p className="text-2xl font-bold">{header}</p>
                <p className="text-lg text-justify row-span-2">{text}</p>
            </div>
            <div className={`h-[20rem] flex ${even ? 'lg:justify-start': 'lg:justify-end'} justify-center rounded-tl-2xl rounded-br-2xl`}>
                <img src={`/public/assets/images/descriptionImages/description-image${point}-web.jpg`} alt="image" className="h-full w-full object-cover object-[5%] rounded-tl-2xl rounded-br-2xl"/>
            </div>
        </div>
    )
}

export default Description;
