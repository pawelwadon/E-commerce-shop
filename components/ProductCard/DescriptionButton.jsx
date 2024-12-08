import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
const DescriptionButton = ({showDescription}) => {
    return(
        <div className='hidden justify-center items-center py-8 absolute bottom-0 w-full lg:flex'>
            <button onClick={showDescription} className='rounded-full border p-5'>
                <FontAwesomeIcon icon={faArrowDown}/>
            </button>
        </div>
    )
}

export default DescriptionButton;