import react from 'react'
import IndividualCard from './individualCard'
import './cardSection.css'

function CardSection() {

  const datas = [
    {
      imgSrc: "/src/image/home1.jpg",
      hotelName: "Hotel A",
      country: "Country A",
      distance: "340 km from Kathmandu",
      date: "13-20 March",
      price: 50000,
      rating: 4.5
    },
    {
      imgSrc: "/src/image/home2.jpg",
      hotelName: "Hotel B",
      country: "Country B",
      distance: "200 km from Kathmandu",
      date: "15-22 March",
      price: 40000,
      rating: 4.2
    },
    {
      imgSrc: "/src/image/home3.jpg",
      hotelName: "Hotel C",
      country: "Country C",
      distance: "150 km from Kathmandu",
      date: "10-18 March",
      price: 35000,
      rating: 4.1
    },
    {
      imgSrc: "/src/image/home4.jpg",
      hotelName: "Hotel D",
      country: "Country D",
      distance: "250 km from Kathmandu",
      date: "10-18 February",
      price: 30000,
      rating: 4.9
    },
    {
      imgSrc: "/src/image/home5.jpeg",
      hotelName: "Hotel E",
      country: "Country E",
      distance: "100 km from Kathmandu",
      date: "10-18 March",
      price: 25000,
      rating: 4.3
    }
  ];
  

  return (
    <div className='w-full min-h-screen cardSection'>
      {datas.map((hotel, index) => {
        return <IndividualCard key={index} details={hotel} />
      })}
      
    </div>
  )
}

export default CardSection