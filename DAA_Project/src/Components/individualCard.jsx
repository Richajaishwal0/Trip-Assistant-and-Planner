import react , {useState} from 'react'
import './individualCard.css'
import { TiHeartFullOutline } from "react-icons/ti";
import { IoIosStar } from "react-icons/io";

function IndividualCard(props) {
    const {imgSrc, hotelName, country, distance, date, price, rating} = props.details;

    const [liked, setLiked] = useState(false);

    const like = () => {
        setLiked(!liked);
    }

  return (
    <div className='individualCard'>
        <div className="image">
            <img src={imgSrc} alt="image" />
            <TiHeartFullOutline onClick={like} className= {liked ? 'relative bottom-60 left-60 text-4xl cursor-pointer text-red-300' : 'relative bottom-60 left-60 text-4xl cursor-pointer text-gray-700'}/>
        </div>
        <div className="detail">
            <div className="name_country flex justify-between w-full">
                <div className="left flex font-bold">
                    <div className="name mr-2">{hotelName},</div>
                    <div className="country">{country}</div>
                </div>
                <div className="right flex items-center">
                    <IoIosStar/>
                    <p className='ml-1'>{rating}</p>
                </div>
            </div>
            <div className="distance text-gray-700 italic">{distance}</div>
            <div className="date text-gray-700 italic">{date}</div>
            <div className="price"><span className='font-bold text-black'>Rs. {price}</span> <span className='italic  text-gray-600'>per night</span></div>
        </div>
    </div>
  )
}

export default IndividualCard