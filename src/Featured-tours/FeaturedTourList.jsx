import React, { useEffect, useState } from 'react'
import TourCard from '../shared/TourCard'
import tourData from '../assets/data/tours'
import { Col } from 'reactstrap'
import { Link } from 'react-router-dom'


const FeaturedTourList = () => {
  const getData =()=>{
    fetch('/tours.json'
      ,{
        headers: {
          'Content-Type':'application/json',
          'Accept':'application/json'
        }
      }
    ).then(function(res){
      return res.json()
    }).then(function(myJson){
      // console.log(myJson);
      setData(myJson)
    })
  }

  useEffect(()=>{
    getData()
  },[])
  
  const [data,setData] = useState([])
  // console.log(typeof(data))
  return (
    <>
        {data?.map((tour,i) => (
            <Col style={{width:'fit-content'}} lg='3' className='mb-4' key={i} >
                <Link style={{textDecoration:'none'}} to={`/tours/${tour.id}`}><TourCard tour={tour} /></Link>
            </Col>
        ))}
    </>
  )
}

export default FeaturedTourList